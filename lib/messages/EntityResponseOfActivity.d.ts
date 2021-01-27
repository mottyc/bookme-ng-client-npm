import { EntityResponse } from '../messages/EntityResponse';
import { Activity } from '../entities/Activity';
import { IEntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfActivity extends EntityResponse {
    entity: Activity;
    code: number;
    error: string;
}
export interface IEntityResponseOfActivity extends IEntityResponse {
    entity?: Activity;
    code?: number;
    error?: string;
}
