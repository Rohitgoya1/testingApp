const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
name: {
    type: String,
    required: true
},
age: {
    type: String,
    required: true
},
cast: {
    type: String,
    required: true
},
email: {
    type: String,
    required: true
},
phone: {
    type: String,
    required: true
},
address: {
    type: String,
    required: true
},
});