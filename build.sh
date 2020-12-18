#!/bin/sh

# Define default arguments.
SCRIPT="build.cake"
TARGET="Default"
CAKE_ARGUMENTS=""

# Parse arguments.
for i in "$@"; do
    case $1 in
        -s|--script) SCRIPT="$2"; shift ;;
        -t|--target) TARGET="$2"; shift ;;
        --) shift; CAKE_ARGUMENTS="${CAKE_ARGUMENTS} $@"; break ;;
        *) CAKE_ARGUMENTS="${CAKE_ARGUMENTS} $1" ;;
    esac
    # Shift in case of remainders. Some shells (but not all) detect when there are not enough arguments for shift.
    # Hence the cryptic condition $((...)) here
    shift $(( $# > 0 ? 1 : 0 ))  
done
set -- ${CAKE_ARGUMENTS}

# Restore Cake tool
dotnet tool restore

if [ $? -ne 0 ]; then
    echo "An error occured while installing Cake."
    exit 1
fi

# Start Cake
dotnet tool run dotnet-cake "$SCRIPT" "--target=$TARGET" $@