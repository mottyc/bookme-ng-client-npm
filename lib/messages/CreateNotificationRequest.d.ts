import { NotificationTypeCode } from '../enums/NotificationTypeCode';
export declare class CreateNotificationRequest {
    userId: string[];
    type: NotificationTypeCode;
    body: string;
    constructor(userId?: string[], type?: NotificationTypeCode, body?: string);
}
export interface ICreateNotificationRequest {
    userId?: string[];
    type?: NotificationTypeCode;
    body?: string;
}
