import { EntityResponse } from '../messages/EntityResponse';
import { Member } from '../entities/Member';
import { IEntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfMember extends EntityResponse {
    entity: Member;
    code: number;
    error: string;
}
export interface IEntityResponseOfMember extends IEntityResponse {
    entity?: Member;
    code?: number;
    error?: string;
}
