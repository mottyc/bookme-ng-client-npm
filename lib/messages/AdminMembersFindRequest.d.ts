import { AccountRoleCode } from '../enums/AccountRoleCode';
import { MemberStatusCode } from '../enums/MemberStatusCode';
export declare class AdminMembersFindRequest {
    accountId: string;
    search: string;
    role: AccountRoleCode[];
    status: MemberStatusCode[];
    sort: string;
    page: number;
    pageSize: number;
    constructor(accountId?: string, search?: string, role?: AccountRoleCode[], status?: MemberStatusCode[], sort?: string, page?: number, pageSize?: number);
}
export interface IAdminMembersFindRequest {
    accountId?: string;
    search?: string;
    role?: AccountRoleCode[];
    status?: MemberStatusCode[];
    sort?: string;
    page?: number;
    pageSize?: number;
}
