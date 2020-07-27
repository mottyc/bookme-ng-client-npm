import { UserStatusCode } from '../enums/UserStatusCode';
export interface UsersServiceChangeStatusRequest {
    id?: string;
    status?: UserStatusCode;
}
