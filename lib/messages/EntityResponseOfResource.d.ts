import { EntityResponse } from '../messages/EntityResponse';
import { Resource } from '../entities/Resource';
export interface EntityResponseOfResource extends EntityResponse {
    entity?: Resource;
    code?: number;
    error?: string;
}
