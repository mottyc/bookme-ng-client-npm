import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { Activity } from '../entities/Activity';
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
     * @Return: EntityResponse<Resource>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Find activities by time range
     * @Return: QueryResponse<Activity>
     */
    find(from?: number, to?: number): import("rxjs").Observable<any>;
    /**
     * Create bulk set of activities
     * @Return: ActionResponse
     */
    bulkCreate(body?: Activity[]): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<AdminActivitiesService, never>;
    static ɵprov: i0.ɵɵInjectableDef<AdminActivitiesService>;
}