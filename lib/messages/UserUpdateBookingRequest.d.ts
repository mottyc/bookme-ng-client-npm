import { Booking } from '../entities/Booking';
export declare class UserUpdateBookingRequest {
    body: Booking;
    constructor(body?: Booking);
}
export interface IUserUpdateBookingRequest {
    body?: Booking;
}
