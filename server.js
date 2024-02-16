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


 app.get('/products',async(req,res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
 })

 app.get('/products/:id', async(req,res) => {
    try{
        const {id} = req.params;
        const products = await Product.findById(id);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
    
 })

 app.put('/products/:id', async(req,res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({message: `cannot find id ${id}`})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
    
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