import { AccountStatusCode } from '../enums/AccountStatusCode';
import { AccountTypeCode } from '../enums/AccountTypeCode';
export declare class UserAccountsFindRequest {
    search: string;
    type: AccountTypeCode[];
    status: AccountStatusCode[];
    sort: string;
    page: number;
    pageSize: number;
    constructor(search?: string, type?: AccountTypeCode[], status?: AccountStatusCode[], sort?: string, page?: number, pageSize?: number);
}
export interface IUserAccountsFindRequest {
    search?: string;
    type?: AccountTypeCode[];
    status?: AccountStatusCode[];
    sort?: string;
    page?: number;
    pageSize?: number;
}
