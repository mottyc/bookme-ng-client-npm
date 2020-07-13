import { Kayak } from '../entities/Kayak';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfKayak extends EntitiesResponse {
    list: Kayak[];
    code: number;
    error: string;
}
