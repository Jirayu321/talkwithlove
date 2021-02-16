const express = require('express');
const mongoose = require('mongoose')


const app = express();

app.use(express.json());

const authRoutes = require('./routes/auth');
const verifyToken = require('./routes/verifyToken');

app.get('/', (req ,res)=>{
    res.send('welcome to the auth system')
})

app.get('/api/users/profile',verifyToken, (req ,res)=>{
    res.send({success : true, data: req,user})
})

app.use('/api/users', authRoutes);

mongoose.connect('mongodb+srv://ooe_auth:qOVrm30Q5fjwZZ6S@cluster0.h3s4x.mongodb.net/TALKWITHLOVE?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        app.listen(3000, ()=> console.log('server is running'))
    })
    .catch(err => console.log(err))
