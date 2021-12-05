import { Incident } from '../entities/Incident';
import { EntityResponse } from '../messages/EntityResponse';
import { IEntityResponse } from '../messages/EntityResponse';
export declare class EntitiesResponseOfIncident extends EntityResponse {
    list: Incident[];
    code: number;
    error: string;
}
export interface IEntitiesResponseOfIncident extends IEntityResponse {
    list?: Incident[];
    code?: number;
    error?: string;
}
