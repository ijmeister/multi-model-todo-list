const mongoose = require('mongoose')

let todoGroupSchema = new mongoose.Schema({
  name: String,
  color: String,
  todos: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Todo'
  }]
})

let TodoGroup = mongoose.model('TodoGroup', todoGroupSchema)

module.exports = TodoGroup
