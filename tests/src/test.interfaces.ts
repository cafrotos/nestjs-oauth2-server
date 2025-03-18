import {
    Token,
    RefreshToken,
    AuthorizationCode,
} from '@node-oauth/oauth2-server';

export interface ITestExpectedResponses {
    accessToken: Token | false;
    authorizationCode: AuthorizationCode | false;
    refreshToken: RefreshToken | false;
}
