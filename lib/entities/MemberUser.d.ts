import { User } from '../entities/User';
import { AccountRoleCode } from '../enums/AccountRoleCode';
import { MemberStatusCode } from '../enums/MemberStatusCode';
import { Member } from '../entities/Member';
import { IMember } from '../entities/Member';
export declare class MemberUser extends Member {
    user: User;
    userId: string;
    accountId: string;
    accountRole: AccountRoleCode;
    status: MemberStatusCode;
    memberSince: number;
    expiration: number;
    level: number;
    isCox: boolean;
    isMentor: boolean;
    trainingTime: number;
    restrictions: string;
    id: string;
    createdOn: number;
    updatedOn: number;
}
export interface IMemberUser extends IMember {
    user?: User;
    userId?: string;
    accountId?: string;
    accountRole?: AccountRoleCode;
    status?: MemberStatusCode;
    memberSince?: number;
    expiration?: number;
    level?: number;
    isCox?: boolean;
    isMentor?: boolean;
    trainingTime?: number;
    restrictions?: string;
    id?: string;
    createdOn?: number;
    updatedOn?: number;
}
