const { Schema } = require('mongoose')

const commentSchema = new Schema (
  {
    username: {type:String, required: true},
    comment: {type:String, required: true},

}
)

module.exports = commentSchema 