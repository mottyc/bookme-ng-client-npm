import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/rest-util";
import * as i2 from "../../config";
/**
 * List of all notifications actions for account administrator only
 */
export class AdminNotificationsService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/admin/notifications';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Send Create new notification
     * @Return: ActionResponse
     */
    create(userId, type, body) {
        const params = new Array();
        if (userId != null) {
            params.push(`userId=${userId}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body, ...params);
    }
    /**
     * Create notifications for all users in booking
     * @Return: ActionResponse
     */
    notifyBookingUsers(bookingId, type, body) {
        const params = new Array();
        if (bookingId != null) {
            params.push(`bookingId=${bookingId}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        return this.rest.post(`${this.baseUrl}/booking`, typeof body === 'object' ? JSON.stringify(body) : body, ...params);
    }
    /**
     * Create notifications for all users in activity bookings
     * @Return: ActionResponse
     */
    notifyActivityUsers(activityId, type, body) {
        const params = new Array();
        if (activityId != null) {
            params.push(`activityId=${activityId}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        return this.rest.post(`${this.baseUrl}/activity`, typeof body === 'object' ? JSON.stringify(body) : body, ...params);
    }
    /**
     * Create notifications for all users in activity bookings
     * @Return: ActionResponse
     */
    notifyDailyUsers(dayId, type, body) {
        const params = new Array();
        if (dayId != null) {
            params.push(`dayId=${dayId}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        return this.rest.post(`${this.baseUrl}/daily`, typeof body === 'object' ? JSON.stringify(body) : body, ...params);
    }
    /**
     * Create notification for all club members
     * @Return: ActionResponse
     */
    notifyAllMembers(dayId, type, body) {
        const params = new Array();
        if (dayId != null) {
            params.push(`dayId=${dayId}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        return this.rest.post(`${this.baseUrl}/members`, typeof body === 'object' ? JSON.stringify(body) : body, ...params);
    }
}
/** @nocollapse */ AdminNotificationsService.ɵfac = function AdminNotificationsService_Factory(t) { return new (t || AdminNotificationsService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
/** @nocollapse */ AdminNotificationsService.ɵprov = i0.ɵɵdefineInjectable({ token: AdminNotificationsService, factory: AdminNotificationsService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AdminNotificationsService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW5Ob3RpZmljYXRpb25zU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvc2VydmljZXMvYWRtaW5Ob3RpZmljYXRpb25zU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQUsxQzs7R0FFRztBQUVILE1BQU0sT0FBTyx5QkFBeUI7SUFLcEM7O09BRUc7SUFDSCxZQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7UUFOaEYsaUJBQWlCO1FBQ1QsWUFBTyxHQUFHLHNCQUFzQixDQUFDO1FBTXZDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBR0Q7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLE1BQWlCLEVBQUUsSUFBMkIsRUFBRSxJQUFhO1FBQ2xFLE1BQU0sTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFDM0IsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FBRTtRQUN4RCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBRXBELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUM1RyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsa0JBQWtCLENBQUMsU0FBa0IsRUFBRSxJQUEyQixFQUFFLElBQWE7UUFDL0UsTUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUMzQixJQUFJLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsU0FBUyxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2pFLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFFcEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLFVBQVUsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ3BILENBQUM7SUFFRDs7O09BR0c7SUFDSCxtQkFBbUIsQ0FBQyxVQUFtQixFQUFFLElBQTJCLEVBQUUsSUFBYTtRQUNqRixNQUFNLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzNCLElBQUksVUFBVSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDcEUsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUVwRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sV0FBVyxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDckgsQ0FBQztJQUVEOzs7T0FHRztJQUNILGdCQUFnQixDQUFDLEtBQWMsRUFBRSxJQUEyQixFQUFFLElBQWE7UUFDekUsTUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUMzQixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ3JELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFFcEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLFFBQVEsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ2xILENBQUM7SUFFRDs7O09BR0c7SUFDSCxnQkFBZ0IsQ0FBQyxLQUFjLEVBQUUsSUFBMkIsRUFBRSxJQUFhO1FBQ3pFLE1BQU0sTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFDM0IsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNyRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBRXBELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxVQUFVLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUNwSCxDQUFDOztxSEF2RVUseUJBQXlCLGNBUWhCLFFBQVE7b0ZBUmpCLHlCQUF5QixXQUF6Qix5QkFBeUI7a0RBQXpCLHlCQUF5QjtjQURyQyxVQUFVOztzQkFTSSxNQUFNO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5pbXBvcnQgeyBOb3RpZmljYXRpb25UeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL05vdGlmaWNhdGlvblR5cGVDb2RlJztcblxuXG4vKipcbiAqIExpc3Qgb2YgYWxsIG5vdGlmaWNhdGlvbnMgYWN0aW9ucyBmb3IgYWNjb3VudCBhZG1pbmlzdHJhdG9yIG9ubHkgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBZG1pbk5vdGlmaWNhdGlvbnNTZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL2FkbWluL25vdGlmaWNhdGlvbnMnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBTZW5kIENyZWF0ZSBuZXcgbm90aWZpY2F0aW9uXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBjcmVhdGUodXNlcklkPzogc3RyaW5nW10sIHR5cGU/OiBOb3RpZmljYXRpb25UeXBlQ29kZSwgYm9keT86IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAodXNlcklkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHVzZXJJZD0ke3VzZXJJZH1gKTsgfVxuICAgIGlmICh0eXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHR5cGU9JHt0eXBlfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbm90aWZpY2F0aW9ucyBmb3IgYWxsIHVzZXJzIGluIGJvb2tpbmdcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIG5vdGlmeUJvb2tpbmdVc2Vycyhib29raW5nSWQ/OiBzdHJpbmcsIHR5cGU/OiBOb3RpZmljYXRpb25UeXBlQ29kZSwgYm9keT86IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoYm9va2luZ0lkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGJvb2tpbmdJZD0ke2Jvb2tpbmdJZH1gKTsgfVxuICAgIGlmICh0eXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHR5cGU9JHt0eXBlfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9ib29raW5nYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5LCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBub3RpZmljYXRpb25zIGZvciBhbGwgdXNlcnMgaW4gYWN0aXZpdHkgYm9va2luZ3NcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIG5vdGlmeUFjdGl2aXR5VXNlcnMoYWN0aXZpdHlJZD86IHN0cmluZywgdHlwZT86IE5vdGlmaWNhdGlvblR5cGVDb2RlLCBib2R5Pzogc3RyaW5nKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChhY3Rpdml0eUlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGFjdGl2aXR5SWQ9JHthY3Rpdml0eUlkfWApOyB9XG4gICAgaWYgKHR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdHlwZT0ke3R5cGV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2FjdGl2aXR5YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5LCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBub3RpZmljYXRpb25zIGZvciBhbGwgdXNlcnMgaW4gYWN0aXZpdHkgYm9va2luZ3NcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIG5vdGlmeURhaWx5VXNlcnMoZGF5SWQ/OiBudW1iZXIsIHR5cGU/OiBOb3RpZmljYXRpb25UeXBlQ29kZSwgYm9keT86IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZGF5SWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZGF5SWQ9JHtkYXlJZH1gKTsgfVxuICAgIGlmICh0eXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHR5cGU9JHt0eXBlfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9kYWlseWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbm90aWZpY2F0aW9uIGZvciBhbGwgY2x1YiBtZW1iZXJzXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBub3RpZnlBbGxNZW1iZXJzKGRheUlkPzogbnVtYmVyLCB0eXBlPzogTm90aWZpY2F0aW9uVHlwZUNvZGUsIGJvZHk/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGRheUlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGRheUlkPSR7ZGF5SWR9YCk7IH1cbiAgICBpZiAodHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0eXBlPSR7dHlwZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vbWVtYmVyc2AsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSwgLi4ucGFyYW1zKTtcbiAgfVxuXG59XG4iXX0=