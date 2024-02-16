 const express = require ('express')
 const app = express()
const mongoose = require ('mongoose')
 //routes 
 app.get('/',(req,res,next) => {
    res.send('Hello taha')
 })
 app.get('/blog',(req,res,next) => {
    res.send('Hello blog')
 })


 mongoose.set("strictQuery", false)
 mongoose.
 connect('mongodb+srv://admin:Admin12345@cluster0.c8p6jiq.mongodb.net/Node-API?retryWrites=true&w=majority')
 .then(() => {
    app.listen(3000, () => {
        console.log('node api running')
     })
    console.log('connected to db!!')
 }).catch((error) => {
    console.log(error)
 })