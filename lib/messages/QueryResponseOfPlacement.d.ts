import { Placement } from '../entities/Placement';
import { QueryResponse } from '../messages/QueryResponse';
import { IQueryResponse } from '../messages/QueryResponse';
export declare class QueryResponseOfPlacement extends QueryResponse {
    list: Placement[];
    code: number;
    error: string;
    page: number;
    pageSize: number;
    pages: number;
    total: number;
    queryDef: string;
    docType: string;
}
export interface IQueryResponseOfPlacement extends IQueryResponse {
    list?: Placement[];
    code?: number;
    error?: string;
    page?: number;
    pageSize?: number;
    pages?: number;
    total?: number;
    queryDef?: string;
    docType?: string;
}
