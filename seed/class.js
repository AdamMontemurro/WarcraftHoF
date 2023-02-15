const db = require('../db')
const { Class, Person, Comment } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error '))

const main = async () => {


  const warrior = await new Class(
    {
      name: 'Warrior',
      role: 'Tank/Damage',
      primary_attribute: 'Strength',
      armor_type: 'Plate',
      specs: 'Protection, Arms, Fury',
      img: 'https://i.imgur.com/5KVWR5u.png'
    })
  warrior.save()

  const paladin = await new Class(
    {
      name: 'Paladin',
      role: 'Tank/Damage/Healer',
      primary_attribute: 'Strength/Intelect',
      armor_type: 'Plate',
      specs: 'Protection, Retribution, Holy',
      img: 'https://i.imgur.com/wJzmXt7.png'
    })
  paladin.save()

  const hunter = await new Class(
    {
      name: 'Hunter',
      role: 'Damage',
      primary_attribute: 'Agility',
      armor_type: 'Mail',
      specs: 'Marksman, Survival, Beast Mastery',
      img: 'https://i.imgur.com/iVwp1tK.png'
    })
  hunter.save()

  const rogue = await new Class(
    {
      name: 'Rogue',
      role: 'Damage',
      primary_attribute: 'Agility',
      armor_type: 'Plate',
      specs: 'Assassination, Outlaw, Subtlety',
      img: 'https://i.imgur.com/fowx8Y8.png'
    })
  rogue.save()

  const priest = await new Class(
    {
      name: 'Priest',
      role: 'Healer/Damage',
      primary_attribute: 'Intelect',
      armor_type: 'Cloth',
      specs: 'Holy, Discipline, Shadow',
      img: 'https://i.imgur.com/sEIvLvi.png'
    })
  priest.save()

  const shaman = await new Class(
    {
      name: 'Shaman',
      role: 'Healer/Damage',
      primary_attribute: 'Agility/Intelect',
      armor_type: 'Mail',
      specs: 'Elemental, Restoration, Enhancement',
      img: 'https://i.imgur.com/3HWVz51.png'
    })
  shaman.save()

  const mage = await new Class(
    {
      name: 'Mage',
      role: 'Damage',
      primary_attribute: 'Intelect',
      armor_type: 'Cloth',
      specs: 'Arcance, Frost, Fire',
      img: 'https://i.imgur.com/S9OcuKH.png'
    })
  mage.save()

  const warlock = await new Class(
    {
      name: 'Warlock',
      role: 'Damage',
      primary_attribute: 'Intelect',
      armor_type: 'Cloth',
      specs: 'Affliction, Demonology, Destruction',
      img: 'https://i.imgur.com/gRrVOPF.png'
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
      img: 'https://i.imgur.com/4GcwFPE.png'
    })
  druid.save()

  const demon_hunter = await new Class(
    {
      name: 'Demon Hunter',
      role: 'Tank/Damage',
      primary_attribute: 'Agility',
      armor_type: 'Leather',
      specs: 'Havoc,Vengeance',
      img: 'https://i.imgur.com/i4Dn0KC.png'
    })
  demon_hunter.save()

  const death_knight = await new Class(
    {
      name: 'Death Knight',
      role: 'Tank,Damage',
      primary_attribute: 'Strength',
      armor_type: 'Plate',
      specs: 'Blood, Frost, Unholy',
      img: 'https://i.imgur.com/E3ujqot.png'
    })
  death_knight.save()

  const evoker = await new Class(
    {
      name: 'Evoker',
      role: 'Healer/Damage',
      primary_attribute: 'Intelect',
      armor_type: 'Mail',
      specs: 'Devastation, Preservation',
      img: 'https://i.imgur.com/zWaAIAQ.png'
    })
  evoker.save()


  const people = [

    {
      name: "Thrall",
      race: "Orc",
      class: shaman._id,
      status: "Alive",
      involvements: "Battle of Mt. Hyjal, Founding of Orgrimmar, The Shattering",
      img: 'https://i.imgur.com/Iucr8Nl.png',
    },

    {
      name: "Jaina Proudmoore",
      race: "Human",
      class: mage._id,
      status: "Alive",
      involvements: "The Third War, Founding of Theramore, Theramore's Fall",
      img: 'https://i.imgur.com/3ZOMS0j.png',
    },

    {
      name: "Malfurion Stormrage",
      race: "Night Elf",
      class: druid._id,
      status: "Dormant",
      involvements: "War of the Ancients, The Third War, War of the Thorns",
      img: 'https://i.imgur.com/46SKl1v.png',
    },

    {
      name: "Medivh",
      race: "Human",
      class: mage._id,
      status: "Deceased",
      involvements: "The Gurubashi War, Opening of the Dark Portal, The Third War",
      img: 'https://i.imgur.com/OUje4dQ.png',
    }
  ]

  const comments = [
    {
      username: "Arthas_STAN32",
      comment: "I would really like to see Arthas added as the Litch King. He was the main villian during WC3 and first three expansions. He's personally my favorite character.",

    },
    {
      username: "WoDwasOK",
      comment: " I always thought Guldan was a really cool character",

    },
    {
      username: "Spencman96",
      comment: "I think you should add Pao to the Hall. His guild would be lost without him!",

    },
  ]


  await Person.insertMany(people)
  await Comment.insertMany(comments)
}

const run = async () => {

  await main()
  // db.close()
}

run()