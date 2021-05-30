import { User } from '../entities/User';
import { BaseEntity } from '../entities/BaseEntity';
import { AccountRoleCode } from '../enums/AccountRoleCode';
import { MemberStatusCode } from '../enums/MemberStatusCode';
import { IBaseEntity } from '../entities/BaseEntity';
export declare class MemberUser extends BaseEntity {
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
    preferred: string[];
    user: User;
    id: string;
    createdOn: number;
    updatedOn: number;
}
export interface IMemberUser extends IBaseEntity {
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
    preferred?: string[];
    user?: User;
    id?: string;
    createdOn?: number;
    updatedOn?: number;
}
