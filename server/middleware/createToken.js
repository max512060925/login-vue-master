// token
// token  http://www.tuicool.com/articles/uuAzAbU
var jwt = require('jsonwebtoken')

module.exports = function(name) {
    // 10s
    const token = jwt.sign({
        name: name
    }, 'secret', {
        expiresIn: '10s'
    });
    return token;
}