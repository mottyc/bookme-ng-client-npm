import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { Placement } from '../entities/Placement';
import { BookingStatusCode } from '../enums/BookingStatusCode';
import * as i0 from "@angular/core";
/**
 * Services for managing user placements (approved bookings)
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class UserPlacementsService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Create new placement
     * @Return: EntityResponse<Placement>
     */
    create(body?: Placement): import("rxjs").Observable<any>;
    /**
     * Update placement
     * @Return: EntityResponse<Placement>
     */
    update(body?: Placement): import("rxjs").Observable<any>;
    /**
     * Delete placement
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single placement by id
     * @Return: EntityResponse<Placement>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Find placements by filters
     * @Return: QueryResponse<Placement>
     */
    find(userId?: string, resourceId?: string, bookingId?: string, status?: BookingStatusCode, sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<UserPlacementsService, never>;
    static ɵprov: i0.ɵɵInjectableDef<UserPlacementsService>;
}
