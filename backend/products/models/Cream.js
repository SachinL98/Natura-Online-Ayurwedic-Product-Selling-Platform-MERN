const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const creamSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    price: {type: Number, required: true},
    quantity: {type: Number, required: true},
    type: {type: String},
    mfd: {type: Date, required: true},
    exp: {type: Date, required: true},
    weight: {type: Number, required: true},
    sellerID: {type: String},

    //imageName: {type: String},
    //imageData: {type: Buffer},
    //contentType: {type: String}
});

const Cream = mongoose.model("Cream", creamSchema);
module.exports = Cream;