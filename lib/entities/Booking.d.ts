import { BookingStatusCode } from '../enums/BookingStatusCode';
import { BaseEntity } from '../entities/BaseEntity';
import { IBaseEntity } from '../entities/BaseEntity';
export declare class Booking extends BaseEntity {
    placementOn: number;
    duration: number;
    resourceId: string;
    requestId: string;
    requestedBy: string;
    requestedFor: string;
    approvedOn: number;
    status: BookingStatusCode;
    id: string;
    createdOn: number;
    updatedOn: number;
}
export interface IBooking extends IBaseEntity {
    placementOn?: number;
    duration?: number;
    resourceId?: string;
    requestId?: string;
    requestedBy?: string;
    requestedFor?: string;
    approvedOn?: number;
    status?: BookingStatusCode;
    id?: string;
    createdOn?: number;
    updatedOn?: number;
}
