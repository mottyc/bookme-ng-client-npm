import { EntitiesResponse } from '../messages/EntitiesResponse';
import { Placement } from '../entities/Placement';
export declare class EntitiesResponseOfPlacement extends EntitiesResponse {
    list: Placement[];
    code: number;
    error: string;
}
