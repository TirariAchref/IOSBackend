const MongoClient = require('mongodb').MongoClient
const express = require('express')
const app = express()
const connectionString='mongodb+srv://achef:achref@cluster0.itlnr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


app.listen(3000, function() {
    console.log('listening on 3000')
  })

  //tell Express to make this public folder accessible to the public by using a built-in middleware called 
  app.use(express.static('public'))
  app.use(express.json())

  app.set('view engine', 'ejs')

 





  app.use(express.urlencoded({ extended: true }))

// All your handlers here...


MongoClient.connect(connectionString, { 
    useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('Cluster0')
    
    
    const userCollection = db.collection('user')
 
  
  
    app.get('/', (req, res) => {
      userCollection.find().toArray()
          .then(results => {
           // res.sendFile(__dirname + '/index.html')
           res.render('index.ejs', { users : results })
            console.log(results)
          })
          .catch(error => console.error(error))
        
      })

   
  app.post('/user', (req, res) => {
    userCollection.insertOne(req.body)
      .then(result => {
        res.redirect('/')
      })
      .catch(error => console.error(error))
  })
// Update 
  app.put('/user', (req, res) => {
    userCollection.findOneAndUpdate(
      { nom: req.body.nom },
      {
        $set: {
          nom: req.body.nom,
          prenom : req.body.prenom,
          email : req.body.email,
          password : req.body.password,
          phone : req.body.phone,
          categorieclient : req.body.categorieclient
        

        }
      }
    )
      .then(result => {res.json('Success')})
      .catch(error => console.error(error))
  })

  //delete
  app.delete('/user', (req, res) => {
    userCollection.deleteOne(
      { nom: req.body.nom }
    )
    .then(result => {
      if (result.deletedCount === 0) {
        return res.json('No user to delete')
      }
      res.json(`Deleted User`)
    })
      .catch(error => console.error(error))
  })
  
  
  })
  .catch(error => console.error(error))

