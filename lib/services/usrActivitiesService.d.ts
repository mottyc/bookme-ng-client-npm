import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { AccountRoleCode } from '../enums/AccountRoleCode';
import * as i0 from "@angular/core";
/**
 * Services for managing club activities - for account administrator only
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class UsrActivitiesService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Get single activity by id
     * @Return: EntityResponse<Activity>
     */
    get(id: string): import("rxjs").Observable<any>;
    /**
     * Find activities by time range
     * @Return: QueryResponse<Activity>
     */
    find(from: number, to: number, year: number, month: number, day: number, total: boolean): import("rxjs").Observable<any>;
    /**
     * Find list of free resources for activity by filter
     * @Return: EntitiesResponse<Resource>
     */
    findFreeResources(id: string, resType: number, weight: number, forUseBy: AccountRoleCode): import("rxjs").Observable<any>;
    /**
     * Find list of all resources for activity and mark the assigned activities
     * @Return: EntitiesResponse<Resource>
     */
    findAllResources(id: string): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UsrActivitiesService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UsrActivitiesService>;
}
