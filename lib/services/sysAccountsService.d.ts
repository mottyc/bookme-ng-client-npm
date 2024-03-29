import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { AccountStatusCode } from '../enums/AccountStatusCode';
import { Account } from '../entities/Account';
import { AccountTypeCode } from '../enums/AccountTypeCode';
import * as i0 from "@angular/core";
/**
 * List of account related actions for system administrator only
 * @RequestHeader X-API-KEY The key to identify the application (console)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class SysAccountsService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Create new account
     * @Return: EntityResponse<Account>
     */
    create(body: Account): import("rxjs").Observable<any>;
    /**
     * Update existing account in the system
     * @Return: EntityResponse<Account>
     */
    update(body: Account): import("rxjs").Observable<any>;
    /**
     * Delete account from the system
     * The account is moved to DELETED mode and will be deleted after 90 days
     * Only account marked as SUSPENDED can be deleted
     * @Return: ActionResponse
     */
    delete(id: string): import("rxjs").Observable<any>;
    /**
     * Delete account immediately without account status restrictions
     * @Return: ActionResponse
     */
    purge(id: string): import("rxjs").Observable<any>;
    /**
     * Reset account - remove all operational data older than the retention time in days (events, status, log ...) but leave configuration data
     * @Return: ActionResponse
     */
    reset(id: string, days: number): import("rxjs").Observable<any>;
    /**
     * Get single account by id
     * @Return: EntityResponse<Account>
     */
    get(id: string): import("rxjs").Observable<any>;
    /**
     * Find list of accounts and filter
     * @Return: QueryResponse<Account>
     */
    find(search: string, type: AccountTypeCode[], status: AccountStatusCode[], sort: string, page: number, pageSize: number): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SysAccountsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SysAccountsService>;
}
