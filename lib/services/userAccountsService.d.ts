import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { AccountStatusCode } from '../enums/AccountStatusCode';
import { AccountTypeCode } from '../enums/AccountTypeCode';
import * as i0 from "@angular/core";
/**
 * List of account related actions
 */
export declare class UserAccountsService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Find list of accounts and filter
     * @Return: QueryResponse<Account>
     */
    find(search?: string, type?: AccountTypeCode[], status?: AccountStatusCode[], sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Get single account by id
     * @Return: EntityResponse<Account>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Get list of user memberships
     * @Return: EntitiesResponse<Membership>
     */
    getMemberships(): import("rxjs").Observable<any>;
    /**
     * Delete membership by id
     * @Return: ActionResponse
     */
    deleteMemberships(id?: string): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<UserAccountsService, never>;
    static ɵprov: i0.ɵɵInjectableDef<UserAccountsService>;
}
