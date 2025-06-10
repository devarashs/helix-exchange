export interface UserInfo {
  _id: string;
  token: string;
}

export interface UserState {
  userInfo: UserInfo | null;
}

export type CustomError = {
  message: string;
  response?: {
    data:
      | {
          message: string;
        }
      | undefined;
  };
};
