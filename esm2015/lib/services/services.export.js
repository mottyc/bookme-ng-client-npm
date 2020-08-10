import { AdminActivitiesService } from './adminActivitiesService';
import { AdminResourcesService } from './adminResourcesService';
import { UserBookingsService } from './userBookingsService';
import { UserPlacementsService } from './userPlacementsService';
import { AdminMembersService } from './adminMembersService';
import { UserAccountsService } from './userAccountsService';
import { UserService } from './userService';
import { HealthCheckService } from './healthCheckService';
import { SysAccountsService } from './sysAccountsService';
import { SysUsersService } from './sysUsersService';
export const Services = [
    AdminActivitiesService,
    AdminResourcesService,
    UserBookingsService,
    UserPlacementsService,
    AdminMembersService,
    UserAccountsService,
    UserService,
    HealthCheckService,
    SysAccountsService,
    SysUsersService,
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuZXhwb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9zZXJ2aWNlcy9zZXJ2aWNlcy5leHBvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFcEQsTUFBTSxDQUFDLE1BQU0sUUFBUSxHQUFHO0lBQ3BCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7Q0FFbEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFkbWluQWN0aXZpdGllc1NlcnZpY2UgfSBmcm9tICcuL2FkbWluQWN0aXZpdGllc1NlcnZpY2UnO1xuaW1wb3J0IHsgQWRtaW5SZXNvdXJjZXNTZXJ2aWNlIH0gZnJvbSAnLi9hZG1pblJlc291cmNlc1NlcnZpY2UnO1xuaW1wb3J0IHsgVXNlckJvb2tpbmdzU2VydmljZSB9IGZyb20gJy4vdXNlckJvb2tpbmdzU2VydmljZSc7XG5pbXBvcnQgeyBVc2VyUGxhY2VtZW50c1NlcnZpY2UgfSBmcm9tICcuL3VzZXJQbGFjZW1lbnRzU2VydmljZSc7XG5pbXBvcnQgeyBBZG1pbk1lbWJlcnNTZXJ2aWNlIH0gZnJvbSAnLi9hZG1pbk1lbWJlcnNTZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJBY2NvdW50c1NlcnZpY2UgfSBmcm9tICcuL3VzZXJBY2NvdW50c1NlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3VzZXJTZXJ2aWNlJztcbmltcG9ydCB7IEhlYWx0aENoZWNrU2VydmljZSB9IGZyb20gJy4vaGVhbHRoQ2hlY2tTZXJ2aWNlJztcbmltcG9ydCB7IFN5c0FjY291bnRzU2VydmljZSB9IGZyb20gJy4vc3lzQWNjb3VudHNTZXJ2aWNlJztcbmltcG9ydCB7IFN5c1VzZXJzU2VydmljZSB9IGZyb20gJy4vc3lzVXNlcnNTZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IFNlcnZpY2VzID0gW1xuICAgIEFkbWluQWN0aXZpdGllc1NlcnZpY2UsXG4gICAgQWRtaW5SZXNvdXJjZXNTZXJ2aWNlLFxuICAgIFVzZXJCb29raW5nc1NlcnZpY2UsXG4gICAgVXNlclBsYWNlbWVudHNTZXJ2aWNlLFxuICAgIEFkbWluTWVtYmVyc1NlcnZpY2UsXG4gICAgVXNlckFjY291bnRzU2VydmljZSxcbiAgICBVc2VyU2VydmljZSxcbiAgICBIZWFsdGhDaGVja1NlcnZpY2UsXG4gICAgU3lzQWNjb3VudHNTZXJ2aWNlLFxuICAgIFN5c1VzZXJzU2VydmljZSxcbiAgICBcbl0iXX0=