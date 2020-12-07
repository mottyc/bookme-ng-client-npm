export declare class AdminActivityFindRequest {
    from: number;
    to: number;
    year: number;
    month: number;
    day: number;
    total: boolean;
    constructor(from?: number, to?: number, year?: number, month?: number, day?: number, total?: boolean);
}
export interface IAdminActivityFindRequest {
    from?: number;
    to?: number;
    year?: number;
    month?: number;
    day?: number;
    total?: boolean;
}
