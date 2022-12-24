const express=require('express')
const app=express()
const cors=require("cors")
require("dotenv").config()
const mongoose=require("mongoose")
const TicketRouter=require("./Router/Ticket.Router")
const UserRouter=require("./Router/User.Route")
const BookmarkRouter=require("./Router/Bookmark.Router")
const PORT=process.env.PORT||8080
const MONGO_URL=process.env.MONGO_URL
app.use(express.urlencoded({extended : true}))
app.use(cors());
app.use(express.json())
mongoose.set("strictQuery", false);


app.get('/',(req,res)=>{res.send('hello app is working')})
app.use("/ticket",TicketRouter)
app.use("/user",UserRouter)
app.use("/bookmark",BookmarkRouter)
 
 


mongoose.connect(MONGO_URL,()=>{
app.listen(PORT,()=>{console.log('server is runing on port 8080')})
})

  



