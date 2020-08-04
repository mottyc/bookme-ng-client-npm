import { MemberUser } from '../entities/MemberUser';
export declare class MembersBulkImportRequest {
    body: MemberUser[];
    constructor(body?: MemberUser[]);
}
export interface IMembersBulkImportRequest {
    body?: MemberUser[];
}
