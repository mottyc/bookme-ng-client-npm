import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { MemberStatusCode } from '../enums/MemberStatusCode';
import { AccountRoleCode } from '../enums/AccountRoleCode';
import * as i0 from "@angular/core";
/**
 * List of all user related actions for account administrator only
 */
export declare class UsrMembersService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Get single member by id (including user data)
     * @Return: EntityResponse<MemberUser>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Get my (logged-in user) member info (including user data)
     * @Return: EntityResponse<MemberUser>
     */
    getMy(): import("rxjs").Observable<any>;
    /**
     * Find list of users and filter the list
     * System user will see all users, Account system will see all users of the account, registered user will get an error.
     * @Return: QueryResponse<MemberUser>
     */
    find(search?: string, role?: AccountRoleCode[], status?: MemberStatusCode[], sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<UsrMembersService, never>;
    static ɵprov: i0.ɵɵInjectableDef<UsrMembersService>;
}
