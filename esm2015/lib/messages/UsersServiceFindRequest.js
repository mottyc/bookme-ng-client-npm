/*
*/
export class UsersServiceFindRequest {
    constructor(accountId, search, type, status, sort, page, pageSize) {
        this.accountId = accountId;
        this.search = search;
        this.type = type;
        this.status = status;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlcnNTZXJ2aWNlRmluZFJlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvbGliL21lc3NhZ2VzL1VzZXJzU2VydmljZUZpbmRSZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0U7QUFDRixNQUFNLE9BQU8sdUJBQXVCO0lBdUJoQyxZQUFZLFNBQWtCLEVBQUUsTUFBZSxFQUFFLElBQXFCLEVBQUUsTUFBeUIsRUFBRSxJQUFhLEVBQUUsSUFBYSxFQUFFLFFBQWlCO1FBQzlJLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXJTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvVXNlclN0YXR1c0NvZGUnO1xuaW1wb3J0IHsgVXNlclR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvVXNlclR5cGVDb2RlJztcblxuLyogXG4qL1xuZXhwb3J0IGNsYXNzIFVzZXJzU2VydmljZUZpbmRSZXF1ZXN0IHtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgYWNjb3VudCBpZCAoZ2V0IG9ubHkgQWNjb3VudCBVc2VycyB3aXRoIGFjY2VzcyB0byB0aGUgYWNjb3VudElkKSBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IG5hbWUgb3IgcGFydGlhbCBuYW1lIG9yIGlkIFxuICAgIHB1YmxpYyBzZWFyY2g6IHN0cmluZztcbiBcbiAgICAvLyBGaWx0ZXIgYnkgdXNlciB0eXBlKHMpIChlbXB0eSBvciBVTkRFRklORUQgZm9yIG5vIGZpbHRlcikgXG4gICAgcHVibGljIHR5cGU6IFVzZXJUeXBlQ29kZVtdO1xuIFxuICAgIC8vIEZpbHRlciBieSB1c2VyIHN0YXR1cyhlcykgKGVtcHR5IG9yIFVOREVGSU5FRCBmb3Igbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgc3RhdHVzOiBVc2VyU3RhdHVzQ29kZVtdO1xuIFxuICAgIC8vIFNvcnQgYnkgZmllbGQgYW5kIGRpcmVjdGlvbjogKGUuZy4gdGltZSsgPSBzb3J0IGJ5IHRpbWUgYXNjLCBpZC0gPSBzb3J0IGJ5IGlkIGRlc2MpIFxuICAgIHB1YmxpYyBzb3J0OiBzdHJpbmc7XG4gXG4gICAgLy8gUGFnZSBudW1iZXIgKGZvciBwYWdpbmF0aW9uKSBcbiAgICBwdWJsaWMgcGFnZTogbnVtYmVyO1xuIFxuICAgIC8vIE51bWJlciBvZiBpdGVtcyBwZXIgcGFnZSAoZm9yIHBhZ2luYXRpb24pIFxuICAgIHB1YmxpYyBwYWdlU2l6ZTogbnVtYmVyO1xuIFxuICAgIGNvbnN0cnVjdG9yKGFjY291bnRJZD86IHN0cmluZywgc2VhcmNoPzogc3RyaW5nLCB0eXBlPzogVXNlclR5cGVDb2RlW10sIHN0YXR1cz86IFVzZXJTdGF0dXNDb2RlW10sIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7IFxuICAgICAgICB0aGlzLmFjY291bnRJZCA9IGFjY291bnRJZDtcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBzZWFyY2g7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICB0aGlzLnNvcnQgPSBzb3J0O1xuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlO1xuICAgICAgICB0aGlzLnBhZ2VTaXplID0gcGFnZVNpemU7XG4gICAgfVxuXG59XG5cblxuLypcbiAqICBJbnRlcmZhY2Ugb2YgVXNlcnNTZXJ2aWNlRmluZFJlcXVlc3RcbiovXG5leHBvcnQgaW50ZXJmYWNlIElVc2Vyc1NlcnZpY2VGaW5kUmVxdWVzdCB7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IGFjY291bnQgaWQgKGdldCBvbmx5IEFjY291bnQgVXNlcnMgd2l0aCBhY2Nlc3MgdG8gdGhlIGFjY291bnRJZCkgXG4gICAgYWNjb3VudElkPzogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSBuYW1lIG9yIHBhcnRpYWwgbmFtZSBvciBpZCBcbiAgICBzZWFyY2g/OiBzdHJpbmc7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHVzZXIgdHlwZShzKSAoZW1wdHkgb3IgVU5ERUZJTkVEIGZvciBubyBmaWx0ZXIpIFxuICAgIHR5cGU/OiBVc2VyVHlwZUNvZGVbXTtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgdXNlciBzdGF0dXMoZXMpIChlbXB0eSBvciBVTkRFRklORUQgZm9yIG5vIGZpbHRlcikgXG4gICAgc3RhdHVzPzogVXNlclN0YXR1c0NvZGVbXTtcbiBcbiAgICAvLyBTb3J0IGJ5IGZpZWxkIGFuZCBkaXJlY3Rpb246IChlLmcuIHRpbWUrID0gc29ydCBieSB0aW1lIGFzYywgaWQtID0gc29ydCBieSBpZCBkZXNjKSBcbiAgICBzb3J0Pzogc3RyaW5nO1xuIFxuICAgIC8vIFBhZ2UgbnVtYmVyIChmb3IgcGFnaW5hdGlvbikgXG4gICAgcGFnZT86IG51bWJlcjtcbiBcbiAgICAvLyBOdW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UgKGZvciBwYWdpbmF0aW9uKSBcbiAgICBwYWdlU2l6ZT86IG51bWJlcjtcbiBcbn1cbiJdfQ==