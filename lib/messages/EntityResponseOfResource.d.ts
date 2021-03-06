import { Resource } from '../entities/Resource';
import { EntityResponse } from '../messages/EntityResponse';
import { IEntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfResource extends EntityResponse {
    entity: Resource;
    code: number;
    error: string;
}
export interface IEntityResponseOfResource extends IEntityResponse {
    entity?: Resource;
    code?: number;
    error?: string;
}
