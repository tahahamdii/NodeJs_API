 const express = require ('express')
 const app = express()

 //routes 
 app.get('/',(req,res,next) => {
    res.send('Hello taha')
 })

 app.listen(3000, () => {
    console.log('node api running')
 })