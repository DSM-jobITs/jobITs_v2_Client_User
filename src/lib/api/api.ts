import { getClientAccessToken } from './client';

export const hello = () => getClientAccessToken().get("/");