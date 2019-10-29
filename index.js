const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const massive = require('massive')
const products_controller = require('./products_controller')

const app = express()
//using our bodyParser middleware
app.use(bodyParser.json())
//adding massive to the sever to connect to a database
massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance)
}).catch( err => console.log(err))

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`listening to port ${port}`)
})

// CREATE TABLE product (
//   product_id SERIAL PRIMARY KEY NOT NULL,
//   name varchar(40) NOT NULL,
//   description varchar(80) NOT NULL,
//   price integer NOT NULL,
//   image_url text NOT NULL
// );

//create endpoints
const end = '/api/products'
  //products_controller(js file name.)
app.post(end,  products_controller.create )
app.get(end, products_controller.getAll)
app.get(`${end}/:id`, products_controller.getOne)
app.put(`${end}/:id`, products_controller.update)
app.delete(`${end}/:id`, products_controller.delete)
