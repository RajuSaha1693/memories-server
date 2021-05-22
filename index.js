import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'

const app=express()
dotenv.config();
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())
app.use('/posts',postRoutes)
app.use('/user',userRoutes)

app.get('/',(req,res)=>{
    res.send('Hello Memories Api');
})
const CONNECTION_URL='mongodb://rootuser:rootuser@rajusaha1693-mongo-production/admin'
const PORT=process.env.PORT || 5000

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>console.log(`Server running on port ${PORT}`)))
    .catch((error)=>console.log(error.message))

mongoose.set('useFindAndModify',false);
