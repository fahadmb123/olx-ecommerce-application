export type Product = {
    title: string | null;
    description: string | null;
    price: number | null;
    image: string | null;
    userId:string | null;
    category : string | null;
}

export type ProductSliceInitialType = {
    products : Product[];
    loading : boolean
}