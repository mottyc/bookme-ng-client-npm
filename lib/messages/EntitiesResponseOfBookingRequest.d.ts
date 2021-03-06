import { BookingRequest } from '../entities/BookingRequest';
import { EntitiesResponse } from '../messages/EntitiesResponse';
import { IEntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfBookingRequest extends EntitiesResponse {
    list: BookingRequest[];
    code: number;
    error: string;
}
export interface IEntitiesResponseOfBookingRequest extends IEntitiesResponse {
    list?: BookingRequest[];
    code?: number;
    error?: string;
}
