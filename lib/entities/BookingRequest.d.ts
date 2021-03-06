import { ResourceTypeMask } from '../enums/ResourceTypeMask';
import { BaseEntity } from '../entities/BaseEntity';
import { IBaseEntity } from '../entities/BaseEntity';
export declare class BookingRequest extends BaseEntity {
    placementOn: number;
    duration: number;
    requestedBy: string;
    requestedFor: string[];
    resourceId: string;
    resourceType: ResourceTypeMask;
    id: string;
    createdOn: number;
    updatedOn: number;
}
export interface IBookingRequest extends IBaseEntity {
    placementOn?: number;
    duration?: number;
    requestedBy?: string;
    requestedFor?: string[];
    resourceId?: string;
    resourceType?: ResourceTypeMask;
    id?: string;
    createdOn?: number;
    updatedOn?: number;
}
