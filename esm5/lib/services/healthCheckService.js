import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/rest-util";
import * as i2 from "../../config";
/**
 * Health check service, no X-API-KEY or X-ACCESS-TOKEN are required
 */
var HealthCheckService = /** @class */ (function () {
    /**
     * Class constructor
     */
    function HealthCheckService(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/health';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Health check to test service availability
     * @Return: ActionResponse - with version info
     */
    HealthCheckService.prototype.health = function () {
        return this.rest.get("" + this.baseUrl);
    };
    /** @nocollapse */ HealthCheckService.ɵfac = function HealthCheckService_Factory(t) { return new (t || HealthCheckService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
    /** @nocollapse */ HealthCheckService.ɵprov = i0.ɵɵdefineInjectable({ token: HealthCheckService, factory: HealthCheckService.ɵfac });
    return HealthCheckService;
}());
export { HealthCheckService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HealthCheckService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhbHRoQ2hlY2tTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG1vdHR5Yy9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9oZWFsdGhDaGVja1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFJMUM7O0dBRUc7QUFDSDtJQU1FOztPQUVHO0lBQ0gsNEJBQXNDLE1BQWtCLEVBQVUsSUFBYztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTtRQU5oRixpQkFBaUI7UUFDVCxZQUFPLEdBQUcsU0FBUyxDQUFDO1FBTTFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBR0Q7OztPQUdHO0lBQ0gsbUNBQU0sR0FBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBRyxJQUFJLENBQUMsT0FBUyxDQUFDLENBQUM7SUFDMUMsQ0FBQzsyR0FuQlUsa0JBQWtCLGNBUVQsUUFBUTtpRkFSakIsa0JBQWtCLFdBQWxCLGtCQUFrQjs2QkFWL0I7Q0ErQkMsQUF0QkQsSUFzQkM7U0FyQlksa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FEOUIsVUFBVTs7c0JBU0ksTUFBTTt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuXG5cbi8qKlxuICogSGVhbHRoIGNoZWNrIHNlcnZpY2UsIG5vIFgtQVBJLUtFWSBvciBYLUFDQ0VTUy1UT0tFTiBhcmUgcmVxdWlyZWQgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIZWFsdGhDaGVja1NlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvaGVhbHRoJztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogSGVhbHRoIGNoZWNrIHRvIHRlc3Qgc2VydmljZSBhdmFpbGFiaWxpdHlcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2UgLSB3aXRoIHZlcnNpb24gaW5mb1xuICAgKi9cbiAgaGVhbHRoKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH1gKTtcbiAgfVxuXG59XG4iXX0=