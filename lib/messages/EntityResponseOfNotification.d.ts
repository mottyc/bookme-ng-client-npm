import { Notification } from '../entities/Notification';
import { EntityResponse } from '../messages/EntityResponse';
import { IEntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfNotification extends EntityResponse {
    entity: Notification;
    code: number;
    error: string;
}
export interface IEntityResponseOfNotification extends IEntityResponse {
    entity?: Notification;
    code?: number;
    error?: string;
}
