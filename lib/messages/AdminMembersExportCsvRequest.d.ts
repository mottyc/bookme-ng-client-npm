import { MemberStatusCode } from '../enums/MemberStatusCode';
import { AccountRoleCode } from '../enums/AccountRoleCode';
export declare class AdminMembersExportCsvRequest {
    search: string;
    role: AccountRoleCode[];
    status: MemberStatusCode[];
    sort: string;
    constructor(search?: string, role?: AccountRoleCode[], status?: MemberStatusCode[], sort?: string);
}
export interface IAdminMembersExportCsvRequest {
    search?: string;
    role?: AccountRoleCode[];
    status?: MemberStatusCode[];
    sort?: string;
}
