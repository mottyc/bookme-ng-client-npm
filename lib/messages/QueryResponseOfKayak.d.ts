import { Kayak } from '../entities/Kayak';
import { QueryResponse } from '../messages/QueryResponse';
export declare class QueryResponseOfKayak extends QueryResponse {
    list: Kayak[];
    code: number;
    error: string;
    page: number;
    pageSize: number;
    pages: number;
    total: number;
    queryDef: string;
    docType: string;
}
