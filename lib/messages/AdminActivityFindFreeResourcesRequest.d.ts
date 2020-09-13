import { AccountRoleCode } from '../enums/AccountRoleCode';
export declare class AdminActivityFindFreeResourcesRequest {
    id: string;
    resType: number;
    weight: number;
    forUseBy: AccountRoleCode;
    constructor(id?: string, resType?: number, weight?: number, forUseBy?: AccountRoleCode);
}
export interface IAdminActivityFindFreeResourcesRequest {
    id?: string;
    resType?: number;
    weight?: number;
    forUseBy?: AccountRoleCode;
}
