const {VueLoaderPlugin} = require('vue-loader');
module.exports = {
  entry:'./src/index.js',
  output:{
    filename:'[name].[contenthash].js'
  },
  resolve:{
    // in vue insted of making .js file i  can make .vue files ( single file component )
    extensions:['.js','.vue']
  },
  module: {
    rules: [
      {
        // vue has has a couple of different fonts images so we making use of file loader thing so the webpack can understand whenever we can try to import a font or image 
        test:/\.(png|jpe?g|gif|woff|eot|svg|ttf)$/i,
        use:[{loader:'file-loader'}]
      },
      {
        test:/\.vue$/,
        use:'vue-loader'
      },
      {
        test:/\.scss|\.css$/,
        use:['vue-style-loader','style-loader','css-loader','sass-loader']
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },

  plugins:[new VueLoaderPlugin()]


};
