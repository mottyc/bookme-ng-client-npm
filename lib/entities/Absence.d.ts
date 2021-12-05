import { BaseEntity } from '../entities/BaseEntity';
import { IBaseEntity } from '../entities/BaseEntity';
export declare class Absence extends BaseEntity {
    userId: string;
    bookingId: string;
    placementOn: number;
    reason: string;
    justified: boolean;
    id: string;
    createdOn: number;
    updatedOn: number;
}
export interface IAbsence extends IBaseEntity {
    userId?: string;
    bookingId?: string;
    placementOn?: number;
    reason?: string;
    justified?: boolean;
    id?: string;
    createdOn?: number;
    updatedOn?: number;
}
