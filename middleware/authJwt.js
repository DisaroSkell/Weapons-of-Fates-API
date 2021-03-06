const jwt = require('jsonwebtoken')
const config = require('../config/auth')
const userModel = require('../models/Player')

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"]
    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        })
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            })
        }

        req.username = decoded.username
        next()
    })
}

isAdmin = (req, res, next) => {
    userModel.readPlayer(req.username).then(data => {
        if (!data.rows.length) {
            res.status(404).send({
                message: "User not found."
            })
        }

        if (data.rows[0].isadmin) {
            next()
            return
        }

        res.status(403).send({
            message: "Require Admin Role!"
        })
        return
    })
}

module.exports = {
    verifyToken,
    isAdmin
}