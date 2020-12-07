import { BookingGroup } from '../entities/BookingGroup';
import { EntitiesResponse } from '../messages/EntitiesResponse';
import { IEntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfBookingGroup extends EntitiesResponse {
    list: BookingGroup[];
    code: number;
    error: string;
}
export interface IEntitiesResponseOfBookingGroup extends IEntitiesResponse {
    list?: BookingGroup[];
    code?: number;
    error?: string;
}
