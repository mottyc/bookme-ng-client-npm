import { BaseEntity } from '../entities/BaseEntity';
import { ResourceClassCode } from '../enums/ResourceClassCode';
import { ResourceTypeMask } from '../enums/ResourceTypeMask';
import { ResourceStatusCode } from '../enums/ResourceStatusCode';
import { AccountRoleCode } from '../enums/AccountRoleCode';
import { WeightRange } from '../common/WeightRange';
import { IBaseEntity } from '../entities/BaseEntity';
export declare class Resource extends BaseEntity {
    name: string;
    resourceClass: ResourceClassCode;
    resourceType: ResourceTypeMask;
    status: ResourceStatusCode;
    forUseBy: AccountRoleCode;
    brand: string;
    weightRange: WeightRange;
    description: string;
    id: string;
    createdOn: number;
    updatedOn: number;
}
export interface IResource extends IBaseEntity {
    name?: string;
    resourceClass?: ResourceClassCode;
    resourceType?: ResourceTypeMask;
    status?: ResourceStatusCode;
    forUseBy?: AccountRoleCode;
    brand?: string;
    weightRange?: WeightRange;
    description?: string;
    id?: string;
    createdOn?: number;
    updatedOn?: number;
}
