const { resolve } = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DevCompileOptimize = require('webpack-dev-compile-optimize');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const config = {
  devtool: 'inline-eval-cheap-source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    //'./app/vendors/vendor.js',
    './app/main.js',
    './app/assets/scss/main.scss',
  ],

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'docs'),
    publicPath: '/',
  //  library: resolve(__dirname, 'docs')
  },

  //context: resolve(__dirname, 'app'),

  devServer: {
  // cache: true,
    hot: true,
  //  compress: true,
    host: process.env.IP,
    inline: true,
// https: true,
  proxy: {
  "/api/polldata/": {
    target: "https://fcc-vote-simonbryatov.c9users.io:8081/api/pollsList",
    secure: false
  }
  }
,
  historyApiFallback: true,
    port: 8080,
    contentBase: resolve(__dirname, 'build'),
    public: "fcc-vote-simonbryatov.c9users.io"
    
  },

  module: {
    rules: [
      // {
      //   enforce: "pre",
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: "eslint-loader"
      // },
      {
        test: /\.js$/,
        loaders: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'sass-loader',
              query: {
                sourceMap: false,
              },
            },
          ],
          publicPath: resolve(__dirname, "app/assets/scss/main.scss")
        }),
      },
      { test: /\.(png|jpg|gif)$/, use: 'url-loader?limit=15000&name=images/[name].[ext]' },
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, use: 'file-loader?&name=fonts/[name].[ext]' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]' },
      { test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, use: 'url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]' },
      { test: /\.svg/,
                use: 'svg-url-loader',
  },
    ]
  },

     plugins: [
  //   new webpack.LoaderOptionsPlugin({
  //     test: /\.js$/,
  //     options: {
  //       eslint: {
  //       configFile: resolve(__dirname, '.eslintrc'),
  //       cache: false,
  //       }
  //     },
  // //  }),
    
  // new webpack.DllReferencePlugin({
  //         manifest: require('./vendors/vendor-manifest.json')
  //     }),
 // new DevCompileOptimize(),
    new HtmlWebpackPlugin(
      {
      template: resolve(__dirname, 'app', "index.html"),  
      chunks: ["manifest", "common", 'main'],
      filename: resolve(__dirname, 'docs', "index.html")
    }
      ), 
     new webpack.optimize.ModuleConcatenationPlugin(),
    new ExtractTextPlugin({ filename: resolve(__dirname, 'docs/styles/style.css'), disable: true, allChunks: true }),
   // new CopyWebpackPlugin([{ from: 'vendors', to: 'vendors' }]),
 //   new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
    new webpack.HotModuleReplacementPlugin(),
    
    new webpack.optimize.CommonsChunkPlugin({
    name: "common",
    filename: "common.js",
    minChunks(module, count) {
                var context = module.context;
                return context && context.indexOf('node_modules') >= 0;
            },
  }),
     new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            filename: 'manifest.js'
        }),        

  //new webpack.IgnorePlugin([/\.json$/])
  ],
  // externals: {
  //   'prop-types': 'prop-types',
  // }
};

module.exports = config;
