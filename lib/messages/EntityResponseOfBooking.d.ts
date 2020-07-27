import { Booking } from '../entities/Booking';
import { EntityResponse } from '../messages/EntityResponse';
export interface EntityResponseOfBooking extends EntityResponse {
    entity?: Booking;
    code?: number;
    error?: string;
}
