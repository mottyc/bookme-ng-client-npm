import { EntitiesResponse } from '../messages/EntitiesResponse';
import { Resource } from '../entities/Resource';
export declare class EntitiesResponseOfResource extends EntitiesResponse {
    list: Resource[];
    code: number;
    error: string;
}
