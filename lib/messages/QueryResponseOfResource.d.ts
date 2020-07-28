import { Resource } from '../entities/Resource';
import { QueryResponse } from '../messages/QueryResponse';
import { IQueryResponse } from '../messages/QueryResponse';
export declare class QueryResponseOfResource extends QueryResponse {
    list: Resource[];
    code: number;
    error: string;
    page: number;
    pageSize: number;
    pages: number;
    total: number;
    queryDef: string;
    docType: string;
}
export interface IQueryResponseOfResource extends IQueryResponse {
    list?: Resource[];
    code?: number;
    error?: string;
    page?: number;
    pageSize?: number;
    pages?: number;
    total?: number;
    queryDef?: string;
    docType?: string;
}
