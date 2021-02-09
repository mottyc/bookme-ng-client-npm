import { NotificationTypeCode } from '../enums/NotificationTypeCode';
export declare class FindNotificationsRequest {
    search: string;
    type: NotificationTypeCode;
    sort: string;
    page: number;
    pageSize: number;
    constructor(search?: string, type?: NotificationTypeCode, sort?: string, page?: number, pageSize?: number);
}
export interface IFindNotificationsRequest {
    search?: string;
    type?: NotificationTypeCode;
    sort?: string;
    page?: number;
    pageSize?: number;
}
