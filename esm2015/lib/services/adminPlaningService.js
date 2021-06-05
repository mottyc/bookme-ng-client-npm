import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/rest-util";
import * as i2 from "../../config";
/**
 * Services for planing club resource placements - for account administrator only
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export class AdminPlaningService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/admin/planing';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Get daily planing - bookings group by activities
     * @Return: EntitiesResponse<ActivityBookingGroup>
     */
    getDailyPlaning(day, resFilter, userFilter) {
        const params = new Array();
        if (resFilter != null) {
            params.push(`resFilter=${resFilter}`);
        }
        if (userFilter != null) {
            params.push(`userFilter=${userFilter}`);
        }
        return this.rest.get(`${this.baseUrl}/daily/${day}`, ...params);
    }
    /**
     * Get list of resources in a specific day
     * @Return: EntitiesResponse<StringKeyValue>
     */
    getDailyResources(day) {
        return this.rest.get(`${this.baseUrl}/daily-resources/${day}`);
    }
    /**
     * Export daily planing - as PDF stream
     * @Return: StreamContent
     */
    exportDailyPlaning(day, lang) {
        const params = new Array();
        if (lang != null) {
            params.push(`lang=${lang}`);
        }
        return this.rest.download(`admin-planing`, `${this.baseUrl}/daily/${day}/export`, ...params);
    }
    /**
     * Find list of free resources for the booking request
     * @Return: EntitiesResponse<Resource>
     */
    findFreeResources(id) {
        return this.rest.get(`${this.baseUrl}/bookings/${id}/resources`);
    }
    /**
     * Assign resource for booking request and approve
     * @Return: ActionResponse
     */
    assignResource(id, resourceId) {
        return this.rest.post(`${this.baseUrl}/bookings/${id}/assign/${resourceId}`, null);
    }
    /**
     * Un assign resource from booking request
     * @Return: ActionResponse
     */
    unAssignResource(id) {
        return this.rest.post(`${this.baseUrl}/bookings/${id}/un-assign`, null);
    }
    /**
     * Merge source and target bookings and recalculate the daily planing
     * @Return: EntitiesResponse<ActivityBookingGroup>
     */
    mergeBookings(day, source, target) {
        return this.rest.post(`${this.baseUrl}/daily/${day}/bookings/${source}/merge/${target}`, null);
    }
    /**
     * Split booking and recalculate the daily planing
     * @Return: EntitiesResponse<ActivityBookingGroup>
     */
    splitBookings(day, id) {
        return this.rest.post(`${this.baseUrl}/daily/${day}/bookings/${id}/split`, null);
    }
    /**
     * Delete booking and recalculate the daily planing
     * @Return: EntitiesResponse<ActivityBookingGroup>
     */
    deleteBooking(day, id) {
        return this.rest.delete(`${this.baseUrl}/daily/${day}/bookings/${id}`);
    }
    /**
     * Delete activity and recalculate the daily planing
     * @Return: EntitiesResponse<ActivityBookingGroup>
     */
    deleteActivity(day, id) {
        return this.rest.delete(`${this.baseUrl}/daily/${day}/activities/${id}`);
    }
    /**
     * Get daily registration list - who is present
     * @Return: EntitiesResponse<Actual>
     */
    getDailyRegistration(day, filter, missingOnly) {
        const params = new Array();
        if (filter != null) {
            params.push(`filter=${filter}`);
        }
        if (missingOnly != null) {
            params.push(`missingOnly=${missingOnly}`);
        }
        return this.rest.get(`${this.baseUrl}/bookings/registration/${day}`, ...params);
    }
    /**
     * Update user registration
     * @Return: ActionResponse
     */
    updateRegistration(body) {
        return this.rest.post(`${this.baseUrl}/bookings/registration`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Report user absence from approved booking
     * @Return: ActionResponse
     */
    reportAbsence(id, userId) {
        const params = new Array();
        if (userId != null) {
            params.push(`userId=${userId}`);
        }
        return this.rest.post(`${this.baseUrl}/bookings/${id}/absence`, null, ...params);
    }
    /**
     * Report incident from registration
     * @Return: ActionResponse
     */
    reportIncident(id, userId, body) {
        const params = new Array();
        if (userId != null) {
            params.push(`userId=${userId}`);
        }
        return this.rest.post(`${this.baseUrl}/bookings/${id}/incident`, typeof body === 'object' ? JSON.stringify(body) : body, ...params);
    }
}
/** @nocollapse */ AdminPlaningService.ɵfac = function AdminPlaningService_Factory(t) { return new (t || AdminPlaningService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
/** @nocollapse */ AdminPlaningService.ɵprov = i0.ɵɵdefineInjectable({ token: AdminPlaningService, factory: AdminPlaningService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminPlaningService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW5QbGFuaW5nU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvc2VydmljZXMvYWRtaW5QbGFuaW5nU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQUsxQzs7OztHQUlHO0FBRUgsTUFBTSxPQUFPLG1CQUFtQjtJQUs5Qjs7T0FFRztJQUNILFlBQXNDLE1BQWtCLEVBQVUsSUFBYztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTtRQU5oRixpQkFBaUI7UUFDVCxZQUFPLEdBQUcsZ0JBQWdCLENBQUM7UUFNakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7O09BR0c7SUFDSCxlQUFlLENBQUMsR0FBWSxFQUFFLFNBQWtCLEVBQUUsVUFBbUI7UUFDbkUsTUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUMzQixJQUFJLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsU0FBUyxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2pFLElBQUksVUFBVSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFFdEUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLFVBQVUsR0FBRyxFQUFFLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsaUJBQWlCLENBQUMsR0FBWTtRQUM1QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sb0JBQW9CLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVEOzs7T0FHRztJQUNILGtCQUFrQixDQUFDLEdBQVksRUFBRSxJQUFhO1FBQzVDLE1BQU0sTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFDM0IsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUVwRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBQyxHQUFHLElBQUksQ0FBQyxPQUFPLFVBQVUsR0FBRyxTQUFTLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUM1RixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsaUJBQWlCLENBQUMsRUFBVztRQUMzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRDs7O09BR0c7SUFDSCxjQUFjLENBQUMsRUFBVyxFQUFFLFVBQW1CO1FBQzdDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxhQUFhLEVBQUUsV0FBVyxVQUFVLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZ0JBQWdCLENBQUMsRUFBVztRQUMxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sYUFBYSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsYUFBYSxDQUFDLEdBQVksRUFBRSxNQUFlLEVBQUUsTUFBZTtRQUMxRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sVUFBVSxHQUFHLGFBQWEsTUFBTSxVQUFVLE1BQU0sRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pHLENBQUM7SUFFRDs7O09BR0c7SUFDSCxhQUFhLENBQUMsR0FBWSxFQUFFLEVBQVc7UUFDckMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLFVBQVUsR0FBRyxhQUFhLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFRDs7O09BR0c7SUFDSCxhQUFhLENBQUMsR0FBWSxFQUFFLEVBQVc7UUFDckMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLFVBQVUsR0FBRyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVEOzs7T0FHRztJQUNILGNBQWMsQ0FBQyxHQUFZLEVBQUUsRUFBVztRQUN0QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sVUFBVSxHQUFHLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsb0JBQW9CLENBQUMsR0FBWSxFQUFFLE1BQWUsRUFBRSxXQUFxQjtRQUN2RSxNQUFNLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzNCLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxXQUFXLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUV6RSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sMEJBQTBCLEdBQUcsRUFBRSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVEOzs7T0FHRztJQUNILGtCQUFrQixDQUFDLElBQWE7UUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLHdCQUF3QixFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekgsQ0FBQztJQUVEOzs7T0FHRztJQUNILGFBQWEsQ0FBQyxFQUFXLEVBQUUsTUFBaUI7UUFDMUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUMzQixJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBRTFELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxhQUFhLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFRDs7O09BR0c7SUFDSCxjQUFjLENBQUMsRUFBVyxFQUFFLE1BQWlCLEVBQUUsSUFBYTtRQUMxRCxNQUFNLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzNCLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFFMUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLGFBQWEsRUFBRSxXQUFXLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUNwSSxDQUFDOzt5R0E1SVUsbUJBQW1CLGNBUVYsUUFBUTs4RUFSakIsbUJBQW1CLFdBQW5CLG1CQUFtQjt1RkFBbkIsbUJBQW1CO2NBRC9CLFVBQVU7O3NCQVNJLE1BQU07dUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmltcG9ydCB7IEFjdHVhbCB9IGZyb20gJy4uL2VudGl0aWVzL0FjdHVhbCc7XG5cblxuLyoqXG4gKiBTZXJ2aWNlcyBmb3IgcGxhbmluZyBjbHViIHJlc291cmNlIHBsYWNlbWVudHMgLSBmb3IgYWNjb3VudCBhZG1pbmlzdHJhdG9yIG9ubHlcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQVBJLUtFWSBUaGUga2V5IHRvIGlkZW50aWZ5IHRoZSBhcHBsaWNhdGlvbiAocG9ydGFsKVxuICogQFJlcXVlc3RIZWFkZXIgWC1BQ0NFU1MtVE9LRU4gVGhlIHRva2VuIHRvIGlkZW50aWZ5IHRoZSBsb2dnZWQtaW4gdXNlciBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFkbWluUGxhbmluZ1NlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvYWRtaW4vcGxhbmluZyc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEdldCBkYWlseSBwbGFuaW5nIC0gYm9va2luZ3MgZ3JvdXAgYnkgYWN0aXZpdGllc1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEFjdGl2aXR5Qm9va2luZ0dyb3VwPlxuICAgKi9cbiAgZ2V0RGFpbHlQbGFuaW5nKGRheT86IG51bWJlciwgcmVzRmlsdGVyPzogc3RyaW5nLCB1c2VyRmlsdGVyPzogc3RyaW5nKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChyZXNGaWx0ZXIgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcmVzRmlsdGVyPSR7cmVzRmlsdGVyfWApOyB9XG4gICAgaWYgKHVzZXJGaWx0ZXIgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdXNlckZpbHRlcj0ke3VzZXJGaWx0ZXJ9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vZGFpbHkvJHtkYXl9YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbGlzdCBvZiByZXNvdXJjZXMgaW4gYSBzcGVjaWZpYyBkYXlcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxTdHJpbmdLZXlWYWx1ZT5cbiAgICovXG4gIGdldERhaWx5UmVzb3VyY2VzKGRheT86IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vZGFpbHktcmVzb3VyY2VzLyR7ZGF5fWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cG9ydCBkYWlseSBwbGFuaW5nIC0gYXMgUERGIHN0cmVhbVxuICAgKiBAUmV0dXJuOiBTdHJlYW1Db250ZW50XG4gICAqL1xuICBleHBvcnREYWlseVBsYW5pbmcoZGF5PzogbnVtYmVyLCBsYW5nPzogc3RyaW5nKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChsYW5nICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGxhbmc9JHtsYW5nfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmRvd25sb2FkKGBhZG1pbi1wbGFuaW5nYCxgJHt0aGlzLmJhc2VVcmx9L2RhaWx5LyR7ZGF5fS9leHBvcnRgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgbGlzdCBvZiBmcmVlIHJlc291cmNlcyBmb3IgdGhlIGJvb2tpbmcgcmVxdWVzdFxuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPFJlc291cmNlPlxuICAgKi9cbiAgZmluZEZyZWVSZXNvdXJjZXMoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2Jvb2tpbmdzLyR7aWR9L3Jlc291cmNlc2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFzc2lnbiByZXNvdXJjZSBmb3IgYm9va2luZyByZXF1ZXN0IGFuZCBhcHByb3ZlXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBhc3NpZ25SZXNvdXJjZShpZD86IHN0cmluZywgcmVzb3VyY2VJZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2Jvb2tpbmdzLyR7aWR9L2Fzc2lnbi8ke3Jlc291cmNlSWR9YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogVW4gYXNzaWduIHJlc291cmNlIGZyb20gYm9va2luZyByZXF1ZXN0XG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICB1bkFzc2lnblJlc291cmNlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vYm9va2luZ3MvJHtpZH0vdW4tYXNzaWduYCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogTWVyZ2Ugc291cmNlIGFuZCB0YXJnZXQgYm9va2luZ3MgYW5kIHJlY2FsY3VsYXRlIHRoZSBkYWlseSBwbGFuaW5nXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8QWN0aXZpdHlCb29raW5nR3JvdXA+XG4gICAqL1xuICBtZXJnZUJvb2tpbmdzKGRheT86IG51bWJlciwgc291cmNlPzogc3RyaW5nLCB0YXJnZXQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9kYWlseS8ke2RheX0vYm9va2luZ3MvJHtzb3VyY2V9L21lcmdlLyR7dGFyZ2V0fWAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwbGl0IGJvb2tpbmcgYW5kIHJlY2FsY3VsYXRlIHRoZSBkYWlseSBwbGFuaW5nXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8QWN0aXZpdHlCb29raW5nR3JvdXA+XG4gICAqL1xuICBzcGxpdEJvb2tpbmdzKGRheT86IG51bWJlciwgaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9kYWlseS8ke2RheX0vYm9va2luZ3MvJHtpZH0vc3BsaXRgLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYm9va2luZyBhbmQgcmVjYWxjdWxhdGUgdGhlIGRhaWx5IHBsYW5pbmdcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxBY3Rpdml0eUJvb2tpbmdHcm91cD5cbiAgICovXG4gIGRlbGV0ZUJvb2tpbmcoZGF5PzogbnVtYmVyLCBpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vZGFpbHkvJHtkYXl9L2Jvb2tpbmdzLyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGFjdGl2aXR5IGFuZCByZWNhbGN1bGF0ZSB0aGUgZGFpbHkgcGxhbmluZ1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEFjdGl2aXR5Qm9va2luZ0dyb3VwPlxuICAgKi9cbiAgZGVsZXRlQWN0aXZpdHkoZGF5PzogbnVtYmVyLCBpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vZGFpbHkvJHtkYXl9L2FjdGl2aXRpZXMvJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZGFpbHkgcmVnaXN0cmF0aW9uIGxpc3QgLSB3aG8gaXMgcHJlc2VudFxuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEFjdHVhbD5cbiAgICovXG4gIGdldERhaWx5UmVnaXN0cmF0aW9uKGRheT86IG51bWJlciwgZmlsdGVyPzogc3RyaW5nLCBtaXNzaW5nT25seT86IGJvb2xlYW4pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGZpbHRlciAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmaWx0ZXI9JHtmaWx0ZXJ9YCk7IH1cbiAgICBpZiAobWlzc2luZ09ubHkgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgbWlzc2luZ09ubHk9JHttaXNzaW5nT25seX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9ib29raW5ncy9yZWdpc3RyYXRpb24vJHtkYXl9YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdXNlciByZWdpc3RyYXRpb25cbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIHVwZGF0ZVJlZ2lzdHJhdGlvbihib2R5PzogQWN0dWFsKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vYm9va2luZ3MvcmVnaXN0cmF0aW9uYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBvcnQgdXNlciBhYnNlbmNlIGZyb20gYXBwcm92ZWQgYm9va2luZ1xuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgcmVwb3J0QWJzZW5jZShpZD86IHN0cmluZywgdXNlcklkPzogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKHVzZXJJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB1c2VySWQ9JHt1c2VySWR9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2Jvb2tpbmdzLyR7aWR9L2Fic2VuY2VgLCBudWxsLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcG9ydCBpbmNpZGVudCBmcm9tIHJlZ2lzdHJhdGlvblxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgcmVwb3J0SW5jaWRlbnQoaWQ/OiBzdHJpbmcsIHVzZXJJZD86IHN0cmluZ1tdLCBib2R5Pzogc3RyaW5nKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmICh1c2VySWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdXNlcklkPSR7dXNlcklkfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9ib29raW5ncy8ke2lkfS9pbmNpZGVudGAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSwgLi4ucGFyYW1zKTtcbiAgfVxuXG59XG4iXX0=