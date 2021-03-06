import { StringKeyValue } from '../common/StringKeyValue';
import { BaseEntity } from '../entities/BaseEntity';
import { IBaseEntity } from '../entities/BaseEntity';
export declare class ApiKey extends BaseEntity {
    key: string;
    ttl: number;
    acl: StringKeyValue[];
    version: number;
    isSystemKey: boolean;
    isEnabled: boolean;
    id: string;
    createdOn: number;
    updatedOn: number;
}
export interface IApiKey extends IBaseEntity {
    key?: string;
    ttl?: number;
    acl?: StringKeyValue[];
    version?: number;
    isSystemKey?: boolean;
    isEnabled?: boolean;
    id?: string;
    createdOn?: number;
    updatedOn?: number;
}
