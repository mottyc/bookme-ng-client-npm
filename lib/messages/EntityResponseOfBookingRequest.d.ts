import { EntityResponse } from '../messages/EntityResponse';
import { BookingRequest } from '../entities/BookingRequest';
import { IEntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfBookingRequest extends EntityResponse {
    entity: BookingRequest;
    code: number;
    error: string;
}
export interface IEntityResponseOfBookingRequest extends IEntityResponse {
    entity?: BookingRequest;
    code?: number;
    error?: string;
}
