import { NotificationTypeCode } from '../enums/NotificationTypeCode';
export declare class NotifyAllMembersRequest {
    type: NotificationTypeCode;
    from: number;
    to: number;
    body: string;
    constructor(type?: NotificationTypeCode, from?: number, to?: number, body?: string);
}
export interface INotifyAllMembersRequest {
    type?: NotificationTypeCode;
    from?: number;
    to?: number;
    body?: string;
}
