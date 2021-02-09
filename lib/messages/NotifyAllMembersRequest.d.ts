import { NotificationTypeCode } from '../enums/NotificationTypeCode';
export declare class NotifyAllMembersRequest {
    dayId: number;
    type: NotificationTypeCode;
    body: string;
    constructor(dayId?: number, type?: NotificationTypeCode, body?: string);
}
export interface INotifyAllMembersRequest {
    dayId?: number;
    type?: NotificationTypeCode;
    body?: string;
}
