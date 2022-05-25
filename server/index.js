const express = require('express')
const cors = require('cors')

const countries = require('world-countries')

const app = express()
const port = 3030

const httpServer = require('http').createServer(app)

app.use(cors())

const io = require('socket.io')(httpServer, {
  cors: {
    origin: 'http://localhost:8080/',
  },
})

app.get('/country', (req, res) => {
  let randomNum = Math.floor(Math.random() * countries.length)

  res.send(countries[randomNum])
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

io.on('connection', socket => {
  socket.on('hello', arg => {
    console.log(arg) // world
  })
})

app.listen(port, () => console.log(`Online!`))
