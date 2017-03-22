var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    minimize = process.env.NODE_ENV === 'production';


module.exports = {
  entry: {
    app: [
      './src/index.js'
    ]
  },

  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          { 
            loader: 'css-loader'
          }
        ]
      },
      // {
      //   test:    /\.html$/,
      //   exclude: /node_modules/,
      //   use: [{
      //     loader:  'file-loader',
      //     options: {
      //       name: '[name].[ext]'
      //     }
      //   }]
      // },
      {
        test:    /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: [{
          loader: 'elm-webpack-loader',
          options: {
            verbose: true,
            warn: true
          }
        }]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff',
          }
        }]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'file-loader'
        }]
      },
    ],

    noParse: /\.elm$/,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ].concat(minimize ? [
    new webpack.optimize.UglifyJsPlugin()
  ] : []),

  devServer: {
    inline: true,
    stats: { colors: true },
  },

};

