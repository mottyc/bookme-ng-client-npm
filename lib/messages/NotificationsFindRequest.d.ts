import { NotificationTypeCode } from '../enums/NotificationTypeCode';
export declare class NotificationsFindRequest {
    userId: string;
    search: string;
    type: NotificationTypeCode;
    sort: string;
    page: number;
    pageSize: number;
    constructor(userId?: string, search?: string, type?: NotificationTypeCode, sort?: string, page?: number, pageSize?: number);
}
export interface INotificationsFindRequest {
    userId?: string;
    search?: string;
    type?: NotificationTypeCode;
    sort?: string;
    page?: number;
    pageSize?: number;
}
