const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/login/authorize', { target: 'http://localhost:5000' }));
    app.use(proxy('/claims/**', { target: 'http://localhost:5000' }));
    app.use(proxy('/userinfo', { target: 'http://localhost:5000' }));
};
