const {Router} = require ("express");
const { getTodo, savetodo, updateTodo, deleteTodo } = require("../controllers/Todocontrollers");

const router = Router()

router.get('/', getTodo)
router.post('/save', savetodo)
router.post('/update', updateTodo)
router.post('/delete', deleteTodo)




module.exports = router;