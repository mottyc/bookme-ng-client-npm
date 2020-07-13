import { Booking } from '../entities/Booking';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfBooking extends EntityResponse {
    entity: Booking;
    code: number;
    error: string;
}
