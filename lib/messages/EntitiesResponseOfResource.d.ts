import { Resource } from '../entities/Resource';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export interface EntitiesResponseOfResource extends EntitiesResponse {
    list?: Resource[];
    code?: number;
    error?: string;
}
