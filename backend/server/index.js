const express = require('express');
const mongoose = require('mongoose')


const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;
require('dotenv').config();

const authRoutes = require('./routes/auth');
const verifyToken = require('./routes/verifyToken');


app.get('/', (req ,res)=>{
    res.send('welcome to the auth system')
})

app.get('/api/user/profile',verifyToken,(req,res)=>{
    console.log(req.user)
    res.send({success:true, data:req.user})
})

app.use('/api/users', authRoutes);


const DB ='mongodb+srv://dbJirayu:dbJirayu30052@cluster0.keui7.mongodb.net/TalkWithLove?retryWrites=true&w=majority';

mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log(`connection successful`)
}).catch((err)=>console.log(err));

app.listen(3000,()=>console.log(`Server is running on port ${port}`))