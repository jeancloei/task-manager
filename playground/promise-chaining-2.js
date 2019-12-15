require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5df54cc25aa5e27b20757cf5').then((task) => {
//   console.log(task)
//   return Task.countDocuments({ compleated: false })
// }).then((result) => {
//   console.log(result)
// }).catch((e) => {
//   console.log(e)
// })

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({ complete: false })
  return count
}

deleteTaskAndCount('5df568f45d5957041623fec8').then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
})