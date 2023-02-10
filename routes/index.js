const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')


router.get('/', (req,res)=>
  res.send('home')
)




router.get('/classes', controllers.getClasses)

router.get('/classes/:id', controllers.getClassById)



module.exports = router