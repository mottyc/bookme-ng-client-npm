import { AccountRoleCode } from '../enums/AccountRoleCode';
export interface UsersServiceSetRolesRequest {
    id?: string;
    roles?: AccountRoleCode[];
}
