const db = require('../db')
const Class = require('../models/class')

db.on('error', console.error.bind(console, 'MongoDB connection error '))

const main = async () => {


  const warrior = await new Class(
    {
      name: 'Warrior',
      role: 'Tank/DPS',
      primary_attribute: 'Strength',
      armor_type: 'Plate',
      specs: 'Protection, Arms, Fury',
      img: 'placeholder'
  })

}

const run = async () => {
  await main()
  db.close()
} 