import { Booking } from '../entities/Booking';
import { Activity } from '../entities/Activity';
export declare class ActivityBookingGroup {
    activity: Activity;
    bookings: Booking[];
    constructor(activity?: Activity, bookings?: Booking[]);
}
export interface IActivityBookingGroup {
    activity?: Activity;
    bookings?: Booking[];
}
