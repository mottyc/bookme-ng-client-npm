import { Placement } from '../entities/Placement';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export interface EntitiesResponseOfPlacement extends EntitiesResponse {
    list?: Placement[];
    code?: number;
    error?: string;
}
