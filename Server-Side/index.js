// const express=require('express')
// const mongoose=require('mongoose')
// const cors=require('cors')
// const ProjectModel=require('./models/Users')
// const app=express()
// app.use(cors())
// app.use(express.json())


// mongoose.connect("mongodb://localhost:27017/SHL_PROJECTS")
// app.get('/getusers', async(req,res)=>{
// //     ProjectModel.find()
// //     .then(users=>res.json(users))
// //     .catch(err=> res.json(err))
// // })
// // app.listen(3000,()=>{
// //     console.log("serveris runing")
// try{console.log("database")
//     const users=await ProjectModel.find({});
//     res.send({status:"ok", data:users});
// }
// catch(error){
//     console.log(error)
// }
// })
// app.listen(3000,()=>{
//         console.log("server is runing")
// })

const express=require('express')
const mongoose=require('mongoose')
const MongoClient=require('mongodb').MongoClient

const cors=require('cors')
const ProjectModel=require('./models/Users')
const app=express()
app.use(cors())
app.use(express.json())
var database


mongoose.connect("mongodb://localhost:27017/SHL_PROJECTS")
app.get('/getusers',(req,res)=>{

res.send('welocome')
})
app.get('/get',(req,res)=>{
    database.collection('Projects_Sample').find({}).toArray((err,result)=>{
        if(err) throw err
        res.send(result)
    })
})
app.listen(3000,()=>{
    console.log("runing")
    MongoClient.connect('mongodb://localhost:27017/SHL_PROJECTS', {useNewUrlParser: true},(error,result)=>{
        
        if(err) throw error
        database=result.db('SHL_PROJECTS')
        console.log("success")
    })
})