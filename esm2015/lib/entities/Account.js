import { BaseEntity } from '../entities/BaseEntity';
/*
 *  Account entity in the system represents a club
*/
export class Account extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvZW50aXRpZXMvQWNjb3VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFPcEQ7O0VBRUU7QUFDRixNQUFNLE9BQU8sT0FBUSxTQUFRLFVBQVU7Q0E2Q3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuaW1wb3J0IHsgQWNjb3VudFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQWNjb3VudFR5cGVDb2RlJztcbmltcG9ydCB7IEFjY291bnRTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvQWNjb3VudFN0YXR1c0NvZGUnO1xuaW1wb3J0IHsgQWNjb3VudFNldHRpbmdzIH0gZnJvbSAnLi4vY29tbW9uL0FjY291bnRTZXR0aW5ncyc7XG5pbXBvcnQgeyBSZXNvdXJjZUNsYXNzQ29kZSB9IGZyb20gJy4uL2VudW1zL1Jlc291cmNlQ2xhc3NDb2RlJztcbmltcG9ydCB7IElCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5cbi8qIFxuICogIEFjY291bnQgZW50aXR5IGluIHRoZSBzeXN0ZW0gcmVwcmVzZW50cyBhIGNsdWJcbiovXG5leHBvcnQgY2xhc3MgQWNjb3VudCBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFjY291bnQgbmFtZSBcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIEFjY291bnQga2V5IFxuICAgIHB1YmxpYyBrZXk6IHN0cmluZztcbiBcbiAgICAvLyBBY2NvdW50IFR5cGU6IFVOREVGSU5FRCB8IERFTU8gfCBUUklBTCB8IFBBUlRORVIgfCBDVVNUT01FUiBcbiAgICBwdWJsaWMgdHlwZTogQWNjb3VudFR5cGVDb2RlO1xuIFxuICAgIC8vIEFjY291bnQgc3RhdHVzOiBVTkRFRklORUQgfCBBQ1RJVkUgfCBTVVNQRU5ERUQgXG4gICAgcHVibGljIHN0YXR1czogQWNjb3VudFN0YXR1c0NvZGU7XG4gXG4gICAgLy8gV2hlbiB0aGUgYWNjb3VudCB3YXMgc3VzcGVuZGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBzZWNvbmQgaW5saW5lIGZpZWxkIGRvY3VtZW50YXRpb24gXG4gICAgcHVibGljIHN1c3BlbmRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gTGlzdCBvZiBhc3NvY2lhdGVkIGFjY291bnQgZ3JvdXBzIChmb3IgZmVhdHVyZSB0b2dnbGUpIFxuICAgIHB1YmxpYyBncm91cHM6IHN0cmluZ1tdO1xuIFxuICAgIC8vIEFjY291bnQgdGltZXpvbmUgKElBTkEgZm9ybWF0LCBkZWZhdWx0IGlzIFVUQykgXG4gICAgcHVibGljIHRpbWV6b25lOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgYWNjb3VudCB3aWxsIGJlIGV4cGlyZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdICgwIG1lYW5zIG5vIGV4cGlyYXRpb24gdGltZSkgXG4gICAgcHVibGljIGV4cGlyZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIEFjY291bnQgZGVzY3JpcHRpb24gXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gQWNjb3VudCBzcGVjaWZpYyBzZXR0aW5ncyBcbiAgICBwdWJsaWMgc2V0dGluZ3M6IEFjY291bnRTZXR0aW5ncztcbiBcbiAgICAvLyBSZXNvdXJjZSBjbGFzcyBtYW5hZ2VkIGluIHRoZSBhY2NvdW50IChib2F0LCBrYXlhay4uLikgXG4gICAgcHVibGljIHJlc291cmNlQ2xhc3M6IFJlc291cmNlQ2xhc3NDb2RlO1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBjcmVhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB1cGRhdGVkT246IG51bWJlcjtcbiBcblxufVxuXG5cbi8qXG4gKiAgSW50ZXJmYWNlIG9mIEFjY291bnRcbiovXG5leHBvcnQgaW50ZXJmYWNlIElBY2NvdW50IGV4dGVuZHMgSUJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFjY291bnQgbmFtZSBcbiAgICBuYW1lPzogc3RyaW5nO1xuIFxuICAgIC8vIEFjY291bnQga2V5IFxuICAgIGtleT86IHN0cmluZztcbiBcbiAgICAvLyBBY2NvdW50IFR5cGU6IFVOREVGSU5FRCB8IERFTU8gfCBUUklBTCB8IFBBUlRORVIgfCBDVVNUT01FUiBcbiAgICB0eXBlPzogQWNjb3VudFR5cGVDb2RlO1xuIFxuICAgIC8vIEFjY291bnQgc3RhdHVzOiBVTkRFRklORUQgfCBBQ1RJVkUgfCBTVVNQRU5ERUQgXG4gICAgc3RhdHVzPzogQWNjb3VudFN0YXR1c0NvZGU7XG4gXG4gICAgLy8gV2hlbiB0aGUgYWNjb3VudCB3YXMgc3VzcGVuZGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBzZWNvbmQgaW5saW5lIGZpZWxkIGRvY3VtZW50YXRpb24gXG4gICAgc3VzcGVuZGVkT24/OiBudW1iZXI7XG4gXG4gICAgLy8gTGlzdCBvZiBhc3NvY2lhdGVkIGFjY291bnQgZ3JvdXBzIChmb3IgZmVhdHVyZSB0b2dnbGUpIFxuICAgIGdyb3Vwcz86IHN0cmluZ1tdO1xuIFxuICAgIC8vIEFjY291bnQgdGltZXpvbmUgKElBTkEgZm9ybWF0LCBkZWZhdWx0IGlzIFVUQykgXG4gICAgdGltZXpvbmU/OiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgYWNjb3VudCB3aWxsIGJlIGV4cGlyZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdICgwIG1lYW5zIG5vIGV4cGlyYXRpb24gdGltZSkgXG4gICAgZXhwaXJlZE9uPzogbnVtYmVyO1xuIFxuICAgIC8vIEFjY291bnQgZGVzY3JpcHRpb24gXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gXG4gICAgLy8gQWNjb3VudCBzcGVjaWZpYyBzZXR0aW5ncyBcbiAgICBzZXR0aW5ncz86IEFjY291bnRTZXR0aW5ncztcbiBcbiAgICAvLyBSZXNvdXJjZSBjbGFzcyBtYW5hZ2VkIGluIHRoZSBhY2NvdW50IChib2F0LCBrYXlhay4uLikgXG4gICAgcmVzb3VyY2VDbGFzcz86IFJlc291cmNlQ2xhc3NDb2RlO1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBpZD86IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIGNyZWF0ZWRPbj86IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHVwZGF0ZWRPbj86IG51bWJlcjtcbiBcbn1cbiJdfQ==