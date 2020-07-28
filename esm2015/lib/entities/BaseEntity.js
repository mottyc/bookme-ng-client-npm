/*
 *  Base entity includes common fields for all entities (persistence objects) in the system: id, create and update time
*/
export class BaseEntity {
    constructor(id, createdOn, updatedOn) {
        this.id = id;
        this.createdOn = createdOn;
        this.updatedOn = updatedOn;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvZW50aXRpZXMvQmFzZUVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7RUFFRTtBQUNGLE1BQU0sT0FBTyxVQUFVO0lBV25CLFlBQVksRUFBVyxFQUFFLFNBQWtCLEVBQUUsU0FBa0I7UUFDM0QsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIFxuICogIEJhc2UgZW50aXR5IGluY2x1ZGVzIGNvbW1vbiBmaWVsZHMgZm9yIGFsbCBlbnRpdGllcyAocGVyc2lzdGVuY2Ugb2JqZWN0cykgaW4gdGhlIHN5c3RlbTogaWQsIGNyZWF0ZSBhbmQgdXBkYXRlIHRpbWVcbiovXG5leHBvcnQgY2xhc3MgQmFzZUVudGl0eSB7XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIGNvbnN0cnVjdG9yKGlkPzogc3RyaW5nLCBjcmVhdGVkT24/OiBudW1iZXIsIHVwZGF0ZWRPbj86IG51bWJlcikgeyBcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmNyZWF0ZWRPbiA9IGNyZWF0ZWRPbjtcbiAgICAgICAgdGhpcy51cGRhdGVkT24gPSB1cGRhdGVkT247XG4gICAgfVxuXG59XG5cblxuLypcbiAqICBJbnRlcmZhY2Ugb2YgQmFzZUVudGl0eVxuKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBpZD86IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIGNyZWF0ZWRPbj86IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHVwZGF0ZWRPbj86IG51bWJlcjtcbiBcbn1cbiJdfQ==