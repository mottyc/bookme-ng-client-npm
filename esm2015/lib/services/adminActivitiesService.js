import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
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
        return this.rest.post(`${this.baseUrl}/default`, null, ...params);
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
/** @nocollapse */ AdminActivitiesService.ɵfac = function AdminActivitiesService_Factory(t) { return new (t || AdminActivitiesService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
/** @nocollapse */ AdminActivitiesService.ɵprov = i0.ɵɵdefineInjectable({ token: AdminActivitiesService, factory: AdminActivitiesService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminActivitiesService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW5BY3Rpdml0aWVzU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvc2VydmljZXMvYWRtaW5BY3Rpdml0aWVzU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQU0xQzs7OztHQUlHO0FBRUgsTUFBTSxPQUFPLHNCQUFzQjtJQUtqQzs7T0FFRztJQUNILFlBQXNDLE1BQWtCLEVBQVUsSUFBYztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTtRQU5oRixpQkFBaUI7UUFDVCxZQUFPLEdBQUcsbUJBQW1CLENBQUM7UUFNcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsSUFBZTtRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkcsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxJQUFlO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFB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RTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDckQsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUVqRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sVUFBVSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7K0dBMUhVLHNCQUFzQixjQVFiLFFBQVE7aUZBUmpCLHNCQUFzQixXQUF0QixzQkFBc0I7dUZBQXRCLHNCQUFzQjtjQURsQyxVQUFVOztzQkFTSSxNQUFNO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5pbXBvcnQgeyBBY2NvdW50Um9sZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9BY2NvdW50Um9sZUNvZGUnO1xuaW1wb3J0IHsgQWN0aXZpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9BY3Rpdml0eSc7XG5cblxuLyoqXG4gKiBTZXJ2aWNlcyBmb3IgbWFuYWdpbmcgY2x1YiBhY3Rpdml0aWVzIC0gZm9yIGFjY291bnQgYWRtaW5pc3RyYXRvciBvbmx5XG4gKiBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKHBvcnRhbClcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQUNDRVNTLVRPS0VOIFRoZSB0b2tlbiB0byBpZGVudGlmeSB0aGUgbG9nZ2VkLWluIHVzZXIgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBZG1pbkFjdGl2aXRpZXNTZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL2FkbWluL2FjdGl2aXRpZXMnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbmV3IGFjdGl2aXR5XG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFjdGl2aXR5PlxuICAgKi9cbiAgY3JlYXRlKGJvZHk/OiBBY3Rpdml0eSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgYWN0aXZpdHlcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QWN0aXZpdHk+XG4gICAqL1xuICB1cGRhdGUoYm9keT86IEFjdGl2aXR5KSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGFjdGl2aXR5XG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBkZWxldGUoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNpbmdsZSBhY3Rpdml0eSBieSBpZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBY3Rpdml0eT5cbiAgICovXG4gIGdldChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcHJldmlvdXMgYWN0aXZpdHkgcmVsYXRlZCB0byB0aGlzIGFjdGl2aXR5IGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFjdGl2aXR5PlxuICAgKi9cbiAgcHJldihpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vcHJldmApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBuZXh0IGFjdGl2aXR5IHJlbGF0ZWQgdG8gdGhpcyBhY3Rpdml0eSBpZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBY3Rpdml0eT5cbiAgICovXG4gIG5leHQoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L25leHRgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGFjdGl2aXRpZXMgYnkgdGltZSByYW5nZVxuICAgKiBAUmV0dXJuOiBRdWVyeVJlc3BvbnNlPEFjdGl2aXR5PlxuICAgKi9cbiAgZmluZChmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlciwgeWVhcj86IG51bWJlciwgbW9udGg/OiBudW1iZXIsIGRheT86IG51bWJlciwgdG90YWw/OiBib29sZWFuKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cbiAgICBpZiAoeWVhciAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB5ZWFyPSR7eWVhcn1gKTsgfVxuICAgIGlmIChtb250aCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBtb250aD0ke21vbnRofWApOyB9XG4gICAgaWYgKGRheSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBkYXk9JHtkYXl9YCk7IH1cbiAgICBpZiAodG90YWwgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdG90YWw9JHt0b3RhbH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBsaXN0IG9mIGZyZWUgcmVzb3VyY2VzIGZvciBhY3Rpdml0eSBieSBmaWx0ZXJcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxSZXNvdXJjZT5cbiAgICovXG4gIGZpbmRGcmVlUmVzb3VyY2VzKGlkPzogc3RyaW5nLCByZXNUeXBlPzogbnVtYmVyLCB3ZWlnaHQ/OiBudW1iZXIsIGZvclVzZUJ5PzogQWNjb3VudFJvbGVDb2RlKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChyZXNUeXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHJlc1R5cGU9JHtyZXNUeXBlfWApOyB9XG4gICAgaWYgKHdlaWdodCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB3ZWlnaHQ9JHt3ZWlnaHR9YCk7IH1cbiAgICBpZiAoZm9yVXNlQnkgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZm9yVXNlQnk9JHtmb3JVc2VCeX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9yZXNvdXJjZXNgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBidWxrIHNldCBvZiBhY3Rpdml0aWVzXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBjcmVhdGVCdWxrKGJvZHk/OiBBY3Rpdml0eVtdKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vYnVsa2AsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFjY291bnQgZGVmYXVsdCBzZXQgb2YgYWN0aXZpdGllcyBwZXIgbW9udGhcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGNyZWF0ZURlZmF1bHQoeWVhcj86IG51bWJlciwgbW9udGg/OiBudW1iZXIsIGRheT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoeWVhciAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB5ZWFyPSR7eWVhcn1gKTsgfVxuICAgIGlmIChtb250aCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBtb250aD0ke21vbnRofWApOyB9XG4gICAgaWYgKGRheSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBkYXk9JHtkYXl9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2RlZmF1bHRgLCBudWxsLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCBtb250aCBhY3Rpdml0aWVzXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBjbGVhckRlZmF1bHQoeWVhcj86IG51bWJlciwgbW9udGg/OiBudW1iZXIsIGRheT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoeWVhciAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB5ZWFyPSR7eWVhcn1gKTsgfVxuICAgIGlmIChtb250aCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBtb250aD0ke21vbnRofWApOyB9XG4gICAgaWYgKGRheSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBkYXk9JHtkYXl9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vZGVmYXVsdGAsIC4uLnBhcmFtcyk7XG4gIH1cblxufVxuIl19