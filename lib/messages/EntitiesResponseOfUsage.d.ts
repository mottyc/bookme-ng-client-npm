import { EntityResponse } from '../messages/EntityResponse';
import { Usage } from '../entities/Usage';
import { IEntityResponse } from '../messages/EntityResponse';
export declare class EntitiesResponseOfUsage extends EntityResponse {
    list: Usage[];
    code: number;
    error: string;
}
export interface IEntitiesResponseOfUsage extends IEntityResponse {
    list?: Usage[];
    code?: number;
    error?: string;
}
