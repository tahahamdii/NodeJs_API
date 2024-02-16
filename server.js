 const express = require ('express')
 const app = express()
 const Product = require('./models/productModel')
const mongoose = require ('mongoose')

app.use(express.json())
 //routes 
 app.get('/',(req,res,next) => {
    res.send('Hello taha')
 })
 app.get('/blog',(req,res,next) => {
    res.send('Hello blog')
 })

 app.post('/product', async(req,res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
    } catch (error){
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
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