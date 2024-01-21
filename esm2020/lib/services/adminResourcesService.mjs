import { Injectable, Inject } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/rest-util";
import * as i2 from "../../config";
/**
 * Services for managing club resources - for account administrator only
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export class AdminResourcesService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
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
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update resource
     * @Return: EntityResponse<Resource>
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete resource
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single resource by id
     * @Return: EntityResponse<Resource>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find resources by filters
     * @Return: QueryResponse<Resource>
     */
    find(search, resourceClass, resourceType, status, forUseBy, sort, page, pageSize) {
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (resourceClass != null) {
            params.push(`resourceClass=${resourceClass}`);
        }
        if (resourceType != null) {
            params.push(`resourceType=${resourceType}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (forUseBy != null) {
            params.push(`forUseBy=${forUseBy}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Import bulk set of resources
     * @Return: ActionResponse
     */
    bulkImport(body) {
        return this.rest.post(`${this.baseUrl}/bulk-import`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Find list of all bookings for a resource by filter per month
     * @Return: QueryResponse<Booking>
     */
    findResourceMonthHistory(id, year, month, day, sort) {
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
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/month-history`, ...params);
    }
    /**
     * Find list of all bookings for a resource by filter per time period
     * @Return: QueryResponse<Booking>
     */
    findResourceHistory(id, from, to, sort) {
        const params = new Array();
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/history`, ...params);
    }
    /**
     * Import resources from a file
     * The file must include header with the columns: Name, Type, Min, Max, Brand, Description
     * @return ActionResponse
     */
    importFile() {
        return this.rest.post(`${this.baseUrl}/import`, '');
    }
    /**
     * Export resources to a file
     * @return StreamContent
     */
    exportFile(format, search, resourceClass, resourceType, status, forUseBy, sort) {
        const params = new Array();
        if (format != null) {
            params.push(`format=${format}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (resourceClass != null) {
            params.push(`resourceClass=${resourceClass}`);
        }
        if (resourceType != null) {
            params.push(`resourceType=${resourceType}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (forUseBy != null) {
            params.push(`forUseBy=${forUseBy}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        return this.rest.download(`admin-resources`, `${this.baseUrl}/export`, ...params);
    }
}
AdminResourcesService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: AdminResourcesService, deps: [{ token: 'config' }, { token: i1.RestUtil }], target: i0.ɵɵFactoryTarget.Injectable });
AdminResourcesService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: AdminResourcesService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: AdminResourcesService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i2.CoreConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: i1.RestUtil }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW5SZXNvdXJjZXNTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYm9va21lLWxpYi9zcmMvbGliL3NlcnZpY2VzL2FkbWluUmVzb3VyY2VzU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVduRDs7OztHQUlHO0FBRUgsTUFBTSxPQUFPLHFCQUFxQjtJQUtoQzs7T0FFRztJQUNILFlBQXNDLE1BQWtCLEVBQVUsSUFBYztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTtRQU5oRixpQkFBaUI7UUFDVCxZQUFPLEdBQUcsa0JBQWtCLENBQUM7UUFNbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsSUFBYztRQUNuQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkcsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxJQUFjO1FBQ25CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRyxDQUFD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QUssRUFBRSxDQUFDO1FBQzNCLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FBRTtRQUN4RCxJQUFJLGFBQWEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixhQUFhLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDN0UsSUFBSSxZQUFZLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsWUFBWSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzFFLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBRXBELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxTQUFTLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUNqRixDQUFDOztrSEExSFUscUJBQXFCLGtCQVFaLFFBQVE7c0hBUmpCLHFCQUFxQjsyRkFBckIscUJBQXFCO2tCQURqQyxVQUFVOzswQkFTSSxNQUFNOzJCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5pbXBvcnQgeyBSZXNvdXJjZSB9IGZyb20gJy4uL2VudGl0aWVzL1Jlc291cmNlJztcbmltcG9ydCB7IFJlc291cmNlQ2xhc3NDb2RlIH0gZnJvbSAnLi4vZW51bXMvUmVzb3VyY2VDbGFzc0NvZGUnO1xuaW1wb3J0IHsgUmVzb3VyY2VUeXBlTWFzayB9IGZyb20gJy4uL2VudW1zL1Jlc291cmNlVHlwZU1hc2snO1xuaW1wb3J0IHsgUmVzb3VyY2VTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvUmVzb3VyY2VTdGF0dXNDb2RlJztcbmltcG9ydCB7IEFjY291bnRSb2xlQ29kZSB9IGZyb20gJy4uL2VudW1zL0FjY291bnRSb2xlQ29kZSc7XG5cblxuLyoqXG4gKiBTZXJ2aWNlcyBmb3IgbWFuYWdpbmcgY2x1YiByZXNvdXJjZXMgLSBmb3IgYWNjb3VudCBhZG1pbmlzdHJhdG9yIG9ubHlcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQVBJLUtFWSBUaGUga2V5IHRvIGlkZW50aWZ5IHRoZSBhcHBsaWNhdGlvbiAocG9ydGFsKVxuICogQFJlcXVlc3RIZWFkZXIgWC1BQ0NFU1MtVE9LRU4gVGhlIHRva2VuIHRvIGlkZW50aWZ5IHRoZSBsb2dnZWQtaW4gdXNlciBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFkbWluUmVzb3VyY2VzU2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy9hZG1pbi9yZXNvdXJjZXMnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbmV3IHJlc291cmNlXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFJlc291cmNlPlxuICAgKi9cbiAgY3JlYXRlKGJvZHk6IFJlc291cmNlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH1gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSByZXNvdXJjZVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxSZXNvdXJjZT5cbiAgICovXG4gIHVwZGF0ZShib2R5OiBSZXNvdXJjZSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH1gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSByZXNvdXJjZVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgZGVsZXRlKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNpbmdsZSByZXNvdXJjZSBieSBpZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxSZXNvdXJjZT5cbiAgICovXG4gIGdldChpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgcmVzb3VyY2VzIGJ5IGZpbHRlcnNcbiAgICogQFJldHVybjogUXVlcnlSZXNwb25zZTxSZXNvdXJjZT5cbiAgICovXG4gIGZpbmQoc2VhcmNoOiBzdHJpbmcsIHJlc291cmNlQ2xhc3M6IFJlc291cmNlQ2xhc3NDb2RlLCByZXNvdXJjZVR5cGU6IFJlc291cmNlVHlwZU1hc2ssIHN0YXR1czogUmVzb3VyY2VTdGF0dXNDb2RlLCBmb3JVc2VCeTogQWNjb3VudFJvbGVDb2RlLCBzb3J0OiBzdHJpbmcsIHBhZ2U6IG51bWJlciwgcGFnZVNpemU6IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmIChyZXNvdXJjZUNsYXNzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHJlc291cmNlQ2xhc3M9JHtyZXNvdXJjZUNsYXNzfWApOyB9XG4gICAgaWYgKHJlc291cmNlVHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGByZXNvdXJjZVR5cGU9JHtyZXNvdXJjZVR5cGV9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChmb3JVc2VCeSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb3JVc2VCeT0ke2ZvclVzZUJ5fWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChwYWdlU2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlU2l6ZT0ke3BhZ2VTaXplfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBvcnQgYnVsayBzZXQgb2YgcmVzb3VyY2VzXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBidWxrSW1wb3J0KGJvZHk6IFJlc291cmNlW10pIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9idWxrLWltcG9ydGAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBsaXN0IG9mIGFsbCBib29raW5ncyBmb3IgYSByZXNvdXJjZSBieSBmaWx0ZXIgcGVyIG1vbnRoXG4gICAqIEBSZXR1cm46IFF1ZXJ5UmVzcG9uc2U8Qm9va2luZz5cbiAgICovXG4gIGZpbmRSZXNvdXJjZU1vbnRoSGlzdG9yeShpZDogc3RyaW5nLCB5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIsIGRheTogbnVtYmVyLCBzb3J0OiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKHllYXIgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgeWVhcj0ke3llYXJ9YCk7IH1cbiAgICBpZiAobW9udGggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgbW9udGg9JHttb250aH1gKTsgfVxuICAgIGlmIChkYXkgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZGF5PSR7ZGF5fWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vbW9udGgtaGlzdG9yeWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBsaXN0IG9mIGFsbCBib29raW5ncyBmb3IgYSByZXNvdXJjZSBieSBmaWx0ZXIgcGVyIHRpbWUgcGVyaW9kXG4gICAqIEBSZXR1cm46IFF1ZXJ5UmVzcG9uc2U8Qm9va2luZz5cbiAgICovXG4gIGZpbmRSZXNvdXJjZUhpc3RvcnkoaWQ6IHN0cmluZywgZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyLCBzb3J0OiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGZyb20gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZnJvbT0ke2Zyb219YCk7IH1cbiAgICBpZiAodG8gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdG89JHt0b31gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2hpc3RvcnlgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEltcG9ydCByZXNvdXJjZXMgZnJvbSBhIGZpbGVcbiAgICogVGhlIGZpbGUgbXVzdCBpbmNsdWRlIGhlYWRlciB3aXRoIHRoZSBjb2x1bW5zOiBOYW1lLCBUeXBlLCBNaW4sIE1heCwgQnJhbmQsIERlc2NyaXB0aW9uXG4gICAqIEByZXR1cm4gQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGltcG9ydEZpbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vaW1wb3J0YCwgJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cG9ydCByZXNvdXJjZXMgdG8gYSBmaWxlXG4gICAqIEByZXR1cm4gU3RyZWFtQ29udGVudFxuICAgKi9cbiAgZXhwb3J0RmlsZShmb3JtYXQ6IHN0cmluZywgc2VhcmNoOiBzdHJpbmcsIHJlc291cmNlQ2xhc3M6IFJlc291cmNlQ2xhc3NDb2RlLCByZXNvdXJjZVR5cGU6IFJlc291cmNlVHlwZU1hc2ssIHN0YXR1czogUmVzb3VyY2VTdGF0dXNDb2RlLCBmb3JVc2VCeTogQWNjb3VudFJvbGVDb2RlLCBzb3J0OiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGZvcm1hdCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb3JtYXQ9JHtmb3JtYXR9YCk7IH1cbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmIChyZXNvdXJjZUNsYXNzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHJlc291cmNlQ2xhc3M9JHtyZXNvdXJjZUNsYXNzfWApOyB9XG4gICAgaWYgKHJlc291cmNlVHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGByZXNvdXJjZVR5cGU9JHtyZXNvdXJjZVR5cGV9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChmb3JVc2VCeSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb3JVc2VCeT0ke2ZvclVzZUJ5fWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZG93bmxvYWQoYGFkbWluLXJlc291cmNlc2AsYCR7dGhpcy5iYXNlVXJsfS9leHBvcnRgLCAuLi5wYXJhbXMpO1xuICB9XG5cbn1cbiJdfQ==