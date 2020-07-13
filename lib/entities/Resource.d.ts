import { ResourceTypeCode } from '../enums/ResourceTypeCode';
import { UseTypeCode } from '../enums/UseTypeCode';
import { BaseEntity } from '../entities/BaseEntity';
export declare class Resource extends BaseEntity {
    resourceType: ResourceTypeCode;
    resourceId: string;
    isAvailable: boolean;
    usedBy: UseTypeCode;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
