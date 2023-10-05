import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Services } from './lib/services/services.export';
import { RestUtil } from './utils/rest-util';
import { HttpClientModule } from '@angular/common/http';
import * as i0 from "@angular/core";
export class CoreLibModule {
    static forRoot(config) {
        return {
            ngModule: CoreLibModule,
            providers: [
                { provide: 'config', useValue: config },
                RestUtil,
                ...Services
            ]
        };
    }
}
CoreLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: CoreLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CoreLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: CoreLibModule, imports: [CommonModule, HttpClientModule] });
CoreLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: CoreLibModule, imports: [[CommonModule, HttpClientModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: CoreLibModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, HttpClientModule]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvYm9va21lLWxpYi9zcmMvY29yZS1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQU14RCxNQUFNLE9BQU8sYUFBYTtJQUN4QixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQWtCO1FBQy9CLE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7Z0JBQ3ZDLFFBQVE7Z0JBQ1IsR0FBRyxRQUFRO2FBQ1o7U0FDRixDQUFDO0lBQ0osQ0FBQzs7MEdBVlUsYUFBYTsyR0FBYixhQUFhLFlBRmQsWUFBWSxFQUFFLGdCQUFnQjsyR0FFN0IsYUFBYSxZQUZmLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDOzJGQUU5QixhQUFhO2tCQUh6QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQztpQkFDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFNlcnZpY2VzIH0gZnJvbSAnLi9saWIvc2VydmljZXMvc2VydmljZXMuZXhwb3J0JztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEh0dHBDbGllbnRNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIENvcmVMaWJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IENvcmVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPENvcmVMaWJNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENvcmVMaWJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiAnY29uZmlnJywgdXNlVmFsdWU6IGNvbmZpZyB9LFxuICAgICAgICBSZXN0VXRpbCxcbiAgICAgICAgLi4uU2VydmljZXNcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=