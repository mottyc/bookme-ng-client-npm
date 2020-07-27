import { BookingStatusCode } from '../enums/BookingStatusCode';
export interface UserPlacementFindRequest {
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
