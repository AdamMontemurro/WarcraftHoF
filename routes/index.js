const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')


router.get('/', (req,res)=>
  res.send('home')
)

router.get('/classes', controllers.getClasses)





module.exports = router