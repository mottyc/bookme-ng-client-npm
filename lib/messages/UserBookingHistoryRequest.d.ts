export declare class UserBookingHistoryRequest {
    resourceId: string;
    year: number;
    month: number;
    day: number;
    sort: string;
    constructor(resourceId?: string, year?: number, month?: number, day?: number, sort?: string);
}
export interface IUserBookingHistoryRequest {
    resourceId?: string;
    year?: number;
    month?: number;
    day?: number;
    sort?: string;
}
