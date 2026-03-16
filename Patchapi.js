import Express from 'express'
import connectDB from './connect-DB/Dataconnect.js'
import employees from './modul/student.js'

const app = Express()

connectDB();

app.use(Express.json());

app.put('/Studentup/:id', async(req, res)=>{

      try{
          const StudentId = req.params.id;
          const {name, roll} = req.body;
          const updateEmpolyee = await employees.findByIdAndUpdate(
        
            StudentId,
            {name, roll},
            {new:true},
            
            
        )
        console.log(updateEmpolyee)
       
        if(!updateEmpolyee){
          return res.status(404).json({msg:"Employee is not found"})
        }
        res.json(updateEmpolyee)
      }catch(error){
        console.log("Error update employee data: ", error);
        res.status(500).send("server Error")
      }
})


app.listen(9000, ()=>{
    console.log("server run port number 9000 successfully")
})