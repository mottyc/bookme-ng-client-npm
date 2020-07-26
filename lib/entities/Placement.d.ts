import { BaseEntity } from '../entities/BaseEntity';
import { BookingStatusCode } from '../enums/BookingStatusCode';
export declare class Placement extends BaseEntity {
    placementOn: number;
    duration: number;
    requestedBy: string;
    requestedFor: string[];
    resourceId: string;
    bookingId: string;
    approvedOn: number;
    status: BookingStatusCode;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
