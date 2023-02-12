const { model, Schema } = require("mongoose")
const ObjectId = Schema.Types.ObjectId
const RoomType = require("./roomTypeSchema")

const RoomSchema = new Schema(
    {
        "_id": ObjectId,

        "name": {
            type: String,
            required: [true, "Input a name please"]
        },

        "roomType": {
            type: ObjectId,
            ref: RoomType,
            required:  [true, "Input a roomType please"]
        },

        "price": {
            type: Number,
            required:  [true, "Input a room price please"]
        }

    }
)

const Room = model("Room", RoomSchema)

module.exports = Room;