import { TokenPayLoad } from '../src/auth/auth.interface';

declare global {
  namespace Express {
    export interface Request {
      user: TokenPayLoad;
      fileMetaData: { width?: number; height?: number; metadata?: {} };
    }
  }
}
