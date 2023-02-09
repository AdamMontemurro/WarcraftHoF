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
  warrior.save()

  const paladin = await new Class(
    {
      name: 'Paladin',
      role: 'Tank/DPS/Healer',
      primary_attribute: 'Strength/Intelect',
      armor_type: 'Plate',
      specs: 'Protection, Retribution, Holy',
      img: 'placeholder'
  })
  paladin.save()

  const hunter = await new Class(
    {
      name: 'Hunter',
      role: 'DPS',
      primary_attribute: 'Agility',
      armor_type: 'Mail',
      specs: 'Marksman, Survival, Beast Mastery',
      img: 'placeholder'
  })
  hunter.save()

  const paladin = await new Class(
    {
      name: 'Paladin',
      role: 'Tank/DPS/Healer',
      primary_attribute: 'Strength/Intelect',
      armor_type: 'Plate',
      specs: 'Protection, Retribution, Holy',
      img: 'placeholder'
  })
  paladin.save()





}






const run = async () => {
  await main()
  db.close()
} 