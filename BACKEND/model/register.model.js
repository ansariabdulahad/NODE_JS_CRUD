const mongo = require('mongoose');
const { Schema, model } = mongo;

const registerSchema = new Schema({
    name: String,
    mobile: Number,
    dob: String,
    profile: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = model("register", registerSchema);