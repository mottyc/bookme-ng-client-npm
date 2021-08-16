import { AccountRoleCode } from '../enums/AccountRoleCode';
import { MemberStatusCode } from '../enums/MemberStatusCode';
export declare class AdminMembersExportCsvRequest {
    format: string;
    search: string;
    role: AccountRoleCode[];
    status: MemberStatusCode[];
    sort: string;
    constructor(format?: string, search?: string, role?: AccountRoleCode[], status?: MemberStatusCode[], sort?: string);
}
export interface IAdminMembersExportCsvRequest {
    format?: string;
    search?: string;
    role?: AccountRoleCode[];
    status?: MemberStatusCode[];
    sort?: string;
}
