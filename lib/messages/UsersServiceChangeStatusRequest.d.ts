import { UserStatusCode } from '../enums/UserStatusCode';
export declare class UsersServiceChangeStatusRequest {
    id: string;
    status: UserStatusCode;
    constructor(id?: string, status?: UserStatusCode);
}
export interface IUsersServiceChangeStatusRequest {
    id?: string;
    status?: UserStatusCode;
}
