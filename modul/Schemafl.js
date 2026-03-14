import mongoose from "mongoose"

const usershema = new mongoose.Schema({
    name:String,
    email:String,
    phone:Number
});

 const dataschema = mongoose.model('user', usershema)

export default dataschema;