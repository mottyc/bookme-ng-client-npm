import { UserTypeCode } from '../enums/UserTypeCode';
import { AccountRoleCode } from '../enums/AccountRoleCode';
export declare class UserRegistration {
    name: string;
    email: string;
    mobile: string;
    accountId: string;
    accountRole: AccountRoleCode;
    type: UserTypeCode;
    tempPassword: string;
    changePassword: boolean;
    verifyByEmail: boolean;
    description: string;
    constructor(name?: string, email?: string, mobile?: string, accountId?: string, accountRole?: AccountRoleCode, type?: UserTypeCode, tempPassword?: string, changePassword?: boolean, verifyByEmail?: boolean, description?: string);
}
export interface IUserRegistration {
    name?: string;
    email?: string;
    mobile?: string;
    accountId?: string;
    accountRole?: AccountRoleCode;
    type?: UserTypeCode;
    tempPassword?: string;
    changePassword?: boolean;
    verifyByEmail?: boolean;
    description?: string;
}
