import { Injectable, Inject } from '@angular/core';
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
     * Auto planing - assign resources and auto approve booking
     * @Return: EntitiesResponse<ActivityBookingGroup>
     */
    autoDailyPlaning(day) {
        return this.rest.post(`${this.baseUrl}/daily/${day}/auto`, '');
    }
    /**
     * Reset auto planing - un-assign resources and clear auto approve booking
     * @Return: EntitiesResponse<ActivityBookingGroup>
     */
    resetAutoDailyPlaning(day) {
        return this.rest.delete(`${this.baseUrl}/daily/${day}/auto`);
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
        return this.rest.post(`${this.baseUrl}/bookings/${id}/assign/${resourceId}`, '');
    }
    /**
     * Un assign resource from booking request
     * @Return: ActionResponse
     */
    unAssignResource(id) {
        return this.rest.post(`${this.baseUrl}/bookings/${id}/un-assign`, '');
    }
    /**
     * Find all bookings by filter
     * @Return: EntitiesResponse<Booking>
     */
    findBookings(from, to, year, month, day) {
        const params = new Array();
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (year != null) {
            params.push(`year=${year}`);
        }
        if (month != null) {
            params.push(`month=${month}`);
        }
        if (day != null) {
            params.push(`day=${day}`);
        }
        return this.rest.get(`${this.baseUrl}/bookings`, ...params);
    }
    /**
     * Merge source and target bookings and recalculate the daily planing
     * @Return: EntitiesResponse<ActivityBookingGroup>
     */
    mergeBookings(day, source, target) {
        return this.rest.post(`${this.baseUrl}/daily/${day}/bookings/${source}/merge/${target}`, '');
    }
    /**
     * Split booking and recalculate the daily planing
     * @Return: EntitiesResponse<ActivityBookingGroup>
     */
    splitBookings(day, id) {
        return this.rest.post(`${this.baseUrl}/daily/${day}/bookings/${id}/split`, '');
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
        return this.rest.post(`${this.baseUrl}/bookings/${id}/absence`, '', ...params);
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
AdminPlaningService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: AdminPlaningService, deps: [{ token: 'config' }, { token: i1.RestUtil }], target: i0.ɵɵFactoryTarget.Injectable });
AdminPlaningService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: AdminPlaningService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: AdminPlaningService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i2.CoreConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: i1.RestUtil }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW5QbGFuaW5nU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jvb2ttZS1saWIvc3JjL2xpYi9zZXJ2aWNlcy9hZG1pblBsYW5pbmdTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBT25EOzs7O0dBSUc7QUFFSCxNQUFNLE9BQU8sbUJBQW1CO0lBSzlCOztPQUVHO0lBQ0gsWUFBc0MsTUFBa0IsRUFBVSxJQUFjO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVO1FBTmhGLGlCQUFpQjtRQUNULFlBQU8sR0FBRyxnQkFBZ0IsQ0FBQztRQU1qQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7T0FHRztJQUNILGVBQWUsQ0FBQyxHQUFXLEVBQUUsU0FBaUIsRUFBRSxVQUFrQjtRQUNoRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzNCLElBQUksU0FBUyxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDakUsSUFBSSxVQUFVLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLFVBQVUsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUV0RSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sVUFBVSxHQUFHLEVBQUUsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRDs7O09BR0c7SUFDSCxpQkFBaUIsQ0FBQyxHQUFXO1FBQzNCLE9B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SSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDcEksQ0FBQzs7aUhBM0tVLG1CQUFtQixrQkFRVixRQUFRO3FIQVJqQixtQkFBbUI7NEZBQW5CLG1CQUFtQjtrQkFEL0IsVUFBVTs7MEJBU0ksTUFBTTsyQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuaW1wb3J0IHsgQWN0dWFsIH0gZnJvbSAnLi4vZW50aXRpZXMvQWN0dWFsJztcblxuXG4vKipcbiAqIFNlcnZpY2VzIGZvciBwbGFuaW5nIGNsdWIgcmVzb3VyY2UgcGxhY2VtZW50cyAtIGZvciBhY2NvdW50IGFkbWluaXN0cmF0b3Igb25seVxuICogQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChwb3J0YWwpXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFDQ0VTUy1UT0tFTiBUaGUgdG9rZW4gdG8gaWRlbnRpZnkgdGhlIGxvZ2dlZC1pbiB1c2VyIFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWRtaW5QbGFuaW5nU2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy9hZG1pbi9wbGFuaW5nJztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogR2V0IGRhaWx5IHBsYW5pbmcgLSBib29raW5ncyBncm91cCBieSBhY3Rpdml0aWVzXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8QWN0aXZpdHlCb29raW5nR3JvdXA+XG4gICAqL1xuICBnZXREYWlseVBsYW5pbmcoZGF5OiBudW1iZXIsIHJlc0ZpbHRlcjogc3RyaW5nLCB1c2VyRmlsdGVyOiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKHJlc0ZpbHRlciAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGByZXNGaWx0ZXI9JHtyZXNGaWx0ZXJ9YCk7IH1cbiAgICBpZiAodXNlckZpbHRlciAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB1c2VyRmlsdGVyPSR7dXNlckZpbHRlcn1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9kYWlseS8ke2RheX1gLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBsaXN0IG9mIHJlc291cmNlcyBpbiBhIHNwZWNpZmljIGRheVxuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPFN0cmluZ0tleVZhbHVlPlxuICAgKi9cbiAgZ2V0RGFpbHlSZXNvdXJjZXMoZGF5OiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2RhaWx5LXJlc291cmNlcy8ke2RheX1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBvcnQgZGFpbHkgcGxhbmluZyAtIGFzIFBERiBzdHJlYW1cbiAgICogQFJldHVybjogU3RyZWFtQ29udGVudFxuICAgKi9cbiAgZXhwb3J0RGFpbHlQbGFuaW5nKGRheTogbnVtYmVyLCBsYW5nOiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGxhbmcgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgbGFuZz0ke2xhbmd9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZG93bmxvYWQoYGFkbWluLXBsYW5pbmdgLGAke3RoaXMuYmFzZVVybH0vZGFpbHkvJHtkYXl9L2V4cG9ydGAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogQXV0byBwbGFuaW5nIC0gYXNzaWduIHJlc291cmNlcyBhbmQgYXV0byBhcHByb3ZlIGJvb2tpbmdcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxBY3Rpdml0eUJvb2tpbmdHcm91cD5cbiAgICovXG4gIGF1dG9EYWlseVBsYW5pbmcoZGF5OiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9kYWlseS8ke2RheX0vYXV0b2AsICcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBhdXRvIHBsYW5pbmcgLSB1bi1hc3NpZ24gcmVzb3VyY2VzIGFuZCBjbGVhciBhdXRvIGFwcHJvdmUgYm9va2luZ1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEFjdGl2aXR5Qm9va2luZ0dyb3VwPlxuICAgKi9cbiAgcmVzZXRBdXRvRGFpbHlQbGFuaW5nKGRheTogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS9kYWlseS8ke2RheX0vYXV0b2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgbGlzdCBvZiBmcmVlIHJlc291cmNlcyBmb3IgdGhlIGJvb2tpbmcgcmVxdWVzdFxuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPFJlc291cmNlPlxuICAgKi9cbiAgZmluZEZyZWVSZXNvdXJjZXMoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vYm9va2luZ3MvJHtpZH0vcmVzb3VyY2VzYCk7XG4gIH1cblxuICAvKipcbiAgICogQXNzaWduIHJlc291cmNlIGZvciBib29raW5nIHJlcXVlc3QgYW5kIGFwcHJvdmVcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGFzc2lnblJlc291cmNlKGlkOiBzdHJpbmcsIHJlc291cmNlSWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2Jvb2tpbmdzLyR7aWR9L2Fzc2lnbi8ke3Jlc291cmNlSWR9YCwgJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuIGFzc2lnbiByZXNvdXJjZSBmcm9tIGJvb2tpbmcgcmVxdWVzdFxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgdW5Bc3NpZ25SZXNvdXJjZShpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vYm9va2luZ3MvJHtpZH0vdW4tYXNzaWduYCwgJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgYWxsIGJvb2tpbmdzIGJ5IGZpbHRlclxuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEJvb2tpbmc+XG4gICAqL1xuICBmaW5kQm9va2luZ3MoZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyLCB5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIsIGRheTogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cbiAgICBpZiAoeWVhciAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB5ZWFyPSR7eWVhcn1gKTsgfVxuICAgIGlmIChtb250aCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBtb250aD0ke21vbnRofWApOyB9XG4gICAgaWYgKGRheSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBkYXk9JHtkYXl9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vYm9va2luZ3NgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1lcmdlIHNvdXJjZSBhbmQgdGFyZ2V0IGJvb2tpbmdzIGFuZCByZWNhbGN1bGF0ZSB0aGUgZGFpbHkgcGxhbmluZ1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEFjdGl2aXR5Qm9va2luZ0dyb3VwPlxuICAgKi9cbiAgbWVyZ2VCb29raW5ncyhkYXk6IG51bWJlciwgc291cmNlOiBzdHJpbmcsIHRhcmdldDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vZGFpbHkvJHtkYXl9L2Jvb2tpbmdzLyR7c291cmNlfS9tZXJnZS8ke3RhcmdldH1gLCAnJyk7XG4gIH1cblxuICAvKipcbiAgICogU3BsaXQgYm9va2luZyBhbmQgcmVjYWxjdWxhdGUgdGhlIGRhaWx5IHBsYW5pbmdcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxBY3Rpdml0eUJvb2tpbmdHcm91cD5cbiAgICovXG4gIHNwbGl0Qm9va2luZ3MoZGF5OiBudW1iZXIsIGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9kYWlseS8ke2RheX0vYm9va2luZ3MvJHtpZH0vc3BsaXRgLCAnJyk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGJvb2tpbmcgYW5kIHJlY2FsY3VsYXRlIHRoZSBkYWlseSBwbGFuaW5nXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8QWN0aXZpdHlCb29raW5nR3JvdXA+XG4gICAqL1xuICBkZWxldGVCb29raW5nKGRheTogbnVtYmVyLCBpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS9kYWlseS8ke2RheX0vYm9va2luZ3MvJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYWN0aXZpdHkgYW5kIHJlY2FsY3VsYXRlIHRoZSBkYWlseSBwbGFuaW5nXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8QWN0aXZpdHlCb29raW5nR3JvdXA+XG4gICAqL1xuICBkZWxldGVBY3Rpdml0eShkYXk6IG51bWJlciwgaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vZGFpbHkvJHtkYXl9L2FjdGl2aXRpZXMvJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZGFpbHkgcmVnaXN0cmF0aW9uIGxpc3QgLSB3aG8gaXMgcHJlc2VudFxuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEFjdHVhbD5cbiAgICovXG4gIGdldERhaWx5UmVnaXN0cmF0aW9uKGRheTogbnVtYmVyLCBmaWx0ZXI6IHN0cmluZywgbWlzc2luZ09ubHk6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGZpbHRlciAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmaWx0ZXI9JHtmaWx0ZXJ9YCk7IH1cbiAgICBpZiAobWlzc2luZ09ubHkgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgbWlzc2luZ09ubHk9JHttaXNzaW5nT25seX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9ib29raW5ncy9yZWdpc3RyYXRpb24vJHtkYXl9YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdXNlciByZWdpc3RyYXRpb25cbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIHVwZGF0ZVJlZ2lzdHJhdGlvbihib2R5OiBBY3R1YWwpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9ib29raW5ncy9yZWdpc3RyYXRpb25gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcG9ydCB1c2VyIGFic2VuY2UgZnJvbSBhcHByb3ZlZCBib29raW5nXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICByZXBvcnRBYnNlbmNlKGlkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKHVzZXJJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB1c2VySWQ9JHt1c2VySWR9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2Jvb2tpbmdzLyR7aWR9L2Fic2VuY2VgLCAnJywgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBvcnQgaW5jaWRlbnQgZnJvbSByZWdpc3RyYXRpb25cbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIHJlcG9ydEluY2lkZW50KGlkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nW10sIGJvZHk6IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAodXNlcklkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHVzZXJJZD0ke3VzZXJJZH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vYm9va2luZ3MvJHtpZH0vaW5jaWRlbnRgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHksIC4uLnBhcmFtcyk7XG4gIH1cblxufVxuIl19