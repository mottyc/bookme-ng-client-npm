/*
*/
export class AdminResourceFindRequest {
    constructor(search, resourceClass, resourceType, status, forUseBy, sort, page, pageSize) {
        this.search = search;
        this.resourceClass = resourceClass;
        this.resourceType = resourceType;
        this.status = status;
        this.forUseBy = forUseBy;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRtaW5SZXNvdXJjZUZpbmRSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9tZXNzYWdlcy9BZG1pblJlc291cmNlRmluZFJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRTtBQUNGLE1BQU0sT0FBTyx3QkFBd0I7SUEwQmpDLFlBQVksTUFBZSxFQUFFLGFBQWlDLEVBQUUsWUFBK0IsRUFBRSxNQUEyQixFQUFFLFFBQTBCLEVBQUUsSUFBYSxFQUFFLElBQWEsRUFBRSxRQUFpQjtRQUNyTSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY2NvdW50Um9sZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9BY2NvdW50Um9sZUNvZGUnO1xuaW1wb3J0IHsgUmVzb3VyY2VDbGFzc0NvZGUgfSBmcm9tICcuLi9lbnVtcy9SZXNvdXJjZUNsYXNzQ29kZSc7XG5pbXBvcnQgeyBSZXNvdXJjZVR5cGVNYXNrIH0gZnJvbSAnLi4vZW51bXMvUmVzb3VyY2VUeXBlTWFzayc7XG5pbXBvcnQgeyBSZXNvdXJjZVN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9SZXNvdXJjZVN0YXR1c0NvZGUnO1xuXG4vKiBcbiovXG5leHBvcnQgY2xhc3MgQWRtaW5SZXNvdXJjZUZpbmRSZXF1ZXN0IHtcbiBcbiAgICAvLyBGcmVlIHRleHQgc2VhcmNoIG9uIHJlc291cmNlIElkLCBCcmFuZCBvciBkZXNjcmlwdGlvbiBcbiAgICBwdWJsaWMgc2VhcmNoOiBzdHJpbmc7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IFJlc291cmNlIGNsYXNzIChVTkRFRklORUQgbWVhbnMgbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgcmVzb3VyY2VDbGFzczogUmVzb3VyY2VDbGFzc0NvZGU7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IFJlc291cmNlIHR5cGUgKFVOREVGSU5FRCBtZWFucyBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyByZXNvdXJjZVR5cGU6IFJlc291cmNlVHlwZU1hc2s7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IFJlc291cmNlIHN0YXR1cyAoVU5ERUZJTkVEIG1lYW5zIG5vIGZpbHRlcikgXG4gICAgcHVibGljIHN0YXR1czogUmVzb3VyY2VTdGF0dXNDb2RlO1xuIFxuICAgIC8vIEZpbHRlciBieSB1c2FnZSAoVU5ERUZJTkVEIG1lYW5zIG5vIGZpbHRlcikgXG4gICAgcHVibGljIGZvclVzZUJ5OiBBY2NvdW50Um9sZUNvZGU7XG4gXG4gICAgLy8gU29ydCBieSBmaWVsZCBhbmQgZGlyZWN0aW9uOiAoZS5nLiB0aW1lKyA9IHNvcnQgYnkgdGltZSBhc2MsIGlkLSA9IHNvcnQgYnkgaWQgZGVzYykgXG4gICAgcHVibGljIHNvcnQ6IHN0cmluZztcbiBcbiAgICAvLyBQYWdlIG51bWJlciAoZm9yIHBhZ2luYXRpb24pIFxuICAgIHB1YmxpYyBwYWdlOiBudW1iZXI7XG4gXG4gICAgLy8gTnVtYmVyIG9mIGl0ZW1zIHBlciBwYWdlIChmb3IgcGFnaW5hdGlvbikgXG4gICAgcHVibGljIHBhZ2VTaXplOiBudW1iZXI7XG4gXG4gICAgY29uc3RydWN0b3Ioc2VhcmNoPzogc3RyaW5nLCByZXNvdXJjZUNsYXNzPzogUmVzb3VyY2VDbGFzc0NvZGUsIHJlc291cmNlVHlwZT86IFJlc291cmNlVHlwZU1hc2ssIHN0YXR1cz86IFJlc291cmNlU3RhdHVzQ29kZSwgZm9yVXNlQnk/OiBBY2NvdW50Um9sZUNvZGUsIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7IFxuICAgICAgICB0aGlzLnNlYXJjaCA9IHNlYXJjaDtcbiAgICAgICAgdGhpcy5yZXNvdXJjZUNsYXNzID0gcmVzb3VyY2VDbGFzcztcbiAgICAgICAgdGhpcy5yZXNvdXJjZVR5cGUgPSByZXNvdXJjZVR5cGU7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICB0aGlzLmZvclVzZUJ5ID0gZm9yVXNlQnk7XG4gICAgICAgIHRoaXMuc29ydCA9IHNvcnQ7XG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgICAgIHRoaXMucGFnZVNpemUgPSBwYWdlU2l6ZTtcbiAgICB9XG5cbn1cblxuXG4vKlxuICogIEludGVyZmFjZSBvZiBBZG1pblJlc291cmNlRmluZFJlcXVlc3RcbiovXG5leHBvcnQgaW50ZXJmYWNlIElBZG1pblJlc291cmNlRmluZFJlcXVlc3Qge1xuIFxuICAgIC8vIEZyZWUgdGV4dCBzZWFyY2ggb24gcmVzb3VyY2UgSWQsIEJyYW5kIG9yIGRlc2NyaXB0aW9uIFxuICAgIHNlYXJjaD86IHN0cmluZztcbiBcbiAgICAvLyBGaWx0ZXIgYnkgUmVzb3VyY2UgY2xhc3MgKFVOREVGSU5FRCBtZWFucyBubyBmaWx0ZXIpIFxuICAgIHJlc291cmNlQ2xhc3M/OiBSZXNvdXJjZUNsYXNzQ29kZTtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgUmVzb3VyY2UgdHlwZSAoVU5ERUZJTkVEIG1lYW5zIG5vIGZpbHRlcikgXG4gICAgcmVzb3VyY2VUeXBlPzogUmVzb3VyY2VUeXBlTWFzaztcbiBcbiAgICAvLyBGaWx0ZXIgYnkgUmVzb3VyY2Ugc3RhdHVzIChVTkRFRklORUQgbWVhbnMgbm8gZmlsdGVyKSBcbiAgICBzdGF0dXM/OiBSZXNvdXJjZVN0YXR1c0NvZGU7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHVzYWdlIChVTkRFRklORUQgbWVhbnMgbm8gZmlsdGVyKSBcbiAgICBmb3JVc2VCeT86IEFjY291bnRSb2xlQ29kZTtcbiBcbiAgICAvLyBTb3J0IGJ5IGZpZWxkIGFuZCBkaXJlY3Rpb246IChlLmcuIHRpbWUrID0gc29ydCBieSB0aW1lIGFzYywgaWQtID0gc29ydCBieSBpZCBkZXNjKSBcbiAgICBzb3J0Pzogc3RyaW5nO1xuIFxuICAgIC8vIFBhZ2UgbnVtYmVyIChmb3IgcGFnaW5hdGlvbikgXG4gICAgcGFnZT86IG51bWJlcjtcbiBcbiAgICAvLyBOdW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UgKGZvciBwYWdpbmF0aW9uKSBcbiAgICBwYWdlU2l6ZT86IG51bWJlcjtcbiBcbn1cbiJdfQ==