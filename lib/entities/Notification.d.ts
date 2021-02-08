import { TimeFrame } from '../common/TimeFrame';
import { BaseEntity } from '../entities/BaseEntity';
import { IBaseEntity } from '../entities/BaseEntity';
export declare class Notification extends BaseEntity {
    userId: string;
    notifyOn: TimeFrame;
    message: string;
    acceptedOn: number;
    id: string;
    createdOn: number;
    updatedOn: number;
}
export interface INotification extends IBaseEntity {
    userId?: string;
    notifyOn?: TimeFrame;
    message?: string;
    acceptedOn?: number;
    id?: string;
    createdOn?: number;
    updatedOn?: number;
}
