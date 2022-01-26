import { UserTypeCode } from '../enums/UserTypeCode';
import { UserStatusCode } from '../enums/UserStatusCode';
import { AccountRoleCode } from '../enums/AccountRoleCode';
import { MemberStatusCode } from '../enums/MemberStatusCode';
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
    messages: string[];
    constructor(accessToken?: string, userId?: string, accountId?: string, accountRole?: AccountRoleCode, memberStatus?: MemberStatusCode, userName?: string, userEmail?: string, userType?: UserTypeCode, userStatus?: UserStatusCode, changePassword?: boolean, messages?: string[]);
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
    messages?: string[];
}
