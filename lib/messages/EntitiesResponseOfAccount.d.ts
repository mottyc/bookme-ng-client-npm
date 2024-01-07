import { Account } from '../entities/Account';
import { EntitiesResponse } from '../messages/EntitiesResponse';
import { IEntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfAccount extends EntitiesResponse {
    list: Account[];
    code: number;
    error: string;
}
export interface IEntitiesResponseOfAccount extends IEntitiesResponse {
    list?: Account[];
    code?: number;
    error?: string;
}
