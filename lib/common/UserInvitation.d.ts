import { AccountRoleCode } from '../enums/AccountRoleCode';
export declare class UserInvitation {
    email: string;
    role: AccountRoleCode;
    constructor(email?: string, role?: AccountRoleCode);
}
export interface IUserInvitation {
    email?: string;
    role?: AccountRoleCode;
}
