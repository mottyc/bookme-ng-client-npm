import { ResourceStatusCode } from '../enums/ResourceStatusCode';
import { UseTypeCode } from '../enums/UseTypeCode';
import { WeightRange } from '../common/WeightRange';
import { BaseEntity } from '../entities/BaseEntity';
import { ResourceClassCode } from '../enums/ResourceClassCode';
import { ResourceTypeMask } from '../enums/ResourceTypeMask';
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
    _type: string;
    createdOn: number;
    updatedOn: number;
}
