const Class = require('../models/class')


const getClasses = async (req, res) => {
  try {
      const classes = await Class.find()
      return res.status(200).json({ classes })
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

const getClassById = async (req, res) => {
  try {
      const { id } = req.params;
      const classA = await Class.findById(id)
      if (classA) {
          return res.status(200).json({ classA });
      }
      return res.status(404).send('That class does not exist');
  } catch (error) {
      return res.status(500).send(error.message);
  }
}




module.exports = {
  getClasses,
  getClassById
}