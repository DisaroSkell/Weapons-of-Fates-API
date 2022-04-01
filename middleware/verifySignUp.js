const userModel = require('../models/Player')

checkDuplicateUsernameOrEmail = (req, res, next) => {
    // Username
    userModel.readPlayer(req.body.username).then(user => {
        if (user.rows.length) {
            res.status(400).send({
                message: "Failed! Username already in use!"
            })
            
            return
        }

        // Email
        userModel.readPlayerByEmail(req.body.email).then(user => {
            if (user.rows.length) {
                res.status(400).send({
                    message: "Failed! Email already in use!"
                })
                return
            }

            next()
        })
    })
}

module.exports = {
    checkDuplicateUsernameOrEmail
}