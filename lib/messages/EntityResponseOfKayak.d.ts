import { EntityResponse } from '../messages/EntityResponse';
import { Kayak } from '../entities/Kayak';
export declare class EntityResponseOfKayak extends EntityResponse {
    entity: Kayak;
    code: number;
    error: string;
}
