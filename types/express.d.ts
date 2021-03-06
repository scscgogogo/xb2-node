import { TokenPayLoad } from '../src/auth/auth.interface';
import {
  GetPostsOptionsFilter,
  GetPostsOptionsPagination,
} from '../src/post/post.service';

declare global {
  namespace Express {
    export interface Request {
      user: TokenPayLoad;
      fileMetaData: { width?: number; height?: number; metadata?: {} };
      sort: string;
      filter: GetPostsOptionsFilter;
      pagination: GetPostsOptionsPagination;
    }
  }
}
