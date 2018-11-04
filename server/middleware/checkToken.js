// token
const jwt = require('jsonwebtoken')
module.exports = function(req, res, next) {
    // console.log(req.headers)
    let token = req.headers['authorization'].split(' ')[1]
        // token { name: xx, iat: xx, exp: xx }
    let decoded = jwt.decode(token, 'secret')
        // console.log(decoded.exp)
        // console.log(Date.now() / 1000)
        // token
    if (token && decoded.exp <= Date.now() / 1000) {
        return res.json({
            code: 401,
            message: 'token'
        })
    }
    next();
}