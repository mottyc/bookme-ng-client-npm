import { BaseEntity } from '../entities/BaseEntity';
/*
 *  Account entity in the system represents a club
*/
export class Account extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvZW50aXRpZXMvQWNjb3VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFNcEQ7O0VBRUU7QUFDRixNQUFNLE9BQU8sT0FBUSxTQUFRLFVBQVU7Q0EwQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVzb3VyY2VDbGFzc0NvZGUgfSBmcm9tICcuLi9lbnVtcy9SZXNvdXJjZUNsYXNzQ29kZSc7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5pbXBvcnQgeyBBY2NvdW50VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9BY2NvdW50VHlwZUNvZGUnO1xuaW1wb3J0IHsgQWNjb3VudFN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9BY2NvdW50U3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBBY2NvdW50U2V0dGluZ3MgfSBmcm9tICcuLi9jb21tb24vQWNjb3VudFNldHRpbmdzJztcbmltcG9ydCB7IElCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5cbi8qIFxuICogIEFjY291bnQgZW50aXR5IGluIHRoZSBzeXN0ZW0gcmVwcmVzZW50cyBhIGNsdWJcbiovXG5leHBvcnQgY2xhc3MgQWNjb3VudCBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFjY291bnQgbmFtZSBcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIEFjY291bnQgVHlwZTogVU5ERUZJTkVEIHwgREVNTyB8IFRSSUFMIHwgUEFSVE5FUiB8IENVU1RPTUVSIFxuICAgIHB1YmxpYyB0eXBlOiBBY2NvdW50VHlwZUNvZGU7XG4gXG4gICAgLy8gQWNjb3VudCBzdGF0dXM6IFVOREVGSU5FRCB8IEFDVElWRSB8IFNVU1BFTkRFRCBcbiAgICBwdWJsaWMgc3RhdHVzOiBBY2NvdW50U3RhdHVzQ29kZTtcbiBcbiAgICAvLyBXaGVuIHRoZSBhY2NvdW50IHdhcyBzdXNwZW5kZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIHNlY29uZCBpbmxpbmUgZmllbGQgZG9jdW1lbnRhdGlvbiBcbiAgICBwdWJsaWMgc3VzcGVuZGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBMaXN0IG9mIGFzc29jaWF0ZWQgYWNjb3VudCBncm91cHMgKGZvciBmZWF0dXJlIHRvZ2dsZSkgXG4gICAgcHVibGljIGdyb3Vwczogc3RyaW5nW107XG4gXG4gICAgLy8gQWNjb3VudCB0aW1lem9uZSAoSUFOQSBmb3JtYXQsIGRlZmF1bHQgaXMgVVRDKSBcbiAgICBwdWJsaWMgdGltZXpvbmU6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBhY2NvdW50IHdpbGwgYmUgZXhwaXJlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gKDAgbWVhbnMgbm8gZXhwaXJhdGlvbiB0aW1lKSBcbiAgICBwdWJsaWMgZXhwaXJlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gQWNjb3VudCBkZXNjcmlwdGlvbiBcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZztcbiBcbiAgICAvLyBBY2NvdW50IHNwZWNpZmljIHNldHRpbmdzIFxuICAgIHB1YmxpYyBzZXR0aW5nczogQWNjb3VudFNldHRpbmdzO1xuIFxuICAgIC8vIFJlc291cmNlIGNsYXNzIG1hbmFnZWQgaW4gdGhlIGFjY291bnQgKGJvYXQsIGtheWFrLi4uKSBcbiAgICBwdWJsaWMgcmVzb3VyY2VDbGFzczogUmVzb3VyY2VDbGFzc0NvZGU7XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuXG59XG5cblxuLypcbiAqICBJbnRlcmZhY2Ugb2YgQWNjb3VudFxuKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUFjY291bnQgZXh0ZW5kcyBJQmFzZUVudGl0eSB7XG4gXG4gICAgLy8gQWNjb3VudCBuYW1lIFxuICAgIG5hbWU/OiBzdHJpbmc7XG4gXG4gICAgLy8gQWNjb3VudCBUeXBlOiBVTkRFRklORUQgfCBERU1PIHwgVFJJQUwgfCBQQVJUTkVSIHwgQ1VTVE9NRVIgXG4gICAgdHlwZT86IEFjY291bnRUeXBlQ29kZTtcbiBcbiAgICAvLyBBY2NvdW50IHN0YXR1czogVU5ERUZJTkVEIHwgQUNUSVZFIHwgU1VTUEVOREVEIFxuICAgIHN0YXR1cz86IEFjY291bnRTdGF0dXNDb2RlO1xuIFxuICAgIC8vIFdoZW4gdGhlIGFjY291bnQgd2FzIHN1c3BlbmRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gc2Vjb25kIGlubGluZSBmaWVsZCBkb2N1bWVudGF0aW9uIFxuICAgIHN1c3BlbmRlZE9uPzogbnVtYmVyO1xuIFxuICAgIC8vIExpc3Qgb2YgYXNzb2NpYXRlZCBhY2NvdW50IGdyb3VwcyAoZm9yIGZlYXR1cmUgdG9nZ2xlKSBcbiAgICBncm91cHM/OiBzdHJpbmdbXTtcbiBcbiAgICAvLyBBY2NvdW50IHRpbWV6b25lIChJQU5BIGZvcm1hdCwgZGVmYXVsdCBpcyBVVEMpIFxuICAgIHRpbWV6b25lPzogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGFjY291bnQgd2lsbCBiZSBleHBpcmVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSAoMCBtZWFucyBubyBleHBpcmF0aW9uIHRpbWUpIFxuICAgIGV4cGlyZWRPbj86IG51bWJlcjtcbiBcbiAgICAvLyBBY2NvdW50IGRlc2NyaXB0aW9uIFxuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuIFxuICAgIC8vIEFjY291bnQgc3BlY2lmaWMgc2V0dGluZ3MgXG4gICAgc2V0dGluZ3M/OiBBY2NvdW50U2V0dGluZ3M7XG4gXG4gICAgLy8gUmVzb3VyY2UgY2xhc3MgbWFuYWdlZCBpbiB0aGUgYWNjb3VudCAoYm9hdCwga2F5YWsuLi4pIFxuICAgIHJlc291cmNlQ2xhc3M/OiBSZXNvdXJjZUNsYXNzQ29kZTtcbiBcbiAgICAvLyBFbnRpdHkgSWQgXG4gICAgaWQ/OiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyBjcmVhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBjcmVhdGVkT24/OiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyB1cGRhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICB1cGRhdGVkT24/OiBudW1iZXI7XG4gXG59XG4iXX0=