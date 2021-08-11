import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { Actual } from '../entities/Actual';
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
    getDailyPlaning(day?: number, resFilter?: string, userFilter?: string): import("rxjs").Observable<any>;
    /**
     * Get list of resources in a specific day
     * @Return: EntitiesResponse<StringKeyValue>
     */
    getDailyResources(day?: number): import("rxjs").Observable<any>;
    /**
     * Export daily planing - as PDF stream
     * @Return: StreamContent
     */
    exportDailyPlaning(day?: number, lang?: string): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
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
    /**
     * Delete booking and recalculate the daily planing
     * @Return: EntitiesResponse<ActivityBookingGroup>
     */
    deleteBooking(day?: number, id?: string): import("rxjs").Observable<any>;
    /**
     * Delete activity and recalculate the daily planing
     * @Return: EntitiesResponse<ActivityBookingGroup>
     */
    deleteActivity(day?: number, id?: string): import("rxjs").Observable<any>;
    /**
     * Get daily registration list - who is present
     * @Return: EntitiesResponse<Actual>
     */
    getDailyRegistration(day?: number, filter?: string, missingOnly?: boolean): import("rxjs").Observable<any>;
    /**
     * Update user registration
     * @Return: ActionResponse
     */
    updateRegistration(body?: Actual): import("rxjs").Observable<any>;
    /**
     * Report user absence from approved booking
     * @Return: ActionResponse
     */
    reportAbsence(id?: string, userId?: string[]): import("rxjs").Observable<any>;
    /**
     * Report incident from registration
     * @Return: ActionResponse
     */
    reportIncident(id?: string, userId?: string[], body?: string): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<AdminPlaningService, never>;
    static ɵprov: i0.ɵɵInjectableDef<AdminPlaningService>;
}
