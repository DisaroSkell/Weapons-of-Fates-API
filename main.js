const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors")
const app = express()
const port = 6942

const corsOptions = {
    origin: "*"
}

app.use(cors(corsOptions))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

require("./routes/auth")(app)

require("./routes/user")(app)

require("./routes/Abilities")(app)

require("./routes/Enemies")(app)

require("./routes/Fate")(app)

require("./routes/Outfits")(app)

require("./routes/Player")(app)

require("./routes/Rarity")(app)

require("./routes/TypeW")(app)

require("./routes/Weapons")(app)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})