import { ResourceStatusCode } from '../enums/ResourceStatusCode';
import { UseTypeCode } from '../enums/UseTypeCode';
import { ResourceClassCode } from '../enums/ResourceClassCode';
import { ResourceTypeMask } from '../enums/ResourceTypeMask';
export declare class AdminResourceFindRequest {
    search: string;
    resourceClass: ResourceClassCode;
    resourceType: ResourceTypeMask;
    status: ResourceStatusCode;
    forUseBy: UseTypeCode;
    sort: string;
    page: number;
    pageSize: number;
    constructor(search?: string, resourceClass?: ResourceClassCode, resourceType?: ResourceTypeMask, status?: ResourceStatusCode, forUseBy?: UseTypeCode, sort?: string, page?: number, pageSize?: number);
}
export interface IAdminResourceFindRequest {
    search?: string;
    resourceClass?: ResourceClassCode;
    resourceType?: ResourceTypeMask;
    status?: ResourceStatusCode;
    forUseBy?: UseTypeCode;
    sort?: string;
    page?: number;
    pageSize?: number;
}
