import { BaseEntity } from '../entities/BaseEntity';
/*
 *  User membership in an account
*/
export class Member extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9lbnRpdGllcy9NZW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBR3BEOztFQUVFO0FBQ0YsTUFBTSxPQUFPLE1BQU8sU0FBUSxVQUFVO0NBZ0RyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjY291bnRSb2xlQ29kZSB9IGZyb20gJy4uL2VudW1zL0FjY291bnRSb2xlQ29kZSc7XG5pbXBvcnQgeyBNZW1iZXJTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvTWVtYmVyU3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5pbXBvcnQgeyBJQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuXG4vKiBcbiAqICBVc2VyIG1lbWJlcnNoaXAgaW4gYW4gYWNjb3VudFxuKi9cbmV4cG9ydCBjbGFzcyBNZW1iZXIgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBVc2VyIElkIFxuICAgIHB1YmxpYyB1c2VySWQ6IHN0cmluZztcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIHR5cGU6IFVOREVGSU5FRCB8IFNZU0FETUlOIHwgU1VQUE9SVCB8IFVTRVIgXG4gICAgcHVibGljIGFjY291bnRSb2xlOiBBY2NvdW50Um9sZUNvZGU7XG4gXG4gICAgLy8gTWVtYmVyIHN0YXR1czogVU5ERUZJTkVEIHwgUEVORElORyB8IEFDVElWRSB8IEZST1pFTiBcbiAgICBwdWJsaWMgc3RhdHVzOiBNZW1iZXJTdGF0dXNDb2RlO1xuIFxuICAgIC8vIE1lbWJlciBpbiB0aGUgY2x1YiBzaW5jZSBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIG1lbWJlclNpbmNlOiBudW1iZXI7XG4gXG4gICAgLy8gTWVtYmVyc2hpcCBleHBpcmF0aW9uIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgZXhwaXJhdGlvbjogbnVtYmVyO1xuIFxuICAgIC8vIE1lbWJlciBsZXZlbCBbMSwyLDNdIFxuICAgIHB1YmxpYyBsZXZlbDogbnVtYmVyO1xuIFxuICAgIC8vIE1lbWJlciBjYW4gYmUgY294ID8gXG4gICAgcHVibGljIGlzQ294OiBib29sZWFuO1xuIFxuICAgIC8vIE1lbWJlciBjYW4gYmUgbWVudG9yID8gXG4gICAgcHVibGljIGlzTWVudG9yOiBib29sZWFuO1xuIFxuICAgIC8vIFRyYWluaW5nIHRpbWUgW21pbnV0ZXNdIFxuICAgIHB1YmxpYyB0cmFpbmluZ1RpbWU6IG51bWJlcjtcbiBcbiAgICAvLyBSZXN0cmljdGlvbnMgXG4gICAgcHVibGljIHJlc3RyaWN0aW9uczogc3RyaW5nO1xuIFxuICAgIC8vIFByZWZlcnJlZCByZXNvdXJjZXMgZm9yIGJvb2tpbmcgW29yZGVyZWQgbGlzdF0gXG4gICAgcHVibGljIHByZWZlcnJlZDogc3RyaW5nW107XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuXG59XG5cblxuLypcbiAqICBJbnRlcmZhY2Ugb2YgTWVtYmVyXG4qL1xuZXhwb3J0IGludGVyZmFjZSBJTWVtYmVyIGV4dGVuZHMgSUJhc2VFbnRpdHkge1xuIFxuICAgIC8vIFVzZXIgSWQgXG4gICAgdXNlcklkPzogc3RyaW5nO1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgYWNjb3VudElkPzogc3RyaW5nO1xuIFxuICAgIC8vIFVzZXIgdHlwZTogVU5ERUZJTkVEIHwgU1lTQURNSU4gfCBTVVBQT1JUIHwgVVNFUiBcbiAgICBhY2NvdW50Um9sZT86IEFjY291bnRSb2xlQ29kZTtcbiBcbiAgICAvLyBNZW1iZXIgc3RhdHVzOiBVTkRFRklORUQgfCBQRU5ESU5HIHwgQUNUSVZFIHwgRlJPWkVOIFxuICAgIHN0YXR1cz86IE1lbWJlclN0YXR1c0NvZGU7XG4gXG4gICAgLy8gTWVtYmVyIGluIHRoZSBjbHViIHNpbmNlIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBtZW1iZXJTaW5jZT86IG51bWJlcjtcbiBcbiAgICAvLyBNZW1iZXJzaGlwIGV4cGlyYXRpb24gW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIGV4cGlyYXRpb24/OiBudW1iZXI7XG4gXG4gICAgLy8gTWVtYmVyIGxldmVsIFsxLDIsM10gXG4gICAgbGV2ZWw/OiBudW1iZXI7XG4gXG4gICAgLy8gTWVtYmVyIGNhbiBiZSBjb3ggPyBcbiAgICBpc0NveD86IGJvb2xlYW47XG4gXG4gICAgLy8gTWVtYmVyIGNhbiBiZSBtZW50b3IgPyBcbiAgICBpc01lbnRvcj86IGJvb2xlYW47XG4gXG4gICAgLy8gVHJhaW5pbmcgdGltZSBbbWludXRlc10gXG4gICAgdHJhaW5pbmdUaW1lPzogbnVtYmVyO1xuIFxuICAgIC8vIFJlc3RyaWN0aW9ucyBcbiAgICByZXN0cmljdGlvbnM/OiBzdHJpbmc7XG4gXG4gICAgLy8gUHJlZmVycmVkIHJlc291cmNlcyBmb3IgYm9va2luZyBbb3JkZXJlZCBsaXN0XSBcbiAgICBwcmVmZXJyZWQ/OiBzdHJpbmdbXTtcbiBcbiAgICAvLyBFbnRpdHkgSWQgXG4gICAgaWQ/OiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyBjcmVhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBjcmVhdGVkT24/OiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyB1cGRhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICB1cGRhdGVkT24/OiBudW1iZXI7XG4gXG59XG4iXX0=