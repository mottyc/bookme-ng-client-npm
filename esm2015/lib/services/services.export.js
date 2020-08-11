import { AdminMembersService } from './adminMembersService';
import { UserAccountsService } from './userAccountsService';
import { UserService } from './userService';
import { HealthCheckService } from './healthCheckService';
import { SysAccountsService } from './sysAccountsService';
import { SysUsersService } from './sysUsersService';
import { AdminActivitiesService } from './adminActivitiesService';
import { AdminResourcesService } from './adminResourcesService';
import { UserBookingsService } from './userBookingsService';
import { UserPlacementsService } from './userPlacementsService';
export const Services = [
    AdminMembersService,
    UserAccountsService,
    UserService,
    HealthCheckService,
    SysAccountsService,
    SysUsersService,
    AdminActivitiesService,
    AdminResourcesService,
    UserBookingsService,
    UserPlacementsService,
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuZXhwb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9zZXJ2aWNlcy9zZXJ2aWNlcy5leHBvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFaEUsTUFBTSxDQUFDLE1BQU0sUUFBUSxHQUFHO0lBQ3BCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHFCQUFxQjtDQUV4QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWRtaW5NZW1iZXJzU2VydmljZSB9IGZyb20gJy4vYWRtaW5NZW1iZXJzU2VydmljZSc7XG5pbXBvcnQgeyBVc2VyQWNjb3VudHNTZXJ2aWNlIH0gZnJvbSAnLi91c2VyQWNjb3VudHNTZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi91c2VyU2VydmljZSc7XG5pbXBvcnQgeyBIZWFsdGhDaGVja1NlcnZpY2UgfSBmcm9tICcuL2hlYWx0aENoZWNrU2VydmljZSc7XG5pbXBvcnQgeyBTeXNBY2NvdW50c1NlcnZpY2UgfSBmcm9tICcuL3N5c0FjY291bnRzU2VydmljZSc7XG5pbXBvcnQgeyBTeXNVc2Vyc1NlcnZpY2UgfSBmcm9tICcuL3N5c1VzZXJzU2VydmljZSc7XG5pbXBvcnQgeyBBZG1pbkFjdGl2aXRpZXNTZXJ2aWNlIH0gZnJvbSAnLi9hZG1pbkFjdGl2aXRpZXNTZXJ2aWNlJztcbmltcG9ydCB7IEFkbWluUmVzb3VyY2VzU2VydmljZSB9IGZyb20gJy4vYWRtaW5SZXNvdXJjZXNTZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJCb29raW5nc1NlcnZpY2UgfSBmcm9tICcuL3VzZXJCb29raW5nc1NlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclBsYWNlbWVudHNTZXJ2aWNlIH0gZnJvbSAnLi91c2VyUGxhY2VtZW50c1NlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgU2VydmljZXMgPSBbXG4gICAgQWRtaW5NZW1iZXJzU2VydmljZSxcbiAgICBVc2VyQWNjb3VudHNTZXJ2aWNlLFxuICAgIFVzZXJTZXJ2aWNlLFxuICAgIEhlYWx0aENoZWNrU2VydmljZSxcbiAgICBTeXNBY2NvdW50c1NlcnZpY2UsXG4gICAgU3lzVXNlcnNTZXJ2aWNlLFxuICAgIEFkbWluQWN0aXZpdGllc1NlcnZpY2UsXG4gICAgQWRtaW5SZXNvdXJjZXNTZXJ2aWNlLFxuICAgIFVzZXJCb29raW5nc1NlcnZpY2UsXG4gICAgVXNlclBsYWNlbWVudHNTZXJ2aWNlLFxuICAgIFxuXSJdfQ==