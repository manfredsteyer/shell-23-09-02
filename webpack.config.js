// original
//const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
//const mf = require("@angular-architects/module-federation/webpack");
//const path = require("path");
//const share = mf.share;
//
//const sharedMappings = new mf.SharedMappings();
//sharedMappings.register(
//  path.join(__dirname, './tsconfig.json'),
//  [
//    '@shared'
//  ]);
//
//module.exports = {
//  output: {
//    uniqueName: "eligibility",
//    publicPath: "auto"
//  },
//  optimization: {
//    runtimeChunk: false
//  },
//  resolve: {
//    alias: {
//      ...sharedMappings.getAliases(),
//    }
//  },
//  experiments: {
//    outputModule: true
//  },
//  plugins: [
//    new ModuleFederationPlugin({
//        library: { type: "module" },
//
//        // For remotes (please adjust)
//
//        // For hosts (please adjust)
//        remotes: {
//          "providerAttributes": "http://localhost:8080/remoteEntry.js"
//        },
//
//        shared: share({
//          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true },
//          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true },
//          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true },
//          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true },
//          "@okta/okta-angular": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true },
//          "@okta/okta-auth-js": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true },
//
//          ...sharedMappings.getDescriptors()
//        })
//
//    }),
//    sharedMappings.getPlugin()
//  ],
//};

// attempt 1
const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  // For hosts (please adjust)
  remotes: {},

  //shared: {
  //  ...shareAll({
  //    singleton: true,
  //    strictVersion: true,
  //    requiredVersion: 'auto'
  //  }),
  //},

  // shared: {},
  sharedMappings: [],

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});

// attempt 2
//const {
//  share,
//  withModuleFederationPlugin,
//} = require('@angular-architects/module-federation/webpack');
//
//module.exports = withModuleFederationPlugin({
//  remotes: {
//  },
//
//  // Explicitly share packages:
//  shared: share({
//    '@angular/core': {
//      singleton: true,
//      strictVersion: true,
//      requiredVersion: 'auto',
//    },
//    '@angular/common': {
//      singleton: true,
//      strictVersion: true,
//      requiredVersion: 'auto',
//    },
//    '@angular/common/http': {
//      singleton: true,
//      strictVersion: true,
//      requiredVersion: 'auto',
//    },
//    '@angular/router': {
//      singleton: true,
//      strictVersion: true,
//      requiredVersion: 'auto',
//    },
//    "@okta/okta-angular": {
//      singleton: true,
//      strictVersion: true,
//      requiredVersion: 'auto'
//    },
//    "@okta/okta-auth-js": {
//      singleton: true,
//      strictVersion: true,
//      requiredVersion: 'auto'
//    },
//  }),
//
//  // Explicitly share mono-repo libs:
//  sharedMappings: ['auth-lib'],
//});
