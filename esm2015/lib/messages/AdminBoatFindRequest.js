/*
*/
export class AdminBoatFindRequest {
    constructor(usedBy, resourceId, sort, page, pageSize) {
        this.usedBy = usedBy;
        this.resourceId = resourceId;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRtaW5Cb2F0RmluZFJlcXVlc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbW90dHljL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL21lc3NhZ2VzL0FkbWluQm9hdEZpbmRSZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0U7QUFDRixNQUFNLE9BQU8sb0JBQW9CO0lBaUI3QixZQUFZLE1BQWUsRUFBRSxVQUFtQixFQUFFLElBQWEsRUFBRSxJQUFhLEVBQUUsUUFBaUI7UUFDN0YsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiAgXG4qL1xuZXhwb3J0IGNsYXNzIEFkbWluQm9hdEZpbmRSZXF1ZXN0IHtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgdXNhZ2UgYWxsb2NhdGlvbiAoZW1wdHkgZm9yIG5vIGZpbHRlcikgXG4gICAgcHVibGljIHVzZWRCeTogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSByZXNvdXJjZSBJZCBcbiAgICBwdWJsaWMgcmVzb3VyY2VJZDogc3RyaW5nO1xuIFxuICAgIC8vIFNvcnQgYnkgZmllbGQgYW5kIGRpcmVjdGlvbjogKGUuZy4gdGltZSsgPSBzb3J0IGJ5IHRpbWUgYXNjLCBpZC0gPSBzb3J0IGJ5IGlkIGRlc2MpIFxuICAgIHB1YmxpYyBzb3J0OiBzdHJpbmc7XG4gXG4gICAgLy8gUGFnZSBudW1iZXIgKGZvciBwYWdpbmF0aW9uKSBcbiAgICBwdWJsaWMgcGFnZTogbnVtYmVyO1xuIFxuICAgIC8vIE51bWJlciBvZiBpdGVtcyBwZXIgcGFnZSAoZm9yIHBhZ2luYXRpb24pIFxuICAgIHB1YmxpYyBwYWdlU2l6ZTogbnVtYmVyO1xuIFxuICAgIGNvbnN0cnVjdG9yKHVzZWRCeT86IHN0cmluZywgcmVzb3VyY2VJZD86IHN0cmluZywgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIpIHsgXG4gICAgICAgIHRoaXMudXNlZEJ5ID0gdXNlZEJ5O1xuICAgICAgICB0aGlzLnJlc291cmNlSWQgPSByZXNvdXJjZUlkO1xuICAgICAgICB0aGlzLnNvcnQgPSBzb3J0O1xuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlO1xuICAgICAgICB0aGlzLnBhZ2VTaXplID0gcGFnZVNpemU7XG4gICAgfVxuXG59XG5cblxuIl19