/*
*/
var AdminResourceFindRequest = /** @class */ (function () {
    function AdminResourceFindRequest(search, resourceClass, resourceType, status, forUseBy, sort, page, pageSize) {
        this.search = search;
        this.resourceClass = resourceClass;
        this.resourceType = resourceType;
        this.status = status;
        this.forUseBy = forUseBy;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
    return AdminResourceFindRequest;
}());
export { AdminResourceFindRequest };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRtaW5SZXNvdXJjZUZpbmRSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG1vdHR5Yy9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9tZXNzYWdlcy9BZG1pblJlc291cmNlRmluZFJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRTtBQUNGO0lBMEJJLGtDQUFZLE1BQWUsRUFBRSxhQUFpQyxFQUFFLFlBQStCLEVBQUUsTUFBMkIsRUFBRSxRQUFzQixFQUFFLElBQWEsRUFBRSxJQUFhLEVBQUUsUUFBaUI7UUFDak0sSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUVMLCtCQUFDO0FBQUQsQ0FBQyxBQXJDRCxJQXFDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlc291cmNlQ2xhc3NDb2RlIH0gZnJvbSAnLi4vZW51bXMvUmVzb3VyY2VDbGFzc0NvZGUnO1xuaW1wb3J0IHsgUmVzb3VyY2VUeXBlTWFzayB9IGZyb20gJy4uL2VudW1zL1Jlc291cmNlVHlwZU1hc2snO1xuaW1wb3J0IHsgUmVzb3VyY2VTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvUmVzb3VyY2VTdGF0dXNDb2RlJztcbmltcG9ydCB7IFVzZVR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvVXNlVHlwZUNvZGUnO1xuXG4vKiAgXG4qL1xuZXhwb3J0IGNsYXNzIEFkbWluUmVzb3VyY2VGaW5kUmVxdWVzdCB7XG4gXG4gICAgLy8gRnJlZSB0ZXh0IHNlYXJjaCBvbiByZXNvdXJjZSBJZCwgQnJhbmQgb3IgZGVzY3JpcHRpb24gXG4gICAgcHVibGljIHNlYXJjaDogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSBSZXNvdXJjZSBjbGFzcyAoVU5ERUZJTkVEIG1lYW5zIG5vIGZpbHRlcikgXG4gICAgcHVibGljIHJlc291cmNlQ2xhc3M6IFJlc291cmNlQ2xhc3NDb2RlO1xuIFxuICAgIC8vIEZpbHRlciBieSBSZXNvdXJjZSB0eXBlIChVTkRFRklORUQgbWVhbnMgbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgcmVzb3VyY2VUeXBlOiBSZXNvdXJjZVR5cGVNYXNrO1xuIFxuICAgIC8vIEZpbHRlciBieSBSZXNvdXJjZSBzdGF0dXMgKFVOREVGSU5FRCBtZWFucyBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyBzdGF0dXM6IFJlc291cmNlU3RhdHVzQ29kZTtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgdXNhZ2UgKFVOREVGSU5FRCBtZWFucyBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyBmb3JVc2VCeTogVXNlVHlwZUNvZGU7XG4gXG4gICAgLy8gU29ydCBieSBmaWVsZCBhbmQgZGlyZWN0aW9uOiAoZS5nLiB0aW1lKyA9IHNvcnQgYnkgdGltZSBhc2MsIGlkLSA9IHNvcnQgYnkgaWQgZGVzYykgXG4gICAgcHVibGljIHNvcnQ6IHN0cmluZztcbiBcbiAgICAvLyBQYWdlIG51bWJlciAoZm9yIHBhZ2luYXRpb24pIFxuICAgIHB1YmxpYyBwYWdlOiBudW1iZXI7XG4gXG4gICAgLy8gTnVtYmVyIG9mIGl0ZW1zIHBlciBwYWdlIChmb3IgcGFnaW5hdGlvbikgXG4gICAgcHVibGljIHBhZ2VTaXplOiBudW1iZXI7XG4gXG4gICAgY29uc3RydWN0b3Ioc2VhcmNoPzogc3RyaW5nLCByZXNvdXJjZUNsYXNzPzogUmVzb3VyY2VDbGFzc0NvZGUsIHJlc291cmNlVHlwZT86IFJlc291cmNlVHlwZU1hc2ssIHN0YXR1cz86IFJlc291cmNlU3RhdHVzQ29kZSwgZm9yVXNlQnk/OiBVc2VUeXBlQ29kZSwgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIpIHsgXG4gICAgICAgIHRoaXMuc2VhcmNoID0gc2VhcmNoO1xuICAgICAgICB0aGlzLnJlc291cmNlQ2xhc3MgPSByZXNvdXJjZUNsYXNzO1xuICAgICAgICB0aGlzLnJlc291cmNlVHlwZSA9IHJlc291cmNlVHlwZTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgIHRoaXMuZm9yVXNlQnkgPSBmb3JVc2VCeTtcbiAgICAgICAgdGhpcy5zb3J0ID0gc29ydDtcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcbiAgICAgICAgdGhpcy5wYWdlU2l6ZSA9IHBhZ2VTaXplO1xuICAgIH1cblxufVxuXG5cbiJdfQ==