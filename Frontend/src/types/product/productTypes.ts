import type { Dispatch } from "react";



export type Product = {
    _id:string
    title: string;
    description: string;
    price: number;
    image: string;
    userId:string ;
    category : string ;
    solled : boolean;
    updatedAt : Date;
    createdAt : Date;
}

export type ProductSliceInitialType = {
    products : Product[];
    loading : boolean
}


export type sellUseReducerInitialState = {
    products : Product[];
    loading : boolean;
    page:number;
    hasMore:boolean;
}


export type cardType = {
    sell?:boolean,
    product:Product,
    setLoading:React.Dispatch<React.SetStateAction<boolean>>,
    dispatch?: Dispatch<SellAction>,
    addCart? : (id:string)=>void
}

export type SellAction = 
    | { type: "products"; payload: Product[] }
    | { type: "loading"; payload: boolean }
    | { type: "page"; payload: number }
    | { type: "hasMore"; payload: boolean }
    | { type: "deleteProduct"; payload: string }