import { ActivityStatusCode } from '../enums/ActivityStatusCode';
import { BaseEntity } from '../entities/BaseEntity';
import { IBaseEntity } from '../entities/BaseEntity';
export declare class Activity extends BaseEntity {
    name: string;
    from: number;
    to: number;
    status: ActivityStatusCode;
    id: string;
    createdOn: number;
    updatedOn: number;
}
export interface IActivity extends IBaseEntity {
    name?: string;
    from?: number;
    to?: number;
    status?: ActivityStatusCode;
    id?: string;
    createdOn?: number;
    updatedOn?: number;
}
