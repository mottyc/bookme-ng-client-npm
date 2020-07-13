import { ResourceTypeCode } from '../enums/ResourceTypeCode';
import { UseTypeCode } from '../enums/UseTypeCode';
import { KayakTypeCode } from '../enums/KayakTypeCode';
import { BaseEntity } from '../entities/BaseEntity';
export declare class Kayak extends BaseEntity {
    resourceType: ResourceTypeCode;
    resourceId: string;
    isAvailable: boolean;
    usedBy: UseTypeCode;
    subType: KayakTypeCode;
    brand: string;
    paddlers: number;
    isWide: boolean;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
