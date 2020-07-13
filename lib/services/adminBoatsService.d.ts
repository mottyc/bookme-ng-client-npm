import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { RowingBoat } from '../entities/RowingBoat';
import * as i0 from "@angular/core";
/**
 * Services for managing boats resources - for account administrator only
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class AdminBoatsService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Create new boat resource
     * @Return: EntityResponse<RowingBoat>
     */
    create(body?: RowingBoat): import("rxjs").Observable<any>;
    /**
     * Update boat resource
     * @Return: EntityResponse<RowingBoat>
     */
    update(body?: RowingBoat): import("rxjs").Observable<any>;
    /**
     * Delete boat resource
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single boat by id
     * @Return: EntityResponse<RowingBoat>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Find boats by filters
     * @Return: QueryResponse<RowingBoat>
     */
    find(usedBy?: string, resourceId?: string, sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<AdminBoatsService, never>;
    static ɵprov: i0.ɵɵInjectableDef<AdminBoatsService>;
}
