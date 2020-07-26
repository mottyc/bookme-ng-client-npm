import { ResourceClassCode } from '../enums/ResourceClassCode';
import { BaseEntity } from '../entities/BaseEntity';
import { AccountTypeCode } from '../enums/AccountTypeCode';
import { AccountStatusCode } from '../enums/AccountStatusCode';
import { AccountSettings } from '../common/AccountSettings';
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
    resourceClass: ResourceClassCode;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
