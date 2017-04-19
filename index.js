const express = require('express')

const path = require('path')
const ejsLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const todoRouter = require('./routes/todo_router')
const pageRouter = require('./routes/pages_router')
const todoGrpRouter = require('./routes/todoGrp_router')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

var port = process.env.PORT || 3000

mongoose.connect(process.env.PROD_MONGODB || 'mongodb://localhost/todo')

mongoose.Promise = global.Promise
const app = express()
app.use(express.static(path.join(__dirname, 'public')))

app.use(methodOverride('_method'))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(ejsLayouts)

app.set('view engine', 'ejs')

// Routers
//
app.use('/', pageRouter)
app.use('/todos', todoRouter)
app.use('/todogroups', todoGrpRouter)

app.get('/', (req, res) => {
  res.send('Vell, vell, vell. Vellcome to my app.')
})

app.listen(port, function () {
  console.log('express server running at ' + port)
})
