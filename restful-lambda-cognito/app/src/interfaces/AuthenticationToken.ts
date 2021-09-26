/* eslint-disable camelcase */
export interface AuthenticationToken {
    access_token: string,
    refresh_token: string,
    expires_in: number,
    token_type: string,
}
