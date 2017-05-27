import path from 'path';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import WriteFileWebpackPlugin from 'write-file-webpack-plugin';

const ROOT_DIR = path.resolve(__dirname, '..');
const config = {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(ROOT_DIR, 'src'),
    
    historyApiFallback: true,
    hot: true,
    // inline: true,
    // progress: true,
    host: '0.0.0.0',
    port: 3001,
    publicPath: '/static/',
    stats: 'normal' // customize terminal console info
  },
  plugins: [
    new WriteFileWebpackPlugin(),
    new CopyWebpackPlugin([
      
      { from: path.join(ROOT_DIR, 'src/fixtures/data.json') },
      { from: path.join(ROOT_DIR, 'src/fixtures/data.1.json') },
      { from: path.join(ROOT_DIR, 'src/fixtures/style.json') }
    ]),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    
  ],
  performance: {
    hints: false
  }
};

export default config;
