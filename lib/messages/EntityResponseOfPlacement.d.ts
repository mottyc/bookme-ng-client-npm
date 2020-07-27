import { Placement } from '../entities/Placement';
import { EntityResponse } from '../messages/EntityResponse';
export interface EntityResponseOfPlacement extends EntityResponse {
    entity?: Placement;
    code?: number;
    error?: string;
}
