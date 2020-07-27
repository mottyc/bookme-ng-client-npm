export interface WebSocketMessageHeader {
    op?: number;
    ver?: number;
    id?: number;
    cid?: number;
    sid?: string;
}
