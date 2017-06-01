
import request from 'superagent'

export function getTasks(callback) {
  request
    .get('/tasks')
    .end((err, res) => {
      callback(res.body)
    })
}
