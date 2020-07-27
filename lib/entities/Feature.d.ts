import { FeatureCode } from '../enums/FeatureCode';
import { BaseEntity } from '../entities/BaseEntity';
export interface Feature extends BaseEntity {
    code?: FeatureCode;
    name?: string;
    description?: string;
    category?: string;
    id?: string;
    _type?: string;
    createdOn?: number;
    updatedOn?: number;
}
