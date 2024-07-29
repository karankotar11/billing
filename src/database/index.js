import mongoose from "mongoose";


const connectToDB= async()=>{
	const url="mongodb://localhost:27017/userdatabasenext"
	mongoose.connect(url)
	.then(()=>console.log("database connection is successfull"))
	.catch((e)=>console.log(e));
}
export default connectToDB;