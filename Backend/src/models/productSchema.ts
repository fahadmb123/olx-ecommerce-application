import mongoose, { InferSchemaType } from "mongoose"



const productSchema = new mongoose.Schema({
    refferedBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "product"
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
    },
    title : {
        type : String,
        required : true
    },
    description : {
        required : true,
        type : String
    },
    category : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    image : {
        type : String,
        required : true
    }

},{ timestamps: true })

export type ProductType = InferSchemaType<typeof productSchema>
export default mongoose.model("product",productSchema)