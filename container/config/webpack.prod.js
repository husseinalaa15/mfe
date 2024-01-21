const {merge} = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");
const commonConfig = require("./webpack.common");
const webpack = require("webpack");
const path = require("path");
const domain = process.env.PRODUCTION_DOMAIN
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
                marketing: 'marketing@https://marketing-azure-eight.vercel.app/marketing/remoteEntry.js',
            },
            shared:packageJson.dependencies
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
          }),
    ]
}

module.exports =merge(commonConfig,prodConfig);