import { User } from '../entities/User';
import { EntityResponse } from '../messages/EntityResponse';
export interface EntityResponseOfUser extends EntityResponse {
    entity?: User;
    code?: number;
    error?: string;
}
