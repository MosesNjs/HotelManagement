const express = require("express");
const RoomType = require("../collection/roomTypeSchema");
const app = require("../index")
const bodyParser = require("body-parser")
app.use(bodyParser.json())

// make a new roomtype
app.post("/api/v1/rooms-types", async (req, res) => {
  try {
    const roomType = await RoomType.create(req.body);
    res.status(200).send(roomType)
  } catch (err) {
    res.status(500).send(err)
  }
});

// get all room types
app.get("/api/v1/rooms-types", async (req, res) =>
{
    try {
        const roomtypes = await RoomType.find({})
        res.status(200)
        .send(roomtypes)
    } catch (err) {
        res.status(500).send(err)
    }
})