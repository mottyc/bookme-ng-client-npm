import { EntitiesResponse } from '../messages/EntitiesResponse';
import { Activity } from '../entities/Activity';
import { IEntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfActivity extends EntitiesResponse {
    list: Activity[];
    code: number;
    error: string;
}
export interface IEntitiesResponseOfActivity extends IEntitiesResponse {
    list?: Activity[];
    code?: number;
    error?: string;
}
