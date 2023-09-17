# Connex One Tech Test - Server

This is my Connex One Full Stack Developer Technical Test Backend repo.

It is built in Node (TypeScript) with Express & Jest used for test driven development.

The client/frontend part of this project can be found here: https://github.com/Jlh77/connex-one-tech-test-client

## Setup

**Note: This was built using Node version 18. You will need to switch to this to run the application as it has been set to use this at minimum. You can do so quickly by using:**

```

$ nvm use

```

(This will check the projects .nvmrc for which version to use automatically)

### To run this application locally, follow these steps:

1. Clone down the repo with Git

2. Remember to install dependencies for the project:

```

$ npm install

```

3. Create your local environment variables into a .env file in the root of the project. In this case you can simply copy the .env.sample into .env

```

.env.sample >>> .env

```

4. Start the application! You can get it running with simply:

```

$ npm start

```

This will trigger a build into a ./dist folder automatically each time, and start listening on the port defined in your .env file (If you change the port make sure it matches to what the client is looking for in it's own config). It can also be run in development mode where it watches files and compiles on change with:

```

$ npm run dev

```

You may also run some jest tests and verify they pass with

```

$ npm t

```
