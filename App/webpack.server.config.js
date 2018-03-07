var defaultConfig = require("./webpack.config");

defaultConfig.devServer = {
    compress: true,
    port: 8080,
    historyApiFallback: true,
}

module.exports = defaultConfig;
