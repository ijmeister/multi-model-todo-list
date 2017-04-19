let TodoGrp = require('../models/todoGroup')

let todoGroupController = {
  list: (req, res) => {
    TodoGrp.find({}, (err, todoGroups) => {
      if (err) throw err
      res.render('todo_group/index', { todos: todoGroups })
    })
  },

  new: (req, res) => {
    res.render('todo_group/create')
  },

  listOne: (req, res) => {
    TodoGrp.findById(req.params.id, (err, todoGrp) => {
      if (err) throw err
      res.render('todo_group/single-todo', { todoGrpItem: todoGrp })
    })
  },

  create: (req, res) => {
    let newTodoGrp = new TodoGrp({
      name: req.body.name,
      color: req.body.color
    })
    newTodoGrp.save(function (err, savedEntry) {
      if (err) throw err
      res.redirect('/todogroups')
    })
  },

  edit: (req, res) => {
    TodoGrp.findById(req.params.id, (err, todoGrpItem) => {
      if (err) throw err
      res.render('todo_group/edit', { todoGrpItem: todoGrpItem })
    })
  },

  update: (req, res) => {
    TodoGrp.findOneAndUpdate({
      _id: req.params.id
    }, {
      name: req.body.name,
      color: req.body.color
    }, (err, todoGrpItem) => {
      if (err) throw err
      res.redirect('/todogroups/' + todoGrpItem.id)
    })
  },

  delete: (req, res) => {
    TodoGrp.findByIdAndRemove(req.params.id, (err, todoItem) => {
      if (err) throw err
      res.redirect('/todos')
    })
  }

}

module.exports = todoGroupController
