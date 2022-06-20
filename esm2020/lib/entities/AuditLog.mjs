import { BaseEntity } from '../entities/BaseEntity';
/*
 *  Audit Log entry - represents a single action done by user
*/
export class AuditLog extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXVkaXRMb2cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9ib29rbWUtbGliL3NyYy9saWIvZW50aXRpZXMvQXVkaXRMb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBR3BEOztFQUVFO0FBQ0YsTUFBTSxPQUFPLFFBQVMsU0FBUSxVQUFVO0NBb0V2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjY291bnRSb2xlQ29kZSB9IGZyb20gJy4uL2VudW1zL0FjY291bnRSb2xlQ29kZSc7XG5pbXBvcnQgeyBFbnRpdHlUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL0VudGl0eVR5cGVDb2RlJztcbmltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcbmltcG9ydCB7IElCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5cbi8qIFxuICogIEF1ZGl0IExvZyBlbnRyeSAtIHJlcHJlc2VudHMgYSBzaW5nbGUgYWN0aW9uIGRvbmUgYnkgdXNlclxuKi9cbmV4cG9ydCBjbGFzcyBBdWRpdExvZyBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuICAgIFxuIFxuICAgIC8vIFVzZXIgSWQgXG4gICAgXG4gICAgcHVibGljIHVzZXJJZDogc3RyaW5nO1xuICAgIFxuIFxuICAgIC8vIFVzZXIgcm9sZSBpbiB0aGUgYWNjb3VudCB3aGVuIHRoZSBhY3Rpb24gd2FzIHBlcmZvcm1lZCBcbiAgICBcbiAgICBwdWJsaWMgdXNlclJvbGU6IEFjY291bnRSb2xlQ29kZTtcbiAgICBcbiBcbiAgICAvLyBVc2VyIG5hbWUgd2hlbiB0aGUgYWN0aW9uIHdhcyBwZXJmb3JtZWQgXG4gICAgXG4gICAgcHVibGljIHVzZXJOYW1lOiBzdHJpbmc7XG4gICAgXG4gXG4gICAgLy8gQWN0aW9uIHRoYXQgd2FzIHBlcmZvcm1lZCBcbiAgICBcbiAgICBwdWJsaWMgYWN0aW9uOiBzdHJpbmc7XG4gICAgXG4gXG4gICAgLy8gQ2hhbmdlZCBpdGVtIHR5cGUgXG4gICAgXG4gICAgcHVibGljIGl0ZW1UeXBlOiBFbnRpdHlUeXBlQ29kZTtcbiAgICBcbiBcbiAgICAvLyBDaGFuZ2VkIGl0ZW0gSWQgXG4gICAgXG4gICAgcHVibGljIGl0ZW1JZDogc3RyaW5nO1xuICAgIFxuIFxuICAgIC8vIEl0ZW0gTmFtZSBcbiAgICBcbiAgICBwdWJsaWMgaXRlbU5hbWU6IHN0cmluZztcbiAgICBcbiBcbiAgICAvLyBJdGVtIHZhbHVlIGJlZm9yZSBjaGFuZ2UgW0pzb25dIFxuICAgIFxuICAgIHB1YmxpYyBiZWZvcmVDaGFuZ2U6IHN0cmluZztcbiAgICBcbiBcbiAgICAvLyBJdGVtIGRlbHRhIGFmdGVyIGNoYW5nZSBbSnNvbl0gXG4gICAgXG4gICAgcHVibGljIGFmdGVyQ2hhbmdlOiBzdHJpbmc7XG4gICAgXG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIFxuICAgIHB1YmxpYyBvdmVycmlkZSBpZDogc3RyaW5nO1xuICAgIFxuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgXG4gICAgcHVibGljIG92ZXJyaWRlIGNyZWF0ZWRPbjogbnVtYmVyO1xuICAgIFxuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgXG4gICAgcHVibGljIG92ZXJyaWRlIHVwZGF0ZWRPbjogbnVtYmVyO1xuICAgIFxuIFxuXG59XG5cblxuLypcbiAqICBJbnRlcmZhY2Ugb2YgQXVkaXRMb2dcbiovXG5leHBvcnQgaW50ZXJmYWNlIElBdWRpdExvZyBleHRlbmRzIElCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIGFjY291bnRJZD86IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIElkIFxuICAgIHVzZXJJZD86IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIHJvbGUgaW4gdGhlIGFjY291bnQgd2hlbiB0aGUgYWN0aW9uIHdhcyBwZXJmb3JtZWQgXG4gICAgdXNlclJvbGU/OiBBY2NvdW50Um9sZUNvZGU7XG4gXG4gICAgLy8gVXNlciBuYW1lIHdoZW4gdGhlIGFjdGlvbiB3YXMgcGVyZm9ybWVkIFxuICAgIHVzZXJOYW1lPzogc3RyaW5nO1xuIFxuICAgIC8vIEFjdGlvbiB0aGF0IHdhcyBwZXJmb3JtZWQgXG4gICAgYWN0aW9uPzogc3RyaW5nO1xuIFxuICAgIC8vIENoYW5nZWQgaXRlbSB0eXBlIFxuICAgIGl0ZW1UeXBlPzogRW50aXR5VHlwZUNvZGU7XG4gXG4gICAgLy8gQ2hhbmdlZCBpdGVtIElkIFxuICAgIGl0ZW1JZD86IHN0cmluZztcbiBcbiAgICAvLyBJdGVtIE5hbWUgXG4gICAgaXRlbU5hbWU/OiBzdHJpbmc7XG4gXG4gICAgLy8gSXRlbSB2YWx1ZSBiZWZvcmUgY2hhbmdlIFtKc29uXSBcbiAgICBiZWZvcmVDaGFuZ2U/OiBzdHJpbmc7XG4gXG4gICAgLy8gSXRlbSBkZWx0YSBhZnRlciBjaGFuZ2UgW0pzb25dIFxuICAgIGFmdGVyQ2hhbmdlPzogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBpZD86IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIGNyZWF0ZWRPbj86IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHVwZGF0ZWRPbj86IG51bWJlcjtcbiBcbn1cbiJdfQ==