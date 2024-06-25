const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const caloriesSchema= new Schema({
    name: {
        type: String
    },
    id: {
        type: Number
    },
    price: {
        type: Number
    }
});

const Calorie = mongoose.model('calories',caloriesSchema);

module.exports = Calorie;