import { User } from '../entities/User';
import { EntityResponse } from '../messages/EntityResponse';
import { IEntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfUser extends EntityResponse {
    entity: User;
    code: number;
    error: string;
}
export interface IEntityResponseOfUser extends IEntityResponse {
    entity?: User;
    code?: number;
    error?: string;
}
