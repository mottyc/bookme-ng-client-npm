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
    getMonthlyCount(year: number, month: number): import("rxjs").Observable<any>;
    /**
     * Get usage report over time period
     * @Return: EntitiesResponse<Usage>
     */
    getPeriodCount(from: number, to: number): import("rxjs").Observable<any>;
    /**
     * Export usage over time period to EXCEL
     * @Return: StreamContent
     */
    exportPeriodCount(from: number, to: number): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Get distribution by week days over time
     * @Return: EntitiesResponse<StringIntValue>
     */
    getDayOfWeekDistribution(from: number, to: number): import("rxjs").Observable<any>;
    /**
     * Get distribution by resource type over time
     * @Return: EntitiesResponse<StringIntValue>
     */
    getResourceTypeDistribution(from: number, to: number): import("rxjs").Observable<any>;
    /**
     * Get count of activities per member over time period
     * @Return: EntitiesResponse<MemberUsage>
     */
    getPeriodCountByMember(from: number, to: number): import("rxjs").Observable<any>;
    /**
     * Export count of activities per member over time period to EXCEL
     * @Return: StreamContent
     */
    exportPeriodCountByMember(from: number, to: number): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Get count of activities per resource over time period
     * @Return: EntitiesResponse<MemberUsage>
     */
    getPeriodCountByResource(from: number, to: number): import("rxjs").Observable<any>;
    /**
     * Export count of activities per resource over time period to EXCEL
     * @Return: StreamContent
     */
    exportPeriodCountByResource(from: number, to: number): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Get members absence report over time period
     * @Return: EntitiesResponse<Absence>
     */
    getPeriodAbsences(from: number, to: number): import("rxjs").Observable<any>;
    /**
     * Export members absence report over time period to EXCEL
     * @Return: StreamContent
     */
    exportPeriodAbsences(from: number, to: number): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Get members incidents report over time period
     * @Return: EntitiesResponse<Incident>
     */
    getPeriodIncidents(from: number, to: number): import("rxjs").Observable<any>;
    /**
     * Export members incidents report over time period to EXCEL
     * @Return: StreamContent
     */
    exportPeriodIncidents(from: number, to: number): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AdminReportsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AdminReportsService>;
}
