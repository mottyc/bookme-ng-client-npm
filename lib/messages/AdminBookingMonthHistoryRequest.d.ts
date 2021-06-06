export declare class AdminBookingMonthHistoryRequest {
    id: string;
    resourceId: string;
    year: number;
    month: number;
    day: number;
    sort: string;
    constructor(id?: string, resourceId?: string, year?: number, month?: number, day?: number, sort?: string);
}
export interface IAdminBookingMonthHistoryRequest {
    id?: string;
    resourceId?: string;
    year?: number;
    month?: number;
    day?: number;
    sort?: string;
}
