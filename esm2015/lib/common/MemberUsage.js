/*
 *  MemberUsage is a time period statistics about the number of bookings
*/
export class MemberUsage {
    constructor(id, name, total, sun, mon, tue, wed, thu, fri, sat, absences, accidents) {
        this.id = id;
        this.name = name;
        this.total = total;
        this.sun = sun;
        this.mon = mon;
        this.tue = tue;
        this.wed = wed;
        this.thu = thu;
        this.fri = fri;
        this.sat = sat;
        this.absences = absences;
        this.accidents = accidents;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVtYmVyVXNhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvbGliL2NvbW1vbi9NZW1iZXJVc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7RUFFRTtBQUNGLE1BQU0sT0FBTyxXQUFXO0lBc0NwQixZQUFZLEVBQVcsRUFBRSxJQUFhLEVBQUUsS0FBYyxFQUFFLEdBQVksRUFBRSxHQUFZLEVBQUUsR0FBWSxFQUFFLEdBQVksRUFBRSxHQUFZLEVBQUUsR0FBWSxFQUFFLEdBQVksRUFBRSxRQUFpQixFQUFFLFNBQWtCO1FBQzNMLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIFxuICogIE1lbWJlclVzYWdlIGlzIGEgdGltZSBwZXJpb2Qgc3RhdGlzdGljcyBhYm91dCB0aGUgbnVtYmVyIG9mIGJvb2tpbmdzXG4qL1xuZXhwb3J0IGNsYXNzIE1lbWJlclVzYWdlIHtcbiBcbiAgICAvLyBNZW1iZXIgSWQgXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gXG4gICAgLy8gTWVtYmVyIE5hbWUgXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBUb3RhbCBudW1iZXIgb2YgYWN0aXZpdGllcyBpbiB0aGlzIHBlcmlvZCBcbiAgICBwdWJsaWMgdG90YWw6IG51bWJlcjtcbiBcbiAgICAvLyBOdW1iZXIgYWN0aXZpdGllcyBvbiBTdW5kYXkgXG4gICAgcHVibGljIHN1bjogbnVtYmVyO1xuIFxuICAgIC8vIE51bWJlciBhY3Rpdml0aWVzIG9uIE1vbmRheSBcbiAgICBwdWJsaWMgbW9uOiBudW1iZXI7XG4gXG4gICAgLy8gTnVtYmVyIGFjdGl2aXRpZXMgb24gVHVlc2RheSBcbiAgICBwdWJsaWMgdHVlOiBudW1iZXI7XG4gXG4gICAgLy8gTnVtYmVyIGFjdGl2aXRpZXMgb24gV2VkbmVzZGF5IFxuICAgIHB1YmxpYyB3ZWQ6IG51bWJlcjtcbiBcbiAgICAvLyBOdW1iZXIgYWN0aXZpdGllcyBvbiBUaHVyc2RheSBcbiAgICBwdWJsaWMgdGh1OiBudW1iZXI7XG4gXG4gICAgLy8gTnVtYmVyIGFjdGl2aXRpZXMgb24gRnJpZGF5IFxuICAgIHB1YmxpYyBmcmk6IG51bWJlcjtcbiBcbiAgICAvLyBOdW1iZXIgYWN0aXZpdGllcyBvbiBTYXR1cmRheSBcbiAgICBwdWJsaWMgc2F0OiBudW1iZXI7XG4gXG4gICAgLy8gTnVtYmVyIG9mIGFic2VuY2VzIGluIHRoaXMgcGVyaW9kIFxuICAgIHB1YmxpYyBhYnNlbmNlczogbnVtYmVyO1xuIFxuICAgIC8vIE51bWJlciBvZiBhY2NpZGVudHMgaW4gdGhpcyBwZXJpb2QgXG4gICAgcHVibGljIGFjY2lkZW50czogbnVtYmVyO1xuIFxuICAgIGNvbnN0cnVjdG9yKGlkPzogc3RyaW5nLCBuYW1lPzogc3RyaW5nLCB0b3RhbD86IG51bWJlciwgc3VuPzogbnVtYmVyLCBtb24/OiBudW1iZXIsIHR1ZT86IG51bWJlciwgd2VkPzogbnVtYmVyLCB0aHU/OiBudW1iZXIsIGZyaT86IG51bWJlciwgc2F0PzogbnVtYmVyLCBhYnNlbmNlcz86IG51bWJlciwgYWNjaWRlbnRzPzogbnVtYmVyKSB7IFxuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudG90YWwgPSB0b3RhbDtcbiAgICAgICAgdGhpcy5zdW4gPSBzdW47XG4gICAgICAgIHRoaXMubW9uID0gbW9uO1xuICAgICAgICB0aGlzLnR1ZSA9IHR1ZTtcbiAgICAgICAgdGhpcy53ZWQgPSB3ZWQ7XG4gICAgICAgIHRoaXMudGh1ID0gdGh1O1xuICAgICAgICB0aGlzLmZyaSA9IGZyaTtcbiAgICAgICAgdGhpcy5zYXQgPSBzYXQ7XG4gICAgICAgIHRoaXMuYWJzZW5jZXMgPSBhYnNlbmNlcztcbiAgICAgICAgdGhpcy5hY2NpZGVudHMgPSBhY2NpZGVudHM7XG4gICAgfVxuXG59XG5cblxuLypcbiAqICBJbnRlcmZhY2Ugb2YgTWVtYmVyVXNhZ2VcbiovXG5leHBvcnQgaW50ZXJmYWNlIElNZW1iZXJVc2FnZSB7XG4gXG4gICAgLy8gTWVtYmVyIElkIFxuICAgIGlkPzogc3RyaW5nO1xuIFxuICAgIC8vIE1lbWJlciBOYW1lIFxuICAgIG5hbWU/OiBzdHJpbmc7XG4gXG4gICAgLy8gVG90YWwgbnVtYmVyIG9mIGFjdGl2aXRpZXMgaW4gdGhpcyBwZXJpb2QgXG4gICAgdG90YWw/OiBudW1iZXI7XG4gXG4gICAgLy8gTnVtYmVyIGFjdGl2aXRpZXMgb24gU3VuZGF5IFxuICAgIHN1bj86IG51bWJlcjtcbiBcbiAgICAvLyBOdW1iZXIgYWN0aXZpdGllcyBvbiBNb25kYXkgXG4gICAgbW9uPzogbnVtYmVyO1xuIFxuICAgIC8vIE51bWJlciBhY3Rpdml0aWVzIG9uIFR1ZXNkYXkgXG4gICAgdHVlPzogbnVtYmVyO1xuIFxuICAgIC8vIE51bWJlciBhY3Rpdml0aWVzIG9uIFdlZG5lc2RheSBcbiAgICB3ZWQ/OiBudW1iZXI7XG4gXG4gICAgLy8gTnVtYmVyIGFjdGl2aXRpZXMgb24gVGh1cnNkYXkgXG4gICAgdGh1PzogbnVtYmVyO1xuIFxuICAgIC8vIE51bWJlciBhY3Rpdml0aWVzIG9uIEZyaWRheSBcbiAgICBmcmk/OiBudW1iZXI7XG4gXG4gICAgLy8gTnVtYmVyIGFjdGl2aXRpZXMgb24gU2F0dXJkYXkgXG4gICAgc2F0PzogbnVtYmVyO1xuIFxuICAgIC8vIE51bWJlciBvZiBhYnNlbmNlcyBpbiB0aGlzIHBlcmlvZCBcbiAgICBhYnNlbmNlcz86IG51bWJlcjtcbiBcbiAgICAvLyBOdW1iZXIgb2YgYWNjaWRlbnRzIGluIHRoaXMgcGVyaW9kIFxuICAgIGFjY2lkZW50cz86IG51bWJlcjtcbiBcbn1cbiJdfQ==