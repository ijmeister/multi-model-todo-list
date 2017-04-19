const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todo_controller')

router.route('/')
.get(todoController.list)
.post(todoController.create)

router.get('/new', todoController.new)
router.get('/:id/edit', todoController.edit)

router.route('/:id')
.get(todoController.listOne)
.put(todoController.update)
.delete(todoController.delete)

// router.get('/', todoController.list)
//
// router.get('/new', todoController.new)
//
// router.get('/:id', todoController.listOne)
//
// router.get('/:id/edit', todoController.edit)
//
// router.post('/', todoController.create)
//
// router.put('/:id', todoController.update)
//
// router.delete('/:id', todoController.delete)

module.exports = router
