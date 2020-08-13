import { AccountRoleCode } from '../enums/AccountRoleCode';
import { MemberStatusCode } from '../enums/MemberStatusCode';
export declare class MembersFindRequest {
    search: string;
    role: AccountRoleCode[];
    status: MemberStatusCode[];
    sort: string;
    page: number;
    pageSize: number;
    constructor(search?: string, role?: AccountRoleCode[], status?: MemberStatusCode[], sort?: string, page?: number, pageSize?: number);
}
export interface IMembersFindRequest {
    search?: string;
    role?: AccountRoleCode[];
    status?: MemberStatusCode[];
    sort?: string;
    page?: number;
    pageSize?: number;
}
