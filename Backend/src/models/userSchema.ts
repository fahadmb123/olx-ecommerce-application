import mongoose, { InferSchemaType } from "mongoose"



const userSchema = new mongoose.Schema({
    refferedBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
    },
    name : {
        type : String,
        required : true
    },
    email : {
        required : true,
        type : String,
        unique : true,
        index : true
    },
    password : {
        type : String,
        required:function (){
            return !this.googleId
        }
    }

},{ timestamps: true })

export type UserType = InferSchemaType<typeof userSchema>;
export default mongoose.model("user",userSchema)