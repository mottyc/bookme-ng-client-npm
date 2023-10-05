import { BaseEntity } from '../entities/BaseEntity';
/*
 *  Member in an account with extended account info (for display only)
*/
export class Membership extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVtYmVyc2hpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jvb2ttZS1saWIvc3JjL2xpYi9lbnRpdGllcy9NZW1iZXJzaGlwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUlwRDs7RUFFRTtBQUNGLE1BQU0sT0FBTyxVQUFXLFNBQVEsVUFBVTtDQTRHekMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZW1iZXJTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvTWVtYmVyU3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5pbXBvcnQgeyBBY2NvdW50Um9sZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9BY2NvdW50Um9sZUNvZGUnO1xuaW1wb3J0IHsgSUJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcblxuLyogXG4gKiAgTWVtYmVyIGluIGFuIGFjY291bnQgd2l0aCBleHRlbmRlZCBhY2NvdW50IGluZm8gKGZvciBkaXNwbGF5IG9ubHkpXG4qL1xuZXhwb3J0IGNsYXNzIE1lbWJlcnNoaXAgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBVc2VyIElkIFxuICAgIFxuICAgIHB1YmxpYyB1c2VySWQ6IHN0cmluZztcbiAgICBcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiAgICBcbiBcbiAgICAvLyBVc2VyIHR5cGU6IFVOREVGSU5FRCB8IFNZU0FETUlOIHwgU1VQUE9SVCB8IFVTRVIgXG4gICAgXG4gICAgcHVibGljIGFjY291bnRSb2xlOiBBY2NvdW50Um9sZUNvZGU7XG4gICAgXG4gXG4gICAgLy8gTWVtYmVyIHN0YXR1czogVU5ERUZJTkVEIHwgUEVORElORyB8IEFDVElWRSB8IEZST1pFTiBcbiAgICBcbiAgICBwdWJsaWMgc3RhdHVzOiBNZW1iZXJTdGF0dXNDb2RlO1xuICAgIFxuIFxuICAgIC8vIE1lbWJlciBpbiB0aGUgY2x1YiBzaW5jZSBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgXG4gICAgcHVibGljIG1lbWJlclNpbmNlOiBudW1iZXI7XG4gICAgXG4gXG4gICAgLy8gTWVtYmVyc2hpcCBleHBpcmF0aW9uIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBcbiAgICBwdWJsaWMgZXhwaXJhdGlvbjogbnVtYmVyO1xuICAgIFxuIFxuICAgIC8vIE1lbWJlciBsZXZlbCBbMSwyLDNdIFxuICAgIFxuICAgIHB1YmxpYyBsZXZlbDogbnVtYmVyO1xuICAgIFxuIFxuICAgIC8vIE1lbWJlciBjYW4gYmUgY294ID8gXG4gICAgXG4gICAgcHVibGljIGlzQ294OiBib29sZWFuO1xuICAgIFxuIFxuICAgIC8vIE1lbWJlciBjYW4gYmUgbWVudG9yID8gXG4gICAgXG4gICAgcHVibGljIGlzTWVudG9yOiBib29sZWFuO1xuICAgIFxuIFxuICAgIC8vIFRyYWluaW5nIHRpbWUgW21pbnV0ZXNdIFxuICAgIFxuICAgIHB1YmxpYyB0cmFpbmluZ1RpbWU6IG51bWJlcjtcbiAgICBcbiBcbiAgICAvLyBSZXN0cmljdGlvbnMgXG4gICAgXG4gICAgcHVibGljIHJlc3RyaWN0aW9uczogc3RyaW5nO1xuICAgIFxuIFxuICAgIC8vIFByZWZlcnJlZCByZXNvdXJjZXMgZm9yIGJvb2tpbmcgYSBzaW5nbGUgW29yZGVyZWQgbGlzdF0gXG4gICAgXG4gICAgcHVibGljIHByZWZlcnJlZDE6IHN0cmluZ1tdO1xuICAgIFxuIFxuICAgIC8vIFByZWZlcnJlZCByZXNvdXJjZXMgZm9yIGJvb2tpbmcgYSBkb3VibGUgW29yZGVyZWQgbGlzdF0gXG4gICAgXG4gICAgcHVibGljIHByZWZlcnJlZDI6IHN0cmluZ1tdO1xuICAgIFxuIFxuICAgIC8vIFByZWZlcnJlZCByZXNvdXJjZXMgZm9yIGJvb2tpbmcgYSBxdWFkIFtvcmRlcmVkIGxpc3RdIFxuICAgIFxuICAgIHB1YmxpYyBwcmVmZXJyZWQ0OiBzdHJpbmdbXTtcbiAgICBcbiBcbiAgICAvLyBQcmVmZXJyZWQgcmVzb3VyY2VzIGZvciBib29raW5nIGFuIGVpZ2h0IFtvcmRlcmVkIGxpc3RdIFxuICAgIFxuICAgIHB1YmxpYyBwcmVmZXJyZWQ4OiBzdHJpbmdbXTtcbiAgICBcbiBcbiAgICAvLyBJcyB0aGlzIGFjY291bnQgYWN0aXZpdGllcyBzaG91bGQgbm90IGJlIHZpc2libGUgdG8gdGhlIGFnZ3JlZ2F0ZWQgYWN0aXZpdHkgbGlzdCA/IFxuICAgIFxuICAgIHB1YmxpYyBpc0hpZGRlbjogYm9vbGVhbjtcbiAgICBcbiBcbiAgICAvLyBNZW1iZXIgc2NvcmUgKGJhc2VkIG9uIGFic2VuY2VzIGFuZCBpbmNpZGVudHMgaW4gdGhlIGxhc3QgMTgwIGRheXMpIFxuICAgIFxuICAgIHB1YmxpYyBzY29yZTogbnVtYmVyO1xuICAgIFxuIFxuICAgIC8vIEFjY291bnQgTmFtZSBcbiAgICBcbiAgICBwdWJsaWMgYWNjb3VudE5hbWU6IHN0cmluZztcbiAgICBcbiBcbiAgICAvLyBFbnRpdHkgSWQgXG4gICAgXG4gICAgcHVibGljIG92ZXJyaWRlIGlkOiBzdHJpbmc7XG4gICAgXG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyBjcmVhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBcbiAgICBwdWJsaWMgb3ZlcnJpZGUgY3JlYXRlZE9uOiBudW1iZXI7XG4gICAgXG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyB1cGRhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBcbiAgICBwdWJsaWMgb3ZlcnJpZGUgdXBkYXRlZE9uOiBudW1iZXI7XG4gICAgXG4gXG5cbn1cblxuXG4vKlxuICogIEludGVyZmFjZSBvZiBNZW1iZXJzaGlwXG4qL1xuZXhwb3J0IGludGVyZmFjZSBJTWVtYmVyc2hpcCBleHRlbmRzIElCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBVc2VyIElkIFxuICAgIHVzZXJJZD86IHN0cmluZztcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIGFjY291bnRJZD86IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIHR5cGU6IFVOREVGSU5FRCB8IFNZU0FETUlOIHwgU1VQUE9SVCB8IFVTRVIgXG4gICAgYWNjb3VudFJvbGU/OiBBY2NvdW50Um9sZUNvZGU7XG4gXG4gICAgLy8gTWVtYmVyIHN0YXR1czogVU5ERUZJTkVEIHwgUEVORElORyB8IEFDVElWRSB8IEZST1pFTiBcbiAgICBzdGF0dXM/OiBNZW1iZXJTdGF0dXNDb2RlO1xuIFxuICAgIC8vIE1lbWJlciBpbiB0aGUgY2x1YiBzaW5jZSBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgbWVtYmVyU2luY2U/OiBudW1iZXI7XG4gXG4gICAgLy8gTWVtYmVyc2hpcCBleHBpcmF0aW9uIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBleHBpcmF0aW9uPzogbnVtYmVyO1xuIFxuICAgIC8vIE1lbWJlciBsZXZlbCBbMSwyLDNdIFxuICAgIGxldmVsPzogbnVtYmVyO1xuIFxuICAgIC8vIE1lbWJlciBjYW4gYmUgY294ID8gXG4gICAgaXNDb3g/OiBib29sZWFuO1xuIFxuICAgIC8vIE1lbWJlciBjYW4gYmUgbWVudG9yID8gXG4gICAgaXNNZW50b3I/OiBib29sZWFuO1xuIFxuICAgIC8vIFRyYWluaW5nIHRpbWUgW21pbnV0ZXNdIFxuICAgIHRyYWluaW5nVGltZT86IG51bWJlcjtcbiBcbiAgICAvLyBSZXN0cmljdGlvbnMgXG4gICAgcmVzdHJpY3Rpb25zPzogc3RyaW5nO1xuIFxuICAgIC8vIFByZWZlcnJlZCByZXNvdXJjZXMgZm9yIGJvb2tpbmcgYSBzaW5nbGUgW29yZGVyZWQgbGlzdF0gXG4gICAgcHJlZmVycmVkMT86IHN0cmluZ1tdO1xuIFxuICAgIC8vIFByZWZlcnJlZCByZXNvdXJjZXMgZm9yIGJvb2tpbmcgYSBkb3VibGUgW29yZGVyZWQgbGlzdF0gXG4gICAgcHJlZmVycmVkMj86IHN0cmluZ1tdO1xuIFxuICAgIC8vIFByZWZlcnJlZCByZXNvdXJjZXMgZm9yIGJvb2tpbmcgYSBxdWFkIFtvcmRlcmVkIGxpc3RdIFxuICAgIHByZWZlcnJlZDQ/OiBzdHJpbmdbXTtcbiBcbiAgICAvLyBQcmVmZXJyZWQgcmVzb3VyY2VzIGZvciBib29raW5nIGFuIGVpZ2h0IFtvcmRlcmVkIGxpc3RdIFxuICAgIHByZWZlcnJlZDg/OiBzdHJpbmdbXTtcbiBcbiAgICAvLyBJcyB0aGlzIGFjY291bnQgYWN0aXZpdGllcyBzaG91bGQgbm90IGJlIHZpc2libGUgdG8gdGhlIGFnZ3JlZ2F0ZWQgYWN0aXZpdHkgbGlzdCA/IFxuICAgIGlzSGlkZGVuPzogYm9vbGVhbjtcbiBcbiAgICAvLyBNZW1iZXIgc2NvcmUgKGJhc2VkIG9uIGFic2VuY2VzIGFuZCBpbmNpZGVudHMgaW4gdGhlIGxhc3QgMTgwIGRheXMpIFxuICAgIHNjb3JlPzogbnVtYmVyO1xuIFxuICAgIC8vIEFjY291bnQgTmFtZSBcbiAgICBhY2NvdW50TmFtZT86IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgSWQgXG4gICAgaWQ/OiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyBjcmVhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBjcmVhdGVkT24/OiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyB1cGRhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICB1cGRhdGVkT24/OiBudW1iZXI7XG4gXG59XG4iXX0=