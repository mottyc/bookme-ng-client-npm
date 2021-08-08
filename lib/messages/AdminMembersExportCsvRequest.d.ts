import { AccountRoleCode } from '../enums/AccountRoleCode';
import { MemberStatusCode } from '../enums/MemberStatusCode';
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
