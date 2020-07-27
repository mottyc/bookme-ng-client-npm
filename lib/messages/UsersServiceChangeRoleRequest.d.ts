import { AccountRoleCode } from '../enums/AccountRoleCode';
export interface UsersServiceChangeRoleRequest {
    id?: string;
    role?: AccountRoleCode;
}
