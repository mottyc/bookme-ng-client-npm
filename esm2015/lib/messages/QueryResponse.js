/*
 *  Query response message returned for find operation (with pagination) on multiple entities
*/
export class QueryResponse {
    constructor(code, error, page, pageSize, pages, total, queryDef, docType) {
        this.code = code;
        this.error = error;
        this.page = page;
        this.pageSize = pageSize;
        this.pages = pages;
        this.total = total;
        this.queryDef = queryDef;
        this.docType = docType;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVlcnlSZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvbWVzc2FnZXMvUXVlcnlSZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7RUFFRTtBQUNGLE1BQU0sT0FBTyxhQUFhO0lBMEJ0QixZQUFZLElBQWEsRUFBRSxLQUFjLEVBQUUsSUFBYSxFQUFFLFFBQWlCLEVBQUUsS0FBYyxFQUFFLEtBQWMsRUFBRSxRQUFpQixFQUFFLE9BQWdCO1FBQzVJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogXG4gKiAgUXVlcnkgcmVzcG9uc2UgbWVzc2FnZSByZXR1cm5lZCBmb3IgZmluZCBvcGVyYXRpb24gKHdpdGggcGFnaW5hdGlvbikgb24gbXVsdGlwbGUgZW50aXRpZXNcbiovXG5leHBvcnQgY2xhc3MgUXVlcnlSZXNwb25zZSB7XG4gXG4gICAgLy8gRXJyb3IgY29kZSAoMCBmb3Igc3VjY2VzcykgXG4gICAgcHVibGljIGNvZGU6IG51bWJlcjtcbiBcbiAgICAvLyBFcnJvciBtZXNzYWdlIFxuICAgIHB1YmxpYyBlcnJvcjogc3RyaW5nO1xuIFxuICAgIC8vIEN1cnJlbnQgcGFnZSAoQnVsaykgbnVtYmVyIFxuICAgIHB1YmxpYyBwYWdlOiBudW1iZXI7XG4gXG4gICAgLy8gU2l6ZSBvZiBwYWdlIChpdGVtcyBpbiBidWxrKSBcbiAgICBwdWJsaWMgcGFnZVNpemU6IG51bWJlcjtcbiBcbiAgICAvLyBUb3RhbCBudW1iZXIgb2YgcGFnZXMgXG4gICAgcHVibGljIHBhZ2VzOiBudW1iZXI7XG4gXG4gICAgLy8gVG90YWwgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBxdWVyeSBcbiAgICBwdWJsaWMgdG90YWw6IG51bWJlcjtcbiBcbiAgICAvLyBRdWVyeSBkZWZpbml0aW9uIHNwZWMgYXMgSnNvbiBzdHJpbmcgXG4gICAgcHVibGljIHF1ZXJ5RGVmOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IHR5cGUgXG4gICAgcHVibGljIGRvY1R5cGU6IHN0cmluZztcbiBcbiAgICBjb25zdHJ1Y3Rvcihjb2RlPzogbnVtYmVyLCBlcnJvcj86IHN0cmluZywgcGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIsIHBhZ2VzPzogbnVtYmVyLCB0b3RhbD86IG51bWJlciwgcXVlcnlEZWY/OiBzdHJpbmcsIGRvY1R5cGU/OiBzdHJpbmcpIHsgXG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcbiAgICAgICAgdGhpcy5wYWdlU2l6ZSA9IHBhZ2VTaXplO1xuICAgICAgICB0aGlzLnBhZ2VzID0gcGFnZXM7XG4gICAgICAgIHRoaXMudG90YWwgPSB0b3RhbDtcbiAgICAgICAgdGhpcy5xdWVyeURlZiA9IHF1ZXJ5RGVmO1xuICAgICAgICB0aGlzLmRvY1R5cGUgPSBkb2NUeXBlO1xuICAgIH1cblxufVxuXG5cbi8qXG4gKiAgSW50ZXJmYWNlIG9mIFF1ZXJ5UmVzcG9uc2VcbiovXG5leHBvcnQgaW50ZXJmYWNlIElRdWVyeVJlc3BvbnNlIHtcbiBcbiAgICAvLyBFcnJvciBjb2RlICgwIGZvciBzdWNjZXNzKSBcbiAgICBjb2RlPzogbnVtYmVyO1xuIFxuICAgIC8vIEVycm9yIG1lc3NhZ2UgXG4gICAgZXJyb3I/OiBzdHJpbmc7XG4gXG4gICAgLy8gQ3VycmVudCBwYWdlIChCdWxrKSBudW1iZXIgXG4gICAgcGFnZT86IG51bWJlcjtcbiBcbiAgICAvLyBTaXplIG9mIHBhZ2UgKGl0ZW1zIGluIGJ1bGspIFxuICAgIHBhZ2VTaXplPzogbnVtYmVyO1xuIFxuICAgIC8vIFRvdGFsIG51bWJlciBvZiBwYWdlcyBcbiAgICBwYWdlcz86IG51bWJlcjtcbiBcbiAgICAvLyBUb3RhbCBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIHF1ZXJ5IFxuICAgIHRvdGFsPzogbnVtYmVyO1xuIFxuICAgIC8vIFF1ZXJ5IGRlZmluaXRpb24gc3BlYyBhcyBKc29uIHN0cmluZyBcbiAgICBxdWVyeURlZj86IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgdHlwZSBcbiAgICBkb2NUeXBlPzogc3RyaW5nO1xuIFxufVxuIl19