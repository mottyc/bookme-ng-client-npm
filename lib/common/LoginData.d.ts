import { MemberStatusCode } from '../enums/MemberStatusCode';
import { UserTypeCode } from '../enums/UserTypeCode';
import { UserStatusCode } from '../enums/UserStatusCode';
import { AccountRoleCode } from '../enums/AccountRoleCode';
export declare class LoginData {
    accessToken: string;
    userId: string;
    accountId: string;
    accountRole: AccountRoleCode;
    memberStatus: MemberStatusCode;
    userName: string;
    userEmail: string;
    userType: UserTypeCode;
    userStatus: UserStatusCode;
    changePassword: boolean;
    constructor(accessToken?: string, userId?: string, accountId?: string, accountRole?: AccountRoleCode, memberStatus?: MemberStatusCode, userName?: string, userEmail?: string, userType?: UserTypeCode, userStatus?: UserStatusCode, changePassword?: boolean);
}
export interface ILoginData {
    accessToken?: string;
    userId?: string;
    accountId?: string;
    accountRole?: AccountRoleCode;
    memberStatus?: MemberStatusCode;
    userName?: string;
    userEmail?: string;
    userType?: UserTypeCode;
    userStatus?: UserStatusCode;
    changePassword?: boolean;
}
