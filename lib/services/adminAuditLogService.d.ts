import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { EntityTypeCode } from '../enums/EntityTypeCode';
import * as i0 from "@angular/core";
/**
 * Services for audit log queries - for account administrator only
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class AdminAuditLogService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Get single audit log entry
     * @Return: EntityResponse<AuditLog>
     */
    get(id: string): import("rxjs").Observable<any>;
    /**
     * Find list of audit log entries by filters
     * @Return: EntityResponse<AuditLog>
     */
    find(from: number, to: number, accountId: string, userId: string, itemId: string, itemType: EntityTypeCode, of: string, sort: string, page: number, pageSize: number): import("rxjs").Observable<any>;
    /**
     * Find list of auto-placement log entries by filters
     * @Return: EntityResponse<AutoPlacementLog>
     */
    autoPlacementLog(from: number, to: number, accountId: string, userId: string, itemId: string, itemType: EntityTypeCode, of: string, sort: string, page: number, pageSize: number): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AdminAuditLogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AdminAuditLogService>;
}
