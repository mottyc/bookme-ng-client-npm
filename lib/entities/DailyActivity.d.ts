import { BaseEntity } from '../entities/BaseEntity';
import { ActivityStatusCode } from '../enums/ActivityStatusCode';
import { Activity } from '../common/Activity';
import { IBaseEntity } from '../entities/BaseEntity';
export declare class DailyActivity extends BaseEntity {
    day: number;
    status: ActivityStatusCode;
    activities: Activity;
    id: string;
    createdOn: number;
    updatedOn: number;
}
export interface IDailyActivity extends IBaseEntity {
    day?: number;
    status?: ActivityStatusCode;
    activities?: Activity;
    id?: string;
    createdOn?: number;
    updatedOn?: number;
}
