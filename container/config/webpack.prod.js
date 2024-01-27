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
        publicPath: 'https://container-mauve.vercel.app/', 

    },
    plugins:[
        new ModuleFederationPlugin({
            name:"container",
            remotes:{
                marketing: 'marketing@https://marketing-azure-eight.vercel.app/marketing/remoteEntry.js',
                auth: 'auth@https://auth-wine-seven.vercel.app/auth/remoteEntry.js',
                dash: 'dash@https://dashboard-swart-gamma.vercel.app/dash/remoteEntry.js',

            },
            shared:packageJson.dependencies
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
          }),
    ]
}

module.exports =merge(commonConfig,prodConfig);