import { EntityResponse } from '../messages/EntityResponse';
import { User } from '../entities/User';
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
