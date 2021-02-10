import { NotificationTypeCode } from '../enums/NotificationTypeCode';
export declare class NotifyBookingUsersRequest {
    bookingId: string;
    type: NotificationTypeCode;
    from: number;
    to: number;
    body: string;
    constructor(bookingId?: string, type?: NotificationTypeCode, from?: number, to?: number, body?: string);
}
export interface INotifyBookingUsersRequest {
    bookingId?: string;
    type?: NotificationTypeCode;
    from?: number;
    to?: number;
    body?: string;
}
