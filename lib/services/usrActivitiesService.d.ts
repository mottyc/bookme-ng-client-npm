import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
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
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Find activities by time range
     * @Return: QueryResponse<Activity>
     */
    find(from?: number, to?: number, year?: number, month?: number, day?: number, total?: boolean): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<UsrActivitiesService, never>;
    static ɵprov: i0.ɵɵInjectableDef<UsrActivitiesService>;
}
