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

    if (product.quantity <= 0) {
        throw new Error("Out of Stock");
    }

    const cart = await cartModel.findOne({ userId: decoded.userId});

    
    
    const cartItem = cart?.items.find(
        item => item.productId.toString() === id
    )

  
    if (!cartItem) {
        await cartModel.updateOne(
            { userId: decoded.userId },
            {
                $push: {
                    items: {
                        productId: id,
                        count: 1
                    }
                }
            }
        );
        return;
    }

    
    if (cartItem.count >= 6) {
        throw new Error("Max limit 6 reached");
    }

    
    if (cartItem.count >= product.quantity) {
        throw new Error(`${product.quantity} Quantity Left`);
    }

    
    await cartModel.updateOne(
        {
            userId: decoded.userId,
            "items.productId": id as string
        },
        {
            $inc: {
                "items.$.count": 1
            }
        }
    );
};



export const getCartProductsService = async (req:Request) => {
    const token = req.cookies.token
    const decoded = verifyToken(token)
    const cart = await cartModel.findOne({userId: decoded.userId}).populate({path: "items.productId"})
    return cart?.items
}





export const incCartService = async (req: Request) => {
    const { id } = req.params;

    const token = req.cookies.token;
    const decoded = verifyToken(token);

    const product = await productModel.findById(id);

    if (!product) {
        throw new Error("Product doesn't exist");
    }

    if (product.quantity <= 0) {
        throw new Error("Out Of Quantity");
    }

    const cart = await cartModel.findOne({
        userId: decoded.userId,
        "items.productId": id as string
    })

    if (!cart) {
        throw new Error("Product not found in cart");
    }

    const cartItem = cart.items.find(
        item => item.productId.toString() === id
    );

    if (!cartItem) {
        throw new Error("Product not found in cart");
    }

    if (cartItem.count >= 6) {
        throw new Error("Max limit 6 reached");
    }

    if (cartItem.count >= product.quantity) {
        throw new Error(`${product.quantity} Quantity Left`);
    }

    await cartModel.updateOne(
        {
            userId: decoded.userId,
            "items.productId": id as string
        },
        {
            $inc: {
                "items.$.count": 1
            }
        }
    );

    return {
        quantity: product.quantity,
        count: cartItem.count + 1
    };
}




export const decCartService = async (req: Request) => {
    const { id } = req.params;

    const token = req.cookies.token;
    const decoded = verifyToken(token);

    const product = await productModel.findById(id);

    if (!product) {
        throw new Error("Product doesn't exist");
    }

    const cart = await cartModel.findOne({
        userId: decoded.userId,
        "items.productId": id as string
    });

    if (!cart) {
        throw new Error("Product not found in cart");
    }

    const cartItem = cart.items.find(
        item => item.productId.toString() === id
    );

    if (!cartItem) {
        throw new Error("Product not found in cart");
    }

    if (cartItem.count <= 1) {
        throw new Error("Min limit is 1");
    }

    await cartModel.updateOne(
        {
            userId: decoded.userId,
            "items.productId": id as string
        },
        {
            $inc: {
                "items.$.count": -1
            }
        }
    );

    return {
        quantity: product.quantity,
        count: cartItem.count - 1
    }
}