import mongoose from "mongoose";


const employee = new mongoose.Schema({
    name:String,
    id:Number,
    roll:Number,
    class:Number
})

const employees = mongoose.model('employee', employee)

export default employees