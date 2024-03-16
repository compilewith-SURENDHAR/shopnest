const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title : { type: String, required: true},
        supplier : { type: String, required: true},
        imageurl : { type: String, required: true},
        description : { type: String, required: true}
    }, {timestamps: true}
)

module.export = mongoose.model("Product", ProductSchema)