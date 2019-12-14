// learning CRUD

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useNewUrlParser: true ,  useUnifiedTopology: true }, (error, client ) => {
  if (error) {
    return console.log('unable to connect to database!')
  }

  const db = client.db(databaseName)

  // db.collection('users').deleteMany({
  //   age: 36
  // }).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })

  // db.collection('task').deleteOne({
  //   description:'Take out the trash'
  // }).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })
})







// db.collection('users').updateOne({
  //   _id: new ObjectID('5df460f176dae75b47a28461')
  // }, {
  //   $inc: {
  //     age: 1
  //   }
  // }).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })

// db.collection('task').updateMany({
//   completed: false
// },{
//   $set:{
//     completed: true
//   }
// }).then((result) => {
//   console.log(result.modifiedCount)
// }).catch((error) => {
//   console.log(error)
// })




// db.collection('users').findOne({_id:new ObjectID('5df50fe63b80ad5d3e6e9d4d')}, (error, user) => {
  //   if (error) {
    //     return console.log('Unable to fetch')
    //   }
    
    //   console.log(user)
    // })
    
    // db.collection('users').find({ age:36 }).toArray((erroe, user) => {
      //   if (error) {
        //     return console.log('Unable to fetch')
        //   }
        
        //   console.log(user)
        // })
            
        // db.collection('task').findOne({_id: new ObjectID('5df50455f62bff5cbda0df12')}, (error, task) => {
            //   console.log(task)
            // })
            
            // db.collection('task').find({completed: false}).toArray((error, task) => {
            //   console.log(task)
            // })