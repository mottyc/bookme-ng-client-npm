import { QueryResponse } from '../messages/QueryResponse';
import { Activity } from '../entities/Activity';
import { IQueryResponse } from '../messages/QueryResponse';
export declare class QueryResponseOfActivity extends QueryResponse {
    list: Activity[];
    code: number;
    error: string;
    page: number;
    pageSize: number;
    pages: number;
    total: number;
    queryDef: string;
    docType: string;
}
export interface IQueryResponseOfActivity extends IQueryResponse {
    list?: Activity[];
    code?: number;
    error?: string;
    page?: number;
    pageSize?: number;
    pages?: number;
    total?: number;
    queryDef?: string;
    docType?: string;
}
