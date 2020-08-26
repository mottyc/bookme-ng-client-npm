import { Activity } from '../entities/Activity';
import { UseTypeCode } from '../enums/UseTypeCode';
export declare class AdminActivityBulkCreateRequest {
    body: Activity[];
    resType: number;
    weight: number;
    forUseBy: UseTypeCode;
    constructor(body?: Activity[], resType?: number, weight?: number, forUseBy?: UseTypeCode);
}
export interface IAdminActivityBulkCreateRequest {
    body?: Activity[];
    resType?: number;
    weight?: number;
    forUseBy?: UseTypeCode;
}
