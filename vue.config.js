module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/' : '/',
  productionSourceMap: false,
  devServer: {
    proxy: {
        '/localApi': {
            target: 'http://192.168.0.108/api',   // 需要请求的地址
            changeOrigin: true,  // 是否跨域
            pathRewrite: {
                '^/localApi': '/'  // 替换target中的请求地址，也就是说，在请求的时候，url用'/proxy'代替'http://ip.taobao.com'
            }
        }

    }, 
  }
};

