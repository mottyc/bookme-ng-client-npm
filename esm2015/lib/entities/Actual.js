import { BaseEntity } from '../entities/BaseEntity';
/*
 *  Actual activity for booking
*/
export class Actual extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWN0dWFsLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9BY3R1YWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBR3BEOztFQUVFO0FBQ0YsTUFBTSxPQUFPLE1BQU8sU0FBUSxVQUFVO0NBb0NyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcbmltcG9ydCB7IElCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5cbi8qIFxuICogIEFjdHVhbCBhY3Rpdml0eSBmb3IgYm9va2luZ1xuKi9cbmV4cG9ydCBjbGFzcyBBY3R1YWwgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBCb29raW5nIElkIFxuICAgIHB1YmxpYyBib29raW5nSWQ6IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIElkIHdobyByZWdpc3RlcmVkIGZvciBib29raW5nIFxuICAgIHB1YmxpYyB1c2VySWQ6IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIG5hbWUgKGZvciBkaXNwbGF5IG9ubHkpIFxuICAgIHB1YmxpYyB1c2VyTmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIEFjdHVhbCBEdXJhdGlvbiAoaW4gbWludXRlcykgXG4gICAgcHVibGljIGR1cmF0aW9uOiBudW1iZXI7XG4gXG4gICAgLy8gQWN0dWFsIERpc3RhbmNlIChpbiBtZXRlcnMpIFxuICAgIHB1YmxpYyBkaXN0YW5jZTogbnVtYmVyO1xuIFxuICAgIC8vIFVzZXIgbWlzc2VkIHRoZSBib29raW5nIFxuICAgIHB1YmxpYyBpc01pc3Npbmc6IGJvb2xlYW47XG4gXG4gICAgLy8gV2h5IHRoZSB1c2VyIG1pc3NlZCB0aGUgYm9va2luZyBcbiAgICBwdWJsaWMgcmVhc29uOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuXG59XG5cblxuLypcbiAqICBJbnRlcmZhY2Ugb2YgQWN0dWFsXG4qL1xuZXhwb3J0IGludGVyZmFjZSBJQWN0dWFsIGV4dGVuZHMgSUJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgYWNjb3VudElkPzogc3RyaW5nO1xuIFxuICAgIC8vIEJvb2tpbmcgSWQgXG4gICAgYm9va2luZ0lkPzogc3RyaW5nO1xuIFxuICAgIC8vIFVzZXIgSWQgd2hvIHJlZ2lzdGVyZWQgZm9yIGJvb2tpbmcgXG4gICAgdXNlcklkPzogc3RyaW5nO1xuIFxuICAgIC8vIFVzZXIgbmFtZSAoZm9yIGRpc3BsYXkgb25seSkgXG4gICAgdXNlck5hbWU/OiBzdHJpbmc7XG4gXG4gICAgLy8gQWN0dWFsIER1cmF0aW9uIChpbiBtaW51dGVzKSBcbiAgICBkdXJhdGlvbj86IG51bWJlcjtcbiBcbiAgICAvLyBBY3R1YWwgRGlzdGFuY2UgKGluIG1ldGVycykgXG4gICAgZGlzdGFuY2U/OiBudW1iZXI7XG4gXG4gICAgLy8gVXNlciBtaXNzZWQgdGhlIGJvb2tpbmcgXG4gICAgaXNNaXNzaW5nPzogYm9vbGVhbjtcbiBcbiAgICAvLyBXaHkgdGhlIHVzZXIgbWlzc2VkIHRoZSBib29raW5nIFxuICAgIHJlYXNvbj86IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgSWQgXG4gICAgaWQ/OiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyBjcmVhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBjcmVhdGVkT24/OiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyB1cGRhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICB1cGRhdGVkT24/OiBudW1iZXI7XG4gXG59XG4iXX0=