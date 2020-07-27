import { UserTypeCode } from '../enums/UserTypeCode';
export interface UsersServiceChangeTypeRequest {
    id?: string;
    type?: UserTypeCode;
}
