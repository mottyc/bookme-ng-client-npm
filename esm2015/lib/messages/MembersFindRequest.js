/*
*/
export class MembersFindRequest {
    constructor(search, role, status, sort, page, pageSize) {
        this.search = search;
        this.role = role;
        this.status = status;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVtYmVyc0ZpbmRSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9tZXNzYWdlcy9NZW1iZXJzRmluZFJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRTtBQUNGLE1BQU0sT0FBTyxrQkFBa0I7SUFvQjNCLFlBQVksTUFBZSxFQUFFLElBQXdCLEVBQUUsTUFBMkIsRUFBRSxJQUFhLEVBQUUsSUFBYSxFQUFFLFFBQWlCO1FBQy9ILElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjY291bnRSb2xlQ29kZSB9IGZyb20gJy4uL2VudW1zL0FjY291bnRSb2xlQ29kZSc7XG5pbXBvcnQgeyBNZW1iZXJTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvTWVtYmVyU3RhdHVzQ29kZSc7XG5cbi8qIFxuKi9cbmV4cG9ydCBjbGFzcyBNZW1iZXJzRmluZFJlcXVlc3Qge1xuIFxuICAgIC8vIEZpbHRlciBieSBwYXJ0aWFsIHVzZXIgbmFtZSBvciBlbWFpbCBcbiAgICBwdWJsaWMgc2VhcmNoOiBzdHJpbmc7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IGFjY291bnQgcm9sZShzKSBcbiAgICBwdWJsaWMgcm9sZTogQWNjb3VudFJvbGVDb2RlW107XG4gXG4gICAgLy8gRmlsdGVyIGJ5IG1lbWJlciBzdGF0dXMoZXMpIFxuICAgIHB1YmxpYyBzdGF0dXM6IE1lbWJlclN0YXR1c0NvZGVbXTtcbiBcbiAgICAvLyBTb3J0IGJ5IGZpZWxkIGFuZCBkaXJlY3Rpb246IChlLmcuIHRpbWUrID0gc29ydCBieSB0aW1lIGFzYywgaWQtID0gc29ydCBieSBpZCBkZXNjKSBcbiAgICBwdWJsaWMgc29ydDogc3RyaW5nO1xuIFxuICAgIC8vIFBhZ2UgbnVtYmVyIChmb3IgcGFnaW5hdGlvbikgXG4gICAgcHVibGljIHBhZ2U6IG51bWJlcjtcbiBcbiAgICAvLyBOdW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UgKGZvciBwYWdpbmF0aW9uKSBcbiAgICBwdWJsaWMgcGFnZVNpemU6IG51bWJlcjtcbiBcbiAgICBjb25zdHJ1Y3RvcihzZWFyY2g/OiBzdHJpbmcsIHJvbGU/OiBBY2NvdW50Um9sZUNvZGVbXSwgc3RhdHVzPzogTWVtYmVyU3RhdHVzQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikgeyBcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBzZWFyY2g7XG4gICAgICAgIHRoaXMucm9sZSA9IHJvbGU7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICB0aGlzLnNvcnQgPSBzb3J0O1xuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlO1xuICAgICAgICB0aGlzLnBhZ2VTaXplID0gcGFnZVNpemU7XG4gICAgfVxuXG59XG5cblxuLypcbiAqICBJbnRlcmZhY2Ugb2YgTWVtYmVyc0ZpbmRSZXF1ZXN0XG4qL1xuZXhwb3J0IGludGVyZmFjZSBJTWVtYmVyc0ZpbmRSZXF1ZXN0IHtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgcGFydGlhbCB1c2VyIG5hbWUgb3IgZW1haWwgXG4gICAgc2VhcmNoPzogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSBhY2NvdW50IHJvbGUocykgXG4gICAgcm9sZT86IEFjY291bnRSb2xlQ29kZVtdO1xuIFxuICAgIC8vIEZpbHRlciBieSBtZW1iZXIgc3RhdHVzKGVzKSBcbiAgICBzdGF0dXM/OiBNZW1iZXJTdGF0dXNDb2RlW107XG4gXG4gICAgLy8gU29ydCBieSBmaWVsZCBhbmQgZGlyZWN0aW9uOiAoZS5nLiB0aW1lKyA9IHNvcnQgYnkgdGltZSBhc2MsIGlkLSA9IHNvcnQgYnkgaWQgZGVzYykgXG4gICAgc29ydD86IHN0cmluZztcbiBcbiAgICAvLyBQYWdlIG51bWJlciAoZm9yIHBhZ2luYXRpb24pIFxuICAgIHBhZ2U/OiBudW1iZXI7XG4gXG4gICAgLy8gTnVtYmVyIG9mIGl0ZW1zIHBlciBwYWdlIChmb3IgcGFnaW5hdGlvbikgXG4gICAgcGFnZVNpemU/OiBudW1iZXI7XG4gXG59XG4iXX0=