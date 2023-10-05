import { ResourceTypeMask } from '../enums/ResourceTypeMask';
import { ResourceStatusCode } from '../enums/ResourceStatusCode';
import { AccountRoleCode } from '../enums/AccountRoleCode';
import { ResourceClassCode } from '../enums/ResourceClassCode';
export declare class AdminResourceFindRequest {
    search: string;
    resourceClass: ResourceClassCode;
    resourceType: ResourceTypeMask;
    status: ResourceStatusCode;
    forUseBy: AccountRoleCode;
    sort: string;
    page: number;
    pageSize: number;
    constructor(search?: string, resourceClass?: ResourceClassCode, resourceType?: ResourceTypeMask, status?: ResourceStatusCode, forUseBy?: AccountRoleCode, sort?: string, page?: number, pageSize?: number);
}
export interface IAdminResourceFindRequest {
    search?: string;
    resourceClass?: ResourceClassCode;
    resourceType?: ResourceTypeMask;
    status?: ResourceStatusCode;
    forUseBy?: AccountRoleCode;
    sort?: string;
    page?: number;
    pageSize?: number;
}
