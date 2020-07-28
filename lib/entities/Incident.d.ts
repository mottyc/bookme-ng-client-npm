import { BaseEntity } from '../entities/BaseEntity';
import { IBaseEntity } from '../entities/BaseEntity';
export declare class Incident extends BaseEntity {
    resourceId: string;
    involved: string[];
    occurredOn: number;
    description: string;
    id: string;
    createdOn: number;
    updatedOn: number;
}
export interface IIncident extends IBaseEntity {
    resourceId?: string;
    involved?: string[];
    occurredOn?: number;
    description?: string;
    id?: string;
    createdOn?: number;
    updatedOn?: number;
}
