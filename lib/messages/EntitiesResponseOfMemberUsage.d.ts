import { MemberUsage } from '../common/MemberUsage';
import { EntityResponse } from '../messages/EntityResponse';
import { IEntityResponse } from '../messages/EntityResponse';
export declare class EntitiesResponseOfMemberUsage extends EntityResponse {
    list: MemberUsage[];
    code: number;
    error: string;
}
export interface IEntitiesResponseOfMemberUsage extends IEntityResponse {
    list?: MemberUsage[];
    code?: number;
    error?: string;
}
