import { AccountRoleCode } from '../enums/AccountRoleCode';
import { MemberStatusCode } from '../enums/MemberStatusCode';
export declare class MembersFindRequest {
    accountId: string;
    search: string;
    role: AccountRoleCode[];
    status: MemberStatusCode[];
    sort: string;
    page: number;
    pageSize: number;
    constructor(accountId?: string, search?: string, role?: AccountRoleCode[], status?: MemberStatusCode[], sort?: string, page?: number, pageSize?: number);
}
export interface IMembersFindRequest {
    accountId?: string;
    search?: string;
    role?: AccountRoleCode[];
    status?: MemberStatusCode[];
    sort?: string;
    page?: number;
    pageSize?: number;
}
