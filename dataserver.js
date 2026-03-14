import Express from 'express'
import connectDB from './connect-DB/Dataconnect.js';
import dataschema from './modul/Schemafl.js';

const app = Express();
connectDB();

const datafetch =  async () =>{

     await dataschema.create({
        name: "sandeep",
        email: "sandeep@gmail.com",
        phone:'9572720939',
        
     })
}
datafetch()

app.listen(2000, ()=>{
    console.log("server run 2000 port number")
})