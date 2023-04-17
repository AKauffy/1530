const mongoose = require('mongoose')

const Schema = mongoose.Schema

const spendingSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    Amount: {
        type: Number,
        required: true
    },
    budget: {
        type: String,
        required: true
    },
    date: {
        type : Date, 
        default: Date.now
    },
    user_id: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Spending', spendingSchema)