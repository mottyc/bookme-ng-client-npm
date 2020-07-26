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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRtaW5SZXNvdXJjZUZpbmRSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9tZXNzYWdlcy9BZG1pblJlc291cmNlRmluZFJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRTtBQUNGLE1BQU0sT0FBTyx3QkFBd0I7SUEwQmpDLFlBQVksTUFBZSxFQUFFLGFBQWlDLEVBQUUsWUFBK0IsRUFBRSxNQUEyQixFQUFFLFFBQXNCLEVBQUUsSUFBYSxFQUFFLElBQWEsRUFBRSxRQUFpQjtRQUNqTSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXNvdXJjZVR5cGVNYXNrIH0gZnJvbSAnLi4vZW51bXMvUmVzb3VyY2VUeXBlTWFzayc7XG5pbXBvcnQgeyBSZXNvdXJjZVN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9SZXNvdXJjZVN0YXR1c0NvZGUnO1xuaW1wb3J0IHsgVXNlVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9Vc2VUeXBlQ29kZSc7XG5pbXBvcnQgeyBSZXNvdXJjZUNsYXNzQ29kZSB9IGZyb20gJy4uL2VudW1zL1Jlc291cmNlQ2xhc3NDb2RlJztcblxuLyogIFxuKi9cbmV4cG9ydCBjbGFzcyBBZG1pblJlc291cmNlRmluZFJlcXVlc3Qge1xuIFxuICAgIC8vIEZyZWUgdGV4dCBzZWFyY2ggb24gcmVzb3VyY2UgSWQsIEJyYW5kIG9yIGRlc2NyaXB0aW9uIFxuICAgIHB1YmxpYyBzZWFyY2g6IHN0cmluZztcbiBcbiAgICAvLyBGaWx0ZXIgYnkgUmVzb3VyY2UgY2xhc3MgKFVOREVGSU5FRCBtZWFucyBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyByZXNvdXJjZUNsYXNzOiBSZXNvdXJjZUNsYXNzQ29kZTtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgUmVzb3VyY2UgdHlwZSAoVU5ERUZJTkVEIG1lYW5zIG5vIGZpbHRlcikgXG4gICAgcHVibGljIHJlc291cmNlVHlwZTogUmVzb3VyY2VUeXBlTWFzaztcbiBcbiAgICAvLyBGaWx0ZXIgYnkgUmVzb3VyY2Ugc3RhdHVzIChVTkRFRklORUQgbWVhbnMgbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgc3RhdHVzOiBSZXNvdXJjZVN0YXR1c0NvZGU7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHVzYWdlIChVTkRFRklORUQgbWVhbnMgbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgZm9yVXNlQnk6IFVzZVR5cGVDb2RlO1xuIFxuICAgIC8vIFNvcnQgYnkgZmllbGQgYW5kIGRpcmVjdGlvbjogKGUuZy4gdGltZSsgPSBzb3J0IGJ5IHRpbWUgYXNjLCBpZC0gPSBzb3J0IGJ5IGlkIGRlc2MpIFxuICAgIHB1YmxpYyBzb3J0OiBzdHJpbmc7XG4gXG4gICAgLy8gUGFnZSBudW1iZXIgKGZvciBwYWdpbmF0aW9uKSBcbiAgICBwdWJsaWMgcGFnZTogbnVtYmVyO1xuIFxuICAgIC8vIE51bWJlciBvZiBpdGVtcyBwZXIgcGFnZSAoZm9yIHBhZ2luYXRpb24pIFxuICAgIHB1YmxpYyBwYWdlU2l6ZTogbnVtYmVyO1xuIFxuICAgIGNvbnN0cnVjdG9yKHNlYXJjaD86IHN0cmluZywgcmVzb3VyY2VDbGFzcz86IFJlc291cmNlQ2xhc3NDb2RlLCByZXNvdXJjZVR5cGU/OiBSZXNvdXJjZVR5cGVNYXNrLCBzdGF0dXM/OiBSZXNvdXJjZVN0YXR1c0NvZGUsIGZvclVzZUJ5PzogVXNlVHlwZUNvZGUsIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7IFxuICAgICAgICB0aGlzLnNlYXJjaCA9IHNlYXJjaDtcbiAgICAgICAgdGhpcy5yZXNvdXJjZUNsYXNzID0gcmVzb3VyY2VDbGFzcztcbiAgICAgICAgdGhpcy5yZXNvdXJjZVR5cGUgPSByZXNvdXJjZVR5cGU7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICB0aGlzLmZvclVzZUJ5ID0gZm9yVXNlQnk7XG4gICAgICAgIHRoaXMuc29ydCA9IHNvcnQ7XG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgICAgIHRoaXMucGFnZVNpemUgPSBwYWdlU2l6ZTtcbiAgICB9XG5cbn1cblxuXG4iXX0=