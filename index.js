const express = require ('express')
const app = express()
var bodyParser = require('body-parser') 
var jwt = require('jsonwebtoken');
var secretkey = "wkwkwkwkwk"

// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//========== GET ==========

app.get('/', (req, res) => {
    let obj = {
        'username':'Roma',
        'password':'12345'
    }
    res.status(404).end('Error')
})

//============== JWT ====================

app.get('/myprofile', (req, res) => {
    var token = req.headers['authorization']
    jwt.verify(token, secretkey, function(err, decoded) {
        if(decoded == undefined){
            res.status(403).end("FORBIDDEN")
        }else{
            res.status(200).end("OwkwkwkwkwkK")
        }
    });
})

app.get('/myprofile/:userid', (req, res) => {
    let userid = req.params.userid
    res.send('My Profile' + userid)
})

//======== POST =========

app.post('/user', (req, res) => {
    let body = req.body
    res.json(body)
})

//============= JWT TOKEN ================

app.post('/login', (req, res) => {
    let body = req.body
    if(body.username == 'Roma' && body.password == '12345'){
        let token = jwt.sign({'Hello':'World'}, secretkey)
        res.send(token)
    }else{
        res.status(403).end('Forbidden')
    }
})

//======= PUT =========

app.put('/user', (req, res) => {
    let body = req.body
    res.json(body)
})

//======== DELETE ==========

app.delete('/user', (req, res) => {
    let body = req.body
    res.json(body)
})

app.listen(3000)