import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { Resource } from '../entities/Resource';
import { ResourceClassCode } from '../enums/ResourceClassCode';
import { ResourceTypeMask } from '../enums/ResourceTypeMask';
import { ResourceStatusCode } from '../enums/ResourceStatusCode';
import { AccountRoleCode } from '../enums/AccountRoleCode';
import * as i0 from "@angular/core";
/**
 * Services for managing club resources - for account administrator only
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class AdminResourcesService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Create new resource
     * @Return: EntityResponse<Resource>
     */
    create(body?: Resource): import("rxjs").Observable<any>;
    /**
     * Update resource
     * @Return: EntityResponse<Resource>
     */
    update(body?: Resource): import("rxjs").Observable<any>;
    /**
     * Delete resource
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single resource by id
     * @Return: EntityResponse<Resource>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Find resources by filters
     * @Return: QueryResponse<Resource>
     */
    find(search?: string, resourceClass?: ResourceClassCode, resourceType?: ResourceTypeMask, status?: ResourceStatusCode, forUseBy?: AccountRoleCode, sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Import bulk set of resources
     * @Return: ActionResponse
     */
    bulkImport(body?: Resource[]): import("rxjs").Observable<any>;
    /**
     * Find list of all bookings for a resource by filter per month
     * @Return: QueryResponse<Booking>
     */
    findResourceMonthHistory(id?: string, year?: number, month?: number, day?: number, sort?: string): import("rxjs").Observable<any>;
    /**
     * Find list of all bookings for a resource by filter per time period
     * @Return: QueryResponse<Booking>
     */
    findResourceHistory(id?: string, from?: number, to?: number, sort?: string): import("rxjs").Observable<any>;
    /**
     * Import resources from a file
     * The file must include header with the columns: Name, Type, Min, Max, Brand, Description
     * @return ActionResponse
     */
    importFile(): import("rxjs").Observable<any>;
    /**
     * Export resources to a file
     * @return StreamContent
     */
    exportFile(format?: string, search?: string, resourceClass?: ResourceClassCode, resourceType?: ResourceTypeMask, status?: ResourceStatusCode, forUseBy?: AccountRoleCode, sort?: string): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AdminResourcesService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AdminResourcesService>;
}
