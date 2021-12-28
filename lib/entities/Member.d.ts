import { AccountRoleCode } from '../enums/AccountRoleCode';
import { MemberStatusCode } from '../enums/MemberStatusCode';
import { BaseEntity } from '../entities/BaseEntity';
import { IBaseEntity } from '../entities/BaseEntity';
export declare class Member extends BaseEntity {
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
    preferred1: string[];
    preferred2: string[];
    isHidden: boolean;
    id: string;
    createdOn: number;
    updatedOn: number;
}
export interface IMember extends IBaseEntity {
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
    preferred1?: string[];
    preferred2?: string[];
    isHidden?: boolean;
    id?: string;
    createdOn?: number;
    updatedOn?: number;
}
