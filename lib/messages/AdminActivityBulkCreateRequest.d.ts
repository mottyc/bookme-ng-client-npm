import { Activity } from '../entities/Activity';
export declare class AdminActivityBulkCreateRequest {
    body: Activity[];
    constructor(body?: Activity[]);
}
export interface IAdminActivityBulkCreateRequest {
    body?: Activity[];
}
