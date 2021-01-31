import { AccountSettings } from '../common/AccountSettings';
import { EntityResponse } from '../messages/EntityResponse';
import { IEntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfAccountSettings extends EntityResponse {
    entity: AccountSettings;
    code: number;
    error: string;
}
export interface IEntityResponseOfAccountSettings extends IEntityResponse {
    entity?: AccountSettings;
    code?: number;
    error?: string;
}
