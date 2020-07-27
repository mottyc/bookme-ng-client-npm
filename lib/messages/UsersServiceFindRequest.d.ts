import { UserTypeCode } from '../enums/UserTypeCode';
import { UserStatusCode } from '../enums/UserStatusCode';
export interface UsersServiceFindRequest {
    accountId?: string;
    search?: string;
    type?: UserTypeCode[];
    status?: UserStatusCode[];
    sort?: string;
    page?: number;
    pageSize?: number;
}
