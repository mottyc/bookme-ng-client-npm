import { AccountRoleCode } from '../enums/AccountRoleCode';
import { MemberStatusCode } from '../enums/MemberStatusCode';
import { BaseEntity } from '../entities/BaseEntity';
import { IBaseEntity } from '../entities/BaseEntity';
export declare class Membership extends BaseEntity {
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
    preferred4: string[];
    preferred8: string[];
    isHidden: boolean;
    score: number;
    accountName: string;
    id: string;
    createdOn: number;
    updatedOn: number;
}
export interface IMembership extends IBaseEntity {
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
    preferred4?: string[];
    preferred8?: string[];
    isHidden?: boolean;
    score?: number;
    accountName?: string;
    id?: string;
    createdOn?: number;
    updatedOn?: number;
}
