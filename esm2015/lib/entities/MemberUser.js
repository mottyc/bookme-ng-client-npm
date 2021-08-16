import { BaseEntity } from '../entities/BaseEntity';
/*
 *  Member in an account with extended user info (for display only)
*/
export class MemberUser extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVtYmVyVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvZW50aXRpZXMvTWVtYmVyVXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHcEQ7O0VBRUU7QUFDRixNQUFNLE9BQU8sVUFBVyxTQUFRLFVBQVU7Q0FtRHpDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWNjb3VudFJvbGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQWNjb3VudFJvbGVDb2RlJztcbmltcG9ydCB7IE1lbWJlclN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9NZW1iZXJTdGF0dXNDb2RlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9lbnRpdGllcy9Vc2VyJztcbmltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcbmltcG9ydCB7IElCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5cbi8qIFxuICogIE1lbWJlciBpbiBhbiBhY2NvdW50IHdpdGggZXh0ZW5kZWQgdXNlciBpbmZvIChmb3IgZGlzcGxheSBvbmx5KVxuKi9cbmV4cG9ydCBjbGFzcyBNZW1iZXJVc2VyIGV4dGVuZHMgQmFzZUVudGl0eSB7XG4gXG4gICAgLy8gVXNlciBJZCBcbiAgICBwdWJsaWMgdXNlcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gQWNjb3VudCBJZCBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gVXNlciB0eXBlOiBVTkRFRklORUQgfCBTWVNBRE1JTiB8IFNVUFBPUlQgfCBVU0VSIFxuICAgIHB1YmxpYyBhY2NvdW50Um9sZTogQWNjb3VudFJvbGVDb2RlO1xuIFxuICAgIC8vIE1lbWJlciBzdGF0dXM6IFVOREVGSU5FRCB8IFBFTkRJTkcgfCBBQ1RJVkUgfCBGUk9aRU4gXG4gICAgcHVibGljIHN0YXR1czogTWVtYmVyU3RhdHVzQ29kZTtcbiBcbiAgICAvLyBNZW1iZXIgaW4gdGhlIGNsdWIgc2luY2UgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBtZW1iZXJTaW5jZTogbnVtYmVyO1xuIFxuICAgIC8vIE1lbWJlcnNoaXAgZXhwaXJhdGlvbiBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGV4cGlyYXRpb246IG51bWJlcjtcbiBcbiAgICAvLyBNZW1iZXIgbGV2ZWwgWzEsMiwzXSBcbiAgICBwdWJsaWMgbGV2ZWw6IG51bWJlcjtcbiBcbiAgICAvLyBNZW1iZXIgY2FuIGJlIGNveCA/IFxuICAgIHB1YmxpYyBpc0NveDogYm9vbGVhbjtcbiBcbiAgICAvLyBNZW1iZXIgY2FuIGJlIG1lbnRvciA/IFxuICAgIHB1YmxpYyBpc01lbnRvcjogYm9vbGVhbjtcbiBcbiAgICAvLyBUcmFpbmluZyB0aW1lIFttaW51dGVzXSBcbiAgICBwdWJsaWMgdHJhaW5pbmdUaW1lOiBudW1iZXI7XG4gXG4gICAgLy8gUmVzdHJpY3Rpb25zIFxuICAgIHB1YmxpYyByZXN0cmljdGlvbnM6IHN0cmluZztcbiBcbiAgICAvLyBQcmVmZXJyZWQgcmVzb3VyY2VzIGZvciBib29raW5nIFtvcmRlcmVkIGxpc3RdIFxuICAgIHB1YmxpYyBwcmVmZXJyZWQ6IHN0cmluZ1tdO1xuIFxuICAgIC8vIFVzZXIgSW5mbyBcbiAgICBwdWJsaWMgdXNlcjogVXNlcjtcbiBcbiAgICAvLyBFbnRpdHkgSWQgXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyBjcmVhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgY3JlYXRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyB1cGRhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgdXBkYXRlZE9uOiBudW1iZXI7XG4gXG5cbn1cblxuXG4vKlxuICogIEludGVyZmFjZSBvZiBNZW1iZXJVc2VyXG4qL1xuZXhwb3J0IGludGVyZmFjZSBJTWVtYmVyVXNlciBleHRlbmRzIElCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBVc2VyIElkIFxuICAgIHVzZXJJZD86IHN0cmluZztcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIGFjY291bnRJZD86IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIHR5cGU6IFVOREVGSU5FRCB8IFNZU0FETUlOIHwgU1VQUE9SVCB8IFVTRVIgXG4gICAgYWNjb3VudFJvbGU/OiBBY2NvdW50Um9sZUNvZGU7XG4gXG4gICAgLy8gTWVtYmVyIHN0YXR1czogVU5ERUZJTkVEIHwgUEVORElORyB8IEFDVElWRSB8IEZST1pFTiBcbiAgICBzdGF0dXM/OiBNZW1iZXJTdGF0dXNDb2RlO1xuIFxuICAgIC8vIE1lbWJlciBpbiB0aGUgY2x1YiBzaW5jZSBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgbWVtYmVyU2luY2U/OiBudW1iZXI7XG4gXG4gICAgLy8gTWVtYmVyc2hpcCBleHBpcmF0aW9uIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBleHBpcmF0aW9uPzogbnVtYmVyO1xuIFxuICAgIC8vIE1lbWJlciBsZXZlbCBbMSwyLDNdIFxuICAgIGxldmVsPzogbnVtYmVyO1xuIFxuICAgIC8vIE1lbWJlciBjYW4gYmUgY294ID8gXG4gICAgaXNDb3g/OiBib29sZWFuO1xuIFxuICAgIC8vIE1lbWJlciBjYW4gYmUgbWVudG9yID8gXG4gICAgaXNNZW50b3I/OiBib29sZWFuO1xuIFxuICAgIC8vIFRyYWluaW5nIHRpbWUgW21pbnV0ZXNdIFxuICAgIHRyYWluaW5nVGltZT86IG51bWJlcjtcbiBcbiAgICAvLyBSZXN0cmljdGlvbnMgXG4gICAgcmVzdHJpY3Rpb25zPzogc3RyaW5nO1xuIFxuICAgIC8vIFByZWZlcnJlZCByZXNvdXJjZXMgZm9yIGJvb2tpbmcgW29yZGVyZWQgbGlzdF0gXG4gICAgcHJlZmVycmVkPzogc3RyaW5nW107XG4gXG4gICAgLy8gVXNlciBJbmZvIFxuICAgIHVzZXI/OiBVc2VyO1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBpZD86IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIGNyZWF0ZWRPbj86IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHVwZGF0ZWRPbj86IG51bWJlcjtcbiBcbn1cbiJdfQ==