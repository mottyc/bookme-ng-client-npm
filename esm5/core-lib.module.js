import { __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Services } from './lib/services/services.export';
import { RestUtil } from './utils/rest-util';
import { HttpClientModule } from '@angular/common/http';
import * as i0 from "@angular/core";
var CoreLibModule = /** @class */ (function () {
    function CoreLibModule() {
    }
    CoreLibModule.forRoot = function (config) {
        // console.log(config);
        return {
            ngModule: CoreLibModule,
            providers: __spread([
                { provide: 'config', useValue: config },
                RestUtil
            ], Services)
        };
    };
    /** @nocollapse */ CoreLibModule.ɵmod = i0.ɵɵdefineNgModule({ type: CoreLibModule });
    /** @nocollapse */ CoreLibModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CoreLibModule_Factory(t) { return new (t || CoreLibModule)(); }, imports: [[CommonModule, HttpClientModule]] });
    return CoreLibModule;
}());
export { CoreLibModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CoreLibModule, { imports: [CommonModule, HttpClientModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CoreLibModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, HttpClientModule]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG1vdHR5Yy9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImNvcmUtbGliLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMxRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDN0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBR3hEO0lBQUE7S0FlQztJQVhRLHFCQUFPLEdBQWQsVUFBZSxNQUFrQjtRQUMvQix1QkFBdUI7UUFDdkIsT0FBTztZQUNMLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFNBQVM7Z0JBQ1AsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7Z0JBQ3ZDLFFBQVE7ZUFDTCxRQUFRLENBQ1o7U0FDRixDQUFDO0lBQ0osQ0FBQzt3RUFYVSxhQUFhO2dJQUFiLGFBQWEsa0JBRmYsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7d0JBUjNDO0NBc0JDLEFBZkQsSUFlQztTQVpZLGFBQWE7d0ZBQWIsYUFBYSxjQUZkLFlBQVksRUFBRSxnQkFBZ0I7a0RBRTdCLGFBQWE7Y0FIekIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQzthQUMxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICcuL2xpYi9zZXJ2aWNlcy9zZXJ2aWNlcy5leHBvcnQnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSHR0cENsaWVudE1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQ29yZUxpYk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogQ29yZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIC8vIGNvbnNvbGUubG9nKGNvbmZpZyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDb3JlTGliTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogJ2NvbmZpZycsIHVzZVZhbHVlOiBjb25maWcgfSxcbiAgICAgICAgUmVzdFV0aWwsXG4gICAgICAgIC4uLlNlcnZpY2VzXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19