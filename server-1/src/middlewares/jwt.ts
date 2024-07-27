import * as JWT from 'jsonwebtoken';
import config from '../config';
import { JWT_EXPIRY } from '../shared/constants';
import { ERRORS } from '../shared/constants';

export default function generateToken(data: string): string {
  try {
    const token = JWT.sign({ data }, config.JWT_SECRET, JWT_EXPIRY);
    return token;
  } catch (error) {
    throw {
      statusCode: ERRORS.TOKEN_GENERATION_FAILED.statusCode,
      message: ERRORS.TOKEN_GENERATION_FAILED.message.error,
    };
  }
}

export function verifyToken(token: string) {
  try {
    const data = JWT.verify(token, config.JWT_SECRET) as string;
    return data as unknown as {
      data: string;
    };
  } catch (error) {
    throw {
      statusCode: ERRORS.INVALID_TOKEN.statusCode,
      message: ERRORS.INVALID_TOKEN.message.error,
    };
  }
}
