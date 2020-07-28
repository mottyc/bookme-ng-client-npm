import { AccountRoleCode } from '../enums/AccountRoleCode';
export declare class UsersServiceSetRolesRequest {
    id: string;
    roles: AccountRoleCode[];
    constructor(id?: string, roles?: AccountRoleCode[]);
}
export interface IUsersServiceSetRolesRequest {
    id?: string;
    roles?: AccountRoleCode[];
}
