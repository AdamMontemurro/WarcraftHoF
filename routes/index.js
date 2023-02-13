const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')


router.get('/', (req,res)=>
  res.send('home')
)




router.get('/classes', controllers.getClasses)

router.get('/classes/:id', controllers.getClassById)

router.post('/comments/create', controllers.newComment)

router.delete('/comments/:id', controllers.deleteComment)

module.exports = router