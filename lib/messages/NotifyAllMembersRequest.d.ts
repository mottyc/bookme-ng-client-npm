import { NotificationTypeCode } from '../enums/NotificationTypeCode';
export declare class NotifyAllMembersRequest {
    dayId: number;
    type: NotificationTypeCode;
    from: number;
    to: number;
    body: string;
    constructor(dayId?: number, type?: NotificationTypeCode, from?: number, to?: number, body?: string);
}
export interface INotifyAllMembersRequest {
    dayId?: number;
    type?: NotificationTypeCode;
    from?: number;
    to?: number;
    body?: string;
}