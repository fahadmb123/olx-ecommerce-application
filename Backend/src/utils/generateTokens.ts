import jwt from "jsonwebtoken";

export const generateToken = (userId: string,email: string): string => {
    return jwt.sign(
        {userId,email},
        process.env.JWT_SECRET as string,
        { expiresIn: process.env.JWT_EXPIRES_IN as any}
    )
};