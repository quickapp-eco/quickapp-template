const QappWebpWebpackPlugin = require('@quickapp-eco/qappwebp-webpack-plugin')

module.exports = {
  cli: {
  },
  webpack: {
    plugins: [
      new QappWebpWebpackPlugin({
        match: /(jpe?g|png)$/,
        webp: {
          quality: 80
        }
      })
    ]  
  }
}