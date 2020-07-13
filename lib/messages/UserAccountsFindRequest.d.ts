import { AccountTypeCode } from '../enums/AccountTypeCode';
import { AccountStatusCode } from '../enums/AccountStatusCode';
export declare class UserAccountsFindRequest {
    search: string;
    type: AccountTypeCode[];
    status: AccountStatusCode[];
    sort: string;
    page: number;
    pageSize: number;
    constructor(search?: string, type?: AccountTypeCode[], status?: AccountStatusCode[], sort?: string, page?: number, pageSize?: number);
}
