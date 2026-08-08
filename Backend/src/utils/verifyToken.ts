import jwt from "jsonwebtoken";

const verifyToken = (token: string) => {

    const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET!
    ) as { userId: string };

    return decoded;
};

export default verifyToken;