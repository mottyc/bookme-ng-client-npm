import { User } from '../entities/User';
import { QueryResponse } from '../messages/QueryResponse';
export interface QueryResponseOfUser extends QueryResponse {
    list?: User[];
    code?: number;
    error?: string;
    page?: number;
    pageSize?: number;
    pages?: number;
    total?: number;
    queryDef?: string;
    docType?: string;
}
