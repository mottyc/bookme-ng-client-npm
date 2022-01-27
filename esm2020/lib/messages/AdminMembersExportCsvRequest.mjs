/*
*/
export class AdminMembersExportCsvRequest {
    constructor(format, search, role, status, sort) {
        this.format = format;
        this.search = search;
        this.role = role;
        this.status = status;
        this.sort = sort;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRtaW5NZW1iZXJzRXhwb3J0Q3N2UmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvbWVzc2FnZXMvQWRtaW5NZW1iZXJzRXhwb3J0Q3N2UmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFO0FBQ0YsTUFBTSxPQUFPLDRCQUE0QjtJQWlCckMsWUFBWSxNQUFlLEVBQUUsTUFBZSxFQUFFLElBQXdCLEVBQUUsTUFBMkIsRUFBRSxJQUFhO1FBQzlHLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjY291bnRSb2xlQ29kZSB9IGZyb20gJy4uL2VudW1zL0FjY291bnRSb2xlQ29kZSc7XG5pbXBvcnQgeyBNZW1iZXJTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvTWVtYmVyU3RhdHVzQ29kZSc7XG5cbi8qIFxuKi9cbmV4cG9ydCBjbGFzcyBBZG1pbk1lbWJlcnNFeHBvcnRDc3ZSZXF1ZXN0IHtcbiBcbiAgICAvLyBGaWxlIGZvcm1hdCAoY3N2L3hsc3gpIFxuICAgIHB1YmxpYyBmb3JtYXQ6IHN0cmluZztcbiBcbiAgICAvLyBGaWx0ZXIgYnkgcGFydGlhbCB1c2VyIG5hbWUgb3IgZW1haWwgXG4gICAgcHVibGljIHNlYXJjaDogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSBhY2NvdW50IHJvbGUocykgXG4gICAgcHVibGljIHJvbGU6IEFjY291bnRSb2xlQ29kZVtdO1xuIFxuICAgIC8vIEZpbHRlciBieSBtZW1iZXIgc3RhdHVzKGVzKSBcbiAgICBwdWJsaWMgc3RhdHVzOiBNZW1iZXJTdGF0dXNDb2RlW107XG4gXG4gICAgLy8gU29ydCBieSBmaWVsZCBhbmQgZGlyZWN0aW9uOiAoZS5nLiB0aW1lKyA9IHNvcnQgYnkgdGltZSBhc2MsIGlkLSA9IHNvcnQgYnkgaWQgZGVzYykgXG4gICAgcHVibGljIHNvcnQ6IHN0cmluZztcbiBcbiAgICBjb25zdHJ1Y3Rvcihmb3JtYXQ/OiBzdHJpbmcsIHNlYXJjaD86IHN0cmluZywgcm9sZT86IEFjY291bnRSb2xlQ29kZVtdLCBzdGF0dXM/OiBNZW1iZXJTdGF0dXNDb2RlW10sIHNvcnQ/OiBzdHJpbmcpIHsgXG4gICAgICAgIHRoaXMuZm9ybWF0ID0gZm9ybWF0O1xuICAgICAgICB0aGlzLnNlYXJjaCA9IHNlYXJjaDtcbiAgICAgICAgdGhpcy5yb2xlID0gcm9sZTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgIHRoaXMuc29ydCA9IHNvcnQ7XG4gICAgfVxuXG59XG5cblxuLypcbiAqICBJbnRlcmZhY2Ugb2YgQWRtaW5NZW1iZXJzRXhwb3J0Q3N2UmVxdWVzdFxuKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUFkbWluTWVtYmVyc0V4cG9ydENzdlJlcXVlc3Qge1xuIFxuICAgIC8vIEZpbGUgZm9ybWF0IChjc3YveGxzeCkgXG4gICAgZm9ybWF0Pzogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSBwYXJ0aWFsIHVzZXIgbmFtZSBvciBlbWFpbCBcbiAgICBzZWFyY2g/OiBzdHJpbmc7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IGFjY291bnQgcm9sZShzKSBcbiAgICByb2xlPzogQWNjb3VudFJvbGVDb2RlW107XG4gXG4gICAgLy8gRmlsdGVyIGJ5IG1lbWJlciBzdGF0dXMoZXMpIFxuICAgIHN0YXR1cz86IE1lbWJlclN0YXR1c0NvZGVbXTtcbiBcbiAgICAvLyBTb3J0IGJ5IGZpZWxkIGFuZCBkaXJlY3Rpb246IChlLmcuIHRpbWUrID0gc29ydCBieSB0aW1lIGFzYywgaWQtID0gc29ydCBieSBpZCBkZXNjKSBcbiAgICBzb3J0Pzogc3RyaW5nO1xuIFxufVxuIl19