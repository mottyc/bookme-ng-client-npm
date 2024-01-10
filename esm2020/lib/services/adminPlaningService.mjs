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
     * Get daily planing for the board - bookings group by activities
     * @Return: EntitiesResponse<ActivityBookingGroup>
     */
    getDailyPlaningForBoard(day, resFilter, userFilter) {
        const params = new Array();
        if (resFilter != null) {
            params.push(`resFilter=${resFilter}`);
        }
        if (userFilter != null) {
            params.push(`userFilter=${userFilter}`);
        }
        return this.rest.get(`${this.baseUrl}/board/${day}`, ...params);
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
AdminPlaningService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: AdminPlaningService, deps: [{ token: 'config' }, { token: i1.RestUtil }], target: i0.ɵɵFactoryTarget.Injectable });
AdminPlaningService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: AdminPlaningService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: AdminPlaningService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i2.CoreConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: i1.RestUtil }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW5QbGFuaW5nU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jvb2ttZS1saWIvc3JjL2xpYi9zZXJ2aWNlcy9hZG1pblBsYW5pbmdTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBT25EOzs7O0dBSUc7QUFFSCxNQUFNLE9BQU8sbUJBQW1CO0lBSzlCOztPQUVHO0lBQ0gsWUFBc0MsTUFBa0IsRUFBVSxJQUFjO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVO1FBTmhGLGlCQUFpQjtRQUNULFlBQU8sR0FBRyxnQkFBZ0IsQ0FBQztRQU1qQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7T0FHRztJQUNILGVBQWUsQ0FBQyxHQUFXLEVBQUUsU0FBaUIsRUFBRSxVQUFrQjtRQUNoRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzNCLElBQUksU0FBUyxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDakUsSUFBSSxVQUFVLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLFVBQVUsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUV0RSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sVUFBVSxHQUFHLEVBQUUsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRDs7O09BR0c7SUFDSCx1QkFBdUIsQ0FBQyxHQUFXLEVBQUUsU0FB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LEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsY0FBYyxDQUFDLEVBQVUsRUFBRSxNQUFnQixFQUFFLElBQVk7UUFDdkQsTUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUMzQixJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBRTFELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxhQUFhLEVBQUUsV0FBVyxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDcEksQ0FBQzs7Z0hBdkxVLG1CQUFtQixrQkFRVixRQUFRO29IQVJqQixtQkFBbUI7MkZBQW5CLG1CQUFtQjtrQkFEL0IsVUFBVTs7MEJBU0ksTUFBTTsyQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuaW1wb3J0IHsgQWN0dWFsIH0gZnJvbSAnLi4vZW50aXRpZXMvQWN0dWFsJztcblxuXG4vKipcbiAqIFNlcnZpY2VzIGZvciBwbGFuaW5nIGNsdWIgcmVzb3VyY2UgcGxhY2VtZW50cyAtIGZvciBhY2NvdW50IGFkbWluaXN0cmF0b3Igb25seVxuICogQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChwb3J0YWwpXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFDQ0VTUy1UT0tFTiBUaGUgdG9rZW4gdG8gaWRlbnRpZnkgdGhlIGxvZ2dlZC1pbiB1c2VyIFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWRtaW5QbGFuaW5nU2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy9hZG1pbi9wbGFuaW5nJztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogR2V0IGRhaWx5IHBsYW5pbmcgLSBib29raW5ncyBncm91cCBieSBhY3Rpdml0aWVzXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8QWN0aXZpdHlCb29raW5nR3JvdXA+XG4gICAqL1xuICBnZXREYWlseVBsYW5pbmcoZGF5OiBudW1iZXIsIHJlc0ZpbHRlcjogc3RyaW5nLCB1c2VyRmlsdGVyOiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKHJlc0ZpbHRlciAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGByZXNGaWx0ZXI9JHtyZXNGaWx0ZXJ9YCk7IH1cbiAgICBpZiAodXNlckZpbHRlciAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB1c2VyRmlsdGVyPSR7dXNlckZpbHRlcn1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9kYWlseS8ke2RheX1gLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBkYWlseSBwbGFuaW5nIGZvciB0aGUgYm9hcmQgLSBib29raW5ncyBncm91cCBieSBhY3Rpdml0aWVzXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8QWN0aXZpdHlCb29raW5nR3JvdXA+XG4gICAqL1xuICBnZXREYWlseVBsYW5pbmdGb3JCb2FyZChkYXk6IG51bWJlciwgcmVzRmlsdGVyOiBzdHJpbmcsIHVzZXJGaWx0ZXI6IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAocmVzRmlsdGVyICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHJlc0ZpbHRlcj0ke3Jlc0ZpbHRlcn1gKTsgfVxuICAgIGlmICh1c2VyRmlsdGVyICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHVzZXJGaWx0ZXI9JHt1c2VyRmlsdGVyfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2JvYXJkLyR7ZGF5fWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGxpc3Qgb2YgcmVzb3VyY2VzIGluIGEgc3BlY2lmaWMgZGF5XG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8U3RyaW5nS2V5VmFsdWU+XG4gICAqL1xuICBnZXREYWlseVJlc291cmNlcyhkYXk6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vZGFpbHktcmVzb3VyY2VzLyR7ZGF5fWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cG9ydCBkYWlseSBwbGFuaW5nIC0gYXMgUERGIHN0cmVhbVxuICAgKiBAUmV0dXJuOiBTdHJlYW1Db250ZW50XG4gICAqL1xuICBleHBvcnREYWlseVBsYW5pbmcoZGF5OiBudW1iZXIsIGxhbmc6IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAobGFuZyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBsYW5nPSR7bGFuZ31gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5kb3dubG9hZChgYWRtaW4tcGxhbmluZ2AsYCR7dGhpcy5iYXNlVXJsfS9kYWlseS8ke2RheX0vZXhwb3J0YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdXRvIHBsYW5pbmcgLSBhc3NpZ24gcmVzb3VyY2VzIGFuZCBhdXRvIGFwcHJvdmUgYm9va2luZ1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEFjdGl2aXR5Qm9va2luZ0dyb3VwPlxuICAgKi9cbiAgYXV0b0RhaWx5UGxhbmluZyhkYXk6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2RhaWx5LyR7ZGF5fS9hdXRvYCwgJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IGF1dG8gcGxhbmluZyAtIHVuLWFzc2lnbiByZXNvdXJjZXMgYW5kIGNsZWFyIGF1dG8gYXBwcm92ZSBib29raW5nXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8QWN0aXZpdHlCb29raW5nR3JvdXA+XG4gICAqL1xuICByZXNldEF1dG9EYWlseVBsYW5pbmcoZGF5OiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9L2RhaWx5LyR7ZGF5fS9hdXRvYCk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBsaXN0IG9mIGZyZWUgcmVzb3VyY2VzIGZvciB0aGUgYm9va2luZyByZXF1ZXN0XG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8UmVzb3VyY2U+XG4gICAqL1xuICBmaW5kRnJlZVJlc291cmNlcyhpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9ib29raW5ncy8ke2lkfS9yZXNvdXJjZXNgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBc3NpZ24gcmVzb3VyY2UgZm9yIGJvb2tpbmcgcmVxdWVzdCBhbmQgYXBwcm92ZVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgYXNzaWduUmVzb3VyY2UoaWQ6IHN0cmluZywgcmVzb3VyY2VJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vYm9va2luZ3MvJHtpZH0vYXNzaWduLyR7cmVzb3VyY2VJZH1gLCAnJyk7XG4gIH1cblxuICAvKipcbiAgICogVW4gYXNzaWduIHJlc291cmNlIGZyb20gYm9va2luZyByZXF1ZXN0XG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICB1bkFzc2lnblJlc291cmNlKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9ib29raW5ncy8ke2lkfS91bi1hc3NpZ25gLCAnJyk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBhbGwgYm9va2luZ3MgYnkgZmlsdGVyXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8Qm9va2luZz5cbiAgICovXG4gIGZpbmRCb29raW5ncyhmcm9tOiBudW1iZXIsIHRvOiBudW1iZXIsIHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF5OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGZyb20gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZnJvbT0ke2Zyb219YCk7IH1cbiAgICBpZiAodG8gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdG89JHt0b31gKTsgfVxuICAgIGlmICh5ZWFyICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHllYXI9JHt5ZWFyfWApOyB9XG4gICAgaWYgKG1vbnRoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYG1vbnRoPSR7bW9udGh9YCk7IH1cbiAgICBpZiAoZGF5ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGRheT0ke2RheX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9ib29raW5nc2AsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogTWVyZ2Ugc291cmNlIGFuZCB0YXJnZXQgYm9va2luZ3MgYW5kIHJlY2FsY3VsYXRlIHRoZSBkYWlseSBwbGFuaW5nXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8QWN0aXZpdHlCb29raW5nR3JvdXA+XG4gICAqL1xuICBtZXJnZUJvb2tpbmdzKGRheTogbnVtYmVyLCBzb3VyY2U6IHN0cmluZywgdGFyZ2V0OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9kYWlseS8ke2RheX0vYm9va2luZ3MvJHtzb3VyY2V9L21lcmdlLyR7dGFyZ2V0fWAsICcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGxpdCBib29raW5nIGFuZCByZWNhbGN1bGF0ZSB0aGUgZGFpbHkgcGxhbmluZ1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEFjdGl2aXR5Qm9va2luZ0dyb3VwPlxuICAgKi9cbiAgc3BsaXRCb29raW5ncyhkYXk6IG51bWJlciwgaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2RhaWx5LyR7ZGF5fS9ib29raW5ncy8ke2lkfS9zcGxpdGAsICcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYm9va2luZyBhbmQgcmVjYWxjdWxhdGUgdGhlIGRhaWx5IHBsYW5pbmdcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxBY3Rpdml0eUJvb2tpbmdHcm91cD5cbiAgICovXG4gIGRlbGV0ZUJvb2tpbmcoZGF5OiBudW1iZXIsIGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9L2RhaWx5LyR7ZGF5fS9ib29raW5ncy8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhY3Rpdml0eSBhbmQgcmVjYWxjdWxhdGUgdGhlIGRhaWx5IHBsYW5pbmdcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxBY3Rpdml0eUJvb2tpbmdHcm91cD5cbiAgICovXG4gIGRlbGV0ZUFjdGl2aXR5KGRheTogbnVtYmVyLCBpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS9kYWlseS8ke2RheX0vYWN0aXZpdGllcy8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBkYWlseSByZWdpc3RyYXRpb24gbGlzdCAtIHdobyBpcyBwcmVzZW50XG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8QWN0dWFsPlxuICAgKi9cbiAgZ2V0RGFpbHlSZWdpc3RyYXRpb24oZGF5OiBudW1iZXIsIGZpbHRlcjogc3RyaW5nLCBtaXNzaW5nT25seTogYm9vbGVhbikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZmlsdGVyICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZpbHRlcj0ke2ZpbHRlcn1gKTsgfVxuICAgIGlmIChtaXNzaW5nT25seSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBtaXNzaW5nT25seT0ke21pc3NpbmdPbmx5fWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2Jvb2tpbmdzL3JlZ2lzdHJhdGlvbi8ke2RheX1gLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB1c2VyIHJlZ2lzdHJhdGlvblxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgdXBkYXRlUmVnaXN0cmF0aW9uKGJvZHk6IEFjdHVhbCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2Jvb2tpbmdzL3JlZ2lzdHJhdGlvbmAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogUmVwb3J0IHVzZXIgYWJzZW5jZSBmcm9tIGFwcHJvdmVkIGJvb2tpbmdcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIHJlcG9ydEFic2VuY2UoaWQ6IHN0cmluZywgdXNlcklkOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAodXNlcklkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHVzZXJJZD0ke3VzZXJJZH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vYm9va2luZ3MvJHtpZH0vYWJzZW5jZWAsICcnLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcG9ydCBpbmNpZGVudCBmcm9tIHJlZ2lzdHJhdGlvblxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgcmVwb3J0SW5jaWRlbnQoaWQ6IHN0cmluZywgdXNlcklkOiBzdHJpbmdbXSwgYm9keTogc3RyaW5nKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmICh1c2VySWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdXNlcklkPSR7dXNlcklkfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9ib29raW5ncy8ke2lkfS9pbmNpZGVudGAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSwgLi4ucGFyYW1zKTtcbiAgfVxuXG59XG4iXX0=