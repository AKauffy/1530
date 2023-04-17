const mongoose = require('mongoose')

const Schema = mongoose.Schema

const budgetSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    Amount: {
        type: Number,
        required: true
    },
    spent: {
        type: Number,
    },
    user_id: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Budget', budgetSchema)