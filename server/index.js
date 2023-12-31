// Mern = Mongo + Express + React + Node 

// Development = Node.js server + React server 


const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')
const controllers = require('./Controllers')


app.use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://bob:h1xUOPJrzSAu8WZU@deliveryapp.mr7bset.mongodb.net/?retryWrites=true&w=majority")


app.post('/api/register', async (req,res) =>{

    console.log(req.body)
    try{
            await User.create(
                {name: req.body.name,
                email:req.body.email,
                password: req.body.password,
                quote: req.body.quote
            }
            )

            res.json({ status: 'ok' })
    }catch (err){
            console.log(err)
            res.json({ status: 'error', error:'Duplicate email'})
    }
})

app.post('/api/login', async (req,res) =>{
   
           const user = await User.findOne({
                email:req.body.email,
                password: req.body.password,

           })
           if (user){
             const token = jwt.sign(
                {
                    name: user.name,
                    email: user.email,
                },
                'secret123'
             )
            return res.json({ status: 'ok', user: token})
           }else{
            return res.json({ status: 'error', user: false})
           }
    
})


/* GET */
app.get("/products", controllers.getProducts);
app.get("/products-cart", controllers.getProductsCart);

/* POST */
app.post("/products-cart", controllers.addProductCart);

/* PUT */
app.put("/products-cart/:productId", controllers.putProduct);

/* DELETE */
app.delete("/products-cart/:productId", controllers.deleteProduct);

app.listen(1337, ()=> {
    console.log('The server just started')
} )