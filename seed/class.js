const db = require('../db')
const Class = require('../models/class')

db.on('error', console.error.bind(console, 'MongoDB connection error '))

const main = async () => {


  const warrior = await new Class(
    {
      name: 'Warrior',
      role: 'Tank/Damage',
      primary_attribute: 'Strength',
      armor_type: 'Plate',
      specs: 'Protection, Arms, Fury',
      img: 'placeholder'
  })
  warrior.save()

  const paladin = await new Class(
    {
      name: 'Paladin',
      role: 'Tank/Damage/Healer',
      primary_attribute: 'Strength/Intelect',
      armor_type: 'Plate',
      specs: 'Protection, Retribution, Holy',
      img: 'placeholder'
  })
  paladin.save()

  const hunter = await new Class(
    {
      name: 'Hunter',
      role: 'Damage',
      primary_attribute: 'Agility',
      armor_type: 'Mail',
      specs: 'Marksman, Survival, Beast Mastery',
      img: 'placeholder'
  })
  hunter.save()

  const rogue = await new Class(
    {
      name: 'Rogue',
      role: 'Damage',
      primary_attribute: 'Agility',
      armor_type: 'Plate',
      specs: 'Assassination, Outlaw, Subtlety',
      img: 'placeholder'
  })
  rogue.save()

  const priest = await new Class(
    {
      name: 'Priest',
      role: 'Healer/Damage',
      primary_attribute: 'Intelect',
      armor_type: 'Cloth',
      specs: 'Holy, Discipline, Shadow',
      img: 'placeholder'
  })
  priest.save()

  const shaman = await new Class(
    {
      name: 'Shaman',
      role: 'Healer/Damage',
      primary_attribute: 'Agility/Intelect',
      armor_type: 'Mail',
      specs: 'Elemental, Restoration, Enhancement',
      img: 'placeholder'
  })
  shaman.save()

  const mage = await new Class(
    {
      name: 'Mage',
      role: 'Damage',
      primary_attribute: 'Intelect',
      armor_type: 'Cloth',
      specs: 'Arcance, Frost, Fire',
      img: 'placeholder'
  })
  mage.save()

  const rue = await new Class(
    {
      name: 'Rogue',
      role: 'Damage',
      primary_attribute: 'Agility',
      armor_type: 'Plate',
      specs: 'Assassination, Outlaw, Subtlety',
      img: 'placeholder'
  })
  rogue.save()







}






const run = async () => {
  await main()
  db.close()
} 