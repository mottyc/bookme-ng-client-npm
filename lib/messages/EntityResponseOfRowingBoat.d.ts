import { EntityResponse } from '../messages/EntityResponse';
import { RowingBoat } from '../entities/RowingBoat';
export declare class EntityResponseOfRowingBoat extends EntityResponse {
    entity: RowingBoat;
    code: number;
    error: string;
}
