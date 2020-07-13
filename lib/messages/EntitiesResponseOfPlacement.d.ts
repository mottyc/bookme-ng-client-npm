import { Placement } from '../entities/Placement';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfPlacement extends EntitiesResponse {
    list: Placement[];
    code: number;
    error: string;
}
