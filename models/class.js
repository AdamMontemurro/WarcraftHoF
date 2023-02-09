const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Class = new Schema(
  {
    name: {type:String, required: true},
    role: {type:String, required: true},
    primary_attribute: {type:String, required: true},
    armor_type: {type:String, required: true},
    specs: {type:String, required: true},
    img: {type:String, required: false},
  }
  {timestamps: true}
)

module.exports = mongoose.model('Class', Class)