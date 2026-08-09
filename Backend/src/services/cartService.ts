import { Request } from "express"
import verifyToken from "../utils/verifyToken"
import cartModel from "../models/cartSchema";
import productModel from "../models/productSchema";



export const addToCartService = async (req: Request) => {

    const { id } = req.params;

    const token = req.cookies.token;
    const decoded = verifyToken(token);

    const product = await productModel.findById(id);

    if (!product) {
        throw new Error("Product doesn't exist");
    }

    const cart = await cartModel.findOne({ userId: decoded.userId})

    
    
    const cartItem = cart?.items.find(
        item => item.productId.toString() === id
    )

  
    if (!cartItem) {
        await cartModel.updateOne(
            { userId: decoded.userId },
            {
                $push: {
                    items: {
                        productId: id
                    }
                }
            }
        );
        return;
    }

};



export const getCartProductsService = async (req:Request) => {
    const token = req.cookies.token
    const decoded = verifyToken(token)
    const cart = await cartModel.findOne({userId: decoded.userId}).populate({path: "items.productId"})
    return cart?.items
}


export const remCartService = async (req: Request) => {
    const { id } = req.params;

    const token = req.cookies.token;
    const decoded = verifyToken(token);

    const cart = await cartModel.findOne({
        userId: decoded.userId
    })

    if (!cart) {
        throw new Error("Cart not found");
    }

    const cartItem = cart.items.find(
        item => item.productId.toString() === id
    );

    if (!cartItem) {
        throw new Error("Product not found in cart");
    }

    await cartModel.updateOne(
        {
            userId: decoded.userId
        },
        {
            $pull: {
                items: {
                    productId: id
                }
            }
        }
    )

    return 
}


export const getCheckoutCartProductsService = async (req:Request) => {
    const token = req.cookies.token
    const decoded = verifyToken(token)
    const cart = await cartModel.findOne({userId: decoded.userId}).populate({path: "items.productId"})
    if (cart?.items.length === 0) {
        throw new Error("No products found")
    }

    const isSolled = cart?.items.some(
        (data) => (data.productId as any)?.solled === true
    )
    if (isSolled) {
        throw new Error("Some products not available")
    }
    return cart?.items
}



export const placeCartProductsService = async (req:Request) => {
    const token = req.cookies.token
    const decoded = verifyToken(token)
    const cart = await cartModel.findOne({userId: decoded.userId}).populate({path: "items.productId"})

    const isSolled = cart?.items.some(
        (data) => (data.productId as any)?.solled === true
    )
    if (cart?.items.length === 0) {
        throw new Error("No products found")
    }
    
    if (isSolled) {
        throw new Error("Some products not available")
    }
    await cartModel.updateOne(
        {
            userId: decoded.userId
        },
        {
            $set: {
                items: []
            }
        }
    )
    const productIds = cart?.items.map((item) => item.productId._id);
    
    await productModel.updateMany(
        { _id: { $in: productIds }},
        {
            $set: { solled: true }
        }
    )

    return 
}
