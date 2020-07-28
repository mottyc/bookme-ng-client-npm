import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/rest-util";
import * as i2 from "../../config";
/**
 * List of all user related actions for account administrator only
 * @RequestHeader X-API-KEY The key to identify the application (console)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export class SysUsersService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/users';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create a new user for the current account
     * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
     * @Return: ActionResponse
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update user
     * @Return: EntityResponse<User>
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change user name
     * @Return: EntityResponse<User>
     */
    changeName(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/name`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change user mobile
     * @Return: EntityResponse<User>
     */
    changeMobile(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/mobile`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change user type
     * @Return: EntityResponse<User>
     */
    changeType(id, type) {
        return this.rest.put(`${this.baseUrl}/${id}/type/${type}`, null);
    }
    /**
     * Change user status
     * @Return: EntityResponse<User>
     */
    changeStatus(id, status) {
        return this.rest.put(`${this.baseUrl}/${id}/status/${status}`, null);
    }
    /**
     * Change user default account
     * @Return: EntityResponse<User>
     */
    changeDefaultAccount(id, accountId) {
        return this.rest.put(`${this.baseUrl}/${id}/defaultAccount/${accountId}`, null);
    }
    /**
     * Reset password for user, generate one-time temporary password
     * @Return: ActionResponse
     */
    resetPassword(id) {
        return this.rest.post(`${this.baseUrl}/${id}/reset-password`, null);
    }
    /**
     * Set user roles in his accounts (override previous roles)
     * @Return: EntityResponse<User>
     */
    setRoles(id, roles) {
        return this.rest.post(`${this.baseUrl}/${id}/roles/`, typeof roles === 'object' ? JSON.stringify(roles) : roles);
    }
    /**
     * Update user roles in his accounts (merge with existing roles)
     * @Return: EntityResponse<User>
     */
    mergeRoles(id, roles) {
        return this.rest.put(`${this.baseUrl}/${id}/roles/`, typeof roles === 'object' ? JSON.stringify(roles) : roles);
    }
    /**
     * Delete user from the system
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single user by Id
     * @Return: EntityResponse<User>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of users by filter
     * @Return: QueryResponse<User>
     */
    find(accountId, search, type, status, sort, page, pageSize) {
        const params = new Array();
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
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
}
/** @nocollapse */ SysUsersService.ɵfac = function SysUsersService_Factory(t) { return new (t || SysUsersService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
/** @nocollapse */ SysUsersService.ɵprov = i0.ɵɵdefineInjectable({ token: SysUsersService, factory: SysUsersService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SysUsersService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzVXNlcnNTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9zZXJ2aWNlcy9zeXNVc2Vyc1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFTMUM7Ozs7R0FJRztBQUVILE1BQU0sT0FBTyxlQUFlO0lBSzFCOztPQUVHO0lBQ0gsWUFBc0MsTUFBa0IsRUFBVSxJQUFjO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVO1FBTmhGLGlCQUFpQjtRQUNULFlBQU8sR0FBRyxZQUFZLENBQUM7UUFNN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLElBQXVCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLEVBQVcsRUFBRSxJQUFXO1FBQzdCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFBRSxFQUFFLE9BQU8sSUFBSSxLQUFL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RSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ25ELENBQUM7O2lHQTdIVSxlQUFlLGNBUU4sUUFBUTswRUFSakIsZUFBZSxXQUFmLGVBQWU7a0RBQWYsZUFBZTtjQUQzQixVQUFVOztzQkFTSSxNQUFNO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vZW50aXRpZXMvVXNlcic7XG5pbXBvcnQgeyBVc2VyVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9Vc2VyVHlwZUNvZGUnO1xuaW1wb3J0IHsgVXNlclN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9Vc2VyU3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBBY2NvdW50Um9sZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9BY2NvdW50Um9sZUNvZGUnO1xuaW1wb3J0IHsgVXNlclJlZ2lzdHJhdGlvbiB9IGZyb20gJy4uL2NvbW1vbi9Vc2VyUmVnaXN0cmF0aW9uJztcblxuXG4vKipcbiAqIExpc3Qgb2YgYWxsIHVzZXIgcmVsYXRlZCBhY3Rpb25zIGZvciBhY2NvdW50IGFkbWluaXN0cmF0b3Igb25seVxuICogQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChjb25zb2xlKVxuICogQFJlcXVlc3RIZWFkZXIgWC1BQ0NFU1MtVE9LRU4gVGhlIHRva2VuIHRvIGlkZW50aWZ5IHRoZSBsb2dnZWQtaW4gdXNlciBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN5c1VzZXJzU2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy9zeXMvdXNlcnMnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgdXNlciBmb3IgdGhlIGN1cnJlbnQgYWNjb3VudFxuICAgKiBUaGUgcmVzcG9uc2UgaW5jbHVkZXMgYWNjZXNzIHRva2VuIHZhbGlkIGZvciAyMCBtaW51dGVzLiBUaGUgY2xpZW50IHNpZGUgc2hvdWxkIHJlbmV3IHRoZSB0b2tlbiBiZWZvcmUgZXhwaXJhdGlvbiB1c2luZyByZWZyZXNoLXRva2VuIG1ldGhvZFxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgY3JlYXRlKGJvZHk/OiBVc2VyUmVnaXN0cmF0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH1gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB1c2VyXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFVzZXI+XG4gICAqL1xuICB1cGRhdGUoaWQ/OiBzdHJpbmcsIGJvZHk/OiBVc2VyKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIHVzZXIgbmFtZVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxVc2VyPlxuICAgKi9cbiAgY2hhbmdlTmFtZShpZD86IHN0cmluZywgYm9keT86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vbmFtZWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIHVzZXIgbW9iaWxlXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFVzZXI+XG4gICAqL1xuICBjaGFuZ2VNb2JpbGUoaWQ/OiBzdHJpbmcsIGJvZHk/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L21vYmlsZWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIHVzZXIgdHlwZVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxVc2VyPlxuICAgKi9cbiAgY2hhbmdlVHlwZShpZD86IHN0cmluZywgdHlwZT86IFVzZXJUeXBlQ29kZSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vdHlwZS8ke3R5cGV9YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIHVzZXIgc3RhdHVzXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFVzZXI+XG4gICAqL1xuICBjaGFuZ2VTdGF0dXMoaWQ/OiBzdHJpbmcsIHN0YXR1cz86IFVzZXJTdGF0dXNDb2RlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9zdGF0dXMvJHtzdGF0dXN9YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIHVzZXIgZGVmYXVsdCBhY2NvdW50XG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFVzZXI+XG4gICAqL1xuICBjaGFuZ2VEZWZhdWx0QWNjb3VudChpZD86IHN0cmluZywgYWNjb3VudElkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9kZWZhdWx0QWNjb3VudC8ke2FjY291bnRJZH1gLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBwYXNzd29yZCBmb3IgdXNlciwgZ2VuZXJhdGUgb25lLXRpbWUgdGVtcG9yYXJ5IHBhc3N3b3JkXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICByZXNldFBhc3N3b3JkKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vcmVzZXQtcGFzc3dvcmRgLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdXNlciByb2xlcyBpbiBoaXMgYWNjb3VudHMgKG92ZXJyaWRlIHByZXZpb3VzIHJvbGVzKVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxVc2VyPlxuICAgKi9cbiAgc2V0Um9sZXMoaWQ/OiBzdHJpbmcsIHJvbGVzPzogQWNjb3VudFJvbGVDb2RlW10pIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9yb2xlcy9gLCB0eXBlb2Ygcm9sZXMgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkocm9sZXMpIDogcm9sZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB1c2VyIHJvbGVzIGluIGhpcyBhY2NvdW50cyAobWVyZ2Ugd2l0aCBleGlzdGluZyByb2xlcylcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8VXNlcj5cbiAgICovXG4gIG1lcmdlUm9sZXMoaWQ/OiBzdHJpbmcsIHJvbGVzPzogQWNjb3VudFJvbGVDb2RlW10pIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3JvbGVzL2AsIHR5cGVvZiByb2xlcyA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShyb2xlcykgOiByb2xlcyk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIHVzZXIgZnJvbSB0aGUgc3lzdGVtXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBkZWxldGUoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNpbmdsZSB1c2VyIGJ5IElkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFVzZXI+XG4gICAqL1xuICBnZXQoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBsaXN0IG9mIHVzZXJzIGJ5IGZpbHRlclxuICAgKiBAUmV0dXJuOiBRdWVyeVJlc3BvbnNlPFVzZXI+XG4gICAqL1xuICBmaW5kKGFjY291bnRJZD86IHN0cmluZywgc2VhcmNoPzogc3RyaW5nLCB0eXBlPzogVXNlclR5cGVDb2RlW10sIHN0YXR1cz86IFVzZXJTdGF0dXNDb2RlW10sIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChhY2NvdW50SWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgYWNjb3VudElkPSR7YWNjb3VudElkfWApOyB9XG4gICAgaWYgKHNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZWFyY2g9JHtzZWFyY2h9YCk7IH1cbiAgICBpZiAodHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0eXBlPSR7dHlwZX1gKTsgfVxuICAgIGlmIChzdGF0dXMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RhdHVzPSR7c3RhdHVzfWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChwYWdlU2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlU2l6ZT0ke3BhZ2VTaXplfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG59XG4iXX0=