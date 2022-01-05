import { AccountRoleCode } from '../enums/AccountRoleCode';
import { DayOfWeekCode } from '../enums/DayOfWeekCode';
import { ResourceTypeMask } from '../enums/ResourceTypeMask';
export declare class RecurrentActivity {
    key: number;
    dayOfWeek: DayOfWeekCode;
    startTime: string;
    endTime: string;
    name: string;
    description: string;
    autoApprove: boolean;
    resourceFilter: ResourceTypeMask[];
    roleFilter: AccountRoleCode[];
    limit: number;
    icon: string;
    iconColor: string;
    constructor(key?: number, dayOfWeek?: DayOfWeekCode, startTime?: string, endTime?: string, name?: string, description?: string, autoApprove?: boolean, resourceFilter?: ResourceTypeMask[], roleFilter?: AccountRoleCode[], limit?: number, icon?: string, iconColor?: string);
}
export interface IRecurrentActivity {
    key?: number;
    dayOfWeek?: DayOfWeekCode;
    startTime?: string;
    endTime?: string;
    name?: string;
    description?: string;
    autoApprove?: boolean;
    resourceFilter?: ResourceTypeMask[];
    roleFilter?: AccountRoleCode[];
    limit?: number;
    icon?: string;
    iconColor?: string;
}
