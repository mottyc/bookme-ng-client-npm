import { NotificationTypeCode } from '../enums/NotificationTypeCode';
export declare class NotifyActivityUsersRequest {
    activityId: string;
    type: NotificationTypeCode;
    from: number;
    to: number;
    body: string;
    constructor(activityId?: string, type?: NotificationTypeCode, from?: number, to?: number, body?: string);
}
export interface INotifyActivityUsersRequest {
    activityId?: string;
    type?: NotificationTypeCode;
    from?: number;
    to?: number;
    body?: string;
}
