import { QueryResponse } from '../messages/QueryResponse';
import { AutoPlacementLog } from '../entities/AutoPlacementLog';
import { IQueryResponse } from '../messages/QueryResponse';
export declare class QueryResponseOfAutoPlacementLog extends QueryResponse {
    list: AutoPlacementLog[];
    code: number;
    error: string;
    page: number;
    pageSize: number;
    pages: number;
    total: number;
    queryDef: string;
    docType: string;
}
export interface IQueryResponseOfAutoPlacementLog extends IQueryResponse {
    list?: AutoPlacementLog[];
    code?: number;
    error?: string;
    page?: number;
    pageSize?: number;
    pages?: number;
    total?: number;
    queryDef?: string;
    docType?: string;
}
