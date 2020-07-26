import { Placement } from '../entities/Placement';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfPlacement extends EntityResponse {
    entity: Placement;
    code: number;
    error: string;
}
