import mongoose from "mongoose";

const Wish = new mongoose.Schema({
    wish: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
}, {collection: "wishData"}
)

const wishModel = mongoose.model("WishData", Wish);

export default wishModel;