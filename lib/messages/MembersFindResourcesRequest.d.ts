import { ResourceTypeMask } from '../enums/ResourceTypeMask';
export declare class MembersFindResourcesRequest {
    search: string;
    include: ResourceTypeMask;
    exclude: ResourceTypeMask;
    constructor(search?: string, include?: ResourceTypeMask, exclude?: ResourceTypeMask);
}
export interface IMembersFindResourcesRequest {
    search?: string;
    include?: ResourceTypeMask;
    exclude?: ResourceTypeMask;
}
