import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { NotificationTypeCode } from '../enums/NotificationTypeCode';
import { Notification } from '../entities/Notification';
import * as i0 from "@angular/core";
/**
 * List of all notifications actions for account administrator only
 */
export declare class AdminNotificationsService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Send Create new notification for user
     * @Return: ActionResponse
     */
    notifyUser(userId: string[], type: NotificationTypeCode, from: number, to: number, body: string): import("rxjs").Observable<any>;
    /**
     * Create notifications for all users in booking
     * @Return: ActionResponse
     */
    notifyBookingUsers(bookingId: string, type: NotificationTypeCode, from: number, to: number, body: string): import("rxjs").Observable<any>;
    /**
     * Create notifications for all users in activity bookings
     * @Return: ActionResponse
     */
    notifyActivityUsers(activityId: string, type: NotificationTypeCode, from: number, to: number, body: string): import("rxjs").Observable<any>;
    /**
     * Create notifications for all users in activity bookings
     * @Return: ActionResponse
     */
    notifyDailyUsers(dayId: number, type: NotificationTypeCode, from: number, to: number, body: string): import("rxjs").Observable<any>;
    /**
     * Create notification for all club members
     * @Return: ActionResponse
     */
    notifyAllMembers(type: NotificationTypeCode, from: number, to: number, body: string): import("rxjs").Observable<any>;
    /**
     * Get list of daily notifications for all club members
     * @Return: EntitiesResponse<Notification>
     */
    getDailyNotifications(dayId: number): import("rxjs").Observable<any>;
    /**
     * Create new kiosk message
     * @Return: EntityResponse<Notification>
     */
    createKioskMessage(body: Notification): import("rxjs").Observable<any>;
    /**
     * Update kiosk message
     * @Return: EntityResponse<Notification>
     */
    updateKioskMessage(body: Notification): import("rxjs").Observable<any>;
    /**
     * Delete kiosk message
     * @Return: ActionResponse
     */
    deleteKioskMessage(id: string): import("rxjs").Observable<any>;
    /**
     * Get list of kiosk notifications for specific club members
     * @Return: EntitiesResponse<Notification>
     */
    findKioskMessages(userId: string, search: string, type: NotificationTypeCode, sort: string, page: number, pageSize: number): import("rxjs").Observable<any>;
    /**
     * Get kiosk notification message by Id
     * @Return: EntityResponse<Notification>
     */
    getKioskMessage(id: string): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AdminNotificationsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AdminNotificationsService>;
}
