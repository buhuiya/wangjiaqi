// 跨域代理对象
let proxyObject = {};

// 所有路径都要进行代理
proxyObject["/"] = {
  // WebSocket
  ws: true,
  // 代理到哪里去
  target: "http://cloud.zhiwoai.com:8090",
  // 发送请求头host会被设置成target
  changeOrigin: true,
  // 不重写请求地址
  pathRewrite: {
    "^/": "/",
  },
};

// 使用svg图标时的路径处理
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    host: "localhost",
//    host: "127.0.0.1",
//    host: "cloud.zhiwoai.com",
    port: 8080,
    // proxy: proxyObject,
    proxy: {
      "/":{
        // WebSocket
        ws: true,
        // 代理到哪里去
        target: "http://cloud.zhiwoai.com:8090",
        // 发送请求头host会被设置成target
        changeOrigin: true,
        // 不重写请求地址
        pathRewrite: {
          "^/": "/",
        },
      }
    },
  },
  // 配置使用svg图标
  chainWebpack(config) {
    config.module.rule("svg").exclude.add(resolve("src/icons")).end();
    config.module
        .rule("icons")
        .test(/\.svg$/)
        .include.add(resolve("src/icons"))
        .end()
        .use("svg-sprite-loader")
        .loader("svg-sprite-loader")
        .options({
          symbolId: "icon-[name]",
        })
        .end();
  },

};
