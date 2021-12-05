import { Absence } from '../entities/Absence';
import { EntityResponse } from '../messages/EntityResponse';
import { IEntityResponse } from '../messages/EntityResponse';
export declare class EntitiesResponseOfAbsence extends EntityResponse {
    list: Absence[];
    code: number;
    error: string;
}
export interface IEntitiesResponseOfAbsence extends IEntityResponse {
    list?: Absence[];
    code?: number;
    error?: string;
}
