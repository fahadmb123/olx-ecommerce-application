export type User = {
    name : string,
    email : string,
    password : string
    confirmPassword : string
}
export type authInitialState = {
    user : User | null,
    isAuthenticated : boolean,
    error :string | null,
    loading : boolean
}


export type ErrorResponse = {
    success : boolean,
    message : string
}

