const { proxy } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/v2/everything?q=bitcoin&from=2020-04-23&sortBy=publishedAt&apiKey=3f8cfbece7ec4ef3a90057785a82e55a',
        proxy({
            target: 'https://newsapi.org/',
            changeOrigin: true,
        })
    );
};