import { EntitiesResponse } from '../messages/EntitiesResponse';
import { Booking } from '../entities/Booking';
export interface EntitiesResponseOfBooking extends EntitiesResponse {
    list?: Booking[];
    code?: number;
    error?: string;
}
