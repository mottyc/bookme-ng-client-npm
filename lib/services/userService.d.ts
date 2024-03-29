import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { LoginParams } from '../common/LoginParams';
import { ChangePasswordRequest } from '../messages/ChangePasswordRequest';
import { TokenRequest } from '../messages/TokenRequest';
import { User } from '../entities/User';
import * as i0 from "@angular/core";
/**
 * Services for user registration and login
 */
export declare class UserService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Login to the system with user email and password
     * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
     * @Return: EntityResponse<LoginData>
     */
    login(body: LoginParams): import("rxjs").Observable<any>;
    /**
     * Get daily activity board (for the kiosk application)
     * @Return: EntityResponse<ActivityBookingGroup>
     */
    getBoard(from: number, account: string): import("rxjs").Observable<any>;
    /**
     * Refresh token (set new expiration time) and associate with new account if required
     * @Return: EntityResponse<LoginData>
     */
    refreshToken(): import("rxjs").Observable<any>;
    /**
     * Verify user by temporary login key
     * @Return: EntityResponse<User>
     */
    verifyLoginKey(key: string): import("rxjs").Observable<any>;
    /**
     * Send verification code by email
     * @Return: ActionResponse
     */
    sendVerificationCode(body: string): import("rxjs").Observable<any>;
    /**
     * Validate verification code and reset password
     * @Return: ActionResponse
     */
    resetPassword(code: string): import("rxjs").Observable<any>;
    /**
     * Change password
     * @Return: ActionResponse
     */
    changePassword(body: ChangePasswordRequest): import("rxjs").Observable<any>;
    /**
     * Check if password was used before (according to password policy)
     * @Return: ActionResponse
     */
    checkUnusedPassword(body: string): import("rxjs").Observable<any>;
    /**
     * Change current user name
     * @Return: ActionResponse
     */
    changeName(body: string): import("rxjs").Observable<any>;
    /**
     * Change current user mobile
     * @Return: ActionResponse
     */
    changeMobile(body: string): import("rxjs").Observable<any>;
    /**
     * Get all user accessible accounts for the user
     * @Return: EntitiesResponse<Account>
     */
    getAccounts(): import("rxjs").Observable<any>;
    /**
     * Refresh token (set new expiration time) and associate with new account if required
     * @Return: EntityResponse<UserAccountInfo>
     */
    switchAccount(body: TokenRequest): import("rxjs").Observable<any>;
    /**
     * Switch to the next account
     * @Return: EntityResponse<UserAccountInfo>
     */
    switchNext(): import("rxjs").Observable<any>;
    /**
     * Get user profile
     * @Return: EntityResponse<User>
     */
    getProfile(): import("rxjs").Observable<any>;
    /**
     * Update user profile
     * @Return: EntityResponse<User>
     */
    setProfile(body: User): import("rxjs").Observable<any>;
    /**
     * Get app version
     * @Return: ActionResponse
     */
    getVersion(): import("rxjs").Observable<any>;
    /**
     * Find list of notifications by filter
     * @Return: ActionResponse
     */
    findNotifications(): import("rxjs").Observable<any>;
    /**
     * Mark user notification as read
     * @Return: ActionResponse
     */
    readNotification(id: string): import("rxjs").Observable<any>;
    /**
     * Delete notification
     * @Return: ActionResponse
     */
    deleteNotification(id: string): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserService>;
}
