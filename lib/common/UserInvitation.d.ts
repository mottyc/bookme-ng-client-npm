import { AccountRoleCode } from '../enums/AccountRoleCode';
export interface UserInvitation {
    email?: string;
    role?: AccountRoleCode;
}
