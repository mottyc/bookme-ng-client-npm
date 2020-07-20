import { __read, __spread } from "tslib";
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/rest-util";
import * as i2 from "../../config";
/**
 * Services for managing club resources - for account administrator only
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
var AdminResourcesService = /** @class */ (function () {
    /**
     * Class constructor
     */
    function AdminResourcesService(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/admin/resources';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new resource
     * @Return: EntityResponse<Resource>
     */
    AdminResourcesService.prototype.create = function (body) {
        return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Update resource
     * @Return: EntityResponse<Resource>
     */
    AdminResourcesService.prototype.update = function (body) {
        return this.rest.put("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Delete resource
     * @Return: ActionResponse
     */
    AdminResourcesService.prototype.delete = function (id) {
        return this.rest.delete("" + this.baseUrl);
    };
    /**
     * Get single resource by id
     * @Return: EntityResponse<Resource>
     */
    AdminResourcesService.prototype.get = function (id) {
        return this.rest.get(this.baseUrl + "/" + id);
    };
    /**
     * Find resources by filters
     * @Return: QueryResponse<Resource>
     */
    AdminResourcesService.prototype.find = function (search, resourceClass, resourceType, status, forUseBy, sort, page, pageSize) {
        var _a;
        var params = new Array();
        if (search != null) {
            params.push("search=" + search);
        }
        if (resourceClass != null) {
            params.push("resourceClass=" + resourceClass);
        }
        if (resourceType != null) {
            params.push("resourceType=" + resourceType);
        }
        if (status != null) {
            params.push("status=" + status);
        }
        if (forUseBy != null) {
            params.push("forUseBy=" + forUseBy);
        }
        if (sort != null) {
            params.push("sort=" + sort);
        }
        if (page != null) {
            params.push("page=" + page);
        }
        if (pageSize != null) {
            params.push("pageSize=" + pageSize);
        }
        return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
    };
    /** @nocollapse */ AdminResourcesService.ɵfac = function AdminResourcesService_Factory(t) { return new (t || AdminResourcesService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
    /** @nocollapse */ AdminResourcesService.ɵprov = i0.ɵɵdefineInjectable({ token: AdminResourcesService, factory: AdminResourcesService.ɵfac });
    return AdminResourcesService;
}());
export { AdminResourcesService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AdminResourcesService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW5SZXNvdXJjZXNTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG1vdHR5Yy9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hZG1pblJlc291cmNlc1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7O0FBUzFDOzs7O0dBSUc7QUFDSDtJQU1FOztPQUVHO0lBQ0gsK0JBQXNDLE1BQWtCLEVBQVUsSUFBYztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTtRQU5oRixpQkFBaUI7UUFDVCxZQUFPLEdBQUcsa0JBQWtCLENBQUM7UUFNbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7O09BR0c7SUFDSCxzQ0FBTSxHQUFOLFVBQU8sSUFBZTtRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUcsSUFBSSxDQUFDLE9BQVMsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25HLENBQUM7SUFFRDs7O09BR0c7SUFDSCxzQ0FBTSxHQUFOLFVBQU8sSUFBZTtRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUcsSUFBSSxDQUFDLE9BQVMsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFFRDs7O09BR0c7SUFDSCxzQ0FBTSxHQUFOLFVBQU8sRUFBVztRQUNoQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUcsSUFBSSxDQUFDLE9BQVMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxtQ0FBRyxHQUFILFVBQUksRUFBVztRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLE9BQU8sU0FBSSxFQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsb0NBQUksR0FBSixVQUFLLE1BQWUsRUFBRSxhQUFpQyxFQUFFLFlBQStCLEVBQUUsTUFBMkIsRUFBRSxRQUFzQixFQUFFLElBQWEsRUFBRSxJQUFhLEVBQUUsUUFBaUI7O1FBQzVMLElBQU0sTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFDM0IsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFVLE1BQVEsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxhQUFhLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBaUIsYUFBZSxDQUFDLENBQUM7U0FBRTtRQUM3RSxJQUFJLFlBQVksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFnQixZQUFjLENBQUMsQ0FBQztTQUFFO1FBQzFFLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBVSxNQUFRLENBQUMsQ0FBQztTQUFFO1FBQ3hELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBWSxRQUFVLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBUSxJQUFNLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBUSxJQUFNLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBWSxRQUFVLENBQUMsQ0FBQztTQUFFO1FBRWhFLE9BQU8sQ0FBQSxLQUFBLElBQUksQ0FBQyxJQUFJLENBQUEsQ0FBQyxHQUFHLHFCQUFDLEtBQUcsSUFBSSxDQUFDLE9BQVMsR0FBSyxNQUFNLEdBQUU7SUFDbkQsQ0FBQztpSEE3RFUscUJBQXFCLGNBUVosUUFBUTtvRkFSakIscUJBQXFCLFdBQXJCLHFCQUFxQjtnQ0FqQmxDO0NBZ0ZDLEFBaEVELElBZ0VDO1NBL0RZLHFCQUFxQjtrREFBckIscUJBQXFCO2NBRGpDLFVBQVU7O3NCQVNJLE1BQU07dUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmltcG9ydCB7IFVzZVR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvVXNlVHlwZUNvZGUnO1xuaW1wb3J0IHsgUmVzb3VyY2UgfSBmcm9tICcuLi9lbnRpdGllcy9SZXNvdXJjZSc7XG5pbXBvcnQgeyBSZXNvdXJjZUNsYXNzQ29kZSB9IGZyb20gJy4uL2VudW1zL1Jlc291cmNlQ2xhc3NDb2RlJztcbmltcG9ydCB7IFJlc291cmNlVHlwZU1hc2sgfSBmcm9tICcuLi9lbnVtcy9SZXNvdXJjZVR5cGVNYXNrJztcbmltcG9ydCB7IFJlc291cmNlU3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL1Jlc291cmNlU3RhdHVzQ29kZSc7XG5cblxuLyoqXG4gKiBTZXJ2aWNlcyBmb3IgbWFuYWdpbmcgY2x1YiByZXNvdXJjZXMgLSBmb3IgYWNjb3VudCBhZG1pbmlzdHJhdG9yIG9ubHlcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQVBJLUtFWSBUaGUga2V5IHRvIGlkZW50aWZ5IHRoZSBhcHBsaWNhdGlvbiAocG9ydGFsKVxuICogQFJlcXVlc3RIZWFkZXIgWC1BQ0NFU1MtVE9LRU4gVGhlIHRva2VuIHRvIGlkZW50aWZ5IHRoZSBsb2dnZWQtaW4gdXNlciBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFkbWluUmVzb3VyY2VzU2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy9hZG1pbi9yZXNvdXJjZXMnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbmV3IHJlc291cmNlXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFJlc291cmNlPlxuICAgKi9cbiAgY3JlYXRlKGJvZHk/OiBSZXNvdXJjZSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgcmVzb3VyY2VcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8UmVzb3VyY2U+XG4gICAqL1xuICB1cGRhdGUoYm9keT86IFJlc291cmNlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIHJlc291cmNlXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBkZWxldGUoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNpbmdsZSByZXNvdXJjZSBieSBpZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxSZXNvdXJjZT5cbiAgICovXG4gIGdldChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHJlc291cmNlcyBieSBmaWx0ZXJzXG4gICAqIEBSZXR1cm46IFF1ZXJ5UmVzcG9uc2U8UmVzb3VyY2U+XG4gICAqL1xuICBmaW5kKHNlYXJjaD86IHN0cmluZywgcmVzb3VyY2VDbGFzcz86IFJlc291cmNlQ2xhc3NDb2RlLCByZXNvdXJjZVR5cGU/OiBSZXNvdXJjZVR5cGVNYXNrLCBzdGF0dXM/OiBSZXNvdXJjZVN0YXR1c0NvZGUsIGZvclVzZUJ5PzogVXNlVHlwZUNvZGUsIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHJlc291cmNlQ2xhc3MgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcmVzb3VyY2VDbGFzcz0ke3Jlc291cmNlQ2xhc3N9YCk7IH1cbiAgICBpZiAocmVzb3VyY2VUeXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHJlc291cmNlVHlwZT0ke3Jlc291cmNlVHlwZX1gKTsgfVxuICAgIGlmIChzdGF0dXMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RhdHVzPSR7c3RhdHVzfWApOyB9XG4gICAgaWYgKGZvclVzZUJ5ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZvclVzZUJ5PSR7Zm9yVXNlQnl9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH1gLCAuLi5wYXJhbXMpO1xuICB9XG5cbn1cbiJdfQ==