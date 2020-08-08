import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { Booking } from '../entities/Booking';
import { TimeUnitCode } from '../enums/TimeUnitCode';
import * as i0 from "@angular/core";
/**
 * Services for managing kayak resources - for account administrator only
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class UserBookingsService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Create new booking
     * @Return: EntityResponse<Booking>
     */
    create(body?: Booking): import("rxjs").Observable<any>;
    /**
     * Update booking
     * @Return: EntityResponse<Booking>
     */
    update(body?: Booking): import("rxjs").Observable<any>;
    /**
     * Delete booking
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single booking by id
     * @Return: EntityResponse<Booking>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Find bookings by filters
     * @Return: QueryResponse<Booking>
     */
    find(userId?: string, resourceId?: string, from?: number, to?: number, sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Group my bookings by time
     * @Return: EntitiesResponse<BookingGroup>
     */
    groups(from?: number, to?: number, groupBy?: TimeUnitCode): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<UserBookingsService, never>;
    static ɵprov: i0.ɵɵInjectableDef<UserBookingsService>;
}
