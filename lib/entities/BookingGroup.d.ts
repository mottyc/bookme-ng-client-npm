import { Booking } from '../entities/Booking';
export declare class BookingGroup {
    timeGroup: number;
    bookings: Booking[];
    constructor(timeGroup?: number, bookings?: Booking[]);
}
export interface IBookingGroup {
    timeGroup?: number;
    bookings?: Booking[];
}
