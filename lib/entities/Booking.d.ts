import { BaseEntity } from '../entities/BaseEntity';
export declare class Booking extends BaseEntity {
    placementOn: number;
    duration: number;
    requestedBy: string;
    requestedFor: string[];
    resourceId: string;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
