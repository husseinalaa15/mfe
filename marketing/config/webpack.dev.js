const {merge} = require("webpack-merge");
// to merge diffrent webpack versions 

const HtmlWebpackPlugin = require("html-webpack-plugin");
// it will take an html tag of our project and inject different scripts into it 

const ModuleFedrationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const package = require("../package.json");

const commonConfig = require("./webpack.common")

const devConfig = {
    mode:"development",
    devServer:{
        port:8081,
        historyApiFallback: {
            index:'index.html',

        }
    },
    plugins:[
        new ModuleFedrationPlugin({
            name:"marketing",
            filename:"remoteEntry.js",
            exposes:{
                "./MarketingApp" : "./src/bootstrap.js"
            },
            shared:package.dependencies
        }),

        
    ]
}

module.exports = merge(commonConfig,devConfig);