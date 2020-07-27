import { Account } from '../entities/Account';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export interface EntitiesResponseOfAccount extends EntitiesResponse {
    list?: Account[];
    code?: number;
    error?: string;
}
