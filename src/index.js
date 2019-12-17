const express    = require('express')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
require('./db/mongoose')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send('GET request are disabled')
//   } else {
//     next()
//   }
// })

// app.use((req, res, next) => {
//   res.status(503).send("Site is down check back soon!")
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
  // const task = await Task.findById('5df93538ff22389cb2707fa2')
  // await task.populate('owner').execPopulate()
  // console.log(task.owner)
const user = await User.findById('5df933f33e13759ae1479917')
await user.populate('tasks').execPopulate()
console.log(user.tasks)
}

main()
