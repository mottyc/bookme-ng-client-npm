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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRtaW5NZW1iZXJzRmluZFJlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvbGliL21lc3NhZ2VzL0FkbWluTWVtYmVyc0ZpbmRSZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0U7QUFDRixNQUFNLE9BQU8sdUJBQXVCO0lBdUJoQyxZQUFZLFNBQWtCLEVBQUUsTUFBZSxFQUFFLElBQXdCLEVBQUUsTUFBMkIsRUFBRSxJQUFhLEVBQUUsSUFBYSxFQUFFLFFBQWlCO1FBQ25KLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjY291bnRSb2xlQ29kZSB9IGZyb20gJy4uL2VudW1zL0FjY291bnRSb2xlQ29kZSc7XG5pbXBvcnQgeyBNZW1iZXJTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvTWVtYmVyU3RhdHVzQ29kZSc7XG5cbi8qIFxuKi9cbmV4cG9ydCBjbGFzcyBBZG1pbk1lbWJlcnNGaW5kUmVxdWVzdCB7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IGFjY291bnQgaWQgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSBwYXJ0aWFsIHVzZXIgbmFtZSBvciBlbWFpbCBcbiAgICBwdWJsaWMgc2VhcmNoOiBzdHJpbmc7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IGFjY291bnQgcm9sZShzKSBcbiAgICBwdWJsaWMgcm9sZTogQWNjb3VudFJvbGVDb2RlW107XG4gXG4gICAgLy8gRmlsdGVyIGJ5IG1lbWJlciBzdGF0dXMoZXMpIFxuICAgIHB1YmxpYyBzdGF0dXM6IE1lbWJlclN0YXR1c0NvZGVbXTtcbiBcbiAgICAvLyBTb3J0IGJ5IGZpZWxkIGFuZCBkaXJlY3Rpb246IChlLmcuIHRpbWUrID0gc29ydCBieSB0aW1lIGFzYywgaWQtID0gc29ydCBieSBpZCBkZXNjKSBcbiAgICBwdWJsaWMgc29ydDogc3RyaW5nO1xuIFxuICAgIC8vIFBhZ2UgbnVtYmVyIChmb3IgcGFnaW5hdGlvbikgXG4gICAgcHVibGljIHBhZ2U6IG51bWJlcjtcbiBcbiAgICAvLyBOdW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UgKGZvciBwYWdpbmF0aW9uKSBcbiAgICBwdWJsaWMgcGFnZVNpemU6IG51bWJlcjtcbiBcbiAgICBjb25zdHJ1Y3RvcihhY2NvdW50SWQ/OiBzdHJpbmcsIHNlYXJjaD86IHN0cmluZywgcm9sZT86IEFjY291bnRSb2xlQ29kZVtdLCBzdGF0dXM/OiBNZW1iZXJTdGF0dXNDb2RlW10sIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7IFxuICAgICAgICB0aGlzLmFjY291bnRJZCA9IGFjY291bnRJZDtcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBzZWFyY2g7XG4gICAgICAgIHRoaXMucm9sZSA9IHJvbGU7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICB0aGlzLnNvcnQgPSBzb3J0O1xuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlO1xuICAgICAgICB0aGlzLnBhZ2VTaXplID0gcGFnZVNpemU7XG4gICAgfVxuXG59XG5cblxuLypcbiAqICBJbnRlcmZhY2Ugb2YgQWRtaW5NZW1iZXJzRmluZFJlcXVlc3RcbiovXG5leHBvcnQgaW50ZXJmYWNlIElBZG1pbk1lbWJlcnNGaW5kUmVxdWVzdCB7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IGFjY291bnQgaWQgXG4gICAgYWNjb3VudElkPzogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSBwYXJ0aWFsIHVzZXIgbmFtZSBvciBlbWFpbCBcbiAgICBzZWFyY2g/OiBzdHJpbmc7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IGFjY291bnQgcm9sZShzKSBcbiAgICByb2xlPzogQWNjb3VudFJvbGVDb2RlW107XG4gXG4gICAgLy8gRmlsdGVyIGJ5IG1lbWJlciBzdGF0dXMoZXMpIFxuICAgIHN0YXR1cz86IE1lbWJlclN0YXR1c0NvZGVbXTtcbiBcbiAgICAvLyBTb3J0IGJ5IGZpZWxkIGFuZCBkaXJlY3Rpb246IChlLmcuIHRpbWUrID0gc29ydCBieSB0aW1lIGFzYywgaWQtID0gc29ydCBieSBpZCBkZXNjKSBcbiAgICBzb3J0Pzogc3RyaW5nO1xuIFxuICAgIC8vIFBhZ2UgbnVtYmVyIChmb3IgcGFnaW5hdGlvbikgXG4gICAgcGFnZT86IG51bWJlcjtcbiBcbiAgICAvLyBOdW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UgKGZvciBwYWdpbmF0aW9uKSBcbiAgICBwYWdlU2l6ZT86IG51bWJlcjtcbiBcbn1cbiJdfQ==