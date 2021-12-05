import { BaseEntity } from '../entities/BaseEntity';
/*
 *  Verification type used to verify user with a temporary code
*/
export class Verification extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVyaWZpY2F0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9lbnRpdGllcy9WZXJpZmljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBR3BEOztFQUVFO0FBQ0YsTUFBTSxPQUFPLFlBQWEsU0FBUSxVQUFVO0NBMkIzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcbmltcG9ydCB7IElCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5cbi8qIFxuICogIFZlcmlmaWNhdGlvbiB0eXBlIHVzZWQgdG8gdmVyaWZ5IHVzZXIgd2l0aCBhIHRlbXBvcmFyeSBjb2RlXG4qL1xuZXhwb3J0IGNsYXNzIFZlcmlmaWNhdGlvbiBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIFZlcmlmaWNhdGlvbiBjb2RlIFxuICAgIHB1YmxpYyBjb2RlOiBzdHJpbmc7XG4gXG4gICAgLy8gVmVyaWZpY2F0aW9uIGZvciB1c2VyIGlkIFxuICAgIHB1YmxpYyB1c2VySWQ6IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIGVtYWlsIFxuICAgIHB1YmxpYyBlbWFpbDogc3RyaW5nO1xuIFxuICAgIC8vIFVzZXIgbW9iaWxlIHBob25lIG51bWJlciAoZm9yIG5vdGlmaWNhdGlvbiBhbmQgdmFsaWRhdGlvbikgXG4gICAgcHVibGljIG1vYmlsZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIHZlcmlmaWNhdGlvbiBjb2RlIHdhcyBzZW50IFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgc2VudDogbnVtYmVyO1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBjcmVhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB1cGRhdGVkT246IG51bWJlcjtcbiBcblxufVxuXG5cbi8qXG4gKiAgSW50ZXJmYWNlIG9mIFZlcmlmaWNhdGlvblxuKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVZlcmlmaWNhdGlvbiBleHRlbmRzIElCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBWZXJpZmljYXRpb24gY29kZSBcbiAgICBjb2RlPzogc3RyaW5nO1xuIFxuICAgIC8vIFZlcmlmaWNhdGlvbiBmb3IgdXNlciBpZCBcbiAgICB1c2VySWQ/OiBzdHJpbmc7XG4gXG4gICAgLy8gVXNlciBlbWFpbCBcbiAgICBlbWFpbD86IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIG1vYmlsZSBwaG9uZSBudW1iZXIgKGZvciBub3RpZmljYXRpb24gYW5kIHZhbGlkYXRpb24pIFxuICAgIG1vYmlsZT86IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSB2ZXJpZmljYXRpb24gY29kZSB3YXMgc2VudCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgc2VudD86IG51bWJlcjtcbiBcbiAgICAvLyBFbnRpdHkgSWQgXG4gICAgaWQ/OiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyBjcmVhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBjcmVhdGVkT24/OiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyB1cGRhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICB1cGRhdGVkT24/OiBudW1iZXI7XG4gXG59XG4iXX0=