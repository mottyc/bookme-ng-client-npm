import { EntityResponse } from '../messages/EntityResponse';
import { Booking } from '../entities/Booking';
import { IEntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfBooking extends EntityResponse {
    entity: Booking;
    code: number;
    error: string;
}
export interface IEntityResponseOfBooking extends IEntityResponse {
    entity?: Booking;
    code?: number;
    error?: string;
}
