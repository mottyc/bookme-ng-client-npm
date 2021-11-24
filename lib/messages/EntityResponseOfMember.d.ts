import { Notification } from '../entities/Notification';
import { EntityResponse } from '../messages/EntityResponse';
import { IEntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfMember extends EntityResponse {
    entity: Notification;
    code: number;
    error: string;
}
export interface IEntityResponseOfMember extends IEntityResponse {
    entity?: Notification;
    code?: number;
    error?: string;
}
