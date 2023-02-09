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

  const warlock = await new Class(
    {
      name: 'Warlock',
      role: 'Damage',
      primary_attribute: 'Intelect',
      armor_type: 'Cloth',
      specs: 'Affliction, Demonology, Destruction',
      img: 'placeholder'
  })
  warlock.save()
  const monk = await new Class(
    {
      name: 'Monk',
      role: 'Tank/Healer/Damage',
      primary_attribute: 'Agility/Intelect',
      armor_type: 'Leather',
      specs: 'Brewmaster, Mistweaver, Windwalker',
      img: 'placeholder'
  })
  monk.save()

  const druid = await new Class(
    {
      name: 'Druid',
      role: 'Tank/Healer/Damage',
      primary_attribute: 'Agility/Intelect',
      armor_type: 'Leather',
      specs: 'Feral(tank), Feral(damage), Restoration, Balance',
      img: 'placeholder'
  })
  druid.save()

  const demon_hunter = await new Class(
    {
      name: 'Demon Hunter',
      role: 'Tank/Damage',
      primary_attribute: 'Agility',
      armor_type: 'Leather',
      specs: 'Havoc,Vengeance',
      img: 'placeholder'
  })
  demon_hunter.save()

  const death_knight = await new Class(
    {
      name: 'Death Knight',
      role: 'Tank,Damage',
      primary_attribute: 'Strength',
      armor_type: 'Plate',
      specs: 'Blood, Frost, Unholy',
      img: 'placeholder'
  })
  death_knight.save()

  const evoker = await new Class(
    {
      name: 'Evoker',
      role: 'Healer/Damage',
      primary_attribute: 'Intelect',
      armor_type: 'Mail',
      specs: 'Devastation, Preservation',
      img: 'placeholder'
  })
  evoker.save()

}

const run = async () => {
  await main()
  db.close()
} 

run()