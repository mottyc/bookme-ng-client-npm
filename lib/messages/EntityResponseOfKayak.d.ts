import { Kayak } from '../entities/Kayak';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfKayak extends EntityResponse {
    entity: Kayak;
    code: number;
    error: string;
}
