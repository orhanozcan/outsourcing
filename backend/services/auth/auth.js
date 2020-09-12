require('dotenv').config()

const jwt = require('jsonwebtoken')

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30m' })
}

// function generateRefreshToken(user) {
//     return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
// }

module.exports = {
    getToken: (user) => {
        return { accessToken: generateAccessToken(user) }
    },
    verifyToken: (req) => {
        const authHeader = req.Headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if (token == null) return false;
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) return false;
            return true;
        })
    }
}