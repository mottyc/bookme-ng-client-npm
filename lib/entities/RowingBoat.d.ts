import { ResourceTypeCode } from '../enums/ResourceTypeCode';
import { UseTypeCode } from '../enums/UseTypeCode';
import { RowingBoatTypeCode } from '../enums/RowingBoatTypeCode';
import { BaseEntity } from '../entities/BaseEntity';
export declare class RowingBoat extends BaseEntity {
    resourceType: ResourceTypeCode;
    resourceId: string;
    isAvailable: boolean;
    usedBy: UseTypeCode;
    subType: RowingBoatTypeCode;
    minWeight: number;
    maxWeight: number;
    brand: string;
    rowers: number;
    isSweep: boolean;
    isCox: boolean;
    isWide: boolean;
    isCoastal: boolean;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
