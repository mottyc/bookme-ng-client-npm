import { User } from '../entities/User';
export declare class AdminUsersBulkCreateRequest {
    body: User[];
    constructor(body?: User[]);
}
export interface IAdminUsersBulkCreateRequest {
    body?: User[];
}
