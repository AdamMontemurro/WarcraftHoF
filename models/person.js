const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema(
  {
    name: {type:String, required: true},
    race: {type:String, required: true},
    class: {type:Schema.Types.ObjectId, ref: 'Class'},
    status: {type:String, required: true},
    involvements: {type:String, required: true},
    img: {type:String, required: false},
  }
  {timestamps: true}
)

module.exports = mongoose.model('Class', personSchema)