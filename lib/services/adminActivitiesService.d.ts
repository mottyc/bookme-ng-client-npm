import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { Activity } from '../entities/Activity';
import { UseTypeCode } from '../enums/UseTypeCode';
import * as i0 from "@angular/core";
/**
 * Services for managing club activities - for account administrator only
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class AdminActivitiesService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Create new activity
     * @Return: EntityResponse<Activity>
     */
    create(body?: Activity): import("rxjs").Observable<any>;
    /**
     * Update activity
     * @Return: EntityResponse<Activity>
     */
    update(body?: Activity): import("rxjs").Observable<any>;
    /**
     * Delete activity
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single activity by id
     * @Return: EntityResponse<Activity>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Get previous activity related to this activity id
     * @Return: EntityResponse<Activity>
     */
    prev(id?: string): import("rxjs").Observable<any>;
    /**
     * Get next activity related to this activity id
     * @Return: EntityResponse<Activity>
     */
    next(id?: string): import("rxjs").Observable<any>;
    /**
     * Find activities by time range
     * @Return: QueryResponse<Activity>
     */
    find(from?: number, to?: number, year?: number, month?: number, day?: number): import("rxjs").Observable<any>;
    /**
     * Find list of free resources for activity by filter
     * @Return: EntitiesResponse<Resource>
     */
    findFreeResources(id?: string): import("rxjs").Observable<any>;
    /**
     * Create bulk set of activities
     * @Return: ActionResponse
     */
    createBulk(resType?: number, weight?: number, forUseBy?: UseTypeCode, body?: Activity[]): import("rxjs").Observable<any>;
    /**
     * Create account default set of activities per month
     * @Return: ActionResponse
     */
    createDefault(year?: number, month?: number): import("rxjs").Observable<any>;
    /**
     * Clear all month activities
     * @Return: ActionResponse
     */
    clearDefault(year?: number, month?: number): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<AdminActivitiesService, never>;
    static ɵprov: i0.ɵɵInjectableDef<AdminActivitiesService>;
}
