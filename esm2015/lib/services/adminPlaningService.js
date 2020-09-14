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
    getDailyPlaning(day) {
        return this.rest.get(`${this.baseUrl}/daily/${day}`);
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
}
/** @nocollapse */ AdminPlaningService.ɵfac = function AdminPlaningService_Factory(t) { return new (t || AdminPlaningService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
/** @nocollapse */ AdminPlaningService.ɵprov = i0.ɵɵdefineInjectable({ token: AdminPlaningService, factory: AdminPlaningService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AdminPlaningService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW5QbGFuaW5nU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvc2VydmljZXMvYWRtaW5QbGFuaW5nU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQUkxQzs7OztHQUlHO0FBRUgsTUFBTSxPQUFPLG1CQUFtQjtJQUs5Qjs7T0FFRztJQUNILFlBQXNDLE1BQWtCLEVBQVUsSUFBYztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTtRQU5oRixpQkFBaUI7UUFDVCxZQUFPLEdBQUcsZ0JBQWdCLENBQUM7UUFNakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7O09BR0c7SUFDSCxlQUFlLENBQUMsR0FBWTtRQUMxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sVUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRDs7O09BR0c7SUFDSCxrQkFBa0IsQ0FBQyxHQUFZLEVBQUUsSUFBYTtRQUM1QyxNQUFNLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzNCLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFFcEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxVQUFVLEdBQUcsU0FBUyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDNUYsQ0FBQztJQUVEOzs7T0FHRztJQUNILGlCQUFpQixDQUFDLEVBQVc7UUFDM0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsY0FBYyxDQUFDLEVBQVcsRUFBRSxVQUFtQjtRQUM3QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sYUFBYSxFQUFFLFdBQVcsVUFBVSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckYsQ0FBQztJQUVEOzs7T0FHRztJQUNILGdCQUFnQixDQUFDLEVBQVc7UUFDMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLGFBQWEsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVEOzs7T0FHRztJQUNILGFBQWEsQ0FBQyxHQUFZLEVBQUUsTUFBZSxFQUFFLE1BQWU7UUFDMUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLFVBQVUsR0FBRyxhQUFhLE1BQU0sVUFBVSxNQUFNLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsYUFBYSxDQUFDLEdBQVksRUFBRSxFQUFXO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxVQUFVLEdBQUcsYUFBYSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsYUFBYSxDQUFDLEdBQVksRUFBRSxFQUFXO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxVQUFVLEdBQUcsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRDs7O09BR0c7SUFDSCxjQUFjLENBQUMsR0FBWSxFQUFFLEVBQVc7UUFDdEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLFVBQVUsR0FBRyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDM0UsQ0FBQzs7eUdBdEZVLG1CQUFtQixjQVFWLFFBQVE7OEVBUmpCLG1CQUFtQixXQUFuQixtQkFBbUI7a0RBQW5CLG1CQUFtQjtjQUQvQixVQUFVOztzQkFTSSxNQUFNO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5cblxuLyoqXG4gKiBTZXJ2aWNlcyBmb3IgcGxhbmluZyBjbHViIHJlc291cmNlIHBsYWNlbWVudHMgLSBmb3IgYWNjb3VudCBhZG1pbmlzdHJhdG9yIG9ubHlcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQVBJLUtFWSBUaGUga2V5IHRvIGlkZW50aWZ5IHRoZSBhcHBsaWNhdGlvbiAocG9ydGFsKVxuICogQFJlcXVlc3RIZWFkZXIgWC1BQ0NFU1MtVE9LRU4gVGhlIHRva2VuIHRvIGlkZW50aWZ5IHRoZSBsb2dnZWQtaW4gdXNlciBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFkbWluUGxhbmluZ1NlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvYWRtaW4vcGxhbmluZyc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEdldCBkYWlseSBwbGFuaW5nIC0gYm9va2luZ3MgZ3JvdXAgYnkgYWN0aXZpdGllc1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEFjdGl2aXR5Qm9va2luZ0dyb3VwPlxuICAgKi9cbiAgZ2V0RGFpbHlQbGFuaW5nKGRheT86IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vZGFpbHkvJHtkYXl9YCk7XG4gIH1cblxuICAvKipcbiAgICogRXhwb3J0IGRhaWx5IHBsYW5pbmcgLSBhcyBQREYgc3RyZWFtXG4gICAqIEBSZXR1cm46IFN0cmVhbUNvbnRlbnRcbiAgICovXG4gIGV4cG9ydERhaWx5UGxhbmluZyhkYXk/OiBudW1iZXIsIGxhbmc/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGxhbmcgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgbGFuZz0ke2xhbmd9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZG93bmxvYWQoYGFkbWluLXBsYW5pbmdgLGAke3RoaXMuYmFzZVVybH0vZGFpbHkvJHtkYXl9L2V4cG9ydGAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBsaXN0IG9mIGZyZWUgcmVzb3VyY2VzIGZvciB0aGUgYm9va2luZyByZXF1ZXN0XG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8UmVzb3VyY2U+XG4gICAqL1xuICBmaW5kRnJlZVJlc291cmNlcyhpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vYm9va2luZ3MvJHtpZH0vcmVzb3VyY2VzYCk7XG4gIH1cblxuICAvKipcbiAgICogQXNzaWduIHJlc291cmNlIGZvciBib29raW5nIHJlcXVlc3QgYW5kIGFwcHJvdmVcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGFzc2lnblJlc291cmNlKGlkPzogc3RyaW5nLCByZXNvdXJjZUlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vYm9va2luZ3MvJHtpZH0vYXNzaWduLyR7cmVzb3VyY2VJZH1gLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbiBhc3NpZ24gcmVzb3VyY2UgZnJvbSBib29raW5nIHJlcXVlc3RcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIHVuQXNzaWduUmVzb3VyY2UoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9ib29raW5ncy8ke2lkfS91bi1hc3NpZ25gLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXJnZSBzb3VyY2UgYW5kIHRhcmdldCBib29raW5ncyBhbmQgcmVjYWxjdWxhdGUgdGhlIGRhaWx5IHBsYW5pbmdcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxBY3Rpdml0eUJvb2tpbmdHcm91cD5cbiAgICovXG4gIG1lcmdlQm9va2luZ3MoZGF5PzogbnVtYmVyLCBzb3VyY2U/OiBzdHJpbmcsIHRhcmdldD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2RhaWx5LyR7ZGF5fS9ib29raW5ncy8ke3NvdXJjZX0vbWVyZ2UvJHt0YXJnZXR9YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogU3BsaXQgYm9va2luZyBhbmQgcmVjYWxjdWxhdGUgdGhlIGRhaWx5IHBsYW5pbmdcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxBY3Rpdml0eUJvb2tpbmdHcm91cD5cbiAgICovXG4gIHNwbGl0Qm9va2luZ3MoZGF5PzogbnVtYmVyLCBpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2RhaWx5LyR7ZGF5fS9ib29raW5ncy8ke2lkfS9zcGxpdGAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBib29raW5nIGFuZCByZWNhbGN1bGF0ZSB0aGUgZGFpbHkgcGxhbmluZ1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEFjdGl2aXR5Qm9va2luZ0dyb3VwPlxuICAgKi9cbiAgZGVsZXRlQm9va2luZyhkYXk/OiBudW1iZXIsIGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS9kYWlseS8ke2RheX0vYm9va2luZ3MvJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYWN0aXZpdHkgYW5kIHJlY2FsY3VsYXRlIHRoZSBkYWlseSBwbGFuaW5nXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8QWN0aXZpdHlCb29raW5nR3JvdXA+XG4gICAqL1xuICBkZWxldGVBY3Rpdml0eShkYXk/OiBudW1iZXIsIGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS9kYWlseS8ke2RheX0vYWN0aXZpdGllcy8ke2lkfWApO1xuICB9XG5cbn1cbiJdfQ==