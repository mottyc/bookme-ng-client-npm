export interface UserBookingFindRequest {
    userId?: string;
    resourceId?: string;
    from?: number;
    to?: number;
    sort?: string;
    page?: number;
    pageSize?: number;
}
