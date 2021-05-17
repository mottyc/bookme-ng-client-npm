import { BaseEntity } from '../entities/BaseEntity';
import { FeatureCode } from '../enums/FeatureCode';
import { IBaseEntity } from '../entities/BaseEntity';
export declare class FeaturesGroup extends BaseEntity {
    name: string;
    features: FeatureCode[];
    id: string;
    createdOn: number;
    updatedOn: number;
}
export interface IFeaturesGroup extends IBaseEntity {
    name?: string;
    features?: FeatureCode[];
    id?: string;
    createdOn?: number;
    updatedOn?: number;
}
