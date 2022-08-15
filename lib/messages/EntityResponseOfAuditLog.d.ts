import { AuditLog } from '../entities/AuditLog';
import { EntityResponse } from '../messages/EntityResponse';
import { IEntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfAuditLog extends EntityResponse {
    entity: AuditLog;
    code: number;
    error: string;
}
export interface IEntityResponseOfAuditLog extends IEntityResponse {
    entity?: AuditLog;
    code?: number;
    error?: string;
}
