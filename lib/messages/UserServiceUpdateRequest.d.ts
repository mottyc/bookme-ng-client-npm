import { User } from '../entities/User';
export declare class UserServiceUpdateRequest {
    body: User;
    constructor(body?: User);
}
export interface IUserServiceUpdateRequest {
    body?: User;
}
