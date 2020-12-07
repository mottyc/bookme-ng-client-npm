import { DayOfWeekCode } from '../enums/DayOfWeekCode';
import { ResourceTypeMask } from '../enums/ResourceTypeMask';
import { AccountRoleCode } from '../enums/AccountRoleCode';
export declare class RecurrentActivity {
    dayOfWeek: DayOfWeekCode;
    startTime: number;
    endTime: number;
    name: string;
    resourceFilter: ResourceTypeMask[];
    roleFilter: AccountRoleCode[];
    constructor(dayOfWeek?: DayOfWeekCode, startTime?: number, endTime?: number, name?: string, resourceFilter?: ResourceTypeMask[], roleFilter?: AccountRoleCode[]);
}
export interface IRecurrentActivity {
    dayOfWeek?: DayOfWeekCode;
    startTime?: number;
    endTime?: number;
    name?: string;
    resourceFilter?: ResourceTypeMask[];
    roleFilter?: AccountRoleCode[];
}
