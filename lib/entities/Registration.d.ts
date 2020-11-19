import { BaseEntity } from '../entities/BaseEntity';
import { IBaseEntity } from '../entities/BaseEntity';
export declare class Registration extends BaseEntity {
    accountId: string;
    bookingId: string;
    userId: string;
    userName: string;
    isMissing: boolean;
    reason: string;
    id: string;
    createdOn: number;
    updatedOn: number;
}
export interface IRegistration extends IBaseEntity {
    accountId?: string;
    bookingId?: string;
    userId?: string;
    userName?: string;
    isMissing?: boolean;
    reason?: string;
    id?: string;
    createdOn?: number;
    updatedOn?: number;
}
