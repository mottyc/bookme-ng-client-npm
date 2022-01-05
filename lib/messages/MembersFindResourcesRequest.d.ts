import { ResourceTypeMask } from '../enums/ResourceTypeMask';
export declare class MembersFindResourcesRequest {
    accountId: string;
    search: string;
    include: ResourceTypeMask;
    exclude: ResourceTypeMask;
    constructor(accountId?: string, search?: string, include?: ResourceTypeMask, exclude?: ResourceTypeMask);
}
export interface IMembersFindResourcesRequest {
    accountId?: string;
    search?: string;
    include?: ResourceTypeMask;
    exclude?: ResourceTypeMask;
}
