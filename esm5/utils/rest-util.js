import { __read, __spread } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // replaces previous Http service
import { map, catchError } from 'rxjs/operators';
import * as LocalStorageUtil from './localStorage-util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
/**
 * Utility class for all REST services with common functions
 */
var RestUtil = /** @class */ (function () {
    /**
     * Constructor with injected authentication service
     */
    function RestUtil(http) {
        this.http = http;
        // Set headers
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    /**
     * Download is HTTP GET action but the content is blob
     */
    RestUtil.prototype.download = function (fileName, url) {
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        var resourceUrl = this.buildUrl.apply(this, __spread([url], params));
        var ext = 'json';
        params.forEach(function (p) {
            var arr = p.split('=');
            if (arr.length > 1) {
                if (arr[0].toLowerCase() === 'format') {
                    ext = arr[1];
                }
            }
        });
        var downloadLink = fileName + '.' + ext;
        return this.http.get(resourceUrl, { responseType: 'blob' }).subscribe(function (data) {
            var downloadURL = window.URL.createObjectURL(data);
            var link = document.createElement('a');
            link.href = downloadURL;
            link.download = downloadLink;
            link.click();
        });
    };
    /**
     * HTTP GET action
     */
    RestUtil.prototype.get = function (url) {
        var _this = this;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var resourceUrl = this.buildUrl.apply(this, __spread([url], params));
        return this.http
            .get(resourceUrl, { headers: this.headers, observe: 'response' })
            .pipe(map(function (res) { return _this.processResponse(res); }), catchError(this.handleError));
    };
    /**
     * HTTP POST action
     */
    RestUtil.prototype.post = function (url, body) {
        var _this = this;
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        var resourceUrl = this.buildUrl.apply(this, __spread([url], params));
        return this.http
            .post(resourceUrl, body, { headers: this.headers, observe: 'response' })
            .pipe(map(function (res) { return _this.processResponse(res); }), catchError(this.handleError));
    };
    /**
     * HTTP PUT action
     */
    RestUtil.prototype.put = function (url, body) {
        var _this = this;
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        var resourceUrl = this.buildUrl.apply(this, __spread([url], params));
        return this.http
            .put(resourceUrl, body, { headers: this.headers, observe: 'response' })
            .pipe(map(function (res) { return _this.processResponse(res); }), catchError(this.handleError));
    };
    /**
     * HTTP DELETE action
     */
    RestUtil.prototype.delete = function (url) {
        var _this = this;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var resourceUrl = this.buildUrl.apply(this, __spread([url], params));
        return this.http
            .delete(resourceUrl, { headers: this.headers, observe: 'response' })
            .pipe(map(function (res) { return _this.processResponse(res); }), catchError(this.handleError));
    };
    /**
     * Construct URL with parameters
     */
    RestUtil.prototype.buildUrl = function (url) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        return (params === null) ? url : (params.length === 0) ? url : "" + url + (params && params.length > 0 ? '?' + params.join('&') : '');
    };
    /**
     * Process the response, extract and refresh access token and return the body
     */
    RestUtil.prototype.processResponse = function (response) {
        if (response.status === 401) {
            LocalStorageUtil.removeToken();
            throw new Error('Access denied, reset token: ' + response.status);
        }
        else if (response.status > 400) {
            throw new Error('HTTP status error: ' + response.status);
        }
        // Get access token from header and update authentication service
        var accessToken = response.headers.get('X-ACCESS-TOKEN');
        if ((accessToken !== null) && (accessToken.length > 0)) {
            LocalStorageUtil.setToken(accessToken);
        }
        if (response.body && response.body.code && response.body.code !== 0) {
            throw { code: response.body.code, message: response.body.error };
        }
        return response.body;
    };
    /**
     * Error handling
     */
    RestUtil.prototype.handleError = function (error) {
        if (error.code) {
            return Promise.reject(error);
        }
        return Promise.reject(error.message || error);
    };
    /** @nocollapse */ RestUtil.ɵfac = function RestUtil_Factory(t) { return new (t || RestUtil)(i0.ɵɵinject(i1.HttpClient)); };
    /** @nocollapse */ RestUtil.ɵprov = i0.ɵɵdefineInjectable({ token: RestUtil, factory: RestUtil.ɵfac });
    return RestUtil;
}());
export { RestUtil };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RestUtil, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC11dGlsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG1vdHR5Yy9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbInV0aWxzL3Jlc3QtdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBZ0IsTUFBTSxzQkFBc0IsQ0FBQyxDQUFFLGlDQUFpQztBQUNoSCxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sS0FBSyxnQkFBZ0IsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBRXhEOztHQUVHO0FBQ0g7SUFNRTs7T0FFRztJQUNILGtCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBTnBDLGNBQWM7UUFDTixZQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFLcEMsQ0FBQztJQUV6Qzs7T0FFRztJQUNILDJCQUFRLEdBQVIsVUFBUyxRQUFnQixFQUFFLEdBQVc7UUFBRSxnQkFBbUI7YUFBbkIsVUFBbUIsRUFBbkIscUJBQW1CLEVBQW5CLElBQW1CO1lBQW5CLCtCQUFtQjs7UUFDekQsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsT0FBYixJQUFJLFlBQVUsR0FBRyxHQUFLLE1BQU0sRUFBQyxDQUFDO1FBRWxELElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQztRQUNqQixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztZQUNkLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkIsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDbEIsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEtB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UUFDRCxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDO3VGQXBJVSxRQUFRO3VFQUFSLFFBQVEsV0FBUixRQUFRO21CQVRyQjtDQThJQyxBQXRJRCxJQXNJQztTQXJJWSxRQUFRO2tEQUFSLFFBQVE7Y0FEcEIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7ICAvLyByZXBsYWNlcyBwcmV2aW91cyBIdHRwIHNlcnZpY2VcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCAqIGFzIExvY2FsU3RvcmFnZVV0aWwgZnJvbSAnLi9sb2NhbFN0b3JhZ2UtdXRpbCc7XG5cbi8qKlxuICogVXRpbGl0eSBjbGFzcyBmb3IgYWxsIFJFU1Qgc2VydmljZXMgd2l0aCBjb21tb24gZnVuY3Rpb25zXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZXN0VXRpbCB7XG5cbiAgLy8gU2V0IGhlYWRlcnNcbiAgcHJpdmF0ZSBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciB3aXRoIGluamVjdGVkIGF1dGhlbnRpY2F0aW9uIHNlcnZpY2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgLyoqXG4gICAqIERvd25sb2FkIGlzIEhUVFAgR0VUIGFjdGlvbiBidXQgdGhlIGNvbnRlbnQgaXMgYmxvYlxuICAgKi9cbiAgZG93bmxvYWQoZmlsZU5hbWU6IHN0cmluZywgdXJsOiBzdHJpbmcsIC4uLnBhcmFtczogc3RyaW5nW10pIHtcbiAgICBjb25zdCByZXNvdXJjZVVybCA9IHRoaXMuYnVpbGRVcmwodXJsLCAuLi5wYXJhbXMpO1xuXG4gICAgbGV0IGV4dCA9ICdqc29uJztcbiAgICBwYXJhbXMuZm9yRWFjaChwID0+IHtcbiAgICAgIGxldCBhcnIgPSBwLnNwbGl0KCc9Jyk7XG4gICAgICBpZiAoYXJyLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgaWYgKGFyclswXS50b0xvd2VyQ2FzZSgpID09PSAnZm9ybWF0Jykge1xuICAgICAgICAgIGV4dCA9IGFyclsxXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIGNvbnN0IGRvd25sb2FkTGluayA9IGZpbGVOYW1lICsgJy4nICsgZXh0O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQocmVzb3VyY2VVcmwsIHtyZXNwb25zZVR5cGU6ICdibG9iJ30pLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgZG93bmxvYWRVUkwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChkYXRhKTtcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBsaW5rLmhyZWYgPSBkb3dubG9hZFVSTDtcbiAgICAgIGxpbmsuZG93bmxvYWQgPSBkb3dubG9hZExpbms7XG4gICAgICBsaW5rLmNsaWNrKCk7XG4gICAgfSk7XG5cbiAgfVxuICBcbiAgLyoqXG4gICAqIEhUVFAgR0VUIGFjdGlvblxuICAgKi9cbiAgZ2V0KHVybDogc3RyaW5nLCAuLi5wYXJhbXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcmVzb3VyY2VVcmwgPSB0aGlzLmJ1aWxkVXJsKHVybCwgLi4ucGFyYW1zKTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KHJlc291cmNlVXJsLCB7IGhlYWRlcnM6IHRoaXMuaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8YW55PikgPT4gdGhpcy5wcm9jZXNzUmVzcG9uc2UocmVzKSksXG4gICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvciksXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEhUVFAgUE9TVCBhY3Rpb25cbiAgICovXG4gIHBvc3QodXJsOiBzdHJpbmcsIGJvZHk6IHN0cmluZywgLi4ucGFyYW1zOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHJlc291cmNlVXJsID0gdGhpcy5idWlsZFVybCh1cmwsIC4uLnBhcmFtcyk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3QocmVzb3VyY2VVcmwsIGJvZHksIHsgaGVhZGVyczogdGhpcy5oZWFkZXJzLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyZXM6IEh0dHBSZXNwb25zZTxhbnk+KSA9PiB0aGlzLnByb2Nlc3NSZXNwb25zZShyZXMpKSxcbiAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIVFRQIFBVVCBhY3Rpb25cbiAgICovXG4gIHB1dCh1cmw6IHN0cmluZywgYm9keTogc3RyaW5nLCAuLi5wYXJhbXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcmVzb3VyY2VVcmwgPSB0aGlzLmJ1aWxkVXJsKHVybCwgLi4ucGFyYW1zKTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucHV0KHJlc291cmNlVXJsLCBib2R5LCB7IGhlYWRlcnM6IHRoaXMuaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8YW55PikgPT4gdGhpcy5wcm9jZXNzUmVzcG9uc2UocmVzKSksXG4gICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSFRUUCBERUxFVEUgYWN0aW9uXG4gICAqL1xuICBkZWxldGUodXJsOiBzdHJpbmcsIC4uLnBhcmFtczogc3RyaW5nW10pIHtcbiAgICBjb25zdCByZXNvdXJjZVVybCA9IHRoaXMuYnVpbGRVcmwodXJsLCAuLi5wYXJhbXMpO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5kZWxldGUocmVzb3VyY2VVcmwsIHsgaGVhZGVyczogdGhpcy5oZWFkZXJzLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyZXM6IEh0dHBSZXNwb25zZTxhbnk+KSA9PiB0aGlzLnByb2Nlc3NSZXNwb25zZShyZXMpKSxcbiAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3QgVVJMIHdpdGggcGFyYW1ldGVyc1xuICAgKi9cbiAgcHJpdmF0ZSBidWlsZFVybCh1cmw6IHN0cmluZywgLi4ucGFyYW1zOiBzdHJpbmdbXSkge1xuICAgIHJldHVybiAocGFyYW1zID09PSBudWxsKSA/IHVybCA6IChwYXJhbXMubGVuZ3RoID09PSAwKSA/IHVybCA6IGAke3VybH0ke3BhcmFtcyAmJiBwYXJhbXMubGVuZ3RoID4gMCA/ICc/JytwYXJhbXMuam9pbignJicpIDogJyd9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9jZXNzIHRoZSByZXNwb25zZSwgZXh0cmFjdCBhbmQgcmVmcmVzaCBhY2Nlc3MgdG9rZW4gYW5kIHJldHVybiB0aGUgYm9keVxuICAgKi9cbiAgcHJpdmF0ZSBwcm9jZXNzUmVzcG9uc2UocmVzcG9uc2U6IEh0dHBSZXNwb25zZTxhbnk+KSB7XG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgIExvY2FsU3RvcmFnZVV0aWwucmVtb3ZlVG9rZW4oKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWNjZXNzIGRlbmllZCwgcmVzZXQgdG9rZW46ICcgKyByZXNwb25zZS5zdGF0dXMpO1xuICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID4gNDAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hUVFAgc3RhdHVzIGVycm9yOiAnICsgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICB9XG5cbiAgICAvLyBHZXQgYWNjZXNzIHRva2VuIGZyb20gaGVhZGVyIGFuZCB1cGRhdGUgYXV0aGVudGljYXRpb24gc2VydmljZVxuXG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSByZXNwb25zZS5oZWFkZXJzLmdldCgnWC1BQ0NFU1MtVE9LRU4nKTtcblxuICAgIGlmICgoYWNjZXNzVG9rZW4gIT09IG51bGwpICYmIChhY2Nlc3NUb2tlbi5sZW5ndGggPiAwKSkge1xuICAgICAgTG9jYWxTdG9yYWdlVXRpbC5zZXRUb2tlbihhY2Nlc3NUb2tlbik7XG4gICAgfSBcbiAgICBcbiAgICBpZiAocmVzcG9uc2UuYm9keSAmJiByZXNwb25zZS5ib2R5LmNvZGUgJiYgcmVzcG9uc2UuYm9keS5jb2RlICE9PSAwKSB7XG4gICAgICB0aHJvdyB7IGNvZGU6IHJlc3BvbnNlLmJvZHkuY29kZSwgbWVzc2FnZTogcmVzcG9uc2UuYm9keS5lcnJvciB9O1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gcmVzcG9uc2UuYm9keTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFcnJvciBoYW5kbGluZ1xuICAgKi9cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAoZXJyb3IuY29kZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xuICB9XG59XG4iXX0=