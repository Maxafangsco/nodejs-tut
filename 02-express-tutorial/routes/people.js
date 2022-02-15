const express =require('express')
const router = express.Router()

const {
    getPeople,
    createPerson,
    createPersonPostman,
    deletePerson,
    updatePerson
} = require('../02-express-tutorial/controller/people')



// router.get('/', getPeople)
  
//   router.post('/',createPerson)
  
//   router.post('/postman', createPersonPostman)
  
//   router.put('/:id', updatePerson)
  
//   router.delete('/:id', deletePerson)

router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:').put(updatePerson).delete(deletePerson)

  module.exports = router;
  