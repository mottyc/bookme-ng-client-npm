import { DayOfWeekCode } from '../enums/DayOfWeekCode';
import { ResourceTypeMask } from '../enums/ResourceTypeMask';
import { AccountRoleCode } from '../enums/AccountRoleCode';
import { BookingOptionsMask } from '../enums/BookingOptionsMask';
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
    options: BookingOptionsMask;
    limit: number;
    icon: string;
    iconColor: string;
    constructor(key?: number, dayOfWeek?: DayOfWeekCode, startTime?: string, endTime?: string, name?: string, description?: string, autoApprove?: boolean, resourceFilter?: ResourceTypeMask[], roleFilter?: AccountRoleCode[], options?: BookingOptionsMask, limit?: number, icon?: string, iconColor?: string);
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
    options?: BookingOptionsMask;
    limit?: number;
    icon?: string;
    iconColor?: string;
}
