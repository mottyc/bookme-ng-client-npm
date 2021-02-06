import { AdminAccountService } from './adminAccountService';
import { HealthCheckService } from './healthCheckService';
import { SysAccountsService } from './sysAccountsService';
import { SysUsersService } from './sysUsersService';
import { AdminActivitiesService } from './adminActivitiesService';
import { AdminPlaningService } from './adminPlaningService';
import { AdminResourcesService } from './adminResourcesService';
import { UsrActivitiesService } from './usrActivitiesService';
import { UserBookingsService } from './userBookingsService';
import { UserPlacementsService } from './userPlacementsService';
import { AdminMembersService } from './adminMembersService';
import { UserAccountsService } from './userAccountsService';
import { UsrMembersService } from './usrMembersService';
import { UserService } from './userService';
export const Services = [
    AdminAccountService,
    HealthCheckService,
    SysAccountsService,
    SysUsersService,
    AdminActivitiesService,
    AdminPlaningService,
    AdminResourcesService,
    UsrActivitiesService,
    UserBookingsService,
    UserPlacementsService,
    AdminMembersService,
    UserAccountsService,
    UsrMembersService,
    UserService,
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuZXhwb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9zZXJ2aWNlcy9zZXJ2aWNlcy5leHBvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUMsTUFBTSxDQUFDLE1BQU0sUUFBUSxHQUFHO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixXQUFXO0NBRWQsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFkbWluQWNjb3VudFNlcnZpY2UgfSBmcm9tICcuL2FkbWluQWNjb3VudFNlcnZpY2UnO1xuaW1wb3J0IHsgSGVhbHRoQ2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi9oZWFsdGhDaGVja1NlcnZpY2UnO1xuaW1wb3J0IHsgU3lzQWNjb3VudHNTZXJ2aWNlIH0gZnJvbSAnLi9zeXNBY2NvdW50c1NlcnZpY2UnO1xuaW1wb3J0IHsgU3lzVXNlcnNTZXJ2aWNlIH0gZnJvbSAnLi9zeXNVc2Vyc1NlcnZpY2UnO1xuaW1wb3J0IHsgQWRtaW5BY3Rpdml0aWVzU2VydmljZSB9IGZyb20gJy4vYWRtaW5BY3Rpdml0aWVzU2VydmljZSc7XG5pbXBvcnQgeyBBZG1pblBsYW5pbmdTZXJ2aWNlIH0gZnJvbSAnLi9hZG1pblBsYW5pbmdTZXJ2aWNlJztcbmltcG9ydCB7IEFkbWluUmVzb3VyY2VzU2VydmljZSB9IGZyb20gJy4vYWRtaW5SZXNvdXJjZXNTZXJ2aWNlJztcbmltcG9ydCB7IFVzckFjdGl2aXRpZXNTZXJ2aWNlIH0gZnJvbSAnLi91c3JBY3Rpdml0aWVzU2VydmljZSc7XG5pbXBvcnQgeyBVc2VyQm9va2luZ3NTZXJ2aWNlIH0gZnJvbSAnLi91c2VyQm9va2luZ3NTZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJQbGFjZW1lbnRzU2VydmljZSB9IGZyb20gJy4vdXNlclBsYWNlbWVudHNTZXJ2aWNlJztcbmltcG9ydCB7IEFkbWluTWVtYmVyc1NlcnZpY2UgfSBmcm9tICcuL2FkbWluTWVtYmVyc1NlcnZpY2UnO1xuaW1wb3J0IHsgVXNlckFjY291bnRzU2VydmljZSB9IGZyb20gJy4vdXNlckFjY291bnRzU2VydmljZSc7XG5pbXBvcnQgeyBVc3JNZW1iZXJzU2VydmljZSB9IGZyb20gJy4vdXNyTWVtYmVyc1NlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3VzZXJTZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IFNlcnZpY2VzID0gW1xuICAgIEFkbWluQWNjb3VudFNlcnZpY2UsXG4gICAgSGVhbHRoQ2hlY2tTZXJ2aWNlLFxuICAgIFN5c0FjY291bnRzU2VydmljZSxcbiAgICBTeXNVc2Vyc1NlcnZpY2UsXG4gICAgQWRtaW5BY3Rpdml0aWVzU2VydmljZSxcbiAgICBBZG1pblBsYW5pbmdTZXJ2aWNlLFxuICAgIEFkbWluUmVzb3VyY2VzU2VydmljZSxcbiAgICBVc3JBY3Rpdml0aWVzU2VydmljZSxcbiAgICBVc2VyQm9va2luZ3NTZXJ2aWNlLFxuICAgIFVzZXJQbGFjZW1lbnRzU2VydmljZSxcbiAgICBBZG1pbk1lbWJlcnNTZXJ2aWNlLFxuICAgIFVzZXJBY2NvdW50c1NlcnZpY2UsXG4gICAgVXNyTWVtYmVyc1NlcnZpY2UsXG4gICAgVXNlclNlcnZpY2UsXG4gICAgXG5dIl19