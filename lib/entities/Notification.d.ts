import { NotificationTypeCode } from '../enums/NotificationTypeCode';
import { BaseEntity } from '../entities/BaseEntity';
import { TimeFrame } from '../common/TimeFrame';
import { IBaseEntity } from '../entities/BaseEntity';
export declare class Notification extends BaseEntity {
    accountId: string;
    userId: string;
    notifyOn: TimeFrame;
    message: string;
    type: NotificationTypeCode;
    acceptedOn: number;
    id: string;
    createdOn: number;
    updatedOn: number;
}
export interface INotification extends IBaseEntity {
    accountId?: string;
    userId?: string;
    notifyOn?: TimeFrame;
    message?: string;
    type?: NotificationTypeCode;
    acceptedOn?: number;
    id?: string;
    createdOn?: number;
    updatedOn?: number;
}
