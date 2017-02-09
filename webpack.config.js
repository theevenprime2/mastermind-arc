const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ip = process.env.IP || '0.0.0.0'
const port = process.env.PORT || 3000
const DEBUG = process.env.NODE_ENV !== 'production'

const config = {
  devtool: DEBUG ? 'eval' : false,
  entry: [
    'babel-polyfill',
    path.join(__dirname, 'src')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.[hash].js',
    publicPath: '/'
  },
  resolve: {
    modules: ['src', 'node_modules']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '/public/index.html')
    })
  ],
  module: {
    rules: [
      { test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.png$/,
        use: 'url?prefix=images/&limit=8000&mimetype=image/png'
      },
      {
        test: /\.jpg$/,
        use: 'url?prefix=images/&limit=8000&mimetype=image/jpeg'
      },
      {
        test: /\.woff$/,
        use: 'url?prefix=fonts/&limit=8000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf$/,
        use: 'file?prefix=fonts/'
      },
      {
        test: /\.eot$/,
        use: 'file?prefix=fonts/'
      },
      {
        test: /\.json$/,
        use: 'json'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader'
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=2',
          'postcss-loader',
          'sass-loader?sourceMap&outputStyle=expanded'
        ]
       }
    ]
  }
}

if (DEBUG) {
  config.entry.unshift(
    `webpack-dev-server/client?http://${ip}:${port}/`,
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch'
  )

  config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin()
  ])
} else {
  config.plugins = config.plugins.concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  ])
}

module.exports = config
