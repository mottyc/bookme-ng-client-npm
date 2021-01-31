export declare class AdminBookingHistoryRequest {
    id: string;
    resourceId: string;
    year: number;
    month: number;
    day: number;
    sort: string;
    constructor(id?: string, resourceId?: string, year?: number, month?: number, day?: number, sort?: string);
}
export interface IAdminBookingHistoryRequest {
    id?: string;
    resourceId?: string;
    year?: number;
    month?: number;
    day?: number;
    sort?: string;
}
