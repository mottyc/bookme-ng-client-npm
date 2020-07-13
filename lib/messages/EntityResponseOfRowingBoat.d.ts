import { RowingBoat } from '../entities/RowingBoat';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfRowingBoat extends EntityResponse {
    entity: RowingBoat;
    code: number;
    error: string;
}
