import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/rest-util";
import * as i2 from "../../config";
/**
 * Services for analytics reports - for account administrator only
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export class AdminReportsService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/admin/reports';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Get count of members over month
     * @Return: EntitiesResponse<CountDataPoint>
     */
    getMonthlyMembersCount(year, month) {
        const params = new Array();
        if (year != null) {
            params.push(`year=${year}`);
        }
        if (month != null) {
            params.push(`month=${month}`);
        }
        return this.rest.get(`${this.baseUrl}/monthly-members-count`, ...params);
    }
    /**
     * Get count of resources over month
     * @Return: EntitiesResponse<CountDataPoint>
     */
    getMonthlyResourcesCount(year, month) {
        const params = new Array();
        if (year != null) {
            params.push(`year=${year}`);
        }
        if (month != null) {
            params.push(`month=${month}`);
        }
        return this.rest.get(`${this.baseUrl}/monthly-resources-count`, ...params);
    }
    /**
     * Get count of members over time period
     * @Return: EntitiesResponse<CountDataPoint>
     */
    getMembersCountOvertime(from, to) {
        const params = new Array();
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        return this.rest.get(`${this.baseUrl}/period-members-count`, ...params);
    }
    /**
     * Get count of resources overtime
     * @Return: EntitiesResponse<CountDataPoint>
     */
    getResourcesCountOvertime(from, to) {
        const params = new Array();
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        return this.rest.get(`${this.baseUrl}/period-resources-count`, ...params);
    }
    /**
     * Get count of resources overtime
     * @Return: EntitiesResponse<CountDataPoint>
     */
    getDayOfWeekDistribution(from, to) {
        const params = new Array();
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        return this.rest.get(`${this.baseUrl}/count-by-dow`, ...params);
    }
}
/** @nocollapse */ AdminReportsService.ɵfac = function AdminReportsService_Factory(t) { return new (t || AdminReportsService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
/** @nocollapse */ AdminReportsService.ɵprov = i0.ɵɵdefineInjectable({ token: AdminReportsService, factory: AdminReportsService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminReportsService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW5SZXBvcnRzU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvc2VydmljZXMvYWRtaW5SZXBvcnRzU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQUkxQzs7OztHQUlHO0FBRUgsTUFBTSxPQUFPLG1CQUFtQjtJQUs5Qjs7T0FFRztJQUNILFlBQXNDLE1BQWtCLEVBQVUsSUFBYztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTtRQU5oRixpQkFBaUI7UUFDVCxZQUFPLEdBQUcsZ0JBQWdCLENBQUM7UUFNakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7O09BR0c7SUFDSCxzQkFBc0IsQ0FBQyxJQUFhLEVBQUUsS0FBYztRQUNsRCxNQUFNLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzNCLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssRUFBRSxDQUFDLENBQUM7U0FBRTtRQUV2RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sd0JBQXdCLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsd0JBQXdCLENBQUMsSUFBYSxFQUFFLEtBQWM7UUFDcEQsTUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUMzQixJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFFdkQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLDBCQUEwQixFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVEOzs7T0FHRztJQUNILHVCQUF1QixDQUFDLElBQWEsRUFBRSxFQUFXO1FBQ2hELE1BQU0sTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFDM0IsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBRTlDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyx1QkFBdUIsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRDs7O09BR0c7SUFDSCx5QkFBeUIsQ0FBQyxJQUFhLEVBQUUsRUFBVztRQUNsRCxNQUFNLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzNCLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUU5QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8seUJBQXlCLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsd0JBQXdCLENBQUMsSUFBYSxFQUFFLEVBQVc7UUFDakQsTUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUMzQixJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksRUFBRSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFFOUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLGVBQWUsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7O3lHQXZFVSxtQkFBbUIsY0FRVixRQUFROzhFQVJqQixtQkFBbUIsV0FBbkIsbUJBQW1CO3VGQUFuQixtQkFBbUI7Y0FEL0IsVUFBVTs7c0JBU0ksTUFBTTt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuXG5cbi8qKlxuICogU2VydmljZXMgZm9yIGFuYWx5dGljcyByZXBvcnRzIC0gZm9yIGFjY291bnQgYWRtaW5pc3RyYXRvciBvbmx5XG4gKiBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKHBvcnRhbClcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQUNDRVNTLVRPS0VOIFRoZSB0b2tlbiB0byBpZGVudGlmeSB0aGUgbG9nZ2VkLWluIHVzZXIgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBZG1pblJlcG9ydHNTZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL2FkbWluL3JlcG9ydHMnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBHZXQgY291bnQgb2YgbWVtYmVycyBvdmVyIG1vbnRoXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8Q291bnREYXRhUG9pbnQ+XG4gICAqL1xuICBnZXRNb250aGx5TWVtYmVyc0NvdW50KHllYXI/OiBudW1iZXIsIG1vbnRoPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmICh5ZWFyICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHllYXI9JHt5ZWFyfWApOyB9XG4gICAgaWYgKG1vbnRoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYG1vbnRoPSR7bW9udGh9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vbW9udGhseS1tZW1iZXJzLWNvdW50YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY291bnQgb2YgcmVzb3VyY2VzIG92ZXIgbW9udGhcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxDb3VudERhdGFQb2ludD5cbiAgICovXG4gIGdldE1vbnRobHlSZXNvdXJjZXNDb3VudCh5ZWFyPzogbnVtYmVyLCBtb250aD86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoeWVhciAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB5ZWFyPSR7eWVhcn1gKTsgfVxuICAgIGlmIChtb250aCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBtb250aD0ke21vbnRofWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L21vbnRobHktcmVzb3VyY2VzLWNvdW50YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY291bnQgb2YgbWVtYmVycyBvdmVyIHRpbWUgcGVyaW9kXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8Q291bnREYXRhUG9pbnQ+XG4gICAqL1xuICBnZXRNZW1iZXJzQ291bnRPdmVydGltZShmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L3BlcmlvZC1tZW1iZXJzLWNvdW50YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY291bnQgb2YgcmVzb3VyY2VzIG92ZXJ0aW1lXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8Q291bnREYXRhUG9pbnQ+XG4gICAqL1xuICBnZXRSZXNvdXJjZXNDb3VudE92ZXJ0aW1lKGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vcGVyaW9kLXJlc291cmNlcy1jb3VudGAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNvdW50IG9mIHJlc291cmNlcyBvdmVydGltZVxuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPENvdW50RGF0YVBvaW50PlxuICAgKi9cbiAgZ2V0RGF5T2ZXZWVrRGlzdHJpYnV0aW9uKGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vY291bnQtYnktZG93YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG59XG4iXX0=