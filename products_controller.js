// use module.exports to export an object with five methods. All methods should capture req, res, and next and create a variable for the database instance off of req.app
module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get('db')
    const {name, description, price, image_url} = req.body
    //chaining
    dbInstance.create_product()
    //should send status 200 on success
    //should send status 500 on failure
    .then( () => res.sendStatus(200))
    .catch( err => {
      res.status(500).send({errorMessage: 'Something went wrong!'})
      console.log(err)
    })
  },
  getOne: (req, res, next) => {
    const dbInstance = req.app.get('db')
    const {params} = req
    dbInstance.read_product()
    //should send status 200 & the product on success
    //should send status 500 on failure
    .then( product => res.status(200)).send(products)
    .catch( err => {
      res.status(500).send({errorMessage: 'Something went wrong!'})
      console.log(err)
    })
  },
  getAll: (req, res, next) => {
    const dbInstance = req.app.get('db')

    dbInstance.read_product()
    //should send status 200 & the product on success
    //should send status 500 on failure
    .then( product => res.status(200)).send(products)
    .catch( err => {
      res.status(500).send({errorMessage: 'Something went wrong!'})
      console.log(err)
    })
  },
  update: (req, res, next) => {
    const dbInstance = req.app.get('db')
    const { params, query } = req;

    dbInstance.update_product()
    //should send status 200 on success
    //should send status 500 on failure
    .then( () => res.sendStatus(200))
    .catch(err => {
      res.status(500).send({errorMessage: 'Something went wrong!'})
      console.log(err)
    })
  },
  delete: (req, res, next) => {
    const dbInstance = req.app.get('db')
    const { params } = req;

    dbInstance.delete_product()
    //should send status 200 on success
    //should send status 500 on failure
    .then( () => res.sendStatus(200))
    .catch(err => {
      res.status(500).send({errorMessage: 'Something went wrong!'})
      console.log(err)
    })
  }
}
