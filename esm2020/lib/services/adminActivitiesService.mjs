import { Injectable, Inject } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/rest-util";
import * as i2 from "../../config";
/**
 * Services for managing club activities - for account administrator only
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export class AdminActivitiesService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/admin/activities';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new activity
     * @Return: EntityResponse<Activity>
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update activity
     * @Return: EntityResponse<Activity>
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete activity
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single activity by id
     * @Return: EntityResponse<Activity>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get previous activity related to this activity id
     * @Return: EntityResponse<Activity>
     */
    prev(id) {
        return this.rest.get(`${this.baseUrl}/${id}/prev`);
    }
    /**
     * Get next activity related to this activity id
     * @Return: EntityResponse<Activity>
     */
    next(id) {
        return this.rest.get(`${this.baseUrl}/${id}/next`);
    }
    /**
     * Find activities by time range
     * @Return: QueryResponse<Activity>
     */
    find(from, to, year, month, day, total) {
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
        if (total != null) {
            params.push(`total=${total}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Find list of free resources for activity by filter
     * @Return: EntitiesResponse<Resource>
     */
    findFreeResources(id, resType, weight, forUseBy) {
        const params = new Array();
        if (resType != null) {
            params.push(`resType=${resType}`);
        }
        if (weight != null) {
            params.push(`weight=${weight}`);
        }
        if (forUseBy != null) {
            params.push(`forUseBy=${forUseBy}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/resources`, ...params);
    }
    /**
     * Create bulk set of activities
     * @Return: ActionResponse
     */
    createBulk(body) {
        return this.rest.post(`${this.baseUrl}/bulk`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Create account default set of activities per month
     * @Return: ActionResponse
     */
    createDefault(year, month, day) {
        const params = new Array();
        if (year != null) {
            params.push(`year=${year}`);
        }
        if (month != null) {
            params.push(`month=${month}`);
        }
        if (day != null) {
            params.push(`day=${day}`);
        }
        return this.rest.post(`${this.baseUrl}/default`, '', ...params);
    }
    /**
     * Clear all month activities
     * @Return: ActionResponse
     */
    clearDefault(year, month, day) {
        const params = new Array();
        if (year != null) {
            params.push(`year=${year}`);
        }
        if (month != null) {
            params.push(`month=${month}`);
        }
        if (day != null) {
            params.push(`day=${day}`);
        }
        return this.rest.delete(`${this.baseUrl}/default`, ...params);
    }
}
AdminActivitiesService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: AdminActivitiesService, deps: [{ token: 'config' }, { token: i1.RestUtil }], target: i0.ɵɵFactoryTarget.Injectable });
AdminActivitiesService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: AdminActivitiesService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: AdminActivitiesService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i2.CoreConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: i1.RestUtil }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW5BY3Rpdml0aWVzU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jvb2ttZS1saWIvc3JjL2xpYi9zZXJ2aWNlcy9hZG1pbkFjdGl2aXRpZXNTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBUW5EOzs7O0dBSUc7QUFFSCxNQUFNLE9BQU8sc0JBQXNCO0lBS2pDOztPQUVHO0lBQ0gsWUFBc0MsTUFBa0IsRUFBVSxJQUFjO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVO1FBTmhGLGlCQUFpQjtRQUNULFlBQU8sR0FBRyxtQkFBbUIsQ0FBQztRQU1wQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxJQUFjO1FBQ25CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLElBQWM7UUFDbkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xHLENB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O1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUVqRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sVUFBVSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7b0hBMUhVLHNCQUFzQixrQkFRYixRQUFRO3dIQVJqQixzQkFBc0I7NEZBQXRCLHNCQUFzQjtrQkFEbEMsVUFBVTs7MEJBU0ksTUFBTTsyQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuaW1wb3J0IHsgQWNjb3VudFJvbGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQWNjb3VudFJvbGVDb2RlJztcbmltcG9ydCB7IEFjdGl2aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQWN0aXZpdHknO1xuXG5cbi8qKlxuICogU2VydmljZXMgZm9yIG1hbmFnaW5nIGNsdWIgYWN0aXZpdGllcyAtIGZvciBhY2NvdW50IGFkbWluaXN0cmF0b3Igb25seVxuICogQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChwb3J0YWwpXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFDQ0VTUy1UT0tFTiBUaGUgdG9rZW4gdG8gaWRlbnRpZnkgdGhlIGxvZ2dlZC1pbiB1c2VyIFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWRtaW5BY3Rpdml0aWVzU2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy9hZG1pbi9hY3Rpdml0aWVzJztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogQ3JlYXRlIG5ldyBhY3Rpdml0eVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBY3Rpdml0eT5cbiAgICovXG4gIGNyZWF0ZShib2R5OiBBY3Rpdml0eSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgYWN0aXZpdHlcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QWN0aXZpdHk+XG4gICAqL1xuICB1cGRhdGUoYm9keTogQWN0aXZpdHkpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYWN0aXZpdHlcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGRlbGV0ZShpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgYWN0aXZpdHkgYnkgaWRcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QWN0aXZpdHk+XG4gICAqL1xuICBnZXQoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcHJldmlvdXMgYWN0aXZpdHkgcmVsYXRlZCB0byB0aGlzIGFjdGl2aXR5IGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFjdGl2aXR5PlxuICAgKi9cbiAgcHJldihpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9wcmV2YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG5leHQgYWN0aXZpdHkgcmVsYXRlZCB0byB0aGlzIGFjdGl2aXR5IGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFjdGl2aXR5PlxuICAgKi9cbiAgbmV4dChpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9uZXh0YCk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBhY3Rpdml0aWVzIGJ5IHRpbWUgcmFuZ2VcbiAgICogQFJldHVybjogUXVlcnlSZXNwb25zZTxBY3Rpdml0eT5cbiAgICovXG4gIGZpbmQoZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyLCB5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIsIGRheTogbnVtYmVyLCB0b3RhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG4gICAgaWYgKHllYXIgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgeWVhcj0ke3llYXJ9YCk7IH1cbiAgICBpZiAobW9udGggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgbW9udGg9JHttb250aH1gKTsgfVxuICAgIGlmIChkYXkgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZGF5PSR7ZGF5fWApOyB9XG4gICAgaWYgKHRvdGFsICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvdGFsPSR7dG90YWx9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH1gLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgbGlzdCBvZiBmcmVlIHJlc291cmNlcyBmb3IgYWN0aXZpdHkgYnkgZmlsdGVyXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8UmVzb3VyY2U+XG4gICAqL1xuICBmaW5kRnJlZVJlc291cmNlcyhpZDogc3RyaW5nLCByZXNUeXBlOiBudW1iZXIsIHdlaWdodDogbnVtYmVyLCBmb3JVc2VCeTogQWNjb3VudFJvbGVDb2RlKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChyZXNUeXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHJlc1R5cGU9JHtyZXNUeXBlfWApOyB9XG4gICAgaWYgKHdlaWdodCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB3ZWlnaHQ9JHt3ZWlnaHR9YCk7IH1cbiAgICBpZiAoZm9yVXNlQnkgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZm9yVXNlQnk9JHtmb3JVc2VCeX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9yZXNvdXJjZXNgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBidWxrIHNldCBvZiBhY3Rpdml0aWVzXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBjcmVhdGVCdWxrKGJvZHk6IEFjdGl2aXR5W10pIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9idWxrYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYWNjb3VudCBkZWZhdWx0IHNldCBvZiBhY3Rpdml0aWVzIHBlciBtb250aFxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgY3JlYXRlRGVmYXVsdCh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIsIGRheTogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmICh5ZWFyICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHllYXI9JHt5ZWFyfWApOyB9XG4gICAgaWYgKG1vbnRoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYG1vbnRoPSR7bW9udGh9YCk7IH1cbiAgICBpZiAoZGF5ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGRheT0ke2RheX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vZGVmYXVsdGAsICcnLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCBtb250aCBhY3Rpdml0aWVzXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBjbGVhckRlZmF1bHQoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyLCBkYXk6IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoeWVhciAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB5ZWFyPSR7eWVhcn1gKTsgfVxuICAgIGlmIChtb250aCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBtb250aD0ke21vbnRofWApOyB9XG4gICAgaWYgKGRheSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBkYXk9JHtkYXl9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vZGVmYXVsdGAsIC4uLnBhcmFtcyk7XG4gIH1cblxufVxuIl19