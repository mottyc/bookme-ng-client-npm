import { BaseEntity } from '../entities/BaseEntity';
import { IBaseEntity } from '../entities/BaseEntity';
export declare class Actual extends BaseEntity {
    accountId: string;
    bookingId: string;
    userId: string;
    userName: string;
    resourceId: string;
    resourceName: string;
    duration: number;
    distance: number;
    isMissing: boolean;
    reason: string;
    id: string;
    createdOn: number;
    updatedOn: number;
}
export interface IActual extends IBaseEntity {
    accountId?: string;
    bookingId?: string;
    userId?: string;
    userName?: string;
    resourceId?: string;
    resourceName?: string;
    duration?: number;
    distance?: number;
    isMissing?: boolean;
    reason?: string;
    id?: string;
    createdOn?: number;
    updatedOn?: number;
}
