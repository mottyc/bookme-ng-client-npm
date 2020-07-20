import { QueryResponse } from '../messages/QueryResponse';
import { Placement } from '../entities/Placement';
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
