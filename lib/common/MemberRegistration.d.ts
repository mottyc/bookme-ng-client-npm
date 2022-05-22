import { AccountRoleCode } from '../enums/AccountRoleCode';
import { UserGenderCode } from '../enums/UserGenderCode';
export declare class MemberRegistration {
    name: string;
    email: string;
    mobile: string;
    gender: UserGenderCode;
    accountId: string;
    accountRole: AccountRoleCode;
    tempPassword: string;
    changePassword: boolean;
    verifyByEmail: boolean;
    constructor(name?: string, email?: string, mobile?: string, gender?: UserGenderCode, accountId?: string, accountRole?: AccountRoleCode, tempPassword?: string, changePassword?: boolean, verifyByEmail?: boolean);
}
export interface IMemberRegistration {
    name?: string;
    email?: string;
    mobile?: string;
    gender?: UserGenderCode;
    accountId?: string;
    accountRole?: AccountRoleCode;
    tempPassword?: string;
    changePassword?: boolean;
    verifyByEmail?: boolean;
}
