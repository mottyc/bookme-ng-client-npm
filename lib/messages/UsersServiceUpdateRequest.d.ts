import { User } from '../entities/User';
export interface UsersServiceUpdateRequest {
    id?: string;
    body?: User;
}
