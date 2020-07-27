import { Resource } from '../entities/Resource';
import { QueryResponse } from '../messages/QueryResponse';
export interface QueryResponseOfResource extends QueryResponse {
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
