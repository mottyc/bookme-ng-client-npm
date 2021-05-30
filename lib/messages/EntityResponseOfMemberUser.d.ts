import { EntityResponse } from '../messages/EntityResponse';
import { MemberUser } from '../entities/MemberUser';
import { IEntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfMemberUser extends EntityResponse {
    entity: MemberUser;
    code: number;
    error: string;
}
export interface IEntityResponseOfMemberUser extends IEntityResponse {
    entity?: MemberUser;
    code?: number;
    error?: string;
}
