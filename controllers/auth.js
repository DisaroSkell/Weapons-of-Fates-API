const config = require('../config/auth')
const userModel = require('../models/Player')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

signup = (req, res) => {
    // Save User to Database

    username = req.body.username
    email = req.body.email
    password = bcrypt.hashSync(req.body.password, 8)

    userModel.createPlayer(username, email, password).catch(err => {
        res.status(500).send({
            message: err.message
        })
    })
}

signin = (req, res) => {
    userModel.readPlayer(req.body.username).then(data1 => {
        if (data1.rows.length) {
            const passwordIsValid = bcrypt.compareSync(
                req.body.password,
                data1.rows[0].password
            )

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                })
            }

            const token = jwt.sign({ username : data1.rows[0].username }, config.secret, {
                expiresIn: 86400 // 24 hours
            })

            res.status(200).send({
                username: data1.rows[0].username,
                email: data1.rows[0].email,
                accessToken: token
            })
        } else {
            userModel.readPlayerByEmail(req.body.username).then(data2 => { // Is entered as username in body
                if (data2.rows.length) {
                    const passwordIsValid = bcrypt.compareSync(
                        req.body.password,
                        data2.rows[0].password
                    )
        
                    if (!passwordIsValid) {
                        return res.status(401).send({
                            accessToken: null,
                            message: "Invalid Password!"
                        })
                    }
        
                    const token = jwt.sign({ username : data2.rows[0].username }, config.secret, {
                        expiresIn: 86400 // 24 hours
                    })
        
                    res.status(200).send({
                        username: data2.rows[0].username,
                        email: data2.rows[0].email,
                        accessToken: token
                    })
                } else {
                    res.status(404).send({
                        message: "User not found."
                    })
                }
            })
        }
    })
}

module.exports = {
    signup,
    signin
}