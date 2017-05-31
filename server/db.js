module.exports = {
  getTasks
}

function getTasks(knex) {
  return knex('tasks')
}


//
// function addTask(knex, task) {
//   return knex('tasks').insert(task)
// }
