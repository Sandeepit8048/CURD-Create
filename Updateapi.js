import express from 'express'
import connectDB from './connect-DB/Dataconnect.js'
import employees from './modul/student.js'

const app = express();

connectDB();

app.get( '/studentapi' , async (req,res)=>{
  try{
    const studentapi = await employees.find();
    res.json(studentapi)
  }
  catch(error){
      console.error("server error: ", error)
      res.status(500).send("Server Error");
  }
})

app.listen(6000, ()=>{
    console.log("server run in port number 6000")
})