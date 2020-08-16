export declare class UserBookingRequestFindRequest {
    userId: string;
    resourceId: string;
    from: number;
    to: number;
    sort: string;
    page: number;
    pageSize: number;
    constructor(userId?: string, resourceId?: string, from?: number, to?: number, sort?: string, page?: number, pageSize?: number);
}
export interface IUserBookingRequestFindRequest {
    userId?: string;
    resourceId?: string;
    from?: number;
    to?: number;
    sort?: string;
    page?: number;
    pageSize?: number;
}
