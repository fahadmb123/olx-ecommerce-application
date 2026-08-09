import mongoose, { InferSchemaType } from "mongoose"
import { string } from "zod"



const cartSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : true
    },
    items : [
        {
            productId : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "product",
                required : true
            },
            count : {
                type : Number,
                required : true,
                min : 1
            }
        }
    ]
},{timestamps : true})

export type CartSchemaType = InferSchemaType<typeof cartSchema>
export default mongoose.model("cart",cartSchema)