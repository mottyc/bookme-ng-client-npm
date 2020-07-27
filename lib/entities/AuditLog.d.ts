import { EntityTypeCode } from '../enums/EntityTypeCode';
import { BaseEntity } from '../entities/BaseEntity';
import { AccountRoleCode } from '../enums/AccountRoleCode';
export interface AuditLog extends BaseEntity {
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
    _type?: string;
    createdOn?: number;
    updatedOn?: number;
}
