import { EntitiesResponse } from '../messages/EntitiesResponse';
import { RowingBoat } from '../entities/RowingBoat';
export declare class EntitiesResponseOfRowingBoat extends EntitiesResponse {
    list: RowingBoat[];
    code: number;
    error: string;
}
