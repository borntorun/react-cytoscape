import webpack from 'webpack';
import path from 'path';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';

const config = {
  devtool: 'source-map',
  entry: {
    index: path.join(__dirname, '../src/react-cytoscape.js')
  },
  output: {
    path: path.join(__dirname, '../build'),
    publicPath: 'build/',
    filename: 'react-cytoscape.js',
    sourceMapFilename: 'react-cytoscape.map',
    library: 'ReactCytoscape',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new UglifyJSPlugin({
      mangle: {
        // Skip mangling these
        except: ['Cytoscape','CytoscapeContainer']
      }
    })

  ],
  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      umd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    },
    'prop-types': {
      root: 'PropTypes',
      commonjs2: 'prop-types',
      commonjs: 'prop-types',
      amd: 'prop-types',
      umd: 'prop-types',
    },
    cytoscape: 'cytoscape'
  }
};

export default config;
