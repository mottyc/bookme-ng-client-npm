import { Membership } from '../entities/Membership';
import { QueryResponse } from '../messages/QueryResponse';
import { IQueryResponse } from '../messages/QueryResponse';
export declare class QueryResponseOfMembership extends QueryResponse {
    list: Membership[];
    code: number;
    error: string;
    page: number;
    pageSize: number;
    pages: number;
    total: number;
    queryDef: string;
    docType: string;
}
export interface IQueryResponseOfMembership extends IQueryResponse {
    list?: Membership[];
    code?: number;
    error?: string;
    page?: number;
    pageSize?: number;
    pages?: number;
    total?: number;
    queryDef?: string;
    docType?: string;
}
