const express = require('express')
const cors = require('cors')
const app = express()
const port = 3030

const httpServer = require('http').createServer(app)

app.use(cors())

cconst io = require('socket.io')(httpServer, {cors: {
  origin: 'http://localhost:8080/',
}})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

io.on('connection', socket => {
  socket.on('hello', arg => {
    console.log(arg) // world
  })
})

app.listen(port, () => console.log(`Online!`))
