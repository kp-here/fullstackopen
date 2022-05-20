const PORT = process.env.PORT || 3001


const express= require('express')
const cors = require('cors')
const morgan = require('morgan')
morgan.token('type', (req, res) => JSON.stringify(req.body))

const app =express()

app.use(express.json())
app.use(cors())
app.use(express.static('build'))

app.use(morgan((tokens, req, res)=>{
  var array=[
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ]
  if(tokens.method(req, res)=='POST')
    array.push(tokens.type(req, res)) 
  return array.join(' ')
}))

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2022-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2022-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2022-05-30T19:20:14.298Z",
    important: true
  }
]

app.get('/api/notes',(req,res)=>{
    res.json(notes)
})


app.get('/api/notes/:id',(req,res)=>{
  const k=notes.find(n=>n.id==req.params.id)
  if(!k){
    return res.status(404).end()
  }
  res.send(k)
})
app.put('/api/notes/:id',(req,res)=>{
  const id = req.params.id
  const note = notes.find(n=>n.id==id)
  note.important = !note.important
  notes = notes.map(n=>n.id==id?note:n)
})
app.post('/api/notes',(req,res)=>{
  const content = req.body.content

  if(!content){
    return res.status(400).json({error:`content is missing`})
  }

  const id = Math.floor(Math.random()*50+14)
  const newNote = {
    id:id,
    content:content,
    date:new Date(),
    important:req.body.important
  }
  notes = notes.concat(newNote)
  res.send(newNote)
})


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})
