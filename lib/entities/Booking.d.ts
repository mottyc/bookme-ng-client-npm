import { BaseEntity } from '../entities/BaseEntity';
export interface Booking extends BaseEntity {
    placementOn?: number;
    duration?: number;
    requestedBy?: string;
    requestedFor?: string[];
    resourceId?: string;
    id?: string;
    _type?: string;
    createdOn?: number;
    updatedOn?: number;
}
