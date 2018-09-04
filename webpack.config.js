const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = env => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');
  return {
    entry: './src/app.jsx',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
          loader: 'babel-loader',
          test: /\.jsx$/,
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: CSSExtract.extract({
            use: [{
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        },
        {
          test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg|png)(\?.*$|$)/,
          loader: 'file-loader'
        }
      ]
    },
    plugins: [CSSExtract],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'

    }
  }
};