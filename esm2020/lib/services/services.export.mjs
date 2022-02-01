import { AdminActivitiesService } from './adminActivitiesService';
import { AdminPlaningService } from './adminPlaningService';
import { AdminReportsService } from './adminReportsService';
import { AdminResourcesService } from './adminResourcesService';
import { UsrActivitiesService } from './usrActivitiesService';
import { UserBookingsService } from './userBookingsService';
import { UserPlacementsService } from './userPlacementsService';
import { AdminMembersService } from './adminMembersService';
import { AdminNotificationsService } from './adminNotificationsService';
import { UserAccountsService } from './userAccountsService';
import { UsrMembersService } from './usrMembersService';
import { UserService } from './userService';
import { AdminAccountService } from './adminAccountService';
import { HealthCheckService } from './healthCheckService';
import { SysAccountsService } from './sysAccountsService';
import { SysUsersService } from './sysUsersService';
export const Services = [
    AdminActivitiesService,
    AdminPlaningService,
    AdminReportsService,
    AdminResourcesService,
    UsrActivitiesService,
    UserBookingsService,
    UserPlacementsService,
    AdminMembersService,
    AdminNotificationsService,
    UserAccountsService,
    UsrMembersService,
    UserService,
    AdminAccountService,
    HealthCheckService,
    SysAccountsService,
    SysUsersService,
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuZXhwb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9zZXJ2aWNlcy9zZXJ2aWNlcy5leHBvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFcEQsTUFBTSxDQUFDLE1BQU0sUUFBUSxHQUFHO0lBQ3BCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7Q0FFbEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFkbWluQWN0aXZpdGllc1NlcnZpY2UgfSBmcm9tICcuL2FkbWluQWN0aXZpdGllc1NlcnZpY2UnO1xuaW1wb3J0IHsgQWRtaW5QbGFuaW5nU2VydmljZSB9IGZyb20gJy4vYWRtaW5QbGFuaW5nU2VydmljZSc7XG5pbXBvcnQgeyBBZG1pblJlcG9ydHNTZXJ2aWNlIH0gZnJvbSAnLi9hZG1pblJlcG9ydHNTZXJ2aWNlJztcbmltcG9ydCB7IEFkbWluUmVzb3VyY2VzU2VydmljZSB9IGZyb20gJy4vYWRtaW5SZXNvdXJjZXNTZXJ2aWNlJztcbmltcG9ydCB7IFVzckFjdGl2aXRpZXNTZXJ2aWNlIH0gZnJvbSAnLi91c3JBY3Rpdml0aWVzU2VydmljZSc7XG5pbXBvcnQgeyBVc2VyQm9va2luZ3NTZXJ2aWNlIH0gZnJvbSAnLi91c2VyQm9va2luZ3NTZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJQbGFjZW1lbnRzU2VydmljZSB9IGZyb20gJy4vdXNlclBsYWNlbWVudHNTZXJ2aWNlJztcbmltcG9ydCB7IEFkbWluTWVtYmVyc1NlcnZpY2UgfSBmcm9tICcuL2FkbWluTWVtYmVyc1NlcnZpY2UnO1xuaW1wb3J0IHsgQWRtaW5Ob3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJy4vYWRtaW5Ob3RpZmljYXRpb25zU2VydmljZSc7XG5pbXBvcnQgeyBVc2VyQWNjb3VudHNTZXJ2aWNlIH0gZnJvbSAnLi91c2VyQWNjb3VudHNTZXJ2aWNlJztcbmltcG9ydCB7IFVzck1lbWJlcnNTZXJ2aWNlIH0gZnJvbSAnLi91c3JNZW1iZXJzU2VydmljZSc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vdXNlclNlcnZpY2UnO1xuaW1wb3J0IHsgQWRtaW5BY2NvdW50U2VydmljZSB9IGZyb20gJy4vYWRtaW5BY2NvdW50U2VydmljZSc7XG5pbXBvcnQgeyBIZWFsdGhDaGVja1NlcnZpY2UgfSBmcm9tICcuL2hlYWx0aENoZWNrU2VydmljZSc7XG5pbXBvcnQgeyBTeXNBY2NvdW50c1NlcnZpY2UgfSBmcm9tICcuL3N5c0FjY291bnRzU2VydmljZSc7XG5pbXBvcnQgeyBTeXNVc2Vyc1NlcnZpY2UgfSBmcm9tICcuL3N5c1VzZXJzU2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBTZXJ2aWNlcyA9IFtcbiAgICBBZG1pbkFjdGl2aXRpZXNTZXJ2aWNlLFxuICAgIEFkbWluUGxhbmluZ1NlcnZpY2UsXG4gICAgQWRtaW5SZXBvcnRzU2VydmljZSxcbiAgICBBZG1pblJlc291cmNlc1NlcnZpY2UsXG4gICAgVXNyQWN0aXZpdGllc1NlcnZpY2UsXG4gICAgVXNlckJvb2tpbmdzU2VydmljZSxcbiAgICBVc2VyUGxhY2VtZW50c1NlcnZpY2UsXG4gICAgQWRtaW5NZW1iZXJzU2VydmljZSxcbiAgICBBZG1pbk5vdGlmaWNhdGlvbnNTZXJ2aWNlLFxuICAgIFVzZXJBY2NvdW50c1NlcnZpY2UsXG4gICAgVXNyTWVtYmVyc1NlcnZpY2UsXG4gICAgVXNlclNlcnZpY2UsXG4gICAgQWRtaW5BY2NvdW50U2VydmljZSxcbiAgICBIZWFsdGhDaGVja1NlcnZpY2UsXG4gICAgU3lzQWNjb3VudHNTZXJ2aWNlLFxuICAgIFN5c1VzZXJzU2VydmljZSxcbiAgICBcbl0iXX0=