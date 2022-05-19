const express = require('express')
const cors = require('cors')
const app = express()
const port = 3030

const http = require('http')
const server = http.createServer(app)

app.use(cors())

const io = require('socket.io')(server, {
  origins: 'http://localhost:8080',
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

io.on('connection', socket => {
  socket.on('user-clicked', msg => {
    console.log(msg)
  })
})

app.listen(port, () => console.log(`Application listening on port ${port}!`))
