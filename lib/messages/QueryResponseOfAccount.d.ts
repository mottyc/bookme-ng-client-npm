import { QueryResponse } from '../messages/QueryResponse';
import { Account } from '../entities/Account';
import { IQueryResponse } from '../messages/QueryResponse';
export declare class QueryResponseOfAccount extends QueryResponse {
    list: Account[];
    code: number;
    error: string;
    page: number;
    pageSize: number;
    pages: number;
    total: number;
    queryDef: string;
    docType: string;
}
export interface IQueryResponseOfAccount extends IQueryResponse {
    list?: Account[];
    code?: number;
    error?: string;
    page?: number;
    pageSize?: number;
    pages?: number;
    total?: number;
    queryDef?: string;
    docType?: string;
}
