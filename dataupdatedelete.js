import Express from 'express'
import connectDB from "./connect-DB/Dataconnect.js";
import employees from "./modul/student.js";
import { get } from 'mongoose';

const app = Express();
connectDB();

const getEmployee = async ()=>{
   const sendemployee= await employees.find();
   console.log("data send before update", sendemployee)
}

const dataupdate = async (id , updatedata)=>{
    await employees.updateOne(
      {_id:id}
    ,{$set: updatedata} )
}



const main = async ()=>{
    await getEmployee();

    const getempid = '69b67e8a30c8acfab5829847'
    const getupdatedata = {
        id:'5',
        roll:'59'
    }
     
    await dataupdate(getempid, getupdatedata);
}

main();

app.listen(3000, ()=>{
    console.log("Server is run the code in port number in 3000")
})

