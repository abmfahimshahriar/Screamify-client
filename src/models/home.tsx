export interface ScreamModel {
  body: string;
  commentCount: number;
  createdAt: string;
  likeCount: number;
  screamId: string;
  userHandle: string;
  userImage: string;
}

export interface UserData {
  authenticated: boolean,
  credentials: Credentials,
  likes: any,
  notifications: any;
  loading: boolean;
}

export interface Credentials {
  website?: string;
  handle: string;
  email: string;
  imageUrl?: string;
  createdAt: string;
  location?: string;
  userId: string;
  bio?: string;
}
