// qkGUTOLacYnOVYPf


// mongodb+srv://rkysandeepyadav_db_user:qkGUTOLacYnOVYPf@cluster0.4jv9a46.mongodb.net/?appName=Cluster0


import  mongoose  from "mongoose";

const connectDB = async ()=>{
    try{

        await mongoose.connect('mongodb+srv://rkysandeepyadav_db_user:qkGUTOLacYnOVYPf@cluster0.4jv9a46.mongodb.net/?appName=Cluster0');

        console.log("data base is connected succesfully")
    }
    catch(error){
        console.log("data base not connected", error)
    }
}





export default connectDB;