import { Booking } from '../entities/Booking';
import { EntitiesResponse } from '../messages/EntitiesResponse';
import { IEntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfBooking extends EntitiesResponse {
    list: Booking[];
    code: number;
    error: string;
}
export interface IEntitiesResponseOfBooking extends IEntitiesResponse {
    list?: Booking[];
    code?: number;
    error?: string;
}
