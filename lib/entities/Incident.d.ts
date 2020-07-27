import { BaseEntity } from '../entities/BaseEntity';
export interface Incident extends BaseEntity {
    resourceId?: string;
    involved?: string[];
    occurredOn?: number;
    description?: string;
    id?: string;
    _type?: string;
    createdOn?: number;
    updatedOn?: number;
}
