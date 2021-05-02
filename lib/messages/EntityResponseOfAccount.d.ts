import { EntityResponse } from '../messages/EntityResponse';
import { Account } from '../entities/Account';
import { IEntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfAccount extends EntityResponse {
    entity: Account;
    code: number;
    error: string;
}
export interface IEntityResponseOfAccount extends IEntityResponse {
    entity?: Account;
    code?: number;
    error?: string;
}
