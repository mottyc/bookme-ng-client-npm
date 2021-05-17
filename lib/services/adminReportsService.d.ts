import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import * as i0 from "@angular/core";
/**
 * Services for analytics reports - for account administrator only
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class AdminReportsService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Get count of members over month
     * @Return: EntitiesResponse<Usage>
     */
    getMonthlyCount(year?: number, month?: number): import("rxjs").Observable<any>;
    /**
     * Get count of members over time period
     * @Return: EntitiesResponse<Usage>
     */
    getPeriodCount(from?: number, to?: number): import("rxjs").Observable<any>;
    /**
     * Get distribution by week days over time
     * @Return: EntitiesResponse<StringIntValue>
     */
    getDayOfWeekDistribution(from?: number, to?: number): import("rxjs").Observable<any>;
    /**
     * Get distribution by resource type over time
     * @Return: EntitiesResponse<StringIntValue>
     */
    getResourceTypeDistribution(from?: number, to?: number): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<AdminReportsService, never>;
    static ɵprov: i0.ɵɵInjectableDef<AdminReportsService>;
}
