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
  //list user
    app.get('/', (req, res) => {
      userCollection.find().toArray()
      
          .then(results => {
           
           res.render('index.ejs', { users : results })
     
            console.log(results)
          })
          .catch(error => console.error(error))
        
      })

//insert user   
  app.post('/user', (req, res) => {
    userCollection.insertOne(req.body)
      .then(result => {
        res.redirect('/')
      })
      .catch(error => console.error(error))
  })
// Update  user
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

  //delete user
  app.delete('/user', (req, res) => {
    userCollection.deleteOne(
      { nom: req.body.nom }
    )
    .then(result => {
      console.log('//////////////////////////////////DELETE USER/::///////://////////////////////////')
      if (result.deletedCount === 0) {
        return res.json('No user to delete')
      }
    
      res.json(`Deleted User`)
    })
      .catch(error => console.error(error))
  })
  

  //Crud question 

  const questionCollection = db.collection('question')
  app.get('/question', (req, res) => {
    questionCollection.find().toArray()
    
        .then(results => {
         
         res.render('question.ejs', { questions : results })
   
          console.log(results)
        })
        .catch(error => console.error(error))
      
    })

    //insert question   
  app.post('/questioninsert', (req, res) => {
    questionCollection.insertOne(req.body)
      .then(result => {
        res.redirect('/question')
      })
      .catch(error => console.error(error))
  })



// Update  question
app.put('/questioninsert', (req, res) => {
  questionCollection.findOneAndUpdate(
    { description: req.body.description },
    {
      $set: {
        description: req.body.description,
       
        datecreation : req.body.datecreation
      

      }
    }
  )
    .then(result => {es.json('Success')})
    .catch(error => console.error(error))
})

//delete question
app.delete('/questioninsert', (req, res) => {
  questionCollection.deleteOne(
    { description: req.body.description }
  )
  .then(result => {
    console.log('//////////////////////////////////DELETE Question/::///////://////////////////////////')
    if (result.deletedCount === 0) {
      return res.json('No question to delete')
    }
    res.json(`Deleted question`)
  })
    .catch(error => console.error(error))
})



  //Crud reponse 

  const reponseCollection = db.collection('reponse')
  app.get('/reponse', (req, res) => {
    reponseCollection.find().toArray()
    
        .then(results => {
         
         res.render('reponse.ejs', { reponses : results })
   
          console.log(results)
        })
        .catch(error => console.error(error))
      
    })

    //insert reponse   
  app.post('/reponseinsert', (req, res) => {
    reponseCollection.insertOne(req.body)
      .then(result => {
        res.redirect('/reponse')
      })
      .catch(error => console.error(error))
  })



// Update  reponse
app.put('/reponseinsert', (req, res) => {
  reponseCollection.findOneAndUpdate(
    { description: req.body.description },
    {
      $set: {
        description: req.body.description,
       
        datecreation : req.body.datecreation
      

      }
    }
  )
    .then(result => {es.json('Success')})
    .catch(error => console.error(error))
})

//delete reponse
app.delete('/reponseinsert', (req, res) => {
  reponseCollection.deleteOne(
    { description: req.body.description }
  )
  .then(result => {
    console.log('//////////////////////////////////DELETE reponse/::///////://////////////////////////')
    if (result.deletedCount === 0) {
      return res.json('No reponse to delete')
    }
    res.json(`Deleted reponse`)
  })
    .catch(error => console.error(error))
})


 //Crud messagerie 

 const messagerieCollection = db.collection('messagerie')
 app.get('/messagerie', (req, res) => {
  messagerieCollection.find().toArray()
   
       .then(results => {
        
        res.render('messagerie.ejs', { messageries : results })
  
         console.log(results)
       })
       .catch(error => console.error(error))
     
   })

   //insert messagerie   
 app.post('/messagerieinsert', (req, res) => {
  messagerieCollection.insertOne(req.body)
     .then(result => {
       res.redirect('/messagerie')
     })
     .catch(error => console.error(error))
 })



// Update  messagerie
app.put('/messagerieinsert', (req, res) => {
  messagerieCollection.findOneAndUpdate(
   { message: req.body.message },
   {
     $set: {
      message: req.body.message,
      object : req.body.object,
      datecreation: req.body.datecreation,
      from: req.body.from 
      

     }
   }
 )
   .then(result => {es.json('Success')})
   .catch(error => console.error(error))
})

//delete messagerie
app.delete('/messagerieinsert', (req, res) => {
  messagerieCollection.deleteOne(
   { message: req.body.message }
 )
 .then(result => {
   console.log('//////////////////////////////////DELETE reponse/::///////://////////////////////////')
   if (result.deletedCount === 0) {
     return res.json('No messagerie to delete')
   }
   res.json(`Deleted messagerie`)
 })
   .catch(error => console.error(error))
})

  
  })
  .catch(error => console.error(error))

