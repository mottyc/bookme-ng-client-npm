import { Placement } from '../entities/Placement';
import { QueryResponse } from '../messages/QueryResponse';
export interface QueryResponseOfPlacement extends QueryResponse {
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
