 const express = require ('express')
 const app = express()

 //routes 
 app.get('/',(req,res,next) => {
    res.send('Hello taha')
 })
 app.get('/blog',(req,res,next) => {
    res.send('Hello blog')
 })

 app.listen(3000, () => {
    console.log('node api running')
 })