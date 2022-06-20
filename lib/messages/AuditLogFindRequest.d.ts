import { EntityTypeCode } from '../enums/EntityTypeCode';
export declare class AuditLogFindRequest {
    from: number;
    to: number;
    accountId: string;
    userId: string;
    itemId: string;
    itemType: EntityTypeCode;
    action: string;
    sort: string;
    page: number;
    pageSize: number;
    constructor(from?: number, to?: number, accountId?: string, userId?: string, itemId?: string, itemType?: EntityTypeCode, action?: string, sort?: string, page?: number, pageSize?: number);
}
export interface IAuditLogFindRequest {
    from?: number;
    to?: number;
    accountId?: string;
    userId?: string;
    itemId?: string;
    itemType?: EntityTypeCode;
    action?: string;
    sort?: string;
    page?: number;
    pageSize?: number;
}
