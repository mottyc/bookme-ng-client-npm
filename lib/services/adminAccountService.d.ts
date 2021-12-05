import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { AccountSettings } from '../common/AccountSettings';
import * as i0 from "@angular/core";
/**
 * List of account related actions for account administrator only
 * @RequestHeader X-API-KEY The key to identify the application (console)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class AdminAccountService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Get account settings
     * @Return: EntityResponse<AccountSettings>
     */
    getSettings(): import("rxjs").Observable<any>;
    /**
     * Update existing account settings in the system
     * @Return: EntityResponse<AccountSettings>
     */
    updateSettings(body?: AccountSettings): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AdminAccountService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AdminAccountService>;
}
