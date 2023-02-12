const { model, Schema } = require("mongoose")
const ObjectId = Schema.Types.ObjectsId


const RoomTypeSchema = new Schema(
    {
        "_id" : ObjectId,
        "name": {
            type: String,
            required: [true, "Input a name please"]
        }
    }
)

const RoomType = model("RoomType", RoomTypeSchema)

module.exports = RoomType;