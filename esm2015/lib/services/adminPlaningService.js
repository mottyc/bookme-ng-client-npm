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
    /**
     * Get daily registration list - who is present
     * @Return: EntitiesResponse<Actual>
     */
    getDailyRegistration(day) {
        return this.rest.get(`${this.baseUrl}/bookings/registration/${day}`);
    }
    /**
     * Update user registration
     * @Return: ActionResponse
     */
    updateRegistration(body) {
        return this.rest.post(`${this.baseUrl}/bookings/registration`, typeof body === 'object' ? JSON.stringify(body) : body);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW5QbGFuaW5nU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYWRtaW5QbGFuaW5nU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQUsxQzs7OztHQUlHO0FBRUgsTUFBTSxPQUFPLG1CQUFtQjtJQUs5Qjs7T0FFRztJQUNILFlBQXNDLE1BQWtCLEVBQVUsSUFBYztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTtRQU5oRixpQkFBaUI7UUFDVCxZQUFPLEdBQUcsZ0JBQWdCLENBQUM7UUFNakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7O09BR0c7SUFDSCxlQUFlLENBQUMsR0FBWTtRQUMxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sVUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRDs7O09BR0c7SUFDSCxrQkFBa0IsQ0FBQyxHQUFZLEVBQUUsSUFBYTtRQUM1QyxNQUFNLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzNCLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFFcEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxVQUFVLEdBQUcsU0FBUyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDNUYsQ0FBQztJQUVEOzs7T0FHRztJQUNILGlCQUFpQixDQUFDLEVBQVc7UUFDM0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsY0FBYyxDQUFDLEVBQVcsRUFBRSxVQUFtQjtRQUM3QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sYUFBYSxFQUFFLFdBQVcsVUFBVSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckYsQ0FBQztJQUVEOzs7T0FHRztJQUNILGdCQUFnQixDQUFDLEVBQVc7UUFDMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLGFBQWEsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVEOzs7T0FHRztJQUNILGFBQWEsQ0FBQyxHQUFZLEVBQUUsTUFBZSxFQUFFLE1BQWU7UUFDMUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLFVBQVUsR0FBRyxhQUFhLE1BQU0sVUFBVSxNQUFNLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsYUFBYSxDQUFDLEdBQVksRUFBRSxFQUFXO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxVQUFVLEdBQUcsYUFBYSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsYUFBYSxDQUFDLEdBQVksRUFBRSxFQUFXO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxVQUFVLEdBQUcsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRDs7O09BR0c7SUFDSCxjQUFjLENBQUMsR0FBWSxFQUFFLEVBQVc7UUFDdEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLFVBQVUsR0FBRyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVEOzs7T0FHRztJQUNILG9CQUFvQixDQUFDLEdBQVk7UUFDL0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLDBCQUEwQixHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRDs7O09BR0c7SUFDSCxrQkFBa0IsQ0FBQyxJQUFhO1FBQzlCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyx3QkFBd0IsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pILENBQUM7O3lHQXRHVSxtQkFBbUIsY0FRVixRQUFROzhFQVJqQixtQkFBbUIsV0FBbkIsbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FEL0IsVUFBVTs7c0JBU0ksTUFBTTt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuaW1wb3J0IHsgQWN0dWFsIH0gZnJvbSAnLi4vZW50aXRpZXMvQWN0dWFsJztcblxuXG4vKipcbiAqIFNlcnZpY2VzIGZvciBwbGFuaW5nIGNsdWIgcmVzb3VyY2UgcGxhY2VtZW50cyAtIGZvciBhY2NvdW50IGFkbWluaXN0cmF0b3Igb25seVxuICogQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChwb3J0YWwpXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFDQ0VTUy1UT0tFTiBUaGUgdG9rZW4gdG8gaWRlbnRpZnkgdGhlIGxvZ2dlZC1pbiB1c2VyIFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWRtaW5QbGFuaW5nU2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy9hZG1pbi9wbGFuaW5nJztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogR2V0IGRhaWx5IHBsYW5pbmcgLSBib29raW5ncyBncm91cCBieSBhY3Rpdml0aWVzXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8QWN0aXZpdHlCb29raW5nR3JvdXA+XG4gICAqL1xuICBnZXREYWlseVBsYW5pbmcoZGF5PzogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9kYWlseS8ke2RheX1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBvcnQgZGFpbHkgcGxhbmluZyAtIGFzIFBERiBzdHJlYW1cbiAgICogQFJldHVybjogU3RyZWFtQ29udGVudFxuICAgKi9cbiAgZXhwb3J0RGFpbHlQbGFuaW5nKGRheT86IG51bWJlciwgbGFuZz86IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAobGFuZyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBsYW5nPSR7bGFuZ31gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5kb3dubG9hZChgYWRtaW4tcGxhbmluZ2AsYCR7dGhpcy5iYXNlVXJsfS9kYWlseS8ke2RheX0vZXhwb3J0YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGxpc3Qgb2YgZnJlZSByZXNvdXJjZXMgZm9yIHRoZSBib29raW5nIHJlcXVlc3RcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxSZXNvdXJjZT5cbiAgICovXG4gIGZpbmRGcmVlUmVzb3VyY2VzKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9ib29raW5ncy8ke2lkfS9yZXNvdXJjZXNgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBc3NpZ24gcmVzb3VyY2UgZm9yIGJvb2tpbmcgcmVxdWVzdCBhbmQgYXBwcm92ZVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgYXNzaWduUmVzb3VyY2UoaWQ/OiBzdHJpbmcsIHJlc291cmNlSWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9ib29raW5ncy8ke2lkfS9hc3NpZ24vJHtyZXNvdXJjZUlkfWAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuIGFzc2lnbiByZXNvdXJjZSBmcm9tIGJvb2tpbmcgcmVxdWVzdFxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgdW5Bc3NpZ25SZXNvdXJjZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2Jvb2tpbmdzLyR7aWR9L3VuLWFzc2lnbmAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1lcmdlIHNvdXJjZSBhbmQgdGFyZ2V0IGJvb2tpbmdzIGFuZCByZWNhbGN1bGF0ZSB0aGUgZGFpbHkgcGxhbmluZ1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEFjdGl2aXR5Qm9va2luZ0dyb3VwPlxuICAgKi9cbiAgbWVyZ2VCb29raW5ncyhkYXk/OiBudW1iZXIsIHNvdXJjZT86IHN0cmluZywgdGFyZ2V0Pzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vZGFpbHkvJHtkYXl9L2Jvb2tpbmdzLyR7c291cmNlfS9tZXJnZS8ke3RhcmdldH1gLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGxpdCBib29raW5nIGFuZCByZWNhbGN1bGF0ZSB0aGUgZGFpbHkgcGxhbmluZ1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEFjdGl2aXR5Qm9va2luZ0dyb3VwPlxuICAgKi9cbiAgc3BsaXRCb29raW5ncyhkYXk/OiBudW1iZXIsIGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vZGFpbHkvJHtkYXl9L2Jvb2tpbmdzLyR7aWR9L3NwbGl0YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGJvb2tpbmcgYW5kIHJlY2FsY3VsYXRlIHRoZSBkYWlseSBwbGFuaW5nXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8QWN0aXZpdHlCb29raW5nR3JvdXA+XG4gICAqL1xuICBkZWxldGVCb29raW5nKGRheT86IG51bWJlciwgaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9L2RhaWx5LyR7ZGF5fS9ib29raW5ncy8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhY3Rpdml0eSBhbmQgcmVjYWxjdWxhdGUgdGhlIGRhaWx5IHBsYW5pbmdcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxBY3Rpdml0eUJvb2tpbmdHcm91cD5cbiAgICovXG4gIGRlbGV0ZUFjdGl2aXR5KGRheT86IG51bWJlciwgaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9L2RhaWx5LyR7ZGF5fS9hY3Rpdml0aWVzLyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGRhaWx5IHJlZ2lzdHJhdGlvbiBsaXN0IC0gd2hvIGlzIHByZXNlbnRcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxBY3R1YWw+XG4gICAqL1xuICBnZXREYWlseVJlZ2lzdHJhdGlvbihkYXk/OiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2Jvb2tpbmdzL3JlZ2lzdHJhdGlvbi8ke2RheX1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdXNlciByZWdpc3RyYXRpb25cbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIHVwZGF0ZVJlZ2lzdHJhdGlvbihib2R5PzogQWN0dWFsKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vYm9va2luZ3MvcmVnaXN0cmF0aW9uYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG59XG4iXX0=