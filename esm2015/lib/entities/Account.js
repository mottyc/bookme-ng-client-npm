import { BaseEntity } from '../entities/BaseEntity';
/*
 *  Account entity in the system represents a club
*/
export class Account extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvZW50aXRpZXMvQWNjb3VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHcEQ7O0VBRUU7QUFDRixNQUFNLE9BQU8sT0FBUSxTQUFRLFVBQVU7Q0E2Q3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWNjb3VudFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQWNjb3VudFR5cGVDb2RlJztcbmltcG9ydCB7IEFjY291bnRTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvQWNjb3VudFN0YXR1c0NvZGUnO1xuaW1wb3J0IHsgQWNjb3VudFNldHRpbmdzIH0gZnJvbSAnLi4vY29tbW9uL0FjY291bnRTZXR0aW5ncyc7XG5pbXBvcnQgeyBSZXNvdXJjZUNsYXNzQ29kZSB9IGZyb20gJy4uL2VudW1zL1Jlc291cmNlQ2xhc3NDb2RlJztcbmltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcbmltcG9ydCB7IElCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5cbi8qIFxuICogIEFjY291bnQgZW50aXR5IGluIHRoZSBzeXN0ZW0gcmVwcmVzZW50cyBhIGNsdWJcbiovXG5leHBvcnQgY2xhc3MgQWNjb3VudCBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFjY291bnQgbmFtZSBcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIEFjY291bnQgVHlwZTogVU5ERUZJTkVEIHwgREVNTyB8IFRSSUFMIHwgUEFSVE5FUiB8IENVU1RPTUVSIFxuICAgIHB1YmxpYyB0eXBlOiBBY2NvdW50VHlwZUNvZGU7XG4gXG4gICAgLy8gQWNjb3VudCBzdGF0dXM6IFVOREVGSU5FRCB8IEFDVElWRSB8IFNVU1BFTkRFRCBcbiAgICBwdWJsaWMgc3RhdHVzOiBBY2NvdW50U3RhdHVzQ29kZTtcbiBcbiAgICAvLyBXaGVuIHRoZSBhY2NvdW50IHdhcyBzdXNwZW5kZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIHNlY29uZCBpbmxpbmUgZmllbGQgZG9jdW1lbnRhdGlvbiBcbiAgICBwdWJsaWMgc3VzcGVuZGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBMaXN0IG9mIGFzc29jaWF0ZWQgYWNjb3VudCBncm91cHMgKGZvciBmZWF0dXJlIHRvZ2dsZSkgXG4gICAgcHVibGljIGdyb3Vwczogc3RyaW5nW107XG4gXG4gICAgLy8gQWNjb3VudCB0aW1lem9uZSAoSUFOQSBmb3JtYXQsIGRlZmF1bHQgaXMgVVRDKSBcbiAgICBwdWJsaWMgdGltZXpvbmU6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBhY2NvdW50IHdpbGwgYmUgZXhwaXJlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gKDAgbWVhbnMgbm8gZXhwaXJhdGlvbiB0aW1lKSBcbiAgICBwdWJsaWMgZXhwaXJlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gQWNjb3VudCBkZXNjcmlwdGlvbiBcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZztcbiBcbiAgICAvLyBJZiB0cnVlLCBubyBhcHByb3ZhbCBmb3IgcmVzb3VyY2UgYWxsb2NhdGlvbiBieSB0aGUgYWNjb3VudCBhZG1pbiBpcyByZXF1aXJlZCBcbiAgICBwdWJsaWMgYXV0b0FwcHJvdmU6IGJvb2xlYW47XG4gXG4gICAgLy8gQWNjb3VudCBzcGVjaWZpYyBzZXR0aW5ncyBcbiAgICBwdWJsaWMgc2V0dGluZ3M6IEFjY291bnRTZXR0aW5ncztcbiBcbiAgICAvLyBSZXNvdXJjZSBjbGFzcyBtYW5hZ2VkIGluIHRoZSBhY2NvdW50IChib2F0LCBrYXlhay4uLikgXG4gICAgcHVibGljIHJlc291cmNlQ2xhc3M6IFJlc291cmNlQ2xhc3NDb2RlO1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBjcmVhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB1cGRhdGVkT246IG51bWJlcjtcbiBcblxufVxuXG5cbi8qXG4gKiAgSW50ZXJmYWNlIG9mIEFjY291bnRcbiovXG5leHBvcnQgaW50ZXJmYWNlIElBY2NvdW50IGV4dGVuZHMgSUJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFjY291bnQgbmFtZSBcbiAgICBuYW1lPzogc3RyaW5nO1xuIFxuICAgIC8vIEFjY291bnQgVHlwZTogVU5ERUZJTkVEIHwgREVNTyB8IFRSSUFMIHwgUEFSVE5FUiB8IENVU1RPTUVSIFxuICAgIHR5cGU/OiBBY2NvdW50VHlwZUNvZGU7XG4gXG4gICAgLy8gQWNjb3VudCBzdGF0dXM6IFVOREVGSU5FRCB8IEFDVElWRSB8IFNVU1BFTkRFRCBcbiAgICBzdGF0dXM/OiBBY2NvdW50U3RhdHVzQ29kZTtcbiBcbiAgICAvLyBXaGVuIHRoZSBhY2NvdW50IHdhcyBzdXNwZW5kZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIHNlY29uZCBpbmxpbmUgZmllbGQgZG9jdW1lbnRhdGlvbiBcbiAgICBzdXNwZW5kZWRPbj86IG51bWJlcjtcbiBcbiAgICAvLyBMaXN0IG9mIGFzc29jaWF0ZWQgYWNjb3VudCBncm91cHMgKGZvciBmZWF0dXJlIHRvZ2dsZSkgXG4gICAgZ3JvdXBzPzogc3RyaW5nW107XG4gXG4gICAgLy8gQWNjb3VudCB0aW1lem9uZSAoSUFOQSBmb3JtYXQsIGRlZmF1bHQgaXMgVVRDKSBcbiAgICB0aW1lem9uZT86IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBhY2NvdW50IHdpbGwgYmUgZXhwaXJlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gKDAgbWVhbnMgbm8gZXhwaXJhdGlvbiB0aW1lKSBcbiAgICBleHBpcmVkT24/OiBudW1iZXI7XG4gXG4gICAgLy8gQWNjb3VudCBkZXNjcmlwdGlvbiBcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiBcbiAgICAvLyBJZiB0cnVlLCBubyBhcHByb3ZhbCBmb3IgcmVzb3VyY2UgYWxsb2NhdGlvbiBieSB0aGUgYWNjb3VudCBhZG1pbiBpcyByZXF1aXJlZCBcbiAgICBhdXRvQXBwcm92ZT86IGJvb2xlYW47XG4gXG4gICAgLy8gQWNjb3VudCBzcGVjaWZpYyBzZXR0aW5ncyBcbiAgICBzZXR0aW5ncz86IEFjY291bnRTZXR0aW5ncztcbiBcbiAgICAvLyBSZXNvdXJjZSBjbGFzcyBtYW5hZ2VkIGluIHRoZSBhY2NvdW50IChib2F0LCBrYXlhay4uLikgXG4gICAgcmVzb3VyY2VDbGFzcz86IFJlc291cmNlQ2xhc3NDb2RlO1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBpZD86IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIGNyZWF0ZWRPbj86IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHVwZGF0ZWRPbj86IG51bWJlcjtcbiBcbn1cbiJdfQ==