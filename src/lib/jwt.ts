import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY;

interface Payload {
    [key: string]: any;
}

export const signToken = (payload: Payload, expiresIn: string | number = '1h'): string => {
    try {
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn });
        return token;
    } catch (error) {
        console.error('Error signing token', error);
        throw new Error('Could not sign the token');
    }
};

export const verifyToken = (token: string): Payload => {
    try {
        const decoded = jwt.verify(token, SECRET_KEY) as Payload;
        return decoded;
    } catch (error) {
        console.error('Error verifying token', error);
        throw new Error('Invalid or expired token');
    }
};
