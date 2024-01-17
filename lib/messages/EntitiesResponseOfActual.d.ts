import { Actual } from '../entities/Actual';
import { EntitiesResponse } from '../messages/EntitiesResponse';
import { IEntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfActual extends EntitiesResponse {
    list: Actual[];
    code: number;
    error: string;
}
export interface IEntitiesResponseOfActual extends IEntitiesResponse {
    list?: Actual[];
    code?: number;
    error?: string;
}
