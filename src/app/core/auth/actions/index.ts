import { LoginSubmit, LoginSuccess, LoginFail } from './auth-login.action';

import { LogoutSubmit, LogoutSuccess, LogoutFail } from './auth-logout.action';
import {
  RegisterSubmit,
  RegisterSuccess,
  RegisterFail
} from './auth-register.action';

export * from './auth-login.action';
export * from './auth-logout.action';
export * from './auth-register.action';

// action type
export type LoginAction =
  | LoginSubmit
  | LoginSuccess
  | LoginFail
  | LogoutSubmit
  | LogoutSuccess
  | LogoutFail
  | RegisterSubmit
  | RegisterSuccess
  | RegisterFail;
