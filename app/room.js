const express = require("express");
const Room = require("../collection/roomSchema");
const app = require("../index")
const cors = require("cors")

app.use(cors())
app.use(express.json())

// Create a room
app.post("/api/v1/rooms", async (req, res) => {
    const room = await Room.create(req.body);
    try {
        res.send(room)
    } catch (err) {
      res.status(500).send(err)
    }
  });


// Fetch all rooms
const queryUrl = "/api/v1/rooms?search={searchRoomNameMatch}&roomType={searchRoomTypeNameMatch}&minPrice={searchRoomMinimumPriceMatch}&maxPrice={searchRoomMaximumPriceMatch}"
app.get(queryUrl, async (req, res) => {
    const search = req.query.search;
    const roomType = req.query.roomType;
    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;
  try {
    let querySearch = {};
    if (search) {
        querySearch.name = {$regex: search}
    }
    if (roomType) {
        querySearch.roomType = roomType;
    }
    if (minPrice) {
        querySearch.price = {$gte: minPrice}
    }
    if (maxPrice) {
        querySearch.price = {$lte: maxPrice}
    }
    const rooms = await create.getRooms({querySearch});
    res.status(200)
    .send(rooms)
} catch (err) {
    res.status(500).send(err)
}
})

// Edit a room
app.patch("/api/v1/rooms/:id", async (req, res) => {
    const { id, data } = req.body
    try {
        const room = await Room.findOneAndUpdate(id, data)
        res.send(room)
    } catch (err) {
        res.status(500).send(err)
    }
})

// Remove a room
app.delete("/api/v1/rooms/:id", async (req, res) => {
    const { id } = req.params
    try { 
        const room = Room.findOneAndDelete(id);
        res.status(200).send(room)
    } catch (err) {
        res.status(500).send(err)
    }
})

// Get a room
app.get("/api/v1/rooms/:id", async (req, res) => {
    const { id } = req.params
    try {
        const room = await Room.findById(id)
        res.status(200).send(room)
    } catch (err) {
        res.status(500).send(err)
    }
})