import { MemberStatusCode } from '../enums/MemberStatusCode';
export declare class MembersServiceUpdateStatusRequest {
    id: string;
    status: MemberStatusCode;
    constructor(id?: string, status?: MemberStatusCode);
}
export interface IMembersServiceUpdateStatusRequest {
    id?: string;
    status?: MemberStatusCode;
}
