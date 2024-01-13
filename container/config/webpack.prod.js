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
        new HtmlWebpackPlugin({
            template: './public/index.html',
          }),
    ]
}

module.exports =merge(commonConfig,prodConfig);