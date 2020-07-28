export declare class TokenRequest {
    code: number;
    error: string;
    accountId: string;
    constructor(code?: number, error?: string, accountId?: string);
}
export interface ITokenRequest {
    code?: number;
    error?: string;
    accountId?: string;
}
