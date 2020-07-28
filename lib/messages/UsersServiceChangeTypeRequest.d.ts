import { UserTypeCode } from '../enums/UserTypeCode';
export declare class UsersServiceChangeTypeRequest {
    id: string;
    type: UserTypeCode;
    constructor(id?: string, type?: UserTypeCode);
}
export interface IUsersServiceChangeTypeRequest {
    id?: string;
    type?: UserTypeCode;
}
