export type User = {
    name : string,
    email : string,
    password : string
    confirmPassword? : string
}
export type authInitialState = {
    user : User | null,
    isAuthenticated : boolean,
    loading : boolean
}


export type ErrorResponse = {
    success : boolean,
    message : string,
    user?:User
}

export type loginUserType = {
    email:string,
    password : string
}