import { Booking } from '../entities/Booking';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfBooking extends EntitiesResponse {
    list: Booking[];
    code: number;
    error: string;
}
