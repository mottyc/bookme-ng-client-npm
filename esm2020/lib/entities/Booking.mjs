import { BaseEntity } from '../entities/BaseEntity';
/*
 *  Booking
 *  A booking is a pending request to book a resource for specific time for user(s), once it is approved, it becomes a placement
*/
export class Booking extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9va2luZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jvb2ttZS1saWIvc3JjL2xpYi9lbnRpdGllcy9Cb29raW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUlwRDs7O0VBR0U7QUFDRixNQUFNLE9BQU8sT0FBUSxTQUFRLFVBQVU7Q0FxSXRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm9va2luZ1N0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9Cb29raW5nU3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBTZXZlcml0eUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TZXZlcml0eUNvZGUnO1xuaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuaW1wb3J0IHsgUmVzb3VyY2VUeXBlTWFzayB9IGZyb20gJy4uL2VudW1zL1Jlc291cmNlVHlwZU1hc2snO1xuaW1wb3J0IHsgSUJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcblxuLyogXG4gKiAgQm9va2luZ1xuICogIEEgYm9va2luZyBpcyBhIHBlbmRpbmcgcmVxdWVzdCB0byBib29rIGEgcmVzb3VyY2UgZm9yIHNwZWNpZmljIHRpbWUgZm9yIHVzZXIocyksIG9uY2UgaXQgaXMgYXBwcm92ZWQsIGl0IGJlY29tZXMgYSBwbGFjZW1lbnRcbiovXG5leHBvcnQgY2xhc3MgQm9va2luZyBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuICAgIFxuIFxuICAgIC8vIEFjdGl2aXR5IGlkIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGJvb2tpbmcgcmVxdWVzdCBcbiAgICBcbiAgICBwdWJsaWMgYWN0aXZpdHlJZDogc3RyaW5nO1xuICAgIFxuIFxuICAgIC8vIEFjdGl2aXR5IG5hbWUgYXNzb2NpYXRlZCB3aXRoIHRoaXMgYm9va2luZyByZXF1ZXN0IFxuICAgIFxuICAgIHB1YmxpYyBhY3Rpdml0eU5hbWU6IHN0cmluZztcbiAgICBcbiBcbiAgICAvLyBXaGVuIHRvIGFzayBmb3IgcGxhY2VtZW50IFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBcbiAgICBwdWJsaWMgcGxhY2VtZW50T246IG51bWJlcjtcbiAgICBcbiBcbiAgICAvLyBBY3Rpdml0eSBlbmQgdGltZSBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgXG4gICAgcHVibGljIHBsYWNlbWVudFRvOiBudW1iZXI7XG4gICAgXG4gXG4gICAgLy8gQm9va2luZyBmb3Igc3BlY2lmaWMgcmVzb3VyY2UgXG4gICAgXG4gICAgcHVibGljIHJlc291cmNlSWQ6IHN0cmluZztcbiAgICBcbiBcbiAgICAvLyBSZXNvdXJjZSBuYW1lIChmb3IgZGlzcGxheSBvbmx5KSBcbiAgICBcbiAgICBwdWJsaWMgcmVzb3VyY2VOYW1lOiBzdHJpbmc7XG4gICAgXG4gXG4gICAgLy8gVXNlciBJZCB3aG8gcmVxdWVzdGVkIHRoZSBib29raW5nIFxuICAgIFxuICAgIHB1YmxpYyByZXF1ZXN0ZWRCeTogc3RyaW5nO1xuICAgIFxuIFxuICAgIC8vIFVzZXIgbmFtZSAoZm9yIGRpc3BsYXkgb25seSkgXG4gICAgXG4gICAgcHVibGljIHJlcXVlc3RlZEJ5TmFtZTogc3RyaW5nO1xuICAgIFxuIFxuICAgIC8vIFVzZXIgSWRzIHJlZ2lzdGVyZWQgZm9yIHRoZSBwbGFjZW1lbnQgXG4gICAgXG4gICAgcHVibGljIHJlcXVlc3RlZEZvcjogc3RyaW5nW107XG4gICAgXG4gXG4gICAgLy8gVXNlcnMgbmFtZSAoZm9yIGRpc3BsYXkgb25seSkgXG4gICAgXG4gICAgcHVibGljIHJlcXVlc3RlZEZvck5hbWVzOiBzdHJpbmdbXTtcbiAgICBcbiBcbiAgICAvLyBVc2VyIElkcyB3aG8gYWN0dWFsbHkgcGFydGljaXBhdGVkIHRoZSBwbGFjZW1lbnQgXG4gICAgXG4gICAgcHVibGljIHBhcnRpY2lwYW50czogc3RyaW5nW107XG4gICAgXG4gXG4gICAgLy8gUmVzb3VyY2UgdHlwZSBcbiAgICBcbiAgICBwdWJsaWMgcmVzb3VyY2VUeXBlOiBSZXNvdXJjZVR5cGVNYXNrO1xuICAgIFxuIFxuICAgIC8vIFVzZXIgSWQgd2hvIGFwcHJvdmVkIHRoZSBib29raW5nIChvciBzeXN0ZW0gZm9yIGF1dG8gYXBwcm92YWwpIFxuICAgIFxuICAgIHB1YmxpYyBhcHByb3ZlZEJ5OiBzdHJpbmc7XG4gICAgXG4gXG4gICAgLy8gV2hlbiB0aGUgcGxhY2VtZW50IHdhcyBhcHByb3ZlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgXG4gICAgcHVibGljIGFwcHJvdmVkT246IG51bWJlcjtcbiAgICBcbiBcbiAgICAvLyBCb29raW5nIHN0YXR1cyBcbiAgICBcbiAgICBwdWJsaWMgc3RhdHVzOiBCb29raW5nU3RhdHVzQ29kZTtcbiAgICBcbiBcbiAgICAvLyBCb29raW5nIGZvciBhIHByaXZhdGUgcmVzb3VyY2UgXG4gICAgXG4gICAgcHVibGljIHByaXZhdGU6IGJvb2xlYW47XG4gICAgXG4gXG4gICAgLy8gQWN0dWFsIER1cmF0aW9uIChpbiBtaW51dGVzKSBcbiAgICBcbiAgICBwdWJsaWMgZHVyYXRpb246IG51bWJlcjtcbiAgICBcbiBcbiAgICAvLyBBY3R1YWwgRGlzdGFuY2UgKGluIG1ldGVycykgXG4gICAgXG4gICAgcHVibGljIGRpc3RhbmNlOiBudW1iZXI7XG4gICAgXG4gXG4gICAgLy8gR2VuZXJhbCBub3RlcyAobWFpbmx5IGZvciBhY2NpZGVudCkgXG4gICAgXG4gICAgcHVibGljIG5vdGVzOiBzdHJpbmc7XG4gICAgXG4gXG4gICAgLy8gQm9va2luZyBBY3Rpdml0eSBpY29uIFxuICAgIFxuICAgIHB1YmxpYyBpY29uOiBzdHJpbmc7XG4gICAgXG4gXG4gICAgLy8gQm9va2luZyBBY3Rpdml0eSBpY29uIGNvbG9yIFxuICAgIFxuICAgIHB1YmxpYyBpY29uQ29sb3I6IHN0cmluZztcbiAgICBcbiBcbiAgICAvLyBCb29raW5nIGFsZXJ0IHNldmVyaXR5IFxuICAgIFxuICAgIHB1YmxpYyBzZXZlcml0eTogU2V2ZXJpdHlDb2RlO1xuICAgIFxuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBcbiAgICBwdWJsaWMgb3ZlcnJpZGUgaWQ6IHN0cmluZztcbiAgICBcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIFxuICAgIHB1YmxpYyBvdmVycmlkZSBjcmVhdGVkT246IG51bWJlcjtcbiAgICBcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIFxuICAgIHB1YmxpYyBvdmVycmlkZSB1cGRhdGVkT246IG51bWJlcjtcbiAgICBcbiBcblxufVxuXG5cbi8qXG4gKiAgSW50ZXJmYWNlIG9mIEJvb2tpbmdcbiovXG5leHBvcnQgaW50ZXJmYWNlIElCb29raW5nIGV4dGVuZHMgSUJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgYWNjb3VudElkPzogc3RyaW5nO1xuIFxuICAgIC8vIEFjdGl2aXR5IGlkIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGJvb2tpbmcgcmVxdWVzdCBcbiAgICBhY3Rpdml0eUlkPzogc3RyaW5nO1xuIFxuICAgIC8vIEFjdGl2aXR5IG5hbWUgYXNzb2NpYXRlZCB3aXRoIHRoaXMgYm9va2luZyByZXF1ZXN0IFxuICAgIGFjdGl2aXR5TmFtZT86IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRvIGFzayBmb3IgcGxhY2VtZW50IFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwbGFjZW1lbnRPbj86IG51bWJlcjtcbiBcbiAgICAvLyBBY3Rpdml0eSBlbmQgdGltZSBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcGxhY2VtZW50VG8/OiBudW1iZXI7XG4gXG4gICAgLy8gQm9va2luZyBmb3Igc3BlY2lmaWMgcmVzb3VyY2UgXG4gICAgcmVzb3VyY2VJZD86IHN0cmluZztcbiBcbiAgICAvLyBSZXNvdXJjZSBuYW1lIChmb3IgZGlzcGxheSBvbmx5KSBcbiAgICByZXNvdXJjZU5hbWU/OiBzdHJpbmc7XG4gXG4gICAgLy8gVXNlciBJZCB3aG8gcmVxdWVzdGVkIHRoZSBib29raW5nIFxuICAgIHJlcXVlc3RlZEJ5Pzogc3RyaW5nO1xuIFxuICAgIC8vIFVzZXIgbmFtZSAoZm9yIGRpc3BsYXkgb25seSkgXG4gICAgcmVxdWVzdGVkQnlOYW1lPzogc3RyaW5nO1xuIFxuICAgIC8vIFVzZXIgSWRzIHJlZ2lzdGVyZWQgZm9yIHRoZSBwbGFjZW1lbnQgXG4gICAgcmVxdWVzdGVkRm9yPzogc3RyaW5nW107XG4gXG4gICAgLy8gVXNlcnMgbmFtZSAoZm9yIGRpc3BsYXkgb25seSkgXG4gICAgcmVxdWVzdGVkRm9yTmFtZXM/OiBzdHJpbmdbXTtcbiBcbiAgICAvLyBVc2VyIElkcyB3aG8gYWN0dWFsbHkgcGFydGljaXBhdGVkIHRoZSBwbGFjZW1lbnQgXG4gICAgcGFydGljaXBhbnRzPzogc3RyaW5nW107XG4gXG4gICAgLy8gUmVzb3VyY2UgdHlwZSBcbiAgICByZXNvdXJjZVR5cGU/OiBSZXNvdXJjZVR5cGVNYXNrO1xuIFxuICAgIC8vIFVzZXIgSWQgd2hvIGFwcHJvdmVkIHRoZSBib29raW5nIChvciBzeXN0ZW0gZm9yIGF1dG8gYXBwcm92YWwpIFxuICAgIGFwcHJvdmVkQnk/OiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgcGxhY2VtZW50IHdhcyBhcHByb3ZlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgYXBwcm92ZWRPbj86IG51bWJlcjtcbiBcbiAgICAvLyBCb29raW5nIHN0YXR1cyBcbiAgICBzdGF0dXM/OiBCb29raW5nU3RhdHVzQ29kZTtcbiBcbiAgICAvLyBCb29raW5nIGZvciBhIHByaXZhdGUgcmVzb3VyY2UgXG4gICAgcHJpdmF0ZT86IGJvb2xlYW47XG4gXG4gICAgLy8gQWN0dWFsIER1cmF0aW9uIChpbiBtaW51dGVzKSBcbiAgICBkdXJhdGlvbj86IG51bWJlcjtcbiBcbiAgICAvLyBBY3R1YWwgRGlzdGFuY2UgKGluIG1ldGVycykgXG4gICAgZGlzdGFuY2U/OiBudW1iZXI7XG4gXG4gICAgLy8gR2VuZXJhbCBub3RlcyAobWFpbmx5IGZvciBhY2NpZGVudCkgXG4gICAgbm90ZXM/OiBzdHJpbmc7XG4gXG4gICAgLy8gQm9va2luZyBBY3Rpdml0eSBpY29uIFxuICAgIGljb24/OiBzdHJpbmc7XG4gXG4gICAgLy8gQm9va2luZyBBY3Rpdml0eSBpY29uIGNvbG9yIFxuICAgIGljb25Db2xvcj86IHN0cmluZztcbiBcbiAgICAvLyBCb29raW5nIGFsZXJ0IHNldmVyaXR5IFxuICAgIHNldmVyaXR5PzogU2V2ZXJpdHlDb2RlO1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBpZD86IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIGNyZWF0ZWRPbj86IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHVwZGF0ZWRPbj86IG51bWJlcjtcbiBcbn1cbiJdfQ==