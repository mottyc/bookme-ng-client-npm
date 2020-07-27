import { ResourceStatusCode } from '../enums/ResourceStatusCode';
import { UseTypeCode } from '../enums/UseTypeCode';
import { ResourceClassCode } from '../enums/ResourceClassCode';
import { ResourceTypeMask } from '../enums/ResourceTypeMask';
export interface AdminResourceFindRequest {
    search?: string;
    resourceClass?: ResourceClassCode;
    resourceType?: ResourceTypeMask;
    status?: ResourceStatusCode;
    forUseBy?: UseTypeCode;
    sort?: string;
    page?: number;
    pageSize?: number;
}
