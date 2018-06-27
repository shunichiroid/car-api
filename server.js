const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const shunkey = 'himitsu'
const cors = require('cors')

const app = express()
const user = {
    id: 1,
    email: "shun@gmail.com",
    password: "bestpass12345"
}

app.listen(3000, function() {
console.log('listening on 3000');
})

app.use(bodyParser.json())
app.use(cors())

app.get('/',(req, res) => {
    res.sendFile(__dirname + '/index.html')
})


app.post('/login', (req, res) => {
    if(req.body.email === user.email && req.body.password === user.password) {
        const token = jwt.sign({uid: user.id}, shunkey)
        res.send(token)
    }
    else{
        res.send({message: "Email address or password is incorrect"})
    }
})