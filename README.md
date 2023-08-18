## Table of Contents

1. [Getting Started](#getting-started)
1. [Prerequisites](#prerequisites)
   1. [Using NodeJS](#using-nodejs)
1. [Running the examples](#running-the-examples)

## Getting Started

- Setup the [project prerequisites](#prerequisites)
- Clone the repo to your local machine
- Install the project dependencies: `npm i`
- Run the dev server: `npm start`
- Try [running the examples](#running-the-examples)

## Prerequisites

### Using NodeJS

Different hosting environments support different versions of [Node.js](https://nodejs.org/en), and it is common for developers to install a version that is current when they first setup their dev environment and then never update again. Best practice is to list the supported version of node and npm in the `engines` property of the project package.json to help indicate the supported path in both cases.

It is common for an app to need to support different node versions (e.g., `v14` vs `v16`), or to be working on different apps that are locked to different node versions. In this case, it is recommended to use a NodeJS version manager to easily switch between versions in your app development travels:

- [Linux/Mac](https://www.npmjs.com/package/n)
- [Windows](https://github.com/coreybutler/nvm-windows)

## Running the examples

There's a completely functional REST api included via json-server in the `src/app/examples/test-api` folder. If you don't have json-server already installed globally run the following at a command prompt...

```bash
npm install -g json-server
```

Next, for Windows environments run

```bash
npm run testapi-win
```

or on a Mac run

```bash
npm run testapi-mac
```

in a separate console from your `npm start` that you use to serve up the app. This will run a fully functional REST api at `localhost:3000`, serving the data in the
`src/app/examples/test-api/db.json` file via that url. You should be able to go to `localhost:3000/products` in a browser tab to get a list of products.

Once you run `npm start` to serve the app in a separate console, Angular will be proxying all xhr calls starting with `/api` to `localhost:3000`,
so now you should also be able to go to `localhost:4200/api/products` in a browser tab to exercise the same api call as above. This removes all CORS issues.

Now, just go to `localhost:4200/examples` to see several example modules in action. The **Ngrx Crud** and **Simple Store**
pages are completely debuggable end-to-end, using actual xhr api calls.
