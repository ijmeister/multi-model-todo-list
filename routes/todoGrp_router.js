const express = require('express')
const router = express.Router()
const todoGrpController = require('../controllers/todoGrp_controller')

router.route('/')
.get(todoGrpController.list)
.post(todoGrpController.create)

router.get('/new', todoGrpController.new)
router.get('/:id/edit', todoGrpController.edit)

router.route('/:id')
.get(todoGrpController.listOne)
.put(todoGrpController.update)
.delete(todoGrpController.delete)

// Second Part Linking Todos to Todo Group
router.route('/:id/todos')
// .get(todoGrpController.listTodo)
// .post(todoGrpController.createTodo)

// router.get('/:id/todos/new', todoGrpController.newTodo)

router.route('/:id/todos/:id')
// .get(todoGrpController.listOne)
// .put(todoGrpController.update)
// .delete(todoGrpController.delete)

module.exports = router
