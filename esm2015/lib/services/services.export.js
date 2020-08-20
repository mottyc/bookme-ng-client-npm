import { AdminActivitiesService } from './adminActivitiesService';
import { AdminResourcesService } from './adminResourcesService';
import { UsrActivitiesService } from './usrActivitiesService';
import { UserBookingsService } from './userBookingsService';
import { UserPlacementsService } from './userPlacementsService';
import { AdminMembersService } from './adminMembersService';
import { UserAccountsService } from './userAccountsService';
import { UsrMembersService } from './usrMembersService';
import { UserService } from './userService';
import { HealthCheckService } from './healthCheckService';
import { SysAccountsService } from './sysAccountsService';
import { SysUsersService } from './sysUsersService';
export const Services = [
    AdminActivitiesService,
    AdminResourcesService,
    UsrActivitiesService,
    UserBookingsService,
    UserPlacementsService,
    AdminMembersService,
    UserAccountsService,
    UsrMembersService,
    UserService,
    HealthCheckService,
    SysAccountsService,
    SysUsersService,
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuZXhwb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9zZXJ2aWNlcy9zZXJ2aWNlcy5leHBvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFcEQsTUFBTSxDQUFDLE1BQU0sUUFBUSxHQUFHO0lBQ3BCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtDQUVsQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWRtaW5BY3Rpdml0aWVzU2VydmljZSB9IGZyb20gJy4vYWRtaW5BY3Rpdml0aWVzU2VydmljZSc7XG5pbXBvcnQgeyBBZG1pblJlc291cmNlc1NlcnZpY2UgfSBmcm9tICcuL2FkbWluUmVzb3VyY2VzU2VydmljZSc7XG5pbXBvcnQgeyBVc3JBY3Rpdml0aWVzU2VydmljZSB9IGZyb20gJy4vdXNyQWN0aXZpdGllc1NlcnZpY2UnO1xuaW1wb3J0IHsgVXNlckJvb2tpbmdzU2VydmljZSB9IGZyb20gJy4vdXNlckJvb2tpbmdzU2VydmljZSc7XG5pbXBvcnQgeyBVc2VyUGxhY2VtZW50c1NlcnZpY2UgfSBmcm9tICcuL3VzZXJQbGFjZW1lbnRzU2VydmljZSc7XG5pbXBvcnQgeyBBZG1pbk1lbWJlcnNTZXJ2aWNlIH0gZnJvbSAnLi9hZG1pbk1lbWJlcnNTZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJBY2NvdW50c1NlcnZpY2UgfSBmcm9tICcuL3VzZXJBY2NvdW50c1NlcnZpY2UnO1xuaW1wb3J0IHsgVXNyTWVtYmVyc1NlcnZpY2UgfSBmcm9tICcuL3Vzck1lbWJlcnNTZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi91c2VyU2VydmljZSc7XG5pbXBvcnQgeyBIZWFsdGhDaGVja1NlcnZpY2UgfSBmcm9tICcuL2hlYWx0aENoZWNrU2VydmljZSc7XG5pbXBvcnQgeyBTeXNBY2NvdW50c1NlcnZpY2UgfSBmcm9tICcuL3N5c0FjY291bnRzU2VydmljZSc7XG5pbXBvcnQgeyBTeXNVc2Vyc1NlcnZpY2UgfSBmcm9tICcuL3N5c1VzZXJzU2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBTZXJ2aWNlcyA9IFtcbiAgICBBZG1pbkFjdGl2aXRpZXNTZXJ2aWNlLFxuICAgIEFkbWluUmVzb3VyY2VzU2VydmljZSxcbiAgICBVc3JBY3Rpdml0aWVzU2VydmljZSxcbiAgICBVc2VyQm9va2luZ3NTZXJ2aWNlLFxuICAgIFVzZXJQbGFjZW1lbnRzU2VydmljZSxcbiAgICBBZG1pbk1lbWJlcnNTZXJ2aWNlLFxuICAgIFVzZXJBY2NvdW50c1NlcnZpY2UsXG4gICAgVXNyTWVtYmVyc1NlcnZpY2UsXG4gICAgVXNlclNlcnZpY2UsXG4gICAgSGVhbHRoQ2hlY2tTZXJ2aWNlLFxuICAgIFN5c0FjY291bnRzU2VydmljZSxcbiAgICBTeXNVc2Vyc1NlcnZpY2UsXG4gICAgXG5dIl19