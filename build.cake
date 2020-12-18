//////////////////////////////////////////////////////////////////////
// ADDINS
//////////////////////////////////////////////////////////////////////
#addin "nuget:?package=Cake.Docker&version=0.10.1"

//////////////////////////////////////////////////////////////////////
// ARGUMENTS
//////////////////////////////////////////////////////////////////////
var target = Argument("target", "Default");

Task("__UiEnd2EndTests")    
    .Does(() => 
    {
        var env = EnvironmentVariable("TESTS_ENV") ?? "prod";
        var tag = EnvironmentVariable("TESTS_TAG") ?? "@all";

        RunEnd2EndTests("./cypress_test/e2e", tag, env);
    });

Task("UiEnd2EndTests")
    .IsDependentOn("__UiEnd2EndTests");  


RunTarget(target);

///////////////////////////////////////////////////////////////////////////////
// Private methods
///////////////////////////////////////////////////////////////////////////////

void RunEnd2EndTests(string path, string tag, string environment)
{
    if(string.IsNullOrEmpty(tag)) throw new ArgumentException("Tests TAG variable is null or empty.");
    if(string.IsNullOrEmpty(environment)) throw new ArgumentException("Tests ENVIRONMENT variable is null or empty.");

    Information("*************************************************************");
    Information("Running End2End tests with {0} tag", tag);
    Information("Environment End2End tests running is {0}", environment);
    Information("Path to tests is {0}", path);
    Information("*************************************************************");

    const string imageName = "shruthi_test_repo:latest";

    var dockerBuildSettings = new DockerImageBuildSettings
    {
        File = $"{path}/Dockerfile",
        Pull = true,
        Tag = new[] { imageName },
        BuildArg = new[] { $"TESTS_TAG={tag}" }
    };

    DockerBuild(dockerBuildSettings, path);
    
    var runSettings = new DockerContainerRunSettings 
    {
        Rm = true,
        Tty = true,
        Env = new []{ $"ENV={environment}", $"GREP_TAG={tag}" }
    };    

    DockerRunWithoutResult(
        settings: runSettings, 
        image: imageName,
        command: null,
        args: new string []{});
}