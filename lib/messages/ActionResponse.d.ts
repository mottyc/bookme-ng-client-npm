export declare class ActionResponse {
    code: number;
    error: string;
    key: string;
    data: string;
    constructor(code?: number, error?: string, key?: string, data?: string);
}
export interface IActionResponse {
    code?: number;
    error?: string;
    key?: string;
    data?: string;
}
