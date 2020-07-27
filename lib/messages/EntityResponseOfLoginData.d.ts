import { LoginData } from '../common/LoginData';
import { EntityResponse } from '../messages/EntityResponse';
export interface EntityResponseOfLoginData extends EntityResponse {
    entity?: LoginData;
    code?: number;
    error?: string;
}
