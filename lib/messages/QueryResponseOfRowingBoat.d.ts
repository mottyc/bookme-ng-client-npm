import { RowingBoat } from '../entities/RowingBoat';
import { QueryResponse } from '../messages/QueryResponse';
export declare class QueryResponseOfRowingBoat extends QueryResponse {
    list: RowingBoat[];
    code: number;
    error: string;
    page: number;
    pageSize: number;
    pages: number;
    total: number;
    queryDef: string;
    docType: string;
}
