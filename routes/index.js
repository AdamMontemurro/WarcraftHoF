const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')


router.get('/', (req,res)=>
  res.send('home')
)




router.get('/classes', controllers.getClasses)
router.get('/people', controllers.getPeople)
router.get('/classes/:id', controllers.getClassById)


router.get('/comments/get', controllers.getComments)
router.post('/comments/create', controllers.newComment)

router.delete('/comments/:id', controllers.deleteComment)
router.put('/comments/:id', controllers.updateComment)

module.exports = router