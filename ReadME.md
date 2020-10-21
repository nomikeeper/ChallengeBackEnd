## How to setup and run the app

    1. npm install
    2. npm run start:dev

    P.S: Check out the npm scripts in package.json file

## Basic Structure of the APP

    SRC/    - Typescript source code ( TS )
    DIST/   - Compiled source code ( TS -> JS)
    TEST    - All the test included in here ( Test is using Jest. Right now nothing is in there. )

### SRC
    `server.ts` configuration of the server. When developer wants to make additional configation to the server, they should visit this file.
    `DB` contains the db models and necessary functions to handle reading and writing of the data.
    `Routes` contains the all the routes. ( Pretty self explanatory )

## Compile Project

    Run the following command to compile the project. It compiles all of the TS to JS.

    npm run build

## Database ( Mongo )

    Database is setup for MongoDB, however it can be adjusted to preferred database.

###    Structure:
    `index.ts`, modify the Init function to your liking to connect to the database.

    All the folders has 2 files named as `Functions` and `index`. Index file is there to configure schema of the model.
    Functions files contains necessary functionaly to handle the database data controller.

## Caution

    When running the npm script command, there might be an issue depending on your OS.
    Need to modify the npm script for your OS if there is an issue.

    Example:
        On Mac:
            "nodemon 'src/server.ts' --exec 'ts-node' src/server.ts -e ts,graphql"
        On Windows:
            "nodemon src/server.ts --exec ts-node src/server.ts -e ts,graphql"