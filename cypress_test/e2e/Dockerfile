FROM cypress/base:14.0.0

RUN mkdir -p /home/node/app
WORKDIR /home/node/app

RUN apt-get update
RUN apt-get install -y libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

COPY package.json .
COPY package-lock.json .
RUN npm install
RUN $(npm bin)/cypress verify
COPY cypressScript.js .
COPY cypress cypress
COPY cypress.json .

# Run tests
CMD node cypressScript.js