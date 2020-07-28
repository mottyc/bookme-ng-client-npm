import { BookingStatusCode } from '../enums/BookingStatusCode';
export declare class UserPlacementFindRequest {
    userId: string;
    resourceId: string;
    from: number;
    to: number;
    bookingId: string;
    status: BookingStatusCode;
    sort: string;
    page: number;
    pageSize: number;
    constructor(userId?: string, resourceId?: string, from?: number, to?: number, bookingId?: string, status?: BookingStatusCode, sort?: string, page?: number, pageSize?: number);
}
export interface IUserPlacementFindRequest {
    userId?: string;
    resourceId?: string;
    from?: number;
    to?: number;
    bookingId?: string;
    status?: BookingStatusCode;
    sort?: string;
    page?: number;
    pageSize?: number;
}
