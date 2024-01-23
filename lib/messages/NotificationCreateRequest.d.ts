import { Notification } from '../entities/Notification';
export declare class NotificationCreateRequest {
    body: Notification;
    constructor(body?: Notification);
}
export interface INotificationCreateRequest {
    body?: Notification;
}
