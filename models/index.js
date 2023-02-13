const mongoose = require('mongoose')
const personSchema = require('./person')
const classSchema = require('./class')
const commentSchema = require('./comment')

const Person = mongoose.model('Person', personSchema)
const Class = mongoose.model('Class', classSchema)
const Comment = mongoose.model('Comment', commentSchema)
module.exports = {
  Person,
  Class,
  Comment
}