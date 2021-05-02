import { EntityResponse } from '../messages/EntityResponse';
import { Planing } from '../entities/Planing';
import { IEntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfPlaning extends EntityResponse {
    entity: Planing;
    code: number;
    error: string;
}
export interface IEntityResponseOfPlaning extends IEntityResponse {
    entity?: Planing;
    code?: number;
    error?: string;
}
