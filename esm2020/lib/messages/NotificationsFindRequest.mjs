/*
*/
export class NotificationsFindRequest {
    constructor(userId, search, type, sort, page, pageSize) {
        this.userId = userId;
        this.search = search;
        this.type = type;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWZpY2F0aW9uc0ZpbmRSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYm9va21lLWxpYi9zcmMvbGliL21lc3NhZ2VzL05vdGlmaWNhdGlvbnNGaW5kUmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFO0FBQ0YsTUFBTSxPQUFPLHdCQUF3QjtJQWdDakMsWUFBWSxNQUFlLEVBQUUsTUFBZSxFQUFFLElBQTJCLEVBQUUsSUFBYSxFQUFFLElBQWEsRUFBRSxRQUFpQjtRQUN0SCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU8sQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU8sQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVMsQ0FBQztJQUM5QixDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOb3RpZmljYXRpb25UeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL05vdGlmaWNhdGlvblR5cGVDb2RlJztcblxuLyogXG4qL1xuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbnNGaW5kUmVxdWVzdCB7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHVzZXIgaWQgXG4gICAgXG4gICAgcHVibGljIHVzZXJJZDogc3RyaW5nO1xuICAgIFxuIFxuICAgIC8vIEZpbHRlciBieSBwYXJ0aWFsIHRleHQgXG4gICAgXG4gICAgcHVibGljIHNlYXJjaDogc3RyaW5nO1xuICAgIFxuIFxuICAgIC8vIEZpbHRlciBieSBub3RpZmljYXRpb24gdHlwZSAoZW1wdHkgb3IgVU5ERUZJTkVEIGZvciBubyBmaWx0ZXIpIFxuICAgIFxuICAgIHB1YmxpYyB0eXBlOiBOb3RpZmljYXRpb25UeXBlQ29kZTtcbiAgICBcbiBcbiAgICAvLyBTb3J0IGJ5IGZpZWxkIGFuZCBkaXJlY3Rpb246IChlLmcuIHRpbWUrID0gc29ydCBieSB0aW1lIGFzYywgaWQtID0gc29ydCBieSBpZCBkZXNjKSBcbiAgICBcbiAgICBwdWJsaWMgc29ydDogc3RyaW5nO1xuICAgIFxuIFxuICAgIC8vIFBhZ2UgbnVtYmVyIChmb3IgcGFnaW5hdGlvbikgXG4gICAgXG4gICAgcHVibGljIHBhZ2U6IG51bWJlcjtcbiAgICBcbiBcbiAgICAvLyBOdW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UgKGZvciBwYWdpbmF0aW9uKSBcbiAgICBcbiAgICBwdWJsaWMgcGFnZVNpemU6IG51bWJlcjtcbiAgICBcbiBcbiAgICBjb25zdHJ1Y3Rvcih1c2VySWQ/OiBzdHJpbmcsIHNlYXJjaD86IHN0cmluZywgdHlwZT86IE5vdGlmaWNhdGlvblR5cGVDb2RlLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikgeyBcbiAgICAgICAgdGhpcy51c2VySWQgPSB1c2VySWQhO1xuICAgICAgICB0aGlzLnNlYXJjaCA9IHNlYXJjaCE7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGUhO1xuICAgICAgICB0aGlzLnNvcnQgPSBzb3J0ITtcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZSE7XG4gICAgICAgIHRoaXMucGFnZVNpemUgPSBwYWdlU2l6ZSE7XG4gICAgfVxuXG59XG5cblxuLypcbiAqICBJbnRlcmZhY2Ugb2YgTm90aWZpY2F0aW9uc0ZpbmRSZXF1ZXN0XG4qL1xuZXhwb3J0IGludGVyZmFjZSBJTm90aWZpY2F0aW9uc0ZpbmRSZXF1ZXN0IHtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgdXNlciBpZCBcbiAgICB1c2VySWQ/OiBzdHJpbmc7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHBhcnRpYWwgdGV4dCBcbiAgICBzZWFyY2g/OiBzdHJpbmc7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IG5vdGlmaWNhdGlvbiB0eXBlIChlbXB0eSBvciBVTkRFRklORUQgZm9yIG5vIGZpbHRlcikgXG4gICAgdHlwZT86IE5vdGlmaWNhdGlvblR5cGVDb2RlO1xuIFxuICAgIC8vIFNvcnQgYnkgZmllbGQgYW5kIGRpcmVjdGlvbjogKGUuZy4gdGltZSsgPSBzb3J0IGJ5IHRpbWUgYXNjLCBpZC0gPSBzb3J0IGJ5IGlkIGRlc2MpIFxuICAgIHNvcnQ/OiBzdHJpbmc7XG4gXG4gICAgLy8gUGFnZSBudW1iZXIgKGZvciBwYWdpbmF0aW9uKSBcbiAgICBwYWdlPzogbnVtYmVyO1xuIFxuICAgIC8vIE51bWJlciBvZiBpdGVtcyBwZXIgcGFnZSAoZm9yIHBhZ2luYXRpb24pIFxuICAgIHBhZ2VTaXplPzogbnVtYmVyO1xuIFxufVxuIl19