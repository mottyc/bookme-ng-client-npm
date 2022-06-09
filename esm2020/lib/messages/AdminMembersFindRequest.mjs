/*
*/
export class AdminMembersFindRequest {
    constructor(accountId, search, role, status, sort, page, pageSize) {
        this.accountId = accountId;
        this.search = search;
        this.role = role;
        this.status = status;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRtaW5NZW1iZXJzRmluZFJlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9ib29rbWUtbGliL3NyYy9saWIvbWVzc2FnZXMvQWRtaW5NZW1iZXJzRmluZFJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRTtBQUNGLE1BQU0sT0FBTyx1QkFBdUI7SUFxQ2hDLFlBQVksU0FBa0IsRUFBRSxNQUFlLEVBQUUsSUFBd0IsRUFBRSxNQUEyQixFQUFFLElBQWEsRUFBRSxJQUFhLEVBQUUsUUFBaUI7UUFDbkosSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFVLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFPLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFLLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFPLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFLLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFLLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFTLENBQUM7SUFDOUIsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWNjb3VudFJvbGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQWNjb3VudFJvbGVDb2RlJztcbmltcG9ydCB7IE1lbWJlclN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9NZW1iZXJTdGF0dXNDb2RlJztcblxuLyogXG4qL1xuZXhwb3J0IGNsYXNzIEFkbWluTWVtYmVyc0ZpbmRSZXF1ZXN0IHtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgYWNjb3VudCBpZCBcbiAgICBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gICAgXG4gXG4gICAgLy8gRmlsdGVyIGJ5IHBhcnRpYWwgdXNlciBuYW1lIG9yIGVtYWlsIFxuICAgIFxuICAgIHB1YmxpYyBzZWFyY2g6IHN0cmluZztcbiAgICBcbiBcbiAgICAvLyBGaWx0ZXIgYnkgYWNjb3VudCByb2xlKHMpIFxuICAgIFxuICAgIHB1YmxpYyByb2xlOiBBY2NvdW50Um9sZUNvZGVbXTtcbiAgICBcbiBcbiAgICAvLyBGaWx0ZXIgYnkgbWVtYmVyIHN0YXR1cyhlcykgXG4gICAgXG4gICAgcHVibGljIHN0YXR1czogTWVtYmVyU3RhdHVzQ29kZVtdO1xuICAgIFxuIFxuICAgIC8vIFNvcnQgYnkgZmllbGQgYW5kIGRpcmVjdGlvbjogKGUuZy4gdGltZSsgPSBzb3J0IGJ5IHRpbWUgYXNjLCBpZC0gPSBzb3J0IGJ5IGlkIGRlc2MpIFxuICAgIFxuICAgIHB1YmxpYyBzb3J0OiBzdHJpbmc7XG4gICAgXG4gXG4gICAgLy8gUGFnZSBudW1iZXIgKGZvciBwYWdpbmF0aW9uKSBcbiAgICBcbiAgICBwdWJsaWMgcGFnZTogbnVtYmVyO1xuICAgIFxuIFxuICAgIC8vIE51bWJlciBvZiBpdGVtcyBwZXIgcGFnZSAoZm9yIHBhZ2luYXRpb24pIFxuICAgIFxuICAgIHB1YmxpYyBwYWdlU2l6ZTogbnVtYmVyO1xuICAgIFxuIFxuICAgIGNvbnN0cnVjdG9yKGFjY291bnRJZD86IHN0cmluZywgc2VhcmNoPzogc3RyaW5nLCByb2xlPzogQWNjb3VudFJvbGVDb2RlW10sIHN0YXR1cz86IE1lbWJlclN0YXR1c0NvZGVbXSwgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIpIHsgXG4gICAgICAgIHRoaXMuYWNjb3VudElkID0gYWNjb3VudElkITtcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBzZWFyY2ghO1xuICAgICAgICB0aGlzLnJvbGUgPSByb2xlITtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXMhO1xuICAgICAgICB0aGlzLnNvcnQgPSBzb3J0ITtcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZSE7XG4gICAgICAgIHRoaXMucGFnZVNpemUgPSBwYWdlU2l6ZSE7XG4gICAgfVxuXG59XG5cblxuLypcbiAqICBJbnRlcmZhY2Ugb2YgQWRtaW5NZW1iZXJzRmluZFJlcXVlc3RcbiovXG5leHBvcnQgaW50ZXJmYWNlIElBZG1pbk1lbWJlcnNGaW5kUmVxdWVzdCB7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IGFjY291bnQgaWQgXG4gICAgYWNjb3VudElkPzogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSBwYXJ0aWFsIHVzZXIgbmFtZSBvciBlbWFpbCBcbiAgICBzZWFyY2g/OiBzdHJpbmc7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IGFjY291bnQgcm9sZShzKSBcbiAgICByb2xlPzogQWNjb3VudFJvbGVDb2RlW107XG4gXG4gICAgLy8gRmlsdGVyIGJ5IG1lbWJlciBzdGF0dXMoZXMpIFxuICAgIHN0YXR1cz86IE1lbWJlclN0YXR1c0NvZGVbXTtcbiBcbiAgICAvLyBTb3J0IGJ5IGZpZWxkIGFuZCBkaXJlY3Rpb246IChlLmcuIHRpbWUrID0gc29ydCBieSB0aW1lIGFzYywgaWQtID0gc29ydCBieSBpZCBkZXNjKSBcbiAgICBzb3J0Pzogc3RyaW5nO1xuIFxuICAgIC8vIFBhZ2UgbnVtYmVyIChmb3IgcGFnaW5hdGlvbikgXG4gICAgcGFnZT86IG51bWJlcjtcbiBcbiAgICAvLyBOdW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UgKGZvciBwYWdpbmF0aW9uKSBcbiAgICBwYWdlU2l6ZT86IG51bWJlcjtcbiBcbn1cbiJdfQ==