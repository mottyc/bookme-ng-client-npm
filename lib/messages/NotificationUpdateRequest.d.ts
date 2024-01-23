import { Notification } from '../entities/Notification';
export declare class NotificationUpdateRequest {
    body: Notification;
    constructor(body?: Notification);
}
export interface INotificationUpdateRequest {
    body?: Notification;
}
