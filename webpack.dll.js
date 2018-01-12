var path = require('path'),
  webpack = require('webpack'),
  // Bind join to the current path. You can change it:
  // path.join.bind(path, __dirname, 'app').
  join = path.join.bind(path, __dirname);

module.exports = {
  entry: {
    // The entrypoint is our vendor file
    vendor: [ join('app', 'vendors', 'vendors.js') ]
  },
  output: {
    // The bundle file
    path: join('docs'),
    filename: '[name].js',
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      // The manifest we will use to reference the libraries
      path: join('app', 'vendors', '[name]-manifest.json'),
      name: '[name]',
      context: join('app', 'vendors')
    })
  ],
}