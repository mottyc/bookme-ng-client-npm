import { BaseEntity } from '../entities/BaseEntity';
/*
 *  Daily account activities entity
*/
export class Activity extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWN0aXZpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9ib29rbWUtbGliL3NyYy9saWIvZW50aXRpZXMvQWN0aXZpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBR3BEOztFQUVFO0FBQ0YsTUFBTSxPQUFPLFFBQVMsU0FBUSxVQUFVO0NBd0Z2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2aXR5U3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL0FjdGl2aXR5U3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBSZXNvdXJjZVR5cGVNYXNrIH0gZnJvbSAnLi4vZW51bXMvUmVzb3VyY2VUeXBlTWFzayc7XG5pbXBvcnQgeyBBY2NvdW50Um9sZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9BY2NvdW50Um9sZUNvZGUnO1xuaW1wb3J0IHsgQm9va2luZ09wdGlvbnNNYXNrIH0gZnJvbSAnLi4vZW51bXMvQm9va2luZ09wdGlvbnNNYXNrJztcbmltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcbmltcG9ydCB7IElCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5cbi8qIFxuICogIERhaWx5IGFjY291bnQgYWN0aXZpdGllcyBlbnRpdHlcbiovXG5leHBvcnQgY2xhc3MgQWN0aXZpdHkgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiAgICBcbiBcbiAgICAvLyBBY3Rpdml0eSBuYW1lIFxuICAgIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gICAgXG4gXG4gICAgLy8gQWN0aXZpdHkgZGVzY3JpcHRpb24gXG4gICAgXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgXG4gXG4gICAgLy8gSWYgdHJ1ZSwgbm8gYXBwcm92YWwgZm9yIHJlc291cmNlIGFsbG9jYXRpb24gaXMgcmVxdWlyZWQgXG4gICAgXG4gICAgcHVibGljIGF1dG9BcHByb3ZlOiBib29sZWFuO1xuICAgIFxuIFxuICAgIC8vIFN0YXJ0IHRpbWUgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIFxuICAgIHB1YmxpYyBmcm9tOiBudW1iZXI7XG4gICAgXG4gXG4gICAgLy8gRW5kIHRpbWUgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIFxuICAgIHB1YmxpYyB0bzogbnVtYmVyO1xuICAgIFxuIFxuICAgIC8vIFN0YXR1cyBvZiBib29raW5nIHJlcXVlc3RzIFxuICAgIFxuICAgIHB1YmxpYyBzdGF0dXM6IEFjdGl2aXR5U3RhdHVzQ29kZTtcbiAgICBcbiBcbiAgICAvLyBBY3Rpdml0eSBpcyByZXN0cmljdGVkIHRvIHNwZWNpZmljIHJlc291cmNlIHR5cGVzIFxuICAgIFxuICAgIHB1YmxpYyByZXNvdXJjZUZpbHRlcjogUmVzb3VyY2VUeXBlTWFza1tdO1xuICAgIFxuIFxuICAgIC8vIEFjdGl2aXR5IGlzIHJlc3RyaWN0ZWQgdG8gc3BlY2lmaWMgcm9sZXMgKG1lbWJlcnMsIHBhcmEsIHRlYW0pIFxuICAgIFxuICAgIHB1YmxpYyByb2xlRmlsdGVyOiBBY2NvdW50Um9sZUNvZGVbXTtcbiAgICBcbiBcbiAgICAvLyBCb29raW5nIG9wdGlvbnMgXG4gICAgXG4gICAgcHVibGljIG9wdGlvbnM6IEJvb2tpbmdPcHRpb25zTWFzaztcbiAgICBcbiBcbiAgICAvLyBNZXNzYWdlIGZvciB0aGUgYWN0aXZpdHkgXG4gICAgXG4gICAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcbiAgICBcbiBcbiAgICAvLyBNYXggcGFydGljaXBhbnRzIGluIHRoZSBhY3Rpdml0eSBcbiAgICBcbiAgICBwdWJsaWMgbGltaXQ6IG51bWJlcjtcbiAgICBcbiBcbiAgICAvLyBBY3Rpdml0eSBpY29uIFxuICAgIFxuICAgIHB1YmxpYyBpY29uOiBzdHJpbmc7XG4gICAgXG4gXG4gICAgLy8gQWN0aXZpdHkgaWNvbiBjb2xvciBcbiAgICBcbiAgICBwdWJsaWMgaWNvbkNvbG9yOiBzdHJpbmc7XG4gICAgXG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIFxuICAgIHB1YmxpYyBvdmVycmlkZSBpZDogc3RyaW5nO1xuICAgIFxuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgXG4gICAgcHVibGljIG92ZXJyaWRlIGNyZWF0ZWRPbjogbnVtYmVyO1xuICAgIFxuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgXG4gICAgcHVibGljIG92ZXJyaWRlIHVwZGF0ZWRPbjogbnVtYmVyO1xuICAgIFxuIFxuXG59XG5cblxuLypcbiAqICBJbnRlcmZhY2Ugb2YgQWN0aXZpdHlcbiovXG5leHBvcnQgaW50ZXJmYWNlIElBY3Rpdml0eSBleHRlbmRzIElCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIGFjY291bnRJZD86IHN0cmluZztcbiBcbiAgICAvLyBBY3Rpdml0eSBuYW1lIFxuICAgIG5hbWU/OiBzdHJpbmc7XG4gXG4gICAgLy8gQWN0aXZpdHkgZGVzY3JpcHRpb24gXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gXG4gICAgLy8gSWYgdHJ1ZSwgbm8gYXBwcm92YWwgZm9yIHJlc291cmNlIGFsbG9jYXRpb24gaXMgcmVxdWlyZWQgXG4gICAgYXV0b0FwcHJvdmU/OiBib29sZWFuO1xuIFxuICAgIC8vIFN0YXJ0IHRpbWUgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIGZyb20/OiBudW1iZXI7XG4gXG4gICAgLy8gRW5kIHRpbWUgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHRvPzogbnVtYmVyO1xuIFxuICAgIC8vIFN0YXR1cyBvZiBib29raW5nIHJlcXVlc3RzIFxuICAgIHN0YXR1cz86IEFjdGl2aXR5U3RhdHVzQ29kZTtcbiBcbiAgICAvLyBBY3Rpdml0eSBpcyByZXN0cmljdGVkIHRvIHNwZWNpZmljIHJlc291cmNlIHR5cGVzIFxuICAgIHJlc291cmNlRmlsdGVyPzogUmVzb3VyY2VUeXBlTWFza1tdO1xuIFxuICAgIC8vIEFjdGl2aXR5IGlzIHJlc3RyaWN0ZWQgdG8gc3BlY2lmaWMgcm9sZXMgKG1lbWJlcnMsIHBhcmEsIHRlYW0pIFxuICAgIHJvbGVGaWx0ZXI/OiBBY2NvdW50Um9sZUNvZGVbXTtcbiBcbiAgICAvLyBCb29raW5nIG9wdGlvbnMgXG4gICAgb3B0aW9ucz86IEJvb2tpbmdPcHRpb25zTWFzaztcbiBcbiAgICAvLyBNZXNzYWdlIGZvciB0aGUgYWN0aXZpdHkgXG4gICAgbWVzc2FnZT86IHN0cmluZztcbiBcbiAgICAvLyBNYXggcGFydGljaXBhbnRzIGluIHRoZSBhY3Rpdml0eSBcbiAgICBsaW1pdD86IG51bWJlcjtcbiBcbiAgICAvLyBBY3Rpdml0eSBpY29uIFxuICAgIGljb24/OiBzdHJpbmc7XG4gXG4gICAgLy8gQWN0aXZpdHkgaWNvbiBjb2xvciBcbiAgICBpY29uQ29sb3I/OiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIGlkPzogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgY3JlYXRlZE9uPzogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgdXBkYXRlZE9uPzogbnVtYmVyO1xuIFxufVxuIl19