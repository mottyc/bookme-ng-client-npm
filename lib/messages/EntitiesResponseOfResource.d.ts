import { Resource } from '../entities/Resource';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfResource extends EntitiesResponse {
    list: Resource[];
    code: number;
    error: string;
}
