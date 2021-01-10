/*
*/
export class UsersServiceExportRequest {
    constructor(search, type, status, sort, format, fields) {
        this.search = search;
        this.type = type;
        this.status = status;
        this.sort = sort;
        this.format = format;
        this.fields = fields;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlcnNTZXJ2aWNlRXhwb3J0UmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvbWVzc2FnZXMvVXNlcnNTZXJ2aWNlRXhwb3J0UmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFO0FBQ0YsTUFBTSxPQUFPLHlCQUF5QjtJQW9CbEMsWUFBWSxNQUFlLEVBQUUsSUFBcUIsRUFBRSxNQUF5QixFQUFFLElBQWEsRUFBRSxNQUFlLEVBQUUsTUFBaUI7UUFDNUgsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlclN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9Vc2VyU3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBVc2VyVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9Vc2VyVHlwZUNvZGUnO1xuXG4vKiBcbiovXG5leHBvcnQgY2xhc3MgVXNlcnNTZXJ2aWNlRXhwb3J0UmVxdWVzdCB7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IG5hbWUgb3IgcGFydGlhbCBuYW1lIG9yIGlkIFxuICAgIHB1YmxpYyBzZWFyY2g6IHN0cmluZztcbiBcbiAgICAvLyBGaWx0ZXIgYnkgdXNlciB0eXBlKHMpIChlbXB0eSBvciBVTkRFRklORUQgZm9yIG5vIGZpbHRlcikgXG4gICAgcHVibGljIHR5cGU6IFVzZXJUeXBlQ29kZVtdO1xuIFxuICAgIC8vIEZpbHRlciBieSB1c2VyIHN0YXR1cyhlcykgKGVtcHR5IG9yIFVOREVGSU5FRCBmb3Igbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgc3RhdHVzOiBVc2VyU3RhdHVzQ29kZVtdO1xuIFxuICAgIC8vIFNvcnQgYnkgZmllbGQgYW5kIGRpcmVjdGlvbjogKGUuZy4gdGltZSsgPSBzb3J0IGJ5IHRpbWUgYXNjLCBpZC0gPSBzb3J0IGJ5IGlkIGRlc2MpIFxuICAgIHB1YmxpYyBzb3J0OiBzdHJpbmc7XG4gXG4gICAgLy8gRXhwb3J0IHJlc3VsdHMgdG8gYSBkaWZmZXJlbnQgZm9ybWF0LiBTdXBwb3J0ZWQgZm9ybWF0czogY3N2IHwganNvbiB8IHhtbCBcbiAgICBwdWJsaWMgZm9ybWF0OiBzdHJpbmc7XG4gXG4gICAgLy8gTGlzdCBvZiBmaWVsZHMgdG8gZXhwb3J0IChsZWF2ZSBlbXB0eSB0byBleHBvcnQgYWxsIGZpZWxkcykgXG4gICAgcHVibGljIGZpZWxkczogc3RyaW5nW107XG4gXG4gICAgY29uc3RydWN0b3Ioc2VhcmNoPzogc3RyaW5nLCB0eXBlPzogVXNlclR5cGVDb2RlW10sIHN0YXR1cz86IFVzZXJTdGF0dXNDb2RlW10sIHNvcnQ/OiBzdHJpbmcsIGZvcm1hdD86IHN0cmluZywgZmllbGRzPzogc3RyaW5nW10pIHsgXG4gICAgICAgIHRoaXMuc2VhcmNoID0gc2VhcmNoO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgdGhpcy5zb3J0ID0gc29ydDtcbiAgICAgICAgdGhpcy5mb3JtYXQgPSBmb3JtYXQ7XG4gICAgICAgIHRoaXMuZmllbGRzID0gZmllbGRzO1xuICAgIH1cblxufVxuXG5cbi8qXG4gKiAgSW50ZXJmYWNlIG9mIFVzZXJzU2VydmljZUV4cG9ydFJlcXVlc3RcbiovXG5leHBvcnQgaW50ZXJmYWNlIElVc2Vyc1NlcnZpY2VFeHBvcnRSZXF1ZXN0IHtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgbmFtZSBvciBwYXJ0aWFsIG5hbWUgb3IgaWQgXG4gICAgc2VhcmNoPzogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSB1c2VyIHR5cGUocykgKGVtcHR5IG9yIFVOREVGSU5FRCBmb3Igbm8gZmlsdGVyKSBcbiAgICB0eXBlPzogVXNlclR5cGVDb2RlW107XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHVzZXIgc3RhdHVzKGVzKSAoZW1wdHkgb3IgVU5ERUZJTkVEIGZvciBubyBmaWx0ZXIpIFxuICAgIHN0YXR1cz86IFVzZXJTdGF0dXNDb2RlW107XG4gXG4gICAgLy8gU29ydCBieSBmaWVsZCBhbmQgZGlyZWN0aW9uOiAoZS5nLiB0aW1lKyA9IHNvcnQgYnkgdGltZSBhc2MsIGlkLSA9IHNvcnQgYnkgaWQgZGVzYykgXG4gICAgc29ydD86IHN0cmluZztcbiBcbiAgICAvLyBFeHBvcnQgcmVzdWx0cyB0byBhIGRpZmZlcmVudCBmb3JtYXQuIFN1cHBvcnRlZCBmb3JtYXRzOiBjc3YgfCBqc29uIHwgeG1sIFxuICAgIGZvcm1hdD86IHN0cmluZztcbiBcbiAgICAvLyBMaXN0IG9mIGZpZWxkcyB0byBleHBvcnQgKGxlYXZlIGVtcHR5IHRvIGV4cG9ydCBhbGwgZmllbGRzKSBcbiAgICBmaWVsZHM/OiBzdHJpbmdbXTtcbiBcbn1cbiJdfQ==