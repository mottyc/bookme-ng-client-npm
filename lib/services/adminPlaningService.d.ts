import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
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
     * Find list of free resources for the booking request
     * @Return: EntitiesResponse<Resource>
     */
    findFreeResources(id?: string): import("rxjs").Observable<any>;
    /**
     * Assign resource for booking request and approve
     * @Return: ActionResponse
     */
    assignResource(id?: string, resourceId?: string): import("rxjs").Observable<any>;
    /**
     * Un assign resource from booking request
     * @Return: ActionResponse
     */
    unAssignResource(id?: string): import("rxjs").Observable<any>;
    /**
     * Merge source and target bookings and recalculate the daily planing
     * @Return: EntitiesResponse<ActivityBookingGroup>
     */
    mergeBookings(day?: number, source?: string, target?: string): import("rxjs").Observable<any>;
    /**
     * Split booking and recalculate the daily planing
     * @Return: EntitiesResponse<ActivityBookingGroup>
     */
    splitBookings(day?: number, id?: string): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<AdminPlaningService, never>;
    static ɵprov: i0.ɵɵInjectableDef<AdminPlaningService>;
}
