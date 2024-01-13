const {merge} = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");
const commonConfig = require("./webpack.common");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const prodConfig = {
    mode: "production",
    output:{
        filename:"[name].[contenthash].js",
        // path: path.resolve(__dirname, '../dist/container'),
            publicPath: '/container/latest/',

    },
    plugins:[
        new ModuleFederationPlugin({
            name:"container",
            remotes:{
                marketing:`marketing@https://mfe-marketing-three.vercel.app/marketing/latest/remoteEntry.js`,
            },
            shared:packageJson.dependencies
        })
    ]
}

module.exports =merge(commonConfig,prodConfig);