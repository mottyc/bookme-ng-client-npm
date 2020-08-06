import { Booking } from '../entities/Booking';
export declare class BookingGroup {
    timeGroup: number;
    booking: Booking[];
    constructor(timeGroup?: number, booking?: Booking[]);
}
export interface IBookingGroup {
    timeGroup?: number;
    booking?: Booking[];
}
