export type User = {
    name : string,
    email : string,
    password : string
    confirmPassword? : string
}
export type authInitialState = {
    user : User | null,
    isAuthenticated : boolean,
    loading : boolean,
    token:string | null
}


export type ErrorResponse = {
    success : boolean,
    message : string,
    data? :{
        user : User,
        token : string
    }
}

export type loginUserType = {
    email:string,
    password : string
}