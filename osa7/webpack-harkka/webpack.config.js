const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

const config = (env, argv) => {
  const backend_url = argv.mode === 'production'
    ? 'https://obscure-harbor-49797.herokuapp.com/api/notes'
    : 'http://localhost:3001/notes'

  return {
    target: 'node',
    entry: './src/index.js',
    externalsPresets: { node: true },
    externals: [nodeExternals()],
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'main.js',
    },
    devServer: {
        static: path.resolve(__dirname, 'build'),
        compress: true,
        port: 3000,
      },
    //source map enables mapping a bug to the right point of the code
    // devtool: 'source-map',
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          }
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        BACKEND_URL: JSON.stringify(backend_url)
      }),
    ]
  }
  }
    

module.exports = config