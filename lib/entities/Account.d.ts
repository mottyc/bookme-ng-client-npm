import { AccountStatusCode } from '../enums/AccountStatusCode';
import { AccountSettings } from '../common/AccountSettings';
import { ResourceTypeCode } from '../enums/ResourceTypeCode';
import { BaseEntity } from '../entities/BaseEntity';
import { AccountTypeCode } from '../enums/AccountTypeCode';
export declare class Account extends BaseEntity {
    name: string;
    key: string;
    type: AccountTypeCode;
    status: AccountStatusCode;
    suspendedOn: number;
    groups: string[];
    timezone: string;
    expiredOn: number;
    description: string;
    settings: AccountSettings;
    resourceType: ResourceTypeCode;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
