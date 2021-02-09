import { NotificationTypeCode } from '../enums/NotificationTypeCode';
export declare class NotifyDailyUsersRequest {
    dayId: number;
    type: NotificationTypeCode;
    body: string;
    constructor(dayId?: number, type?: NotificationTypeCode, body?: string);
}
export interface INotifyDailyUsersRequest {
    dayId?: number;
    type?: NotificationTypeCode;
    body?: string;
}
