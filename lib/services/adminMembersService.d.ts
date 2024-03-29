import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { ResourceTypeMask } from '../enums/ResourceTypeMask';
import { MemberRegistration } from '../common/MemberRegistration';
import { Member } from '../entities/Member';
import { MemberStatusCode } from '../enums/MemberStatusCode';
import { AccountRoleCode } from '../enums/AccountRoleCode';
import { MemberUser } from '../entities/MemberUser';
import * as i0 from "@angular/core";
/**
 * List of all user related actions for account administrator only
 */
export declare class AdminMembersService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Send invitation to a new member for the current account
     * @Return: ActionResponse
     */
    invite(body: MemberRegistration): import("rxjs").Observable<any>;
    /**
     * Resend invitation to an existing member for the current account
     * @Return: ActionResponse
     */
    reInvite(id: string): import("rxjs").Observable<any>;
    /**
     * Update member
     * @Return: EntityResponse<Member>
     */
    update(body: Member): import("rxjs").Observable<any>;
    /**
     * Update member
     * @Return: EntityResponse<Member>
     */
    changeStatus(id: string, status: MemberStatusCode): import("rxjs").Observable<any>;
    /**
     * Delete member from the account
     * The member will be removed from the account, if no other memberships exist for the user, it will be deleted from the system
     * @Return: ActionResponse
     */
    delete(id: string): import("rxjs").Observable<any>;
    /**
     * Reset password for member
     * The result is a temporary password
     * @Return: ActionResponse
     */
    resetPassword(id: string): import("rxjs").Observable<any>;
    /**
     * Get single member by id (including user data)
     * @Return: EntityResponse<MemberUser>
     */
    get(id: string): import("rxjs").Observable<any>;
    /**
     * Get single member by id (including user data)
     * @Return: EntityResponse<User>
     */
    getUserByEmail(email: string): import("rxjs").Observable<any>;
    /**
     * Get user memberships (in all accounts)
     * @Return: QueryResponse<Membership>
     */
    getUserMemberships(userId: string): import("rxjs").Observable<any>;
    /**
     * Find list of users and filter the list
     * System user will see all users, Account system will see all users of the account, registered user will get an error.
     * @Return: QueryResponse<MemberUser>
     */
    find(accountId: string, search: string, role: AccountRoleCode[], status: MemberStatusCode[], sort: string, page: number, pageSize: number): import("rxjs").Observable<any>;
    /**
     * Import bulk set of members
     * @Return: ActionResponse
     */
    bulkImport(body: MemberUser[]): import("rxjs").Observable<any>;
    /**
     * Find list of all bookings that the user is registered to per month
     * @Return: QueryResponse<Booking>
     */
    findMemberMonthHistory(id: string, resourceId: string, year: number, month: number, day: number, sort: string): import("rxjs").Observable<any>;
    /**
     * Find list of all bookings that the user is registered to in a time period
     * @Return: QueryResponse<Booking>
     */
    findMemberHistory(id: string, resourceId: string, from: number, to: number, sort: string): import("rxjs").Observable<any>;
    /**
     * Import members from a file
     * @return ActionResponse
     */
    importFile(): import("rxjs").Observable<any>;
    /**
     * Export members to a file
     * @return StreamContent
     */
    exportFile(format: string, search: string, role: AccountRoleCode[], status: MemberStatusCode[], sort: string): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Find list of resources by filter
     * @Return: EntitiesResponse<Resource>
     */
    findResources(accountId: string, search: string, include: ResourceTypeMask, exclude: ResourceTypeMask): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AdminMembersService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AdminMembersService>;
}
