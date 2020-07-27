import { EntityResponse } from '../messages/EntityResponse';
import { Resource } from '../entities/Resource';
export declare class EntityResponseOfResource extends EntityResponse {
    entity: Resource;
    code: number;
    error: string;
}
