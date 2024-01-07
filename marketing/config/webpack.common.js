const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {

    module:{
        rules:[
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        // @babel/preset-react : means that babel gonna proccess all jsx tags  ( related to react) 
                        // @babel/preset-env : transform our code in a different ways take all es15 16  17 convert it down to es5 
                        presets:['@babel/preset-react','@babel/preset-env'],
                        // @babel/plugin-transform-runtime : add in alittle additional code to enable some different features of our project  insdide browser like ( async , await syntax )
                        plugins:['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
        })
    ]
}