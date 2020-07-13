import { RowingBoat } from '../entities/RowingBoat';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfRowingBoat extends EntitiesResponse {
    list: RowingBoat[];
    code: number;
    error: string;
}
