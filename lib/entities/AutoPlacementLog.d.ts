import { EntityTypeCode } from '../enums/EntityTypeCode';
import { Booking } from '../entities/Booking';
import { BaseEntity } from '../entities/BaseEntity';
import { AccountRoleCode } from '../enums/AccountRoleCode';
import { IBaseEntity } from '../entities/BaseEntity';
export declare class AutoPlacementLog extends BaseEntity {
    accountId: string;
    userId: string;
    userRole: AccountRoleCode;
    userName: string;
    action: string;
    itemType: EntityTypeCode;
    itemId: string;
    itemName: string;
    beforeChange: string;
    afterChange: string;
    bookings: Booking[];
    id: string;
    createdOn: number;
    updatedOn: number;
}
export interface IAutoPlacementLog extends IBaseEntity {
    accountId?: string;
    userId?: string;
    userRole?: AccountRoleCode;
    userName?: string;
    action?: string;
    itemType?: EntityTypeCode;
    itemId?: string;
    itemName?: string;
    beforeChange?: string;
    afterChange?: string;
    bookings?: Booking[];
    id?: string;
    createdOn?: number;
    updatedOn?: number;
}
