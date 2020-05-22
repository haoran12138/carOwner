const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: "./",
  assetsDir: "static",
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
  },
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true,
    port: 9001
  }
};
