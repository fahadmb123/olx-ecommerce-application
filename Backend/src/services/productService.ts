import { Request } from "express";

export const addProductService = async (req:Request) => {
    const { title, description, price, category } = req.body
    const image = req.file
    if (!image) {
        throw new Error ("Image requierd")
    }
}