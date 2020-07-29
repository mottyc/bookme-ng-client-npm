import { Resource } from '../entities/Resource';
export declare class AdminResourceBulkCreateRequest {
    body: Resource[];
    constructor(body?: Resource[]);
}
export interface IAdminResourceBulkCreateRequest {
    body?: Resource[];
}
