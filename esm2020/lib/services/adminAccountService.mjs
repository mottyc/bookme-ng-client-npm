import { Injectable, Inject } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/rest-util";
import * as i2 from "../../config";
/**
 * List of account related actions for account administrator only
 * @RequestHeader X-API-KEY The key to identify the application (console)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export class AdminAccountService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/admin/account';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Get account settings
     * @Return: EntityResponse<AccountSettings>
     */
    getSettings() {
        return this.rest.get(`${this.baseUrl}/settings`);
    }
    /**
     * Update existing account settings in the system
     * @Return: EntityResponse<AccountSettings>
     */
    updateSettings(body) {
        return this.rest.put(`${this.baseUrl}/settings`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
}
AdminAccountService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: AdminAccountService, deps: [{ token: 'config' }, { token: i1.RestUtil }], target: i0.ɵɵFactoryTarget.Injectable });
AdminAccountService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: AdminAccountService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: AdminAccountService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i2.CoreConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: i1.RestUtil }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW5BY2NvdW50U2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jvb2ttZS1saWIvc3JjL2xpYi9zZXJ2aWNlcy9hZG1pbkFjY291bnRTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBT25EOzs7O0dBSUc7QUFFSCxNQUFNLE9BQU8sbUJBQW1CO0lBSzlCOztPQUVHO0lBQ0gsWUFBc0MsTUFBa0IsRUFBVSxJQUFjO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVO1FBTmhGLGlCQUFpQjtRQUNULFlBQU8sR0FBRyxnQkFBZ0IsQ0FBQztRQU1qQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7T0FHRztJQUNILFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sV0FBVyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVEOzs7T0FHRztJQUNILGNBQWMsQ0FBQyxJQUFxQjtRQUNsQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sV0FBVyxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0csQ0FBQzs7Z0hBM0JVLG1CQUFtQixrQkFRVixRQUFRO29IQVJqQixtQkFBbUI7MkZBQW5CLG1CQUFtQjtrQkFEL0IsVUFBVTs7MEJBU0ksTUFBTTsyQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuaW1wb3J0IHsgQWNjb3VudFNldHRpbmdzIH0gZnJvbSAnLi4vY29tbW9uL0FjY291bnRTZXR0aW5ncyc7XG5cblxuLyoqXG4gKiBMaXN0IG9mIGFjY291bnQgcmVsYXRlZCBhY3Rpb25zIGZvciBhY2NvdW50IGFkbWluaXN0cmF0b3Igb25seVxuICogQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChjb25zb2xlKVxuICogQFJlcXVlc3RIZWFkZXIgWC1BQ0NFU1MtVE9LRU4gVGhlIHRva2VuIHRvIGlkZW50aWZ5IHRoZSBsb2dnZWQtaW4gdXNlciBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFkbWluQWNjb3VudFNlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvYWRtaW4vYWNjb3VudCc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEdldCBhY2NvdW50IHNldHRpbmdzXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFjY291bnRTZXR0aW5ncz5cbiAgICovXG4gIGdldFNldHRpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vc2V0dGluZ3NgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgZXhpc3RpbmcgYWNjb3VudCBzZXR0aW5ncyBpbiB0aGUgc3lzdGVtXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFjY291bnRTZXR0aW5ncz5cbiAgICovXG4gIHVwZGF0ZVNldHRpbmdzKGJvZHk6IEFjY291bnRTZXR0aW5ncykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vc2V0dGluZ3NgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbn1cbiJdfQ==