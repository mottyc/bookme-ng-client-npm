import { AccountRoleCode } from '../enums/AccountRoleCode';
import { DayOfWeekCode } from '../enums/DayOfWeekCode';
import { ResourceTypeMask } from '../enums/ResourceTypeMask';
export declare class RecurrentActivity {
    dayOfWeek: DayOfWeekCode;
    startTime: number;
    endTime: number;
    name: string;
    resourceFilter: ResourceTypeMask[];
    roleFilter: AccountRoleCode[];
    limit: number;
    constructor(dayOfWeek?: DayOfWeekCode, startTime?: number, endTime?: number, name?: string, resourceFilter?: ResourceTypeMask[], roleFilter?: AccountRoleCode[], limit?: number);
}
export interface IRecurrentActivity {
    dayOfWeek?: DayOfWeekCode;
    startTime?: number;
    endTime?: number;
    name?: string;
    resourceFilter?: ResourceTypeMask[];
    roleFilter?: AccountRoleCode[];
    limit?: number;
}
