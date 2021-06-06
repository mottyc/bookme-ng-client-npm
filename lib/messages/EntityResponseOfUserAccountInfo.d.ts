import { EntityResponse } from '../messages/EntityResponse';
import { UserAccountInfo } from '../common/UserAccountInfo';
import { IEntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfUserAccountInfo extends EntityResponse {
    entity: UserAccountInfo;
    code: number;
    error: string;
}
export interface IEntityResponseOfUserAccountInfo extends IEntityResponse {
    entity?: UserAccountInfo;
    code?: number;
    error?: string;
}
