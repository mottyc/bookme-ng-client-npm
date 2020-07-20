import { Resource } from '../entities/Resource';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfResource extends EntityResponse {
    entity: Resource;
    code: number;
    error: string;
}
