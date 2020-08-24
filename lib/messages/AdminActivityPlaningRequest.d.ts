import { ResourceTypeMask } from '../enums/ResourceTypeMask';
export declare class AdminActivityPlaningRequest {
    id: string;
    resourceType: ResourceTypeMask;
    constructor(id?: string, resourceType?: ResourceTypeMask);
}
export interface IAdminActivityPlaningRequest {
    id?: string;
    resourceType?: ResourceTypeMask;
}
