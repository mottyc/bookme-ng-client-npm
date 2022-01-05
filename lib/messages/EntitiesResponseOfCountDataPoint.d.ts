import { EntityResponse } from '../messages/EntityResponse';
import { CountDataPoint } from '../common/CountDataPoint';
import { IEntityResponse } from '../messages/EntityResponse';
export declare class EntitiesResponseOfCountDataPoint extends EntityResponse {
    list: CountDataPoint[];
    code: number;
    error: string;
}
export interface IEntitiesResponseOfCountDataPoint extends IEntityResponse {
    list?: CountDataPoint[];
    code?: number;
    error?: string;
}
