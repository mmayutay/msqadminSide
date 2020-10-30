export interface UserDetails {
    _id: String,
    name: String,
    email: String,
    password: String,
    exp: number
}
export interface TokenResponse {
    token: string
}

export interface TokenPayload {
    email: String,
    name: String,
    password: String
}