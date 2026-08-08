export type Product = {
    _id:string
    title: string | null;
    description: string | null;
    price: number | null;
    image: string | null;
    userId:string | null;
    category : string | null;
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
