import { Booking } from '../entities/Booking';
import { PlacementStatusCode } from '../enums/PlacementStatusCode';
import { BaseEntity } from '../entities/BaseEntity';
import { Resource } from '../entities/Resource';
import { IBaseEntity } from '../entities/BaseEntity';
export declare class Placement extends BaseEntity {
    resource: Resource;
    bookings: Booking[];
    status: PlacementStatusCode;
    id: string;
    createdOn: number;
    updatedOn: number;
}
export interface IPlacement extends IBaseEntity {
    resource?: Resource;
    bookings?: Booking[];
    status?: PlacementStatusCode;
    id?: string;
    createdOn?: number;
    updatedOn?: number;
}
