allAccess = (req, res) => {
    res.status(200).send("Public content.")
}

userBoard = (req, res) => {
    res.status(200).send("User content.")
}

adminBoard = (req, res) => {
    res.status(200).send("Admin content.")
}

module.exports = {
    allAccess,
    userBoard,
    adminBoard
}