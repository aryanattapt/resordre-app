import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY || '';

interface Payload {
    [key: string]: any;
}

if (!SECRET_KEY) {
  throw new Error('JWT_SECRET is not defined');
}

export const signToken = (payload: object, expiresIn: number = 3600): string => {
  try {
    const token = jwt.sign(payload, SECRET_KEY, { 
        expiresIn: expiresIn,
        algorithm: "ES256"
    });
    return token;
  } catch (error) {
    console.error('Error signing token', error);
    throw new Error('Could not sign the token');
  }
};

export const verifyToken = (token: string): Payload => {
    try {
        const decoded = jwt.verify(token, SECRET_KEY, {
            algorithms: ['ES256']
        }) as Payload;
        return decoded;
    } catch (error) {
        console.error('Error verifying token', error);
        throw new Error('Invalid or expired token');
    }
};
