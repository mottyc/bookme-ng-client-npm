import { EntityResponse } from '../messages/EntityResponse';
import { LoginData } from '../common/LoginData';
import { IEntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfLoginData extends EntityResponse {
    entity: LoginData;
    code: number;
    error: string;
}
export interface IEntityResponseOfLoginData extends IEntityResponse {
    entity?: LoginData;
    code?: number;
    error?: string;
}
