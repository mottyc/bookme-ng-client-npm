import { EntityResponse } from '../messages/EntityResponse';
import { AutoPlacementLog } from '../entities/AutoPlacementLog';
import { IEntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfAutoPlacementLog extends EntityResponse {
    entity: AutoPlacementLog;
    code: number;
    error: string;
}
export interface IEntityResponseOfAutoPlacementLog extends IEntityResponse {
    entity?: AutoPlacementLog;
    code?: number;
    error?: string;
}
