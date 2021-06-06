export declare class AdminBookingHistoryRequest {
    id: string;
    resourceId: string;
    from: number;
    to: number;
    sort: string;
    constructor(id?: string, resourceId?: string, from?: number, to?: number, sort?: string);
}
export interface IAdminBookingHistoryRequest {
    id?: string;
    resourceId?: string;
    from?: number;
    to?: number;
    sort?: string;
}
