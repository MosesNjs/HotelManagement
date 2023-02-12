const express = require("express")
const cors = require("cors")
const database = require("./database/mongoose")
require("dotenv").config({path: './.env'})
const app = express()
app.use(cors())
app.use(express.json())

const Room = require("./collection/roomSchema")

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.status(200).send("Successfully connected")
})

app.post('/room', (req, res) => {
    const room = Room.create(req.body)
    try {
        res.status(200).sen
d(room)
    } catch (err) {
    res.status(500).send(err)
}
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
    database()
})

module.exports = app;