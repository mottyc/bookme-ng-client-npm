import { AccountTypeCode } from '../enums/AccountTypeCode';
import { AccountStatusCode } from '../enums/AccountStatusCode';
import { AccountSettings } from '../common/AccountSettings';
import { ResourceClassCode } from '../enums/ResourceClassCode';
import { BaseEntity } from '../entities/BaseEntity';
import { IBaseEntity } from '../entities/BaseEntity';
export declare class Account extends BaseEntity {
    name: string;
    type: AccountTypeCode;
    status: AccountStatusCode;
    suspendedOn: number;
    groups: string[];
    timezone: string;
    expiredOn: number;
    description: string;
    autoApprove: boolean;
    settings: AccountSettings;
    resourceClass: ResourceClassCode;
    id: string;
    createdOn: number;
    updatedOn: number;
}
export interface IAccount extends IBaseEntity {
    name?: string;
    type?: AccountTypeCode;
    status?: AccountStatusCode;
    suspendedOn?: number;
    groups?: string[];
    timezone?: string;
    expiredOn?: number;
    description?: string;
    autoApprove?: boolean;
    settings?: AccountSettings;
    resourceClass?: ResourceClassCode;
    id?: string;
    createdOn?: number;
    updatedOn?: number;
}
