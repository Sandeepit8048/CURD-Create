import Express from 'express'
import connectDB from './connect-DB/Dataconnect.js'
import employees from './modul/student.js'

const app = Express();

connectDB();
app.use(Express.json());

app.post('/student', async (req, res)=>{
   try{
     const{ name, id, roll} = req.body;
     const newEmployee = new employees({
        name,
       id,
       roll,
      
     });
     const employee = await newEmployee.save();
       res.json(employee)

       console.log(employee)
      }
   catch(error){
     console.log("Error saving data : " , error);
     res.status(500).send("server error")
   }
});

app.listen(2000, ()=>{
    console.log("Server is run the 2000 ")
})