const mongoose = require('mongoose')


const {Schema} = mongoose;

const listSchema = new Schema({
    title: String,
    description: String
})


const listModel = mongoose.model('DailyGoals', listSchema)
module.exports = listModel;