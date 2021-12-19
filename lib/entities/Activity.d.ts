import { ActivityStatusCode } from '../enums/ActivityStatusCode';
import { ResourceTypeMask } from '../enums/ResourceTypeMask';
import { AccountRoleCode } from '../enums/AccountRoleCode';
import { BaseEntity } from '../entities/BaseEntity';
import { IBaseEntity } from '../entities/BaseEntity';
export declare class Activity extends BaseEntity {
    accountId: string;
    name: string;
    description: string;
    autoApprove: boolean;
    from: number;
    to: number;
    status: ActivityStatusCode;
    resourceFilter: ResourceTypeMask[];
    roleFilter: AccountRoleCode[];
    message: string;
    limit: number;
    icon: string;
    iconColor: string;
    id: string;
    createdOn: number;
    updatedOn: number;
}
export interface IActivity extends IBaseEntity {
    accountId?: string;
    name?: string;
    description?: string;
    autoApprove?: boolean;
    from?: number;
    to?: number;
    status?: ActivityStatusCode;
    resourceFilter?: ResourceTypeMask[];
    roleFilter?: AccountRoleCode[];
    message?: string;
    limit?: number;
    icon?: string;
    iconColor?: string;
    id?: string;
    createdOn?: number;
    updatedOn?: number;
}
