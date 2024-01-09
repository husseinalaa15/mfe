const {merge} = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");
const commonConfig = require("./webpack.common");
const webpack = require("webpack");
const path = require("path");
const domain = process.env.PRODUCTION_DOMAIN

const prodConfig = {
    mode: "production",
    output:{
        filename:"[name].[contenthash].js",
        path: path.resolve(__dirname, '../dist/container'),
        publicPath: '/',
    },
    plugins:[
        new ModuleFederationPlugin({
            name:"container",
            remotes:{
                marketing:`marketing@https://mfe-marketing-three.vercel.app/remoteEntry.js`,
            },
            shared:packageJson.dependencies
        }),
        new webpack.DefinePlugin({
            'process.env.PRODUCTION_DOMAIN': JSON.stringify(domain)
          }),
    ]
}

module.exports =merge(commonConfig,prodConfig);