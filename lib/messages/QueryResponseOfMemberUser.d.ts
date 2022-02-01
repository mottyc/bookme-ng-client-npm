import { QueryResponse } from '../messages/QueryResponse';
import { MemberUser } from '../entities/MemberUser';
import { IQueryResponse } from '../messages/QueryResponse';
export declare class QueryResponseOfMemberUser extends QueryResponse {
    list: MemberUser[];
    code: number;
    error: string;
    page: number;
    pageSize: number;
    pages: number;
    total: number;
    queryDef: string;
    docType: string;
}
export interface IQueryResponseOfMemberUser extends IQueryResponse {
    list?: MemberUser[];
    code?: number;
    error?: string;
    page?: number;
    pageSize?: number;
    pages?: number;
    total?: number;
    queryDef?: string;
    docType?: string;
}
