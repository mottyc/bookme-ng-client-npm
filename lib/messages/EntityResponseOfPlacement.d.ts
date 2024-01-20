import { Placement } from '../entities/Placement';
import { EntityResponse } from '../messages/EntityResponse';
import { IEntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfPlacement extends EntityResponse {
    entity: Placement;
    code: number;
    error: string;
}
export interface IEntityResponseOfPlacement extends IEntityResponse {
    entity?: Placement;
    code?: number;
    error?: string;
}
