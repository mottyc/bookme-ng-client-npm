import { UserTypeCode } from '../enums/UserTypeCode';
import { UserStatusCode } from '../enums/UserStatusCode';
export interface UsersServiceExportRequest {
    search?: string;
    type?: UserTypeCode[];
    status?: UserStatusCode[];
    sort?: string;
    format?: string;
    fields?: string[];
}
