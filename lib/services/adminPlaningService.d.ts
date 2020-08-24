import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { ResourceTypeMask } from '../enums/ResourceTypeMask';
import * as i0 from "@angular/core";
/**
 * Services for planing club resource placements - for account administrator only
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class AdminPlaningService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Get daily planing - bookings group by activities
     * @Return: EntitiesResponse<ActivityBookingGroup>
     */
    getDailyPlaning(day?: number): import("rxjs").Observable<any>;
    /**
     * Get Activity planing
     * @Return: EntityResponse<Planing>
     */
    getPlaning(id?: string, resourceType?: ResourceTypeMask): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<AdminPlaningService, never>;
    static ɵprov: i0.ɵɵInjectableDef<AdminPlaningService>;
}
