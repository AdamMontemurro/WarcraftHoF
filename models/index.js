const mongoose = require('mongoose')
const personSchema = require('./person')
const classSchema = require('./class')

const Person = mongoose.model('Person', personSchema)
const Class = mongoose.model('Class', classSchema)

module.exports = {
  Person,
  Class
}