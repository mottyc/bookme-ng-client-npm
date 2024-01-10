import { EntitiesResponse } from '../messages/EntitiesResponse';
import { Membership } from '../entities/Membership';
import { IEntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfMembership extends EntitiesResponse {
    list: Membership[];
    code: number;
    error: string;
}
export interface IEntitiesResponseOfMembership extends IEntitiesResponse {
    list?: Membership[];
    code?: number;
    error?: string;
}
