import { AccountRoleCode } from '../enums/AccountRoleCode';
export declare class AccountRole {
    accountId: string;
    role: AccountRoleCode;
    constructor(accountId?: string, role?: AccountRoleCode);
}
export interface IAccountRole {
    accountId?: string;
    role?: AccountRoleCode;
}
