import { ResourceStatusCode } from '../enums/ResourceStatusCode';
import { AccountRoleCode } from '../enums/AccountRoleCode';
import { ResourceClassCode } from '../enums/ResourceClassCode';
import { ResourceTypeMask } from '../enums/ResourceTypeMask';
export declare class AdminResourceExportCsvRequest {
    format: string;
    search: string;
    resourceClass: ResourceClassCode;
    resourceType: ResourceTypeMask;
    status: ResourceStatusCode;
    forUseBy: AccountRoleCode;
    sort: string;
    constructor(format?: string, search?: string, resourceClass?: ResourceClassCode, resourceType?: ResourceTypeMask, status?: ResourceStatusCode, forUseBy?: AccountRoleCode, sort?: string);
}
export interface IAdminResourceExportCsvRequest {
    format?: string;
    search?: string;
    resourceClass?: ResourceClassCode;
    resourceType?: ResourceTypeMask;
    status?: ResourceStatusCode;
    forUseBy?: AccountRoleCode;
    sort?: string;
}
