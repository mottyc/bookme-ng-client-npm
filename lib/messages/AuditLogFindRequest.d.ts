export declare class AuditLogFindRequest {
    from: number;
    to: number;
    item: string;
    account: string;
    sort: string;
    page: number;
    pageSize: number;
    constructor(from?: number, to?: number, item?: string, account?: string, sort?: string, page?: number, pageSize?: number);
}
export interface IAuditLogFindRequest {
    from?: number;
    to?: number;
    item?: string;
    account?: string;
    sort?: string;
    page?: number;
    pageSize?: number;
}
