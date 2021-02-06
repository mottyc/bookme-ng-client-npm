import { Resource } from '../entities/Resource';
import { EntitiesResponse } from '../messages/EntitiesResponse';
import { IEntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfResource extends EntitiesResponse {
    list: Resource[];
    code: number;
    error: string;
}
export interface IEntitiesResponseOfResource extends IEntitiesResponse {
    list?: Resource[];
    code?: number;
    error?: string;
}
