import { Placement } from '../entities/Placement';
import { Booking } from '../entities/Booking';
import { BaseEntity } from '../entities/BaseEntity';
import { IBaseEntity } from '../entities/BaseEntity';
export declare class Planing extends BaseEntity {
    activityId: string;
    placements: Placement[];
    bookings: Booking[];
    id: string;
    createdOn: number;
    updatedOn: number;
}
export interface IPlaning extends IBaseEntity {
    activityId?: string;
    placements?: Placement[];
    bookings?: Booking[];
    id?: string;
    createdOn?: number;
    updatedOn?: number;
}
