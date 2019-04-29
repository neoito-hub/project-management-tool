import { LoginEffects } from './auth-login.effects';
import { LogoutEffects } from './auth-logout.effects';

export * from './auth-login.effects';
export * from './auth-logout.effects';

export const AuthEffects = [LoginEffects, LogoutEffects];
