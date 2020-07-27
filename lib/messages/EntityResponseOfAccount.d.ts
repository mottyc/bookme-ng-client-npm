import { Account } from '../entities/Account';
import { EntityResponse } from '../messages/EntityResponse';
export interface EntityResponseOfAccount extends EntityResponse {
    entity?: Account;
    code?: number;
    error?: string;
}
