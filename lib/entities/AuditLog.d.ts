import { EntityTypeCode } from '../enums/EntityTypeCode';
import { BaseEntity } from '../entities/BaseEntity';
import { AccountRoleCode } from '../enums/AccountRoleCode';
import { IBaseEntity } from '../entities/BaseEntity';
export declare class AuditLog extends BaseEntity {
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
    id: string;
    createdOn: number;
    updatedOn: number;
}
export interface IAuditLog extends IBaseEntity {
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
    id?: string;
    createdOn?: number;
    updatedOn?: number;
}
