import { BaseEntity } from '../entities/BaseEntity';
/*
 *  Daily account activities entity
*/
export class Activity extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWN0aXZpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvbGliL2VudGl0aWVzL0FjdGl2aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUlwRDs7RUFFRTtBQUNGLE1BQU0sT0FBTyxRQUFTLFNBQVEsVUFBVTtDQW1EdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXNvdXJjZVR5cGVNYXNrIH0gZnJvbSAnLi4vZW51bXMvUmVzb3VyY2VUeXBlTWFzayc7XG5pbXBvcnQgeyBBY2NvdW50Um9sZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9BY2NvdW50Um9sZUNvZGUnO1xuaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuaW1wb3J0IHsgQWN0aXZpdHlTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvQWN0aXZpdHlTdGF0dXNDb2RlJztcbmltcG9ydCB7IElCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5cbi8qIFxuICogIERhaWx5IGFjY291bnQgYWN0aXZpdGllcyBlbnRpdHlcbiovXG5leHBvcnQgY2xhc3MgQWN0aXZpdHkgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBBY3Rpdml0eSBuYW1lIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gQWN0aXZpdHkgZGVzY3JpcHRpb24gXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gSWYgdHJ1ZSwgbm8gYXBwcm92YWwgZm9yIHJlc291cmNlIGFsbG9jYXRpb24gaXMgcmVxdWlyZWQgXG4gICAgcHVibGljIGF1dG9BcHByb3ZlOiBib29sZWFuO1xuIFxuICAgIC8vIFN0YXJ0IHRpbWUgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBmcm9tOiBudW1iZXI7XG4gXG4gICAgLy8gRW5kIHRpbWUgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB0bzogbnVtYmVyO1xuIFxuICAgIC8vIFN0YXR1cyBvZiBib29raW5nIHJlcXVlc3RzIFxuICAgIHB1YmxpYyBzdGF0dXM6IEFjdGl2aXR5U3RhdHVzQ29kZTtcbiBcbiAgICAvLyBBY3Rpdml0eSBpcyByZXN0cmljdGVkIHRvIHNwZWNpZmljIHJlc291cmNlIHR5cGVzIFxuICAgIHB1YmxpYyByZXNvdXJjZUZpbHRlcjogUmVzb3VyY2VUeXBlTWFza1tdO1xuIFxuICAgIC8vIEFjdGl2aXR5IGlzIHJlc3RyaWN0ZWQgdG8gc3BlY2lmaWMgcm9sZXMgKG1lbWJlcnMsIHBhcmEsIHRlYW0pIFxuICAgIHB1YmxpYyByb2xlRmlsdGVyOiBBY2NvdW50Um9sZUNvZGVbXTtcbiBcbiAgICAvLyBNZXNzYWdlIGZvciB0aGUgYWN0aXZpdHkgXG4gICAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcbiBcbiAgICAvLyBNYXggcGFydGljaXBhbnRzIGluIHRoZSBhY3Rpdml0eSBcbiAgICBwdWJsaWMgbGltaXQ6IG51bWJlcjtcbiBcbiAgICAvLyBBY3Rpdml0eSBpY29uIFxuICAgIHB1YmxpYyBpY29uOiBzdHJpbmc7XG4gXG4gICAgLy8gQWN0aXZpdHkgaWNvbiBjb2xvciBcbiAgICBwdWJsaWMgaWNvbkNvbG9yOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuXG59XG5cblxuLypcbiAqICBJbnRlcmZhY2Ugb2YgQWN0aXZpdHlcbiovXG5leHBvcnQgaW50ZXJmYWNlIElBY3Rpdml0eSBleHRlbmRzIElCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIGFjY291bnRJZD86IHN0cmluZztcbiBcbiAgICAvLyBBY3Rpdml0eSBuYW1lIFxuICAgIG5hbWU/OiBzdHJpbmc7XG4gXG4gICAgLy8gQWN0aXZpdHkgZGVzY3JpcHRpb24gXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gXG4gICAgLy8gSWYgdHJ1ZSwgbm8gYXBwcm92YWwgZm9yIHJlc291cmNlIGFsbG9jYXRpb24gaXMgcmVxdWlyZWQgXG4gICAgYXV0b0FwcHJvdmU/OiBib29sZWFuO1xuIFxuICAgIC8vIFN0YXJ0IHRpbWUgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIGZyb20/OiBudW1iZXI7XG4gXG4gICAgLy8gRW5kIHRpbWUgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHRvPzogbnVtYmVyO1xuIFxuICAgIC8vIFN0YXR1cyBvZiBib29raW5nIHJlcXVlc3RzIFxuICAgIHN0YXR1cz86IEFjdGl2aXR5U3RhdHVzQ29kZTtcbiBcbiAgICAvLyBBY3Rpdml0eSBpcyByZXN0cmljdGVkIHRvIHNwZWNpZmljIHJlc291cmNlIHR5cGVzIFxuICAgIHJlc291cmNlRmlsdGVyPzogUmVzb3VyY2VUeXBlTWFza1tdO1xuIFxuICAgIC8vIEFjdGl2aXR5IGlzIHJlc3RyaWN0ZWQgdG8gc3BlY2lmaWMgcm9sZXMgKG1lbWJlcnMsIHBhcmEsIHRlYW0pIFxuICAgIHJvbGVGaWx0ZXI/OiBBY2NvdW50Um9sZUNvZGVbXTtcbiBcbiAgICAvLyBNZXNzYWdlIGZvciB0aGUgYWN0aXZpdHkgXG4gICAgbWVzc2FnZT86IHN0cmluZztcbiBcbiAgICAvLyBNYXggcGFydGljaXBhbnRzIGluIHRoZSBhY3Rpdml0eSBcbiAgICBsaW1pdD86IG51bWJlcjtcbiBcbiAgICAvLyBBY3Rpdml0eSBpY29uIFxuICAgIGljb24/OiBzdHJpbmc7XG4gXG4gICAgLy8gQWN0aXZpdHkgaWNvbiBjb2xvciBcbiAgICBpY29uQ29sb3I/OiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIGlkPzogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgY3JlYXRlZE9uPzogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgdXBkYXRlZE9uPzogbnVtYmVyO1xuIFxufVxuIl19