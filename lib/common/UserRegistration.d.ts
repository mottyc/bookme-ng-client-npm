import { AccountRole } from '../common/AccountRole';
import { UserTypeCode } from '../enums/UserTypeCode';
export interface UserRegistration {
    name?: string;
    email?: string;
    mobile?: string;
    defaultAccount?: string;
    accountRoles?: AccountRole[];
    type?: UserTypeCode;
    tempPassword?: string;
    changePassword?: boolean;
    verifyByEmail?: boolean;
    description?: string;
}
