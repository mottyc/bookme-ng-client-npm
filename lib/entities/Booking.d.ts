import { ResourceTypeMask } from '../enums/ResourceTypeMask';
import { BookingStatusCode } from '../enums/BookingStatusCode';
import { BaseEntity } from '../entities/BaseEntity';
import { IBaseEntity } from '../entities/BaseEntity';
export declare class Booking extends BaseEntity {
    activityId: string;
    activityName: string;
    placementOn: number;
    placementTo: number;
    duration: number;
    distance: number;
    resourceId: string;
    resourceName: string;
    requestedBy: string;
    requestedByName: string;
    requestedFor: string[];
    requestedForNames: string[];
    participants: string[];
    resourceType: ResourceTypeMask;
    approvedOn: number;
    status: BookingStatusCode;
    private: boolean;
    id: string;
    createdOn: number;
    updatedOn: number;
}
export interface IBooking extends IBaseEntity {
    activityId?: string;
    activityName?: string;
    placementOn?: number;
    placementTo?: number;
    duration?: number;
    distance?: number;
    resourceId?: string;
    resourceName?: string;
    requestedBy?: string;
    requestedByName?: string;
    requestedFor?: string[];
    requestedForNames?: string[];
    participants?: string[];
    resourceType?: ResourceTypeMask;
    approvedOn?: number;
    status?: BookingStatusCode;
    private?: boolean;
    id?: string;
    createdOn?: number;
    updatedOn?: number;
}
