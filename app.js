var webpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var compiler = require('./webpack.config');

var server = new webpackDevServer(webpack(compiler), {
  // contentBase:"",
  hot: true,
  // historyApiFallback: false,
  // proxy: {
  //   "*": "http://localhost:9090"
  // },
  // webpack-dev-middleware options
  // quiet: false,
  noInfo: false,
  // lazy: true,
  // filename: "bundle.js",
  // watchOptions: {
  //   aggregateTimeout: 300,
  //   poll: 1000
  // },
  // publicPath: "/assets/",
  // headers: { "X-Custom-Header": "yes" },
  // stats: { colors: true },
  stats:{
      colors:true,
      chunks:false,
      assets:false,
      source:false,
      reasons:false,
      modules:false
    }
});

server.listen(3000,'0.0.0.0',function(){});

//"start": "webpack --watch -p --display-error-details",
//"test": "mocha --compilers js:babel-register --require babel-polyfill"
//mocha --compilers js:babel-register --require babel-polyfill --recursive path/to/tests
