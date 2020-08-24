import { ResourceTypeMask } from '../enums/ResourceTypeMask';
import { BookingStatusCode } from '../enums/BookingStatusCode';
import { BaseEntity } from '../entities/BaseEntity';
import { IBaseEntity } from '../entities/BaseEntity';
export declare class Booking extends BaseEntity {
    activityId: string;
    placementOn: number;
    duration: number;
    resourceId: string;
    requestedBy: string;
    requestedFor: string[];
    resourceType: ResourceTypeMask;
    approvedOn: number;
    status: BookingStatusCode;
    id: string;
    createdOn: number;
    updatedOn: number;
}
export interface IBooking extends IBaseEntity {
    activityId?: string;
    placementOn?: number;
    duration?: number;
    resourceId?: string;
    requestedBy?: string;
    requestedFor?: string[];
    resourceType?: ResourceTypeMask;
    approvedOn?: number;
    status?: BookingStatusCode;
    id?: string;
    createdOn?: number;
    updatedOn?: number;
}
