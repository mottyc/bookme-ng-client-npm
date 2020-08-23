import { WeightRange } from '../common/WeightRange';
import { BaseEntity } from '../entities/BaseEntity';
import { ResourceClassCode } from '../enums/ResourceClassCode';
import { ResourceTypeMask } from '../enums/ResourceTypeMask';
import { ResourceStatusCode } from '../enums/ResourceStatusCode';
import { UseTypeCode } from '../enums/UseTypeCode';
import { IBaseEntity } from '../entities/BaseEntity';
export declare class Resource extends BaseEntity {
    name: string;
    resourceClass: ResourceClassCode;
    resourceType: ResourceTypeMask;
    status: ResourceStatusCode;
    forUseBy: UseTypeCode;
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
    forUseBy?: UseTypeCode;
    brand?: string;
    weightRange?: WeightRange;
    description?: string;
    id?: string;
    createdOn?: number;
    updatedOn?: number;
}
