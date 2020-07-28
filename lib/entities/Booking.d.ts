import { BaseEntity } from '../entities/BaseEntity';
import { IBaseEntity } from '../entities/BaseEntity';
export declare class Booking extends BaseEntity {
    placementOn: number;
    duration: number;
    requestedBy: string;
    requestedFor: string[];
    resourceId: string;
    id: string;
    createdOn: number;
    updatedOn: number;
}
export interface IBooking extends IBaseEntity {
    placementOn?: number;
    duration?: number;
    requestedBy?: string;
    requestedFor?: string[];
    resourceId?: string;
    id?: string;
    createdOn?: number;
    updatedOn?: number;
}
