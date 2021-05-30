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
    getDailyPlaning(day, filter) {
        const params = new Array();
        if (filter != null) {
            params.push(`filter=${filter}`);
        }
        return this.rest.get(`${this.baseUrl}/daily/${day}`, ...params);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW5QbGFuaW5nU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvc2VydmljZXMvYWRtaW5QbGFuaW5nU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQUsxQzs7OztHQUlHO0FBRUgsTUFBTSxPQUFPLG1CQUFtQjtJQUs5Qjs7T0FFRztJQUNILFlBQXNDLE1BQWtCLEVBQVUsSUFBYztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTtRQU5oRixpQkFBaUI7UUFDVCxZQUFPLEdBQUcsZ0JBQWdCLENBQUM7UUFNakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7O09BR0c7SUFDSCxlQUFlLENBQUMsR0FBWSxFQUFFLE1BQWU7UUFDM0MsTUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUMzQixJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBRTFELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxVQUFVLEdBQUcsRUFBRSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVEOzs7T0FHRztJQUNILGtCQUFrQixDQUFDLEdBQVksRUFBRSxJQUFhO1FBQzVDLE1BQU0s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dCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmltcG9ydCB7IEFjdHVhbCB9IGZyb20gJy4uL2VudGl0aWVzL0FjdHVhbCc7XG5cblxuLyoqXG4gKiBTZXJ2aWNlcyBmb3IgcGxhbmluZyBjbHViIHJlc291cmNlIHBsYWNlbWVudHMgLSBmb3IgYWNjb3VudCBhZG1pbmlzdHJhdG9yIG9ubHlcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQVBJLUtFWSBUaGUga2V5IHRvIGlkZW50aWZ5IHRoZSBhcHBsaWNhdGlvbiAocG9ydGFsKVxuICogQFJlcXVlc3RIZWFkZXIgWC1BQ0NFU1MtVE9LRU4gVGhlIHRva2VuIHRvIGlkZW50aWZ5IHRoZSBsb2dnZWQtaW4gdXNlciBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFkbWluUGxhbmluZ1NlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvYWRtaW4vcGxhbmluZyc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEdldCBkYWlseSBwbGFuaW5nIC0gYm9va2luZ3MgZ3JvdXAgYnkgYWN0aXZpdGllc1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEFjdGl2aXR5Qm9va2luZ0dyb3VwPlxuICAgKi9cbiAgZ2V0RGFpbHlQbGFuaW5nKGRheT86IG51bWJlciwgZmlsdGVyPzogc3RyaW5nKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChmaWx0ZXIgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZmlsdGVyPSR7ZmlsdGVyfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2RhaWx5LyR7ZGF5fWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRXhwb3J0IGRhaWx5IHBsYW5pbmcgLSBhcyBQREYgc3RyZWFtXG4gICAqIEBSZXR1cm46IFN0cmVhbUNvbnRlbnRcbiAgICovXG4gIGV4cG9ydERhaWx5UGxhbmluZyhkYXk/OiBudW1iZXIsIGxhbmc/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGxhbmcgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgbGFuZz0ke2xhbmd9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZG93bmxvYWQoYGFkbWluLXBsYW5pbmdgLGAke3RoaXMuYmFzZVVybH0vZGFpbHkvJHtkYXl9L2V4cG9ydGAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBsaXN0IG9mIGZyZWUgcmVzb3VyY2VzIGZvciB0aGUgYm9va2luZyByZXF1ZXN0XG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8UmVzb3VyY2U+XG4gICAqL1xuICBmaW5kRnJlZVJlc291cmNlcyhpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vYm9va2luZ3MvJHtpZH0vcmVzb3VyY2VzYCk7XG4gIH1cblxuICAvKipcbiAgICogQXNzaWduIHJlc291cmNlIGZvciBib29raW5nIHJlcXVlc3QgYW5kIGFwcHJvdmVcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGFzc2lnblJlc291cmNlKGlkPzogc3RyaW5nLCByZXNvdXJjZUlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vYm9va2luZ3MvJHtpZH0vYXNzaWduLyR7cmVzb3VyY2VJZH1gLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbiBhc3NpZ24gcmVzb3VyY2UgZnJvbSBib29raW5nIHJlcXVlc3RcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIHVuQXNzaWduUmVzb3VyY2UoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9ib29raW5ncy8ke2lkfS91bi1hc3NpZ25gLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXJnZSBzb3VyY2UgYW5kIHRhcmdldCBib29raW5ncyBhbmQgcmVjYWxjdWxhdGUgdGhlIGRhaWx5IHBsYW5pbmdcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxBY3Rpdml0eUJvb2tpbmdHcm91cD5cbiAgICovXG4gIG1lcmdlQm9va2luZ3MoZGF5PzogbnVtYmVyLCBzb3VyY2U/OiBzdHJpbmcsIHRhcmdldD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2RhaWx5LyR7ZGF5fS9ib29raW5ncy8ke3NvdXJjZX0vbWVyZ2UvJHt0YXJnZXR9YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogU3BsaXQgYm9va2luZyBhbmQgcmVjYWxjdWxhdGUgdGhlIGRhaWx5IHBsYW5pbmdcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxBY3Rpdml0eUJvb2tpbmdHcm91cD5cbiAgICovXG4gIHNwbGl0Qm9va2luZ3MoZGF5PzogbnVtYmVyLCBpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2RhaWx5LyR7ZGF5fS9ib29raW5ncy8ke2lkfS9zcGxpdGAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBib29raW5nIGFuZCByZWNhbGN1bGF0ZSB0aGUgZGFpbHkgcGxhbmluZ1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEFjdGl2aXR5Qm9va2luZ0dyb3VwPlxuICAgKi9cbiAgZGVsZXRlQm9va2luZyhkYXk/OiBudW1iZXIsIGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS9kYWlseS8ke2RheX0vYm9va2luZ3MvJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYWN0aXZpdHkgYW5kIHJlY2FsY3VsYXRlIHRoZSBkYWlseSBwbGFuaW5nXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8QWN0aXZpdHlCb29raW5nR3JvdXA+XG4gICAqL1xuICBkZWxldGVBY3Rpdml0eShkYXk/OiBudW1iZXIsIGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS9kYWlseS8ke2RheX0vYWN0aXZpdGllcy8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBkYWlseSByZWdpc3RyYXRpb24gbGlzdCAtIHdobyBpcyBwcmVzZW50XG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8QWN0dWFsPlxuICAgKi9cbiAgZ2V0RGFpbHlSZWdpc3RyYXRpb24oZGF5PzogbnVtYmVyLCBmaWx0ZXI/OiBzdHJpbmcsIG1pc3NpbmdPbmx5PzogYm9vbGVhbikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZmlsdGVyICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZpbHRlcj0ke2ZpbHRlcn1gKTsgfVxuICAgIGlmIChtaXNzaW5nT25seSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBtaXNzaW5nT25seT0ke21pc3NpbmdPbmx5fWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2Jvb2tpbmdzL3JlZ2lzdHJhdGlvbi8ke2RheX1gLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB1c2VyIHJlZ2lzdHJhdGlvblxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgdXBkYXRlUmVnaXN0cmF0aW9uKGJvZHk/OiBBY3R1YWwpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9ib29raW5ncy9yZWdpc3RyYXRpb25gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcG9ydCB1c2VyIGFic2VuY2UgZnJvbSBhcHByb3ZlZCBib29raW5nXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICByZXBvcnRBYnNlbmNlKGlkPzogc3RyaW5nLCB1c2VySWQ/OiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAodXNlcklkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHVzZXJJZD0ke3VzZXJJZH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vYm9va2luZ3MvJHtpZH0vYWJzZW5jZWAsIG51bGwsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogUmVwb3J0IGluY2lkZW50IGZyb20gcmVnaXN0cmF0aW9uXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICByZXBvcnRJbmNpZGVudChpZD86IHN0cmluZywgdXNlcklkPzogc3RyaW5nW10sIGJvZHk/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKHVzZXJJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB1c2VySWQ9JHt1c2VySWR9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2Jvb2tpbmdzLyR7aWR9L2luY2lkZW50YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5LCAuLi5wYXJhbXMpO1xuICB9XG5cbn1cbiJdfQ==