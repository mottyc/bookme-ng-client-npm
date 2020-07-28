import { FeatureCode } from '../enums/FeatureCode';
import { BaseEntity } from '../entities/BaseEntity';
import { IBaseEntity } from '../entities/BaseEntity';
export declare class Feature extends BaseEntity {
    code: FeatureCode;
    name: string;
    description: string;
    category: string;
    id: string;
    createdOn: number;
    updatedOn: number;
}
export interface IFeature extends IBaseEntity {
    code?: FeatureCode;
    name?: string;
    description?: string;
    category?: string;
    id?: string;
    createdOn?: number;
    updatedOn?: number;
}
