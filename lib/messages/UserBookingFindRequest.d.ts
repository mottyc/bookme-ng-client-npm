export declare class UserBookingFindRequest {
    userId: string;
    resourceId: string;
    from: number;
    to: number;
    sort: string;
    page: number;
    pageSize: number;
    constructor(userId?: string, resourceId?: string, from?: number, to?: number, sort?: string, page?: number, pageSize?: number);
}
export interface IUserBookingFindRequest {
    userId?: string;
    resourceId?: string;
    from?: number;
    to?: number;
    sort?: string;
    page?: number;
    pageSize?: number;
}
