import { EntityResponse } from '../messages/EntityResponse';
import { Placement } from '../entities/Placement';
export declare class EntityResponseOfPlacement extends EntityResponse {
    entity: Placement;
    code: number;
    error: string;
}
