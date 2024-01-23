import { BookingStatusCode } from '../enums/BookingStatusCode';
import { SeverityCode } from '../enums/SeverityCode';
import { BaseEntity } from '../entities/BaseEntity';
import { ResourceTypeMask } from '../enums/ResourceTypeMask';
import { IBaseEntity } from '../entities/BaseEntity';
export declare class Booking extends BaseEntity {
    accountId: string;
    activityId: string;
    activityName: string;
    placementOn: number;
    placementTo: number;
    resourceId: string;
    resourceName: string;
    requestedBy: string;
    requestedByName: string;
    requestedFor: string[];
    requestedForNames: string[];
    participants: string[];
    resourceType: ResourceTypeMask;
    approvedBy: string;
    approvedOn: number;
    status: BookingStatusCode;
    private: boolean;
    duration: number;
    distance: number;
    notes: string;
    icon: string;
    iconColor: string;
    severity: SeverityCode;
    id: string;
    createdOn: number;
    updatedOn: number;
}
export interface IBooking extends IBaseEntity {
    accountId?: string;
    activityId?: string;
    activityName?: string;
    placementOn?: number;
    placementTo?: number;
    resourceId?: string;
    resourceName?: string;
    requestedBy?: string;
    requestedByName?: string;
    requestedFor?: string[];
    requestedForNames?: string[];
    participants?: string[];
    resourceType?: ResourceTypeMask;
    approvedBy?: string;
    approvedOn?: number;
    status?: BookingStatusCode;
    private?: boolean;
    duration?: number;
    distance?: number;
    notes?: string;
    icon?: string;
    iconColor?: string;
    severity?: SeverityCode;
    id?: string;
    createdOn?: number;
    updatedOn?: number;
}
