import { BaseEntity } from '../entities/BaseEntity';
export declare class Incident extends BaseEntity {
    resourceId: string;
    involved: string[];
    occurredOn: number;
    description: string;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
