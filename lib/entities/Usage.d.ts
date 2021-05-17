import { DayOfWeekCode } from '../enums/DayOfWeekCode';
import { BaseEntity } from '../entities/BaseEntity';
import { IBaseEntity } from '../entities/BaseEntity';
export declare class Usage extends BaseEntity {
    weekday: DayOfWeekCode;
    count: number;
    single: number;
    double: number;
    quad: number;
    eight: number;
    id: string;
    createdOn: number;
    updatedOn: number;
}
export interface IUsage extends IBaseEntity {
    weekday?: DayOfWeekCode;
    count?: number;
    single?: number;
    double?: number;
    quad?: number;
    eight?: number;
    id?: string;
    createdOn?: number;
    updatedOn?: number;
}
