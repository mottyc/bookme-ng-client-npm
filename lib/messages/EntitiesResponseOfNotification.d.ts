import { Notification } from '../entities/Notification';
import { EntitiesResponse } from '../messages/EntitiesResponse';
import { IEntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfNotification extends EntitiesResponse {
    list: Notification[];
    code: number;
    error: string;
}
export interface IEntitiesResponseOfNotification extends IEntitiesResponse {
    list?: Notification[];
    code?: number;
    error?: string;
}
