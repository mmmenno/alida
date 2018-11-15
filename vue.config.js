module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/alida/' : '/',
  devServer: {
    disableHostCheck: true
  }
}
