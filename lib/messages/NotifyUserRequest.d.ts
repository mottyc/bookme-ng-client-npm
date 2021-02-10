import { NotificationTypeCode } from '../enums/NotificationTypeCode';
export declare class NotifyUserRequest {
    userId: string[];
    type: NotificationTypeCode;
    from: number;
    to: number;
    body: string;
    constructor(userId?: string[], type?: NotificationTypeCode, from?: number, to?: number, body?: string);
}
export interface INotifyUserRequest {
    userId?: string[];
    type?: NotificationTypeCode;
    from?: number;
    to?: number;
    body?: string;
}
