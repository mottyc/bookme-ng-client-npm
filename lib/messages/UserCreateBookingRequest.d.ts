import { Booking } from '../entities/Booking';
export declare class UserCreateBookingRequest {
    body: Booking;
    constructor(body?: Booking);
}
export interface IUserCreateBookingRequest {
    body?: Booking;
}
