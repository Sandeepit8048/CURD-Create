import Express from 'express'
import connectDB from './connect-DB/Dataconnect.js'
import employees from './modul/student.js';



const app = Express();
connectDB()

const updatedata = async ()=>{
 await employees.create({
     
     name : 'Amit',
     id : '1',
      roll : '63',
      class: '12'
 },
 {
    name:'sandeep',
    id:'2',
    roll:'59',
    class:'12'
 }
    
)}

updatedata()


const dataread = async ()=>{
    const employee = await employees.find();
    console.log(employee)
}

dataread();


app.listen(1000, ()=>{
    console.log("server run the port number 1000")
})

