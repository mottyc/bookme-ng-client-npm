import { FeatureCode } from '../enums/FeatureCode';
import { BaseEntity } from '../entities/BaseEntity';
export interface FeaturesGroup extends BaseEntity {
    name?: string;
    features?: FeatureCode[];
    id?: string;
    _type?: string;
    createdOn?: number;
    updatedOn?: number;
}
