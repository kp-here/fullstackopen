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

let persons = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

app.get('/api/persons',(req,res)=>{
    res.json(persons)
})

app.get('/info',(req,res)=>{
  res.send(`Phonebook has info of ${persons.length} people 
  ${new Date()}`)
})

app.get('/api/persons/:id',(req,res)=>{
  const k=persons.find(n=>n.id==req.params.id)
  if(!k){
    return res.status(404).end()
  }
  res.send(k)
})

app.delete('/api/persons/:id',(req,res)=>{
  const file = persons.find(n=>n.id==req.params.id)
  if(!file){
    res.status(404).end()
  }
  persons = persons.filter(n=>n.id!=req.params.id)
  res.send(file)
})

app.post('/api/persons',(req,res)=>{
  const name = req.body.name
  const number = req.body.number
  if(!(name && number)){
    return res.status(400).json({error:`${number?'':'number'}${name||number?'':' and '}${name?'':'name'} is missing`})
  }
  if(persons.find(n=>n.name==name)){
    return res.status(400).json({error:'name must be unique'})
  }
  const id = Math.floor(Math.random()*50+14)
  const newPerson = {
    id:id,
    name:name,
    number:number
  }
  persons = persons.concat(newPerson)
  res.send(newPerson)
})


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})
