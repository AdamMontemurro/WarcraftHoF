const {Schema} = require('mongoose')

const Person = new Schema(
  {
    name: {type:String, required: true},
    race: {type:String, required: true},
    class: {type:Schema.Types.ObjectId, ref: 'Class'},
    status: {type:String, required: true},
    involvements: {type:String, required: true},
    img: {type:String, required: false},
  },
  {timestamps: true}
)

module.exports = personSchema