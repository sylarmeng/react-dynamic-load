var webpack = require('webpack')

module.exports = {

  entry: {
    bundle: './index.js',
    vendor: ['react'],
  },

  output: {
    // path: 'public',
    path: __dirname + '/public',
    filename: '[name].js',
    // filename: 'bundle.js',
    publicPath: '/',
    chunkFilename: '[name].js'
  },

  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
    ,
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      filename: 'vendor.js'
    })
  ] : [],

  module: {
    loaders: [
      { test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader?presets[]=es2015&presets[]=react&compact=false'
        // query: {compact: false}
         }
    ]
  }
}

