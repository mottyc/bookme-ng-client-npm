import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { Resource } from '../entities/Resource';
import { ResourceClassCode } from '../enums/ResourceClassCode';
import { ResourceTypeMask } from '../enums/ResourceTypeMask';
import { ResourceStatusCode } from '../enums/ResourceStatusCode';
import { UseTypeCode } from '../enums/UseTypeCode';
import * as i0 from "@angular/core";
/**
 * Services for managing kayak resources - for account administrator only
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class AdminKayaksService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Create new kayak resource
     * @Return: EntityResponse<Resource>
     */
    create(body?: Resource): import("rxjs").Observable<any>;
    /**
     * Update kayak resource
     * @Return: EntityResponse<Resource>
     */
    update(body?: Resource): import("rxjs").Observable<any>;
    /**
     * Delete kayak resource
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single kayak by id
     * @Return: EntityResponse<Resource>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Find kayaks by filters
     * @Return: QueryResponse<Resource>
     */
    find(search?: string, resourceClass?: ResourceClassCode, resourceType?: ResourceTypeMask, status?: ResourceStatusCode, forUseBy?: UseTypeCode, sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<AdminKayaksService, never>;
    static ɵprov: i0.ɵɵInjectableDef<AdminKayaksService>;
}
