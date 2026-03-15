import Express from 'express'
import connectDB from './connect-DB/Dataconnect.js'
import  empoylee from './modul/student.js'


const app = Express();

connectDB();

const getdata = async ()=>{
  await  empoylee.find()

}

const deletedata = async (id, data )=>{
    await empoylee.deleteOne(
        {_id:id},
        {$set: data}
    )  
}

const main = async ()=>{
     getdata();

     const dataid='69b67e8a30c8acfab5829847'

     deletedata(dataid);

     
}

main();

app.listen(4000, ()=>{
    console.log("sever run port number 4000");
})



