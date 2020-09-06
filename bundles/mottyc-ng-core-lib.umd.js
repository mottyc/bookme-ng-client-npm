(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@mottyc/ng-core-lib', ['exports', '@angular/core', '@angular/common/http', 'rxjs/operators', '@angular/common'], factory) :
    (global = global || self, factory((global.mottyc = global.mottyc || {}, global.mottyc['ng-core-lib'] = {}), global.ng.core, global.ng.common.http, global.rxjs.operators, global.ng.common));
}(this, (function (exports, i0, i1, operators, common) { 'use strict';

    /*
     *  Schedule time frame
     *  Times are described in ISO 8601 format (See: https://www.w3.org/TR/NOTE-datetime).
     *  The format is: YYYY-MM-DDThh:mm:ssTZD where:
     *  <ul>
     *  <li>YYYY = four-digit year</li>
     *  <li>MM   = two-digit month (01=January, etc.)</li>
     *  <li>DD   = two-digit day of month (01 through 31)</li>
     *  <li>hh   = two digits of hour (00 through 23) (am/pm NOT allowed)</li>
     *  <li>mm   = two digits of minute (00 through 59)</li>
     *  <li>ss   = two digits of second (00 through 59)
     *  <li>TZD  = time zone designator (Z for UTC or +hh:mm or -hh:mm for Timezone offset)</li>
     *  </ul>
    */
    var AbsoluteTimeFrame = /** @class */ (function () {
        function AbsoluteTimeFrame(name, startTime, endTime, active) {
            this.name = name;
            this.startTime = startTime;
            this.endTime = endTime;
            this.active = active;
        }
        return AbsoluteTimeFrame;
    }());

    /*
     *  Account role represents the role of the user in the account
    */
    var AccountRole = /** @class */ (function () {
        function AccountRole(accountId, role) {
            this.accountId = accountId;
            this.role = role;
        }
        return AccountRole;
    }());

    /*
     *  Account specific settings
    */
    var AccountSettings = /** @class */ (function () {
        function AccountSettings(defaultActivities, retentionDays) {
            this.defaultActivities = defaultActivities;
            this.retentionDays = retentionDays;
        }
        return AccountSettings;
    }());

    /*
     *  Login data (returned by the API after successful login)
    */
    var LoginData = /** @class */ (function () {
        function LoginData(accessToken, userId, accountId, accountRole, memberStatus, userName, userEmail, userType, userStatus, changePassword) {
            this.accessToken = accessToken;
            this.userId = userId;
            this.accountId = accountId;
            this.accountRole = accountRole;
            this.memberStatus = memberStatus;
            this.userName = userName;
            this.userEmail = userEmail;
            this.userType = userType;
            this.userStatus = userStatus;
            this.changePassword = changePassword;
        }
        return LoginData;
    }());

    /*
     *  Login parameters data model
    */
    var LoginParams = /** @class */ (function () {
        function LoginParams(email, password, accessToken) {
            this.email = email;
            this.password = password;
            this.accessToken = accessToken;
        }
        return LoginParams;
    }());

    /*
     *  Member registration data model
    */
    var MemberRegistration = /** @class */ (function () {
        function MemberRegistration(name, email, mobile, gender, accountId, accountRole, tempPassword, changePassword, verifyByEmail) {
            this.name = name;
            this.email = email;
            this.mobile = mobile;
            this.gender = gender;
            this.accountId = accountId;
            this.accountRole = accountRole;
            this.tempPassword = tempPassword;
            this.changePassword = changePassword;
            this.verifyByEmail = verifyByEmail;
        }
        return MemberRegistration;
    }());

    /*
     *  Schedule recurrent time frame
    */
    var RecurrentTimeFrame = /** @class */ (function () {
        function RecurrentTimeFrame(dayOfWeek, startTime, endTime, name) {
            this.dayOfWeek = dayOfWeek;
            this.startTime = startTime;
            this.endTime = endTime;
            this.name = name;
        }
        return RecurrentTimeFrame;
    }());

    /*
     *  Key Value string tuple
    */
    var StringKeyValue = /** @class */ (function () {
        function StringKeyValue(key, value) {
            this.key = key;
            this.value = value;
        }
        return StringKeyValue;
    }());

    /*
     *  Time frame (for search and reports)
    */
    var TimeFrame = /** @class */ (function () {
        function TimeFrame(from, to) {
            this.from = from;
            this.to = to;
        }
        return TimeFrame;
    }());

    /*
     *  User Account info (returned by switch-account method)
    */
    var UserAccountInfo = /** @class */ (function () {
        function UserAccountInfo(account, loginData, features) {
            this.account = account;
            this.loginData = loginData;
            this.features = features;
        }
        return UserAccountInfo;
    }());

    /*
     *  User invitation data model - used by account admin to invite user to the account
    */
    var UserInvitation = /** @class */ (function () {
        function UserInvitation(email, role) {
            this.email = email;
            this.role = role;
        }
        return UserInvitation;
    }());

    /*
     *  User registration data model
    */
    var UserRegistration = /** @class */ (function () {
        function UserRegistration(name, email, mobile, accountId, accountRole, type, tempPassword, changePassword, verifyByEmail, description) {
            this.name = name;
            this.email = email;
            this.mobile = mobile;
            this.accountId = accountId;
            this.accountRole = accountRole;
            this.type = type;
            this.tempPassword = tempPassword;
            this.changePassword = changePassword;
            this.verifyByEmail = verifyByEmail;
            this.description = description;
        }
        return UserRegistration;
    }());

    /*
     *  Weight Range
    */
    var WeightRange = /** @class */ (function () {
        function WeightRange(min, max) {
            this.min = min;
            this.max = max;
        }
        return WeightRange;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function __exportStar(m, exports) {
        for (var p in m)
            if (!exports.hasOwnProperty(p))
                exports[p] = m[p];
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k))
                    result[k] = mod[k];
        result.default = mod;
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /*
     *  Base entity includes common fields for all entities (persistence objects) in the system: id, create and update time
    */
    var BaseEntity = /** @class */ (function () {
        function BaseEntity(id, createdOn, updatedOn) {
            this.id = id;
            this.createdOn = createdOn;
            this.updatedOn = updatedOn;
        }
        return BaseEntity;
    }());

    /*
     *  Account entity in the system represents a club
    */
    var Account = /** @class */ (function (_super) {
        __extends(Account, _super);
        function Account() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Account;
    }(BaseEntity));

    /*
     *  Daily account activities entity
    */
    var Activity = /** @class */ (function (_super) {
        __extends(Activity, _super);
        function Activity() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Activity;
    }(BaseEntity));

    /*
     *  Activity Booking Group
     *  Group list of bookings by activity
    */
    var ActivityBookingGroup = /** @class */ (function () {
        function ActivityBookingGroup(activity, bookings) {
            this.activity = activity;
            this.bookings = bookings;
        }
        return ActivityBookingGroup;
    }());

    /*
     *  API Key is used per application (e.g. Portal, Mobile App) or service to identify the consumer.
     *  The access to sets of REST endpoints is restricted according the API key.
     *  API key also dictates the default session TTL per application (e.g. 20 minutes for Portal or Console, 30 days for Mobile app)
     *  The application/system name is the Entity Id, the API key itself is not stored in the DB but generated on the fly.
    */
    var ApiKey = /** @class */ (function (_super) {
        __extends(ApiKey, _super);
        function ApiKey() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ApiKey;
    }(BaseEntity));

    /*
     *  Audit Log entry - represents a single action done by user
    */
    var AuditLog = /** @class */ (function (_super) {
        __extends(AuditLog, _super);
        function AuditLog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return AuditLog;
    }(BaseEntity));

    /*
     *  Booking
     *  A booking is a pending request to book a resource for specific time for user(s), once it is approved, it becomes a placement
    */
    var Booking = /** @class */ (function (_super) {
        __extends(Booking, _super);
        function Booking() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Booking;
    }(BaseEntity));

    /*
     *  Booking Group
     *  Group list of bookings by time
    */
    var BookingGroup = /** @class */ (function () {
        function BookingGroup(timeGroup, bookings) {
            this.timeGroup = timeGroup;
            this.bookings = bookings;
        }
        return BookingGroup;
    }());

    /*
     *  Booking request
     *  A booking is a pending request to book a resource for specific time for user(s), once it is approved, it becomes a placement
    */
    var BookingRequest = /** @class */ (function (_super) {
        __extends(BookingRequest, _super);
        function BookingRequest() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return BookingRequest;
    }(BaseEntity));

    /*
     *  System functionality (feature) description
    */
    var Feature = /** @class */ (function (_super) {
        __extends(Feature, _super);
        function Feature() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Feature;
    }(BaseEntity));

    /*
     *  Group of features
    */
    var FeaturesGroup = /** @class */ (function (_super) {
        __extends(FeaturesGroup, _super);
        function FeaturesGroup() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return FeaturesGroup;
    }(BaseEntity));

    /*
     *  Incident
    */
    var Incident = /** @class */ (function (_super) {
        __extends(Incident, _super);
        function Incident() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Incident;
    }(BaseEntity));

    /*
     *  User membership in an account
    */
    var Member = /** @class */ (function (_super) {
        __extends(Member, _super);
        function Member() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Member;
    }(BaseEntity));

    /*
     *  Member in an account with extended user info (for display only)
    */
    var MemberUser = /** @class */ (function (_super) {
        __extends(MemberUser, _super);
        function MemberUser() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return MemberUser;
    }(BaseEntity));

    /*
     *  Member in an account with extended account info (for display only)
    */
    var Membership = /** @class */ (function (_super) {
        __extends(Membership, _super);
        function Membership() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Membership;
    }(BaseEntity));

    /*
     *  Placement is a structure to ap booking requests to a resource
    */
    var Placement = /** @class */ (function (_super) {
        __extends(Placement, _super);
        function Placement() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Placement;
    }(BaseEntity));

    /*
     *  Planing is a set of booking request and placements
    */
    var Planing = /** @class */ (function (_super) {
        __extends(Planing, _super);
        function Planing() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Planing;
    }(BaseEntity));

    /*
     *  Resource type
    */
    var Resource = /** @class */ (function (_super) {
        __extends(Resource, _super);
        function Resource() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Resource;
    }(BaseEntity));

    /*
     *  User type
    */
    var User = /** @class */ (function (_super) {
        __extends(User, _super);
        function User() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return User;
    }(BaseEntity));

    /*
     *  Verification type used to verify user with a temporary code
    */
    var Verification = /** @class */ (function (_super) {
        __extends(Verification, _super);
        function Verification() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Verification;
    }(BaseEntity));

    /*
       Account role code (represent role of user in the account)
    */
    (function (AccountRoleCode) {
        // Undefined [0] 
        AccountRoleCode[AccountRoleCode["UNDEFINED"] = 0] = "UNDEFINED";
        // Account administrator can perform all operations [1] 
        AccountRoleCode[AccountRoleCode["ADMIN"] = 1] = "ADMIN";
        // Part of a club staff [2] 
        AccountRoleCode[AccountRoleCode["STAFF"] = 2] = "STAFF";
        // Club Member [3] 
        AccountRoleCode[AccountRoleCode["MEMBER"] = 3] = "MEMBER";
        // Olympic team [4] 
        AccountRoleCode[AccountRoleCode["TEAM"] = 4] = "TEAM";
        // Paralympic team [5] 
        AccountRoleCode[AccountRoleCode["PARA"] = 5] = "PARA";
        // Club guest [6] 
        AccountRoleCode[AccountRoleCode["GUEST"] = 6] = "GUEST";
    })(exports.AccountRoleCode || (exports.AccountRoleCode = {}));

    /*
       Account status code
    */
    (function (AccountStatusCode) {
        // Undefined [0] 
        AccountStatusCode[AccountStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
        // Active account [1] 
        AccountStatusCode[AccountStatusCode["ACTIVE"] = 1] = "ACTIVE";
        // Suspended (non-active) account [2] 
        AccountStatusCode[AccountStatusCode["SUSPENDED"] = 2] = "SUSPENDED";
        // Deleted account [3] 
        AccountStatusCode[AccountStatusCode["DELETED"] = 3] = "DELETED";
    })(exports.AccountStatusCode || (exports.AccountStatusCode = {}));

    /*
       Account type code
    */
    (function (AccountTypeCode) {
        // Undefined [0] 
        AccountTypeCode[AccountTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
        // Demo account for Tests and Demos [1] 
        AccountTypeCode[AccountTypeCode["DEMO"] = 1] = "DEMO";
        // Trial account for pilots [2] 
        AccountTypeCode[AccountTypeCode["TRIAL"] = 2] = "TRIAL";
        // Active account for customer [3] 
        AccountTypeCode[AccountTypeCode["CUSTOMER"] = 3] = "CUSTOMER";
    })(exports.AccountTypeCode || (exports.AccountTypeCode = {}));

    /*
       Daily activity status code
    */
    (function (ActivityStatusCode) {
        // Undefined - No booking in this activity [0] 
        ActivityStatusCode[ActivityStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
        // Some booking requests approved, not all [1] 
        ActivityStatusCode[ActivityStatusCode["PARTIAL"] = 1] = "PARTIAL";
        // All booking requests approved [2] 
        ActivityStatusCode[ActivityStatusCode["FULL"] = 2] = "FULL";
    })(exports.ActivityStatusCode || (exports.ActivityStatusCode = {}));

    /*
       Booking status code
    */
    (function (BookingStatusCode) {
        // Undefined [0] 
        BookingStatusCode[BookingStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
        // Pending booking request [1] 
        BookingStatusCode[BookingStatusCode["PENDING"] = 1] = "PENDING";
        // Approved booking [2] 
        BookingStatusCode[BookingStatusCode["APPROVED"] = 2] = "APPROVED";
        // Cancelled booking [3] 
        BookingStatusCode[BookingStatusCode["CANCELLED"] = 3] = "CANCELLED";
    })(exports.BookingStatusCode || (exports.BookingStatusCode = {}));

    /*
       Day of week code
    */
    (function (DayOfWeekCode) {
        // Sunday [0] 
        DayOfWeekCode[DayOfWeekCode["SUN"] = 0] = "SUN";
        // Monday [1] 
        DayOfWeekCode[DayOfWeekCode["MON"] = 1] = "MON";
        // Tuesday [2] 
        DayOfWeekCode[DayOfWeekCode["TUE"] = 2] = "TUE";
        // Wednesday [3] 
        DayOfWeekCode[DayOfWeekCode["WED"] = 3] = "WED";
        // Thursday [4] 
        DayOfWeekCode[DayOfWeekCode["THU"] = 4] = "THU";
        // Friday [5] 
        DayOfWeekCode[DayOfWeekCode["FRI"] = 5] = "FRI";
        // Saturday [6] 
        DayOfWeekCode[DayOfWeekCode["SAT"] = 6] = "SAT";
    })(exports.DayOfWeekCode || (exports.DayOfWeekCode = {}));

    /*
       Entity type code (represent entity type in the system)
    */
    (function (EntityTypeCode) {
        // Undefined [0] 
        EntityTypeCode[EntityTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
        // Account [1] 
        EntityTypeCode[EntityTypeCode["ACCOUNT"] = 1] = "ACCOUNT";
        // User [2] 
        EntityTypeCode[EntityTypeCode["USER"] = 2] = "USER";
        // API Key [3] 
        EntityTypeCode[EntityTypeCode["API_KEY"] = 3] = "API_KEY";
        // Audit Log [4] 
        EntityTypeCode[EntityTypeCode["AUDIT_LOG"] = 4] = "AUDIT_LOG";
        // Booking [5] 
        EntityTypeCode[EntityTypeCode["BOOKING"] = 5] = "BOOKING";
        // Feature [6] 
        EntityTypeCode[EntityTypeCode["FEATURE"] = 6] = "FEATURE";
        // Features Group [7] 
        EntityTypeCode[EntityTypeCode["FEATURES_GROUP"] = 7] = "FEATURES_GROUP";
        // Incident [8] 
        EntityTypeCode[EntityTypeCode["INCIDENT"] = 8] = "INCIDENT";
        // Booking Placement [9] 
        EntityTypeCode[EntityTypeCode["PLACEMENT"] = 9] = "PLACEMENT";
        // Club Resource [10] 
        EntityTypeCode[EntityTypeCode["RESOURCE"] = 10] = "RESOURCE";
    })(exports.EntityTypeCode || (exports.EntityTypeCode = {}));

    /*
       Feature codes
    */
    (function (FeatureCode) {
        // Undefined [0] 
        FeatureCode[FeatureCode["UNDEFINED"] = 0] = "UNDEFINED";
        // Admin module [1] 
        FeatureCode[FeatureCode["MODULE_ADMIN"] = 1] = "MODULE_ADMIN";
        // System admin module [2] 
        FeatureCode[FeatureCode["MODULE_SYSADMIN"] = 2] = "MODULE_SYSADMIN";
    })(exports.FeatureCode || (exports.FeatureCode = {}));

    /*
       Kayak type code
    */
    (function (KayakTypeCode) {
        // Undefined [0] 
        KayakTypeCode[KayakTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
        // Ocean Kayak [2 + 1024] 
        KayakTypeCode[KayakTypeCode["OCEAN"] = 1026] = "OCEAN";
        // Double Ocean Kayak [2 + 2048] 
        KayakTypeCode[KayakTypeCode["OCEAN_X2"] = 2050] = "OCEAN_X2";
    })(exports.KayakTypeCode || (exports.KayakTypeCode = {}));

    /*
       Member status code
    */
    (function (MemberStatusCode) {
        // Undefined [0] 
        MemberStatusCode[MemberStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
        // Member is registered and pending approval [1] 
        MemberStatusCode[MemberStatusCode["PENDING"] = 1] = "PENDING";
        // Active member in the account [2] 
        MemberStatusCode[MemberStatusCode["ACTIVE"] = 2] = "ACTIVE";
        // Frozen member (not active) [3] 
        MemberStatusCode[MemberStatusCode["FROZEN"] = 3] = "FROZEN";
    })(exports.MemberStatusCode || (exports.MemberStatusCode = {}));

    /*
       Placement status code
    */
    (function (PlacementStatusCode) {
        // Undefined [0] 
        PlacementStatusCode[PlacementStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
        // Partial [1] 
        PlacementStatusCode[PlacementStatusCode["PARTIAL"] = 1] = "PARTIAL";
        // Complete [2] 
        PlacementStatusCode[PlacementStatusCode["COMPLETE"] = 2] = "COMPLETE";
        // Approved [3] 
        PlacementStatusCode[PlacementStatusCode["APPROVED"] = 3] = "APPROVED";
    })(exports.PlacementStatusCode || (exports.PlacementStatusCode = {}));

    /*
       Resource class code (represent resource in the system)
    */
    (function (ResourceClassCode) {
        // Undefined [0] 
        ResourceClassCode[ResourceClassCode["UNDEFINED"] = 0] = "UNDEFINED";
        // Rowing Boat [1024] 
        ResourceClassCode[ResourceClassCode["RBOAT"] = 1024] = "RBOAT";
        // Kayak [2048] 
        ResourceClassCode[ResourceClassCode["KAYAK"] = 2048] = "KAYAK";
    })(exports.ResourceClassCode || (exports.ResourceClassCode = {}));

    /*
       Resource status code
    */
    (function (ResourceStatusCode) {
        // Undefined [0] 
        ResourceStatusCode[ResourceStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
        // Available [1] 
        ResourceStatusCode[ResourceStatusCode["AVAILABLE"] = 1] = "AVAILABLE";
        // Non-available [2] 
        ResourceStatusCode[ResourceStatusCode["NONAVAILABLE"] = 2] = "NONAVAILABLE";
    })(exports.ResourceStatusCode || (exports.ResourceStatusCode = {}));

    /*
       General Resource Type (Attributes bit mask)
    */
    (function (ResourceTypeMask) {
        // Undefined [0] 
        ResourceTypeMask[ResourceTypeMask["UNDEFINED"] = 0] = "UNDEFINED";
        // Rowing Boat [1] 
        ResourceTypeMask[ResourceTypeMask["RBOAT"] = 1] = "RBOAT";
        // Kayak [2] 
        ResourceTypeMask[ResourceTypeMask["KAYAK"] = 2] = "KAYAK";
        // Sculling (2 oars) [4] 
        ResourceTypeMask[ResourceTypeMask["SCULL"] = 4] = "SCULL";
        // Need Cox [8] 
        ResourceTypeMask[ResourceTypeMask["COX"] = 8] = "COX";
        // Wide [16] 
        ResourceTypeMask[ResourceTypeMask["WIDE"] = 16] = "WIDE";
        // For competition [32] 
        ResourceTypeMask[ResourceTypeMask["COMP"] = 32] = "COMP";
        // For para-olympic [64] 
        ResourceTypeMask[ResourceTypeMask["PARA"] = 64] = "PARA";
        // Coastal (use in sea) [128] 
        ResourceTypeMask[ResourceTypeMask["COASTAL"] = 128] = "COASTAL";
        // Single [1024] 
        ResourceTypeMask[ResourceTypeMask["P1"] = 1024] = "P1";
        // Double [2048] 
        ResourceTypeMask[ResourceTypeMask["P2"] = 2048] = "P2";
        // Quad [4096] 
        ResourceTypeMask[ResourceTypeMask["P4"] = 4096] = "P4";
        // Eight [8192] 
        ResourceTypeMask[ResourceTypeMask["P8"] = 8192] = "P8";
    })(exports.ResourceTypeMask || (exports.ResourceTypeMask = {}));

    /*
       Rowing boat type code
    */
    (function (RowingBoatTypeCode) {
        // Undefined [0] 
        RowingBoatTypeCode[RowingBoatTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
        // Sculling 1X [1 + 4 + 1024] 
        RowingBoatTypeCode[RowingBoatTypeCode["SCULL_1X"] = 1029] = "SCULL_1X";
        // Sculling 1X Wide [1 + 4 + 1024 + 16] 
        RowingBoatTypeCode[RowingBoatTypeCode["SCULL_1X_WIDE"] = 1045] = "SCULL_1X_WIDE";
        // Sculling 1X Competition [1 + 4 + 1024 + 32] 
        RowingBoatTypeCode[RowingBoatTypeCode["SCULL_1X_COMP"] = 1061] = "SCULL_1X_COMP";
        // Sculling 1X Para Olympic [1 + 4 + 1024 + 64] 
        RowingBoatTypeCode[RowingBoatTypeCode["SCULL_1X_PARA"] = 1093] = "SCULL_1X_PARA";
        // Sculling 2X [1 + 4 + 2048] 
        RowingBoatTypeCode[RowingBoatTypeCode["SCULL_2X"] = 2053] = "SCULL_2X";
        // Sculling 2X Wide [1 + 4 + 2048 + 16] 
        RowingBoatTypeCode[RowingBoatTypeCode["SCULL_2X_WIDE"] = 2069] = "SCULL_2X_WIDE";
        // Sculling 2X Competition [1 + 4 + 2048 + 16 + 32] 
        RowingBoatTypeCode[RowingBoatTypeCode["SCULL_2X_COMP"] = 2101] = "SCULL_2X_COMP";
        // Sculling 2X Para Olympic [1 + 4 + 2048 + 16 + 64] 
        RowingBoatTypeCode[RowingBoatTypeCode["SCULL_2X_PARA"] = 2133] = "SCULL_2X_PARA";
        // Sweeping 2- Coxless Pair [1 + 2048] 
        RowingBoatTypeCode[RowingBoatTypeCode["SWEEP_2_COXLESS"] = 2049] = "SWEEP_2_COXLESS";
        // Coastal 2X [1 + 4 + 8 + 128 + 2048] 
        RowingBoatTypeCode[RowingBoatTypeCode["COASTAL_2X"] = 2189] = "COASTAL_2X";
        // Sculling 4X Quad [1 + 4 + 4096] 
        RowingBoatTypeCode[RowingBoatTypeCode["SCULL_4X"] = 4101] = "SCULL_4X";
        // Sculling 4X Quad with cox [1 + 4 + 8 + 4096] 
        RowingBoatTypeCode[RowingBoatTypeCode["SCULL_4X_COX"] = 4109] = "SCULL_4X_COX";
        // Sweeping 4- Coxless Quad [1 + 4096] 
        RowingBoatTypeCode[RowingBoatTypeCode["SWEEP_4_COXLESS"] = 4097] = "SWEEP_4_COXLESS";
        // Sculling 4X Competition [1 + 4 + 32 + 4096] 
        RowingBoatTypeCode[RowingBoatTypeCode["SCULL_4X_COMP"] = 4133] = "SCULL_4X_COMP";
        // Sculling 4X Para Olympic [1 + 4 + 64 + 4096] 
        RowingBoatTypeCode[RowingBoatTypeCode["SCULL_4X_PARA"] = 4165] = "SCULL_4X_PARA";
        // Coastal 4X with cox [1 + 4 + 8 + 128 + 4096] 
        RowingBoatTypeCode[RowingBoatTypeCode["COASTAL_4X_COX"] = 4237] = "COASTAL_4X_COX";
        // Sweeping 8 - with cox [1 + 8192] 
        RowingBoatTypeCode[RowingBoatTypeCode["SWEEP_8_COX"] = 8193] = "SWEEP_8_COX";
        // Sculling 8 - with cox [1 + 8 + 8192] 
        RowingBoatTypeCode[RowingBoatTypeCode["SCULL_8X_COX"] = 8201] = "SCULL_8X_COX";
    })(exports.RowingBoatTypeCode || (exports.RowingBoatTypeCode = {}));

    /*
       Time unit interval
    */
    (function (TimeUnitCode) {
        // Undefined [0] 
        TimeUnitCode[TimeUnitCode["UNDEFINED"] = 0] = "UNDEFINED";
        // Second interval [1] 
        TimeUnitCode[TimeUnitCode["SECOND"] = 1] = "SECOND";
        // Minute interval [2] 
        TimeUnitCode[TimeUnitCode["MINUTE"] = 2] = "MINUTE";
        // Hour interval [3] 
        TimeUnitCode[TimeUnitCode["HOUR"] = 3] = "HOUR";
        // Day interval [4] 
        TimeUnitCode[TimeUnitCode["DAY"] = 4] = "DAY";
        // Week interval [5] 
        TimeUnitCode[TimeUnitCode["WEEK"] = 5] = "WEEK";
        // Month interval [6] 
        TimeUnitCode[TimeUnitCode["MONTH"] = 6] = "MONTH";
    })(exports.TimeUnitCode || (exports.TimeUnitCode = {}));

    /*
       Resource Used by
    */
    (function (UseTypeCode) {
        // Undefined [0] 
        UseTypeCode[UseTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
        // Used by club members [1] 
        UseTypeCode[UseTypeCode["MEMBER"] = 1] = "MEMBER";
        // Used by club staff [2] 
        UseTypeCode[UseTypeCode["STAFF"] = 2] = "STAFF";
        // Used by team members [3] 
        UseTypeCode[UseTypeCode["TEAM"] = 3] = "TEAM";
        // Used by para-olympic team [4] 
        UseTypeCode[UseTypeCode["PARA"] = 4] = "PARA";
    })(exports.UseTypeCode || (exports.UseTypeCode = {}));

    /*
       User gender code
    */
    (function (UserGenderCode) {
        // Undefined [0] 
        UserGenderCode[UserGenderCode["UNDEFINED"] = 0] = "UNDEFINED";
        // Male [1] 
        UserGenderCode[UserGenderCode["MALE"] = 1] = "MALE";
        // Female [2] 
        UserGenderCode[UserGenderCode["FEMALE"] = 2] = "FEMALE";
    })(exports.UserGenderCode || (exports.UserGenderCode = {}));

    /*
       User status code
    */
    (function (UserStatusCode) {
        // Undefined [0] 
        UserStatusCode[UserStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
        // User is registered and pending verification [1] 
        UserStatusCode[UserStatusCode["PENDING"] = 1] = "PENDING";
        // Active user in the system [2] 
        UserStatusCode[UserStatusCode["ACTIVE"] = 2] = "ACTIVE";
        // Blocked user (only account system can unblock the user) [3] 
        UserStatusCode[UserStatusCode["BLOCKED"] = 3] = "BLOCKED";
        // Suspended user (about to be deleted) [4] 
        UserStatusCode[UserStatusCode["SUSPENDED"] = 4] = "SUSPENDED";
    })(exports.UserStatusCode || (exports.UserStatusCode = {}));

    /*
       User type code
    */
    (function (UserTypeCode) {
        // Undefined [0] 
        UserTypeCode[UserTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
        // System administrator has access to all accounts and permissions to perform all actions [1] 
        UserTypeCode[UserTypeCode["SYSADMIN"] = 1] = "SYSADMIN";
        // Support user has view permissions only for all accounts that enabled option Enable Support [2] 
        UserTypeCode[UserTypeCode["SUPPORT"] = 2] = "SUPPORT";
        // Account user - has access to specific accounts with role based access control [4] 
        UserTypeCode[UserTypeCode["USER"] = 4] = "USER";
        // Account service - to be used by other systems to perform actions using the API (can't login as a user to the portal)' [5]` 
        UserTypeCode[UserTypeCode["SERVICE"] = 5] = "SERVICE";
    })(exports.UserTypeCode || (exports.UserTypeCode = {}));

    /*
    */
    var AccountIdRequest = /** @class */ (function () {
        function AccountIdRequest(id) {
            this.id = id;
        }
        return AccountIdRequest;
    }());

    /*
     *  Entity action response message returned for any create/update action on entity
    */
    var ActionResponse = /** @class */ (function () {
        function ActionResponse(code, error, key, data) {
            this.code = code;
            this.error = error;
            this.key = key;
            this.data = data;
        }
        return ActionResponse;
    }());

    /*
    */
    var ActivityIdRequest = /** @class */ (function () {
        function ActivityIdRequest(id) {
            this.id = id;
        }
        return ActivityIdRequest;
    }());

    /*
    */
    var AdminActivityBulkCreateRequest = /** @class */ (function () {
        function AdminActivityBulkCreateRequest(body, resType, weight, forUseBy) {
            this.body = body;
            this.resType = resType;
            this.weight = weight;
            this.forUseBy = forUseBy;
        }
        return AdminActivityBulkCreateRequest;
    }());

    /*
    */
    var AdminActivityDefaultCreateRequest = /** @class */ (function () {
        function AdminActivityDefaultCreateRequest(year, month) {
            this.year = year;
            this.month = month;
        }
        return AdminActivityDefaultCreateRequest;
    }());

    /*
    */
    var AdminActivityDefaultDeleteRequest = /** @class */ (function () {
        function AdminActivityDefaultDeleteRequest(year, month) {
            this.year = year;
            this.month = month;
        }
        return AdminActivityDefaultDeleteRequest;
    }());

    /*
    */
    var AdminActivityFindFreeResourcesRequest = /** @class */ (function () {
        function AdminActivityFindFreeResourcesRequest(id) {
            this.id = id;
        }
        return AdminActivityFindFreeResourcesRequest;
    }());

    /*
    */
    var AdminActivityFindRequest = /** @class */ (function () {
        function AdminActivityFindRequest(from, to, year, month, day) {
            this.from = from;
            this.to = to;
            this.year = year;
            this.month = month;
            this.day = day;
        }
        return AdminActivityFindRequest;
    }());

    /*
    */
    var AdminActivityPlaningRequest = /** @class */ (function () {
        function AdminActivityPlaningRequest(id, resourceType) {
            this.id = id;
            this.resourceType = resourceType;
        }
        return AdminActivityPlaningRequest;
    }());

    /*
    */
    var AdminCreateActivityRequest = /** @class */ (function () {
        function AdminCreateActivityRequest(body) {
            this.body = body;
        }
        return AdminCreateActivityRequest;
    }());

    /*
    */
    var AdminCreateResourceRequest = /** @class */ (function () {
        function AdminCreateResourceRequest(body) {
            this.body = body;
        }
        return AdminCreateResourceRequest;
    }());

    /*
    */
    var AdminDailyPlaningRequest = /** @class */ (function () {
        function AdminDailyPlaningRequest(day) {
            this.day = day;
        }
        return AdminDailyPlaningRequest;
    }());

    /*
    */
    var AdminFindFreeResourcesRequest = /** @class */ (function () {
        function AdminFindFreeResourcesRequest(id) {
            this.id = id;
        }
        return AdminFindFreeResourcesRequest;
    }());

    /*
    */
    var AdminMembersFindRequest = /** @class */ (function () {
        function AdminMembersFindRequest(accountId, search, role, status, sort, page, pageSize) {
            this.accountId = accountId;
            this.search = search;
            this.role = role;
            this.status = status;
            this.sort = sort;
            this.page = page;
            this.pageSize = pageSize;
        }
        return AdminMembersFindRequest;
    }());

    /*
    */
    var AdminPlaningAssignResourceRequest = /** @class */ (function () {
        function AdminPlaningAssignResourceRequest(id, resourceId) {
            this.id = id;
            this.resourceId = resourceId;
        }
        return AdminPlaningAssignResourceRequest;
    }());

    /*
    */
    var AdminPlaningDeleteActivityRequest = /** @class */ (function () {
        function AdminPlaningDeleteActivityRequest(day, id) {
            this.day = day;
            this.id = id;
        }
        return AdminPlaningDeleteActivityRequest;
    }());

    /*
    */
    var AdminPlaningDeleteBookingRequest = /** @class */ (function () {
        function AdminPlaningDeleteBookingRequest(day, id) {
            this.day = day;
            this.id = id;
        }
        return AdminPlaningDeleteBookingRequest;
    }());

    /*
    */
    var AdminPlaningMergeBookingsRequest = /** @class */ (function () {
        function AdminPlaningMergeBookingsRequest(day, source, target) {
            this.day = day;
            this.source = source;
            this.target = target;
        }
        return AdminPlaningMergeBookingsRequest;
    }());

    /*
    */
    var AdminPlaningSplitBookingRequest = /** @class */ (function () {
        function AdminPlaningSplitBookingRequest(day, id) {
            this.day = day;
            this.id = id;
        }
        return AdminPlaningSplitBookingRequest;
    }());

    /*
    */
    var AdminPlaningUnAssignResourceRequest = /** @class */ (function () {
        function AdminPlaningUnAssignResourceRequest(id) {
            this.id = id;
        }
        return AdminPlaningUnAssignResourceRequest;
    }());

    /*
    */
    var AdminResourceBulkCreateRequest = /** @class */ (function () {
        function AdminResourceBulkCreateRequest(body) {
            this.body = body;
        }
        return AdminResourceBulkCreateRequest;
    }());

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

    /*
    */
    var AdminUpdateActivityRequest = /** @class */ (function () {
        function AdminUpdateActivityRequest(body) {
            this.body = body;
        }
        return AdminUpdateActivityRequest;
    }());

    /*
    */
    var AdminUpdateResourceRequest = /** @class */ (function () {
        function AdminUpdateResourceRequest(body) {
            this.body = body;
        }
        return AdminUpdateResourceRequest;
    }());

    /*
    */
    var BookingIdRequest = /** @class */ (function () {
        function BookingIdRequest(id) {
            this.id = id;
        }
        return BookingIdRequest;
    }());

    /*
    */
    var BookingRequestIdRequest = /** @class */ (function () {
        function BookingRequestIdRequest(id) {
            this.id = id;
        }
        return BookingRequestIdRequest;
    }());

    /*
     *  Change Password request message
    */
    var ChangePasswordRequest = /** @class */ (function () {
        function ChangePasswordRequest(userEmail, oldPassword, newPassword) {
            this.userEmail = userEmail;
            this.oldPassword = oldPassword;
            this.newPassword = newPassword;
        }
        return ChangePasswordRequest;
    }());

    /*
    */
    var EmptyRequest = /** @class */ (function () {
        function EmptyRequest() {
        }
        return EmptyRequest;
    }());

    /*
    */
    var EmptyResponse = /** @class */ (function () {
        function EmptyResponse() {
        }
        return EmptyResponse;
    }());

    /*
     *  Entities response message returned for read operation on multiple entities
    */
    var EntitiesResponse = /** @class */ (function () {
        function EntitiesResponse(code, error) {
            this.code = code;
            this.error = error;
        }
        return EntitiesResponse;
    }());

    /*
    */
    var EntitiesResponseOfAccount = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfAccount, _super);
        function EntitiesResponseOfAccount() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfAccount;
    }(EntitiesResponse));

    /*
    */
    var EntitiesResponseOfActivity = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfActivity, _super);
        function EntitiesResponseOfActivity() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfActivity;
    }(EntitiesResponse));

    /*
     *  EntitiesResponse<ActivityBookingGroup>
    */
    var EntitiesResponseOfActivityBookingGroup = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfActivityBookingGroup, _super);
        function EntitiesResponseOfActivityBookingGroup() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfActivityBookingGroup;
    }(EntitiesResponse));

    /*
    */
    var EntitiesResponseOfBooking = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfBooking, _super);
        function EntitiesResponseOfBooking() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfBooking;
    }(EntitiesResponse));

    /*
    */
    var EntitiesResponseOfBookingGroup = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfBookingGroup, _super);
        function EntitiesResponseOfBookingGroup() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfBookingGroup;
    }(EntitiesResponse));

    /*
    */
    var EntitiesResponseOfBookingRequest = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfBookingRequest, _super);
        function EntitiesResponseOfBookingRequest() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfBookingRequest;
    }(EntitiesResponse));

    /*
    */
    var EntitiesResponseOfMembership = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfMembership, _super);
        function EntitiesResponseOfMembership() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfMembership;
    }(EntitiesResponse));

    /*
    */
    var EntitiesResponseOfPlacement = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfPlacement, _super);
        function EntitiesResponseOfPlacement() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfPlacement;
    }(EntitiesResponse));

    /*
    */
    var EntitiesResponseOfResource = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfResource, _super);
        function EntitiesResponseOfResource() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfResource;
    }(EntitiesResponse));

    /*
     *  Entity response message returned for read operation on a single entity
    */
    var EntityResponse = /** @class */ (function () {
        function EntityResponse(code, error) {
            this.code = code;
            this.error = error;
        }
        return EntityResponse;
    }());

    /*
    */
    var EntityResponseOfAccount = /** @class */ (function (_super) {
        __extends(EntityResponseOfAccount, _super);
        function EntityResponseOfAccount() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfAccount;
    }(EntityResponse));

    /*
    */
    var EntityResponseOfActivity = /** @class */ (function (_super) {
        __extends(EntityResponseOfActivity, _super);
        function EntityResponseOfActivity() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfActivity;
    }(EntityResponse));

    /*
    */
    var EntityResponseOfBooking = /** @class */ (function (_super) {
        __extends(EntityResponseOfBooking, _super);
        function EntityResponseOfBooking() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfBooking;
    }(EntityResponse));

    /*
    */
    var EntityResponseOfBookingRequest = /** @class */ (function (_super) {
        __extends(EntityResponseOfBookingRequest, _super);
        function EntityResponseOfBookingRequest() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfBookingRequest;
    }(EntityResponse));

    /*
    */
    var EntityResponseOfLoginData = /** @class */ (function (_super) {
        __extends(EntityResponseOfLoginData, _super);
        function EntityResponseOfLoginData() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfLoginData;
    }(EntityResponse));

    /*
    */
    var EntityResponseOfMember = /** @class */ (function (_super) {
        __extends(EntityResponseOfMember, _super);
        function EntityResponseOfMember() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfMember;
    }(EntityResponse));

    /*
    */
    var EntityResponseOfMemberUser = /** @class */ (function (_super) {
        __extends(EntityResponseOfMemberUser, _super);
        function EntityResponseOfMemberUser() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfMemberUser;
    }(EntityResponse));

    /*
    */
    var EntityResponseOfPlacement = /** @class */ (function (_super) {
        __extends(EntityResponseOfPlacement, _super);
        function EntityResponseOfPlacement() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfPlacement;
    }(EntityResponse));

    /*
    */
    var EntityResponseOfPlaning = /** @class */ (function (_super) {
        __extends(EntityResponseOfPlaning, _super);
        function EntityResponseOfPlaning() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfPlaning;
    }(EntityResponse));

    /*
    */
    var EntityResponseOfResource = /** @class */ (function (_super) {
        __extends(EntityResponseOfResource, _super);
        function EntityResponseOfResource() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfResource;
    }(EntityResponse));

    /*
    */
    var EntityResponseOfUser = /** @class */ (function (_super) {
        __extends(EntityResponseOfUser, _super);
        function EntityResponseOfUser() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfUser;
    }(EntityResponse));

    /*
    */
    var EntityResponseOfUserAccountInfo = /** @class */ (function (_super) {
        __extends(EntityResponseOfUserAccountInfo, _super);
        function EntityResponseOfUserAccountInfo() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfUserAccountInfo;
    }(EntityResponse));

    /*
    */
    var MemberIdRequest = /** @class */ (function () {
        function MemberIdRequest(id) {
            this.id = id;
        }
        return MemberIdRequest;
    }());

    /*
    */
    var MembersBulkImportRequest = /** @class */ (function () {
        function MembersBulkImportRequest(body) {
            this.body = body;
        }
        return MembersBulkImportRequest;
    }());

    /*
    */
    var MembersFindRequest = /** @class */ (function () {
        function MembersFindRequest(search, role, status, sort, page, pageSize) {
            this.search = search;
            this.role = role;
            this.status = status;
            this.sort = sort;
            this.page = page;
            this.pageSize = pageSize;
        }
        return MembersFindRequest;
    }());

    /*
    */
    var MembersServiceInviteRequest = /** @class */ (function () {
        function MembersServiceInviteRequest(body) {
            this.body = body;
        }
        return MembersServiceInviteRequest;
    }());

    /*
    */
    var MembersServiceUpdateRequest = /** @class */ (function () {
        function MembersServiceUpdateRequest(body) {
            this.body = body;
        }
        return MembersServiceUpdateRequest;
    }());

    /*
    */
    var MembershipIdRequest = /** @class */ (function () {
        function MembershipIdRequest(id) {
            this.id = id;
        }
        return MembershipIdRequest;
    }());

    /*
    */
    var MembershipsRequest = /** @class */ (function () {
        function MembershipsRequest(userId) {
            this.userId = userId;
        }
        return MembershipsRequest;
    }());

    /*
    */
    var PlacementIdRequest = /** @class */ (function () {
        function PlacementIdRequest(id) {
            this.id = id;
        }
        return PlacementIdRequest;
    }());

    /*
     *  Query response message returned for find operation (with pagination) on multiple entities
    */
    var QueryResponse = /** @class */ (function () {
        function QueryResponse(code, error, page, pageSize, pages, total, queryDef, docType) {
            this.code = code;
            this.error = error;
            this.page = page;
            this.pageSize = pageSize;
            this.pages = pages;
            this.total = total;
            this.queryDef = queryDef;
            this.docType = docType;
        }
        return QueryResponse;
    }());

    /*
    */
    var QueryResponseOfAccount = /** @class */ (function (_super) {
        __extends(QueryResponseOfAccount, _super);
        function QueryResponseOfAccount() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfAccount;
    }(QueryResponse));

    /*
    */
    var QueryResponseOfActivity = /** @class */ (function (_super) {
        __extends(QueryResponseOfActivity, _super);
        function QueryResponseOfActivity() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfActivity;
    }(QueryResponse));

    /*
    */
    var QueryResponseOfBooking = /** @class */ (function (_super) {
        __extends(QueryResponseOfBooking, _super);
        function QueryResponseOfBooking() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfBooking;
    }(QueryResponse));

    /*
    */
    var QueryResponseOfBookingRequest = /** @class */ (function (_super) {
        __extends(QueryResponseOfBookingRequest, _super);
        function QueryResponseOfBookingRequest() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfBookingRequest;
    }(QueryResponse));

    /*
    */
    var QueryResponseOfMemberUser = /** @class */ (function (_super) {
        __extends(QueryResponseOfMemberUser, _super);
        function QueryResponseOfMemberUser() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfMemberUser;
    }(QueryResponse));

    /*
    */
    var QueryResponseOfMembership = /** @class */ (function (_super) {
        __extends(QueryResponseOfMembership, _super);
        function QueryResponseOfMembership() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfMembership;
    }(QueryResponse));

    /*
    */
    var QueryResponseOfPlacement = /** @class */ (function (_super) {
        __extends(QueryResponseOfPlacement, _super);
        function QueryResponseOfPlacement() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfPlacement;
    }(QueryResponse));

    /*
    */
    var QueryResponseOfResource = /** @class */ (function (_super) {
        __extends(QueryResponseOfResource, _super);
        function QueryResponseOfResource() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfResource;
    }(QueryResponse));

    /*
    */
    var QueryResponseOfUser = /** @class */ (function (_super) {
        __extends(QueryResponseOfUser, _super);
        function QueryResponseOfUser() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfUser;
    }(QueryResponse));

    /*
    */
    var ResourceIdRequest = /** @class */ (function () {
        function ResourceIdRequest(id) {
            this.id = id;
        }
        return ResourceIdRequest;
    }());

    /*
     *  Response of byte array
    */
    var StreamResponse = /** @class */ (function () {
        function StreamResponse(content) {
            this.content = content;
        }
        return StreamResponse;
    }());

    /*
    */
    var SysAdminAccountCreateRequest = /** @class */ (function () {
        function SysAdminAccountCreateRequest(body) {
            this.body = body;
        }
        return SysAdminAccountCreateRequest;
    }());

    /*
    */
    var SysAdminAccountResetRequest = /** @class */ (function () {
        function SysAdminAccountResetRequest(id, days) {
            this.id = id;
            this.days = days;
        }
        return SysAdminAccountResetRequest;
    }());

    /*
    */
    var SysAdminAccountUpdateRequest = /** @class */ (function () {
        function SysAdminAccountUpdateRequest(body) {
            this.body = body;
        }
        return SysAdminAccountUpdateRequest;
    }());

    /*
    */
    var SysAdminAccountsFindRequest = /** @class */ (function () {
        function SysAdminAccountsFindRequest(search, type, status, sort, page, pageSize) {
            this.search = search;
            this.type = type;
            this.status = status;
            this.sort = sort;
            this.page = page;
            this.pageSize = pageSize;
        }
        return SysAdminAccountsFindRequest;
    }());

    /*
     *  Token request message
    */
    var TokenRequest = /** @class */ (function () {
        function TokenRequest(code, error, accountId) {
            this.code = code;
            this.error = error;
            this.accountId = accountId;
        }
        return TokenRequest;
    }());

    /*
    */
    var UserAccountsFindRequest = /** @class */ (function () {
        function UserAccountsFindRequest(search, type, status, sort, page, pageSize) {
            this.search = search;
            this.type = type;
            this.status = status;
            this.sort = sort;
            this.page = page;
            this.pageSize = pageSize;
        }
        return UserAccountsFindRequest;
    }());

    /*
    */
    var UserBookingFindRequest = /** @class */ (function () {
        function UserBookingFindRequest(userId, resourceId, from, to, sort, page, pageSize) {
            this.userId = userId;
            this.resourceId = resourceId;
            this.from = from;
            this.to = to;
            this.sort = sort;
            this.page = page;
            this.pageSize = pageSize;
        }
        return UserBookingFindRequest;
    }());

    /*
    */
    var UserBookingGroupRequest = /** @class */ (function () {
        function UserBookingGroupRequest(from, to, groupBy) {
            this.from = from;
            this.to = to;
            this.groupBy = groupBy;
        }
        return UserBookingGroupRequest;
    }());

    /*
    */
    var UserBookingRequestFindRequest = /** @class */ (function () {
        function UserBookingRequestFindRequest(userId, resourceId, from, to, sort, page, pageSize) {
            this.userId = userId;
            this.resourceId = resourceId;
            this.from = from;
            this.to = to;
            this.sort = sort;
            this.page = page;
            this.pageSize = pageSize;
        }
        return UserBookingRequestFindRequest;
    }());

    /*
    */
    var UserByEmailRequest = /** @class */ (function () {
        function UserByEmailRequest(email) {
            this.email = email;
        }
        return UserByEmailRequest;
    }());

    /*
    */
    var UserCreateBookingRequest = /** @class */ (function () {
        function UserCreateBookingRequest(body) {
            this.body = body;
        }
        return UserCreateBookingRequest;
    }());

    /*
    */
    var UserCreateBookingRequestRequest = /** @class */ (function () {
        function UserCreateBookingRequestRequest(body) {
            this.body = body;
        }
        return UserCreateBookingRequestRequest;
    }());

    /*
    */
    var UserCreatePlacementRequest = /** @class */ (function () {
        function UserCreatePlacementRequest(body) {
            this.body = body;
        }
        return UserCreatePlacementRequest;
    }());

    /*
    */
    var UserIdRequest = /** @class */ (function () {
        function UserIdRequest(id) {
            this.id = id;
        }
        return UserIdRequest;
    }());

    /*
    */
    var UserIdsRequest = /** @class */ (function () {
        function UserIdsRequest(id) {
            this.id = id;
        }
        return UserIdsRequest;
    }());

    /*
    */
    var UserPlacementFindRequest = /** @class */ (function () {
        function UserPlacementFindRequest(userId, resourceId, from, to, bookingId, status, sort, page, pageSize) {
            this.userId = userId;
            this.resourceId = resourceId;
            this.from = from;
            this.to = to;
            this.bookingId = bookingId;
            this.status = status;
            this.sort = sort;
            this.page = page;
            this.pageSize = pageSize;
        }
        return UserPlacementFindRequest;
    }());

    /*
    */
    var UserServiceChangeMobileRequest = /** @class */ (function () {
        function UserServiceChangeMobileRequest(body) {
            this.body = body;
        }
        return UserServiceChangeMobileRequest;
    }());

    /*
    */
    var UserServiceChangeNameRequest = /** @class */ (function () {
        function UserServiceChangeNameRequest(body) {
            this.body = body;
        }
        return UserServiceChangeNameRequest;
    }());

    /*
    */
    var UserServiceChangePasswordRequest = /** @class */ (function () {
        function UserServiceChangePasswordRequest(body) {
            this.body = body;
        }
        return UserServiceChangePasswordRequest;
    }());

    /*
    */
    var UserServiceCheckPasswordRequest = /** @class */ (function () {
        function UserServiceCheckPasswordRequest(body) {
            this.body = body;
        }
        return UserServiceCheckPasswordRequest;
    }());

    /*
    */
    var UserServiceLoginRequest = /** @class */ (function () {
        function UserServiceLoginRequest(body) {
            this.body = body;
        }
        return UserServiceLoginRequest;
    }());

    /*
    */
    var UserServiceResetPasswordRequest = /** @class */ (function () {
        function UserServiceResetPasswordRequest(code) {
            this.code = code;
        }
        return UserServiceResetPasswordRequest;
    }());

    /*
    */
    var UserServiceSendVerificationRequest = /** @class */ (function () {
        function UserServiceSendVerificationRequest(body) {
            this.body = body;
        }
        return UserServiceSendVerificationRequest;
    }());

    /*
    */
    var UserServiceSwitchAccountRequest = /** @class */ (function () {
        function UserServiceSwitchAccountRequest(body) {
            this.body = body;
        }
        return UserServiceSwitchAccountRequest;
    }());

    /*
    */
    var UserServiceUpdateRequest = /** @class */ (function () {
        function UserServiceUpdateRequest(body) {
            this.body = body;
        }
        return UserServiceUpdateRequest;
    }());

    /*
    */
    var UserServiceVerifyLoginRequest = /** @class */ (function () {
        function UserServiceVerifyLoginRequest(key) {
            this.key = key;
        }
        return UserServiceVerifyLoginRequest;
    }());

    /*
    */
    var UserTokenRequest = /** @class */ (function () {
        function UserTokenRequest(id, exp) {
            this.id = id;
            this.exp = exp;
        }
        return UserTokenRequest;
    }());

    /*
    */
    var UserUpdateBookingRequest = /** @class */ (function () {
        function UserUpdateBookingRequest(body) {
            this.body = body;
        }
        return UserUpdateBookingRequest;
    }());

    /*
    */
    var UserUpdateBookingRequestRequest = /** @class */ (function () {
        function UserUpdateBookingRequestRequest(body) {
            this.body = body;
        }
        return UserUpdateBookingRequestRequest;
    }());

    /*
    */
    var UserUpdatePlacementRequest = /** @class */ (function () {
        function UserUpdatePlacementRequest(body) {
            this.body = body;
        }
        return UserUpdatePlacementRequest;
    }());

    /*
    */
    var UsersServiceChangeDefaultAccountRequest = /** @class */ (function () {
        function UsersServiceChangeDefaultAccountRequest(id, accountId) {
            this.id = id;
            this.accountId = accountId;
        }
        return UsersServiceChangeDefaultAccountRequest;
    }());

    /*
    */
    var UsersServiceChangeMobileRequest = /** @class */ (function () {
        function UsersServiceChangeMobileRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return UsersServiceChangeMobileRequest;
    }());

    /*
    */
    var UsersServiceChangeNameRequest = /** @class */ (function () {
        function UsersServiceChangeNameRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return UsersServiceChangeNameRequest;
    }());

    /*
    */
    var UsersServiceChangeRoleRequest = /** @class */ (function () {
        function UsersServiceChangeRoleRequest(id, role) {
            this.id = id;
            this.role = role;
        }
        return UsersServiceChangeRoleRequest;
    }());

    /*
    */
    var UsersServiceChangeStatusRequest = /** @class */ (function () {
        function UsersServiceChangeStatusRequest(id, status) {
            this.id = id;
            this.status = status;
        }
        return UsersServiceChangeStatusRequest;
    }());

    /*
    */
    var UsersServiceChangeTypeRequest = /** @class */ (function () {
        function UsersServiceChangeTypeRequest(id, type) {
            this.id = id;
            this.type = type;
        }
        return UsersServiceChangeTypeRequest;
    }());

    /*
    */
    var UsersServiceCreateRequest = /** @class */ (function () {
        function UsersServiceCreateRequest(body) {
            this.body = body;
        }
        return UsersServiceCreateRequest;
    }());

    /*
    */
    var UsersServiceExportRequest = /** @class */ (function () {
        function UsersServiceExportRequest(search, type, status, sort, format, fields) {
            this.search = search;
            this.type = type;
            this.status = status;
            this.sort = sort;
            this.format = format;
            this.fields = fields;
        }
        return UsersServiceExportRequest;
    }());

    /*
    */
    var UsersServiceFindRequest = /** @class */ (function () {
        function UsersServiceFindRequest(accountId, search, type, status, sort, page, pageSize) {
            this.accountId = accountId;
            this.search = search;
            this.type = type;
            this.status = status;
            this.sort = sort;
            this.page = page;
            this.pageSize = pageSize;
        }
        return UsersServiceFindRequest;
    }());

    /*
    */
    var UsersServiceInviteRequest = /** @class */ (function () {
        function UsersServiceInviteRequest(body) {
            this.body = body;
        }
        return UsersServiceInviteRequest;
    }());

    /*
    */
    var UsersServiceSetRolesRequest = /** @class */ (function () {
        function UsersServiceSetRolesRequest(id, roles) {
            this.id = id;
            this.roles = roles;
        }
        return UsersServiceSetRolesRequest;
    }());

    /*
    */
    var UsersServiceUpdateRequest = /** @class */ (function () {
        function UsersServiceUpdateRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return UsersServiceUpdateRequest;
    }());

    /*
     *  @WebSocketMessage Message header for all web socket messages
    */
    var WebSocketMessageHeader = /** @class */ (function () {
        function WebSocketMessageHeader(opcode, version, messageId, correlationId, sessionId) {
            this.op = opcode;
            this.ver = version;
            this.id = messageId;
            this.cid = correlationId;
            this.sid = sessionId;
        }
        return WebSocketMessageHeader;
    }());

    // Access token key in the local storage
    var tokenKey = 'portalAccessToken';
    var loginKey = 'portalLoginData';
    function getToken() {
        return localStorage.getItem(tokenKey);
    }
    function setToken(token) {
        localStorage.setItem(tokenKey, token);
    }
    function removeToken() {
        localStorage.removeItem(tokenKey);
        localStorage.removeItem(loginKey);
    }

    /**
     * Utility class for all REST services with common functions
     */
    var RestUtil = /** @class */ (function () {
        /**
         * Constructor with injected authentication service
         */
        function RestUtil(http) {
            this.http = http;
            // Set headers
            this.headers = new i1.HttpHeaders().set('Content-Type', 'application/json');
        }
        /**
         * Download is HTTP GET action but the content is blob
         */
        RestUtil.prototype.download = function (fileName, url) {
            var params = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                params[_i - 2] = arguments[_i];
            }
            var resourceUrl = this.buildUrl.apply(this, __spread([url], params));
            var ext = 'json';
            params.forEach(function (p) {
                var arr = p.split('=');
                if (arr.length > 1) {
                    if (arr[0].toLowerCase() === 'format') {
                        ext = arr[1];
                    }
                }
            });
            var downloadLink = fileName + '.' + ext;
            return this.http.get(resourceUrl, { responseType: 'blob' }).subscribe(function (data) {
                var downloadURL = window.URL.createObjectURL(data);
                var link = document.createElement('a');
                link.href = downloadURL;
                link.download = downloadLink;
                link.click();
            });
        };
        /**
         * HTTP GET action
         */
        RestUtil.prototype.get = function (url) {
            var _this = this;
            var params = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                params[_i - 1] = arguments[_i];
            }
            var resourceUrl = this.buildUrl.apply(this, __spread([url], params));
            return this.http
                .get(resourceUrl, { headers: this.headers, observe: 'response' })
                .pipe(operators.map(function (res) { return _this.processResponse(res); }), operators.catchError(this.handleError));
        };
        /**
         * HTTP POST action
         */
        RestUtil.prototype.post = function (url, body) {
            var _this = this;
            var params = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                params[_i - 2] = arguments[_i];
            }
            var resourceUrl = this.buildUrl.apply(this, __spread([url], params));
            return this.http
                .post(resourceUrl, body, { headers: this.headers, observe: 'response' })
                .pipe(operators.map(function (res) { return _this.processResponse(res); }), operators.catchError(this.handleError));
        };
        /**
         * HTTP PUT action
         */
        RestUtil.prototype.put = function (url, body) {
            var _this = this;
            var params = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                params[_i - 2] = arguments[_i];
            }
            var resourceUrl = this.buildUrl.apply(this, __spread([url], params));
            return this.http
                .put(resourceUrl, body, { headers: this.headers, observe: 'response' })
                .pipe(operators.map(function (res) { return _this.processResponse(res); }), operators.catchError(this.handleError));
        };
        /**
         * HTTP DELETE action
         */
        RestUtil.prototype.delete = function (url) {
            var _this = this;
            var params = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                params[_i - 1] = arguments[_i];
            }
            var resourceUrl = this.buildUrl.apply(this, __spread([url], params));
            return this.http
                .delete(resourceUrl, { headers: this.headers, observe: 'response' })
                .pipe(operators.map(function (res) { return _this.processResponse(res); }), operators.catchError(this.handleError));
        };
        /**
         * Construct URL with parameters
         */
        RestUtil.prototype.buildUrl = function (url) {
            var params = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                params[_i - 1] = arguments[_i];
            }
            return (params === null) ? url : (params.length === 0) ? url : "" + url + (params && params.length > 0 ? '?' + params.join('&') : '');
        };
        /**
         * Process the response, extract and refresh access token and return the body
         */
        RestUtil.prototype.processResponse = function (response) {
            if (response.status === 401) {
                removeToken();
                throw new Error('Access denied, reset token: ' + response.status);
            }
            else if (response.status > 400) {
                throw new Error('HTTP status error: ' + response.status);
            }
            // Get access token from header and update authentication service
            var accessToken = response.headers.get('X-ACCESS-TOKEN');
            if ((accessToken !== null) && (accessToken.length > 0)) {
                setToken(accessToken);
            }
            if (response.body && response.body.code && response.body.code !== 0) {
                throw { code: response.body.code, message: response.body.error };
            }
            return response.body;
        };
        /**
         * Error handling
         */
        RestUtil.prototype.handleError = function (error) {
            if (error.code) {
                return Promise.reject(error);
            }
            return Promise.reject(error.message || error);
        };
        return RestUtil;
    }());
    /** @nocollapse */ RestUtil.ɵfac = function RestUtil_Factory(t) { return new (t || RestUtil)(i0.ɵɵinject(i1.HttpClient)); };
    /** @nocollapse */ RestUtil.ɵprov = i0.ɵɵdefineInjectable({ token: RestUtil, factory: RestUtil.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(RestUtil, [{
                type: i0.Injectable
            }], function () { return [{ type: i1.HttpClient }]; }, null);
    })();

    var CoreConfig = /** @class */ (function () {
        function CoreConfig() {
        }
        return CoreConfig;
    }());

    /**
     * Services for managing club activities - for account administrator only
     * @RequestHeader X-API-KEY The key to identify the application (portal)
     * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
     */
    var AdminActivitiesService = /** @class */ (function () {
        /**
         * Class constructor
         */
        function AdminActivitiesService(config, rest) {
            this.config = config;
            this.rest = rest;
            // URL to web api
            this.baseUrl = '/admin/activities';
            this.baseUrl = this.config.api + this.baseUrl;
        }
        /**
         * Create new activity
         * @Return: EntityResponse<Activity>
         */
        AdminActivitiesService.prototype.create = function (body) {
            return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Update activity
         * @Return: EntityResponse<Activity>
         */
        AdminActivitiesService.prototype.update = function (body) {
            return this.rest.put("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Delete activity
         * @Return: ActionResponse
         */
        AdminActivitiesService.prototype.delete = function (id) {
            return this.rest.delete(this.baseUrl + "/" + id);
        };
        /**
         * Get single activity by id
         * @Return: EntityResponse<Activity>
         */
        AdminActivitiesService.prototype.get = function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
        };
        /**
         * Get previous activity related to this activity id
         * @Return: EntityResponse<Activity>
         */
        AdminActivitiesService.prototype.prev = function (id) {
            return this.rest.get(this.baseUrl + "/" + id + "/prev");
        };
        /**
         * Get next activity related to this activity id
         * @Return: EntityResponse<Activity>
         */
        AdminActivitiesService.prototype.next = function (id) {
            return this.rest.get(this.baseUrl + "/" + id + "/next");
        };
        /**
         * Find activities by time range
         * @Return: QueryResponse<Activity>
         */
        AdminActivitiesService.prototype.find = function (from, to, year, month, day) {
            var _a;
            var params = new Array();
            if (from != null) {
                params.push("from=" + from);
            }
            if (to != null) {
                params.push("to=" + to);
            }
            if (year != null) {
                params.push("year=" + year);
            }
            if (month != null) {
                params.push("month=" + month);
            }
            if (day != null) {
                params.push("day=" + day);
            }
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
        };
        /**
         * Find list of free resources for activity by filter
         * @Return: EntitiesResponse<Resource>
         */
        AdminActivitiesService.prototype.findFreeResources = function (id) {
            return this.rest.get(this.baseUrl + "/" + id + "/resources");
        };
        /**
         * Create bulk set of activities
         * @Return: ActionResponse
         */
        AdminActivitiesService.prototype.createBulk = function (resType, weight, forUseBy, body) {
            var _a;
            var params = new Array();
            if (resType != null) {
                params.push("resType=" + resType);
            }
            if (weight != null) {
                params.push("weight=" + weight);
            }
            if (forUseBy != null) {
                params.push("forUseBy=" + forUseBy);
            }
            return (_a = this.rest).post.apply(_a, __spread([this.baseUrl + "/bulk", typeof body === 'object' ? JSON.stringify(body) : body], params));
        };
        /**
         * Create account default set of activities per month
         * @Return: ActionResponse
         */
        AdminActivitiesService.prototype.createDefault = function (year, month) {
            var _a;
            var params = new Array();
            if (year != null) {
                params.push("year=" + year);
            }
            if (month != null) {
                params.push("month=" + month);
            }
            return (_a = this.rest).post.apply(_a, __spread([this.baseUrl + "/default", null], params));
        };
        /**
         * Clear all month activities
         * @Return: ActionResponse
         */
        AdminActivitiesService.prototype.clearDefault = function (year, month) {
            var _a;
            var params = new Array();
            if (year != null) {
                params.push("year=" + year);
            }
            if (month != null) {
                params.push("month=" + month);
            }
            return (_a = this.rest).delete.apply(_a, __spread([this.baseUrl + "/default"], params));
        };
        return AdminActivitiesService;
    }());
    /** @nocollapse */ AdminActivitiesService.ɵfac = function AdminActivitiesService_Factory(t) { return new (t || AdminActivitiesService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
    /** @nocollapse */ AdminActivitiesService.ɵprov = i0.ɵɵdefineInjectable({ token: AdminActivitiesService, factory: AdminActivitiesService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AdminActivitiesService, [{
                type: i0.Injectable
            }], function () {
            return [{ type: CoreConfig, decorators: [{
                            type: i0.Inject,
                            args: ['config']
                        }] }, { type: RestUtil }];
        }, null);
    })();

    /**
     * List of all user related actions for account administrator only
     */
    var AdminMembersService = /** @class */ (function () {
        /**
         * Class constructor
         */
        function AdminMembersService(config, rest) {
            this.config = config;
            this.rest = rest;
            // URL to web api
            this.baseUrl = '/admin/members';
            this.baseUrl = this.config.api + this.baseUrl;
        }
        /**
         * Send invitation to a new member for the current account
         * @Return: ActionResponse
         */
        AdminMembersService.prototype.invite = function (body) {
            return this.rest.post(this.baseUrl + "/invite", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Resend invitation to an existing member for the current account
         * @Return: ActionResponse
         */
        AdminMembersService.prototype.reInvite = function (id) {
            return this.rest.post(this.baseUrl + "/re-invite/" + id, null);
        };
        /**
         * Update member
         * @Return: EntityResponse<Member>
         */
        AdminMembersService.prototype.update = function (body) {
            return this.rest.put("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Delete member from the account
         * The member will be removed from the account, if no other memberships exist for the user, it will be deleted from the system
         * @Return: ActionResponse
         */
        AdminMembersService.prototype.delete = function (id) {
            return this.rest.delete(this.baseUrl + "/" + id);
        };
        /**
         * Get single member by id (including user data)
         * @Return: EntityResponse<MemberUser>
         */
        AdminMembersService.prototype.get = function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
        };
        /**
         * Get single member by id (including user data)
         * @Return: EntityResponse<User>
         */
        AdminMembersService.prototype.getUserByEmail = function (email) {
            return this.rest.get(this.baseUrl + "/email/" + email);
        };
        /**
         * Get user memberships (in all accounts)
         * @Return: QueryResponse<Membership>
         */
        AdminMembersService.prototype.getUserMemberships = function (userId) {
            return this.rest.get(this.baseUrl + "/memberships/" + userId);
        };
        /**
         * Find list of users and filter the list
         * System user will see all users, Account system will see all users of the account, registered user will get an error.
         * @Return: QueryResponse<MemberUser>
         */
        AdminMembersService.prototype.find = function (accountId, search, role, status, sort, page, pageSize) {
            var _a;
            var params = new Array();
            if (accountId != null) {
                params.push("accountId=" + accountId);
            }
            if (search != null) {
                params.push("search=" + search);
            }
            if (role != null) {
                params.push("role=" + role);
            }
            if (status != null) {
                params.push("status=" + status);
            }
            if (sort != null) {
                params.push("sort=" + sort);
            }
            if (page != null) {
                params.push("page=" + page);
            }
            if (pageSize != null) {
                params.push("pageSize=" + pageSize);
            }
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
        };
        /**
         * Import bulk set of members
         * @Return: ActionResponse
         */
        AdminMembersService.prototype.bulkImport = function (body) {
            return this.rest.post(this.baseUrl + "/import", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        return AdminMembersService;
    }());
    /** @nocollapse */ AdminMembersService.ɵfac = function AdminMembersService_Factory(t) { return new (t || AdminMembersService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
    /** @nocollapse */ AdminMembersService.ɵprov = i0.ɵɵdefineInjectable({ token: AdminMembersService, factory: AdminMembersService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AdminMembersService, [{
                type: i0.Injectable
            }], function () {
            return [{ type: CoreConfig, decorators: [{
                            type: i0.Inject,
                            args: ['config']
                        }] }, { type: RestUtil }];
        }, null);
    })();

    /**
     * Services for planing club resource placements - for account administrator only
     * @RequestHeader X-API-KEY The key to identify the application (portal)
     * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
     */
    var AdminPlaningService = /** @class */ (function () {
        /**
         * Class constructor
         */
        function AdminPlaningService(config, rest) {
            this.config = config;
            this.rest = rest;
            // URL to web api
            this.baseUrl = '/admin/planing';
            this.baseUrl = this.config.api + this.baseUrl;
        }
        /**
         * Get daily planing - bookings group by activities
         * @Return: EntitiesResponse<ActivityBookingGroup>
         */
        AdminPlaningService.prototype.getDailyPlaning = function (day) {
            return this.rest.get(this.baseUrl + "/daily/" + day);
        };
        /**
         * Export daily planing - as PDF stream
         * @Return: StreamContent
         */
        AdminPlaningService.prototype.exportDailyPlaning = function (day) {
            return this.rest.download("admin-planing", this.baseUrl + "/daily/" + day + "/export");
        };
        /**
         * Find list of free resources for the booking request
         * @Return: EntitiesResponse<Resource>
         */
        AdminPlaningService.prototype.findFreeResources = function (id) {
            return this.rest.get(this.baseUrl + "/bookings/" + id + "/resources");
        };
        /**
         * Assign resource for booking request and approve
         * @Return: ActionResponse
         */
        AdminPlaningService.prototype.assignResource = function (id, resourceId) {
            return this.rest.post(this.baseUrl + "/bookings/" + id + "/assign/" + resourceId, null);
        };
        /**
         * Un assign resource from booking request
         * @Return: ActionResponse
         */
        AdminPlaningService.prototype.unAssignResource = function (id) {
            return this.rest.post(this.baseUrl + "/bookings/" + id + "/un-assign", null);
        };
        /**
         * Merge source and target bookings and recalculate the daily planing
         * @Return: EntitiesResponse<ActivityBookingGroup>
         */
        AdminPlaningService.prototype.mergeBookings = function (day, source, target) {
            return this.rest.post(this.baseUrl + "/daily/" + day + "/bookings/" + source + "/merge/" + target, null);
        };
        /**
         * Split booking and recalculate the daily planing
         * @Return: EntitiesResponse<ActivityBookingGroup>
         */
        AdminPlaningService.prototype.splitBookings = function (day, id) {
            return this.rest.post(this.baseUrl + "/daily/" + day + "/bookings/" + id + "/split", null);
        };
        /**
         * Delete booking and recalculate the daily planing
         * @Return: EntitiesResponse<ActivityBookingGroup>
         */
        AdminPlaningService.prototype.deleteBooking = function (day, id) {
            return this.rest.delete(this.baseUrl + "/daily/" + day + "/bookings/" + id);
        };
        /**
         * Delete activity and recalculate the daily planing
         * @Return: EntitiesResponse<ActivityBookingGroup>
         */
        AdminPlaningService.prototype.deleteActivity = function (day, id) {
            return this.rest.delete(this.baseUrl + "/daily/" + day + "/activities/" + id);
        };
        return AdminPlaningService;
    }());
    /** @nocollapse */ AdminPlaningService.ɵfac = function AdminPlaningService_Factory(t) { return new (t || AdminPlaningService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
    /** @nocollapse */ AdminPlaningService.ɵprov = i0.ɵɵdefineInjectable({ token: AdminPlaningService, factory: AdminPlaningService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AdminPlaningService, [{
                type: i0.Injectable
            }], function () {
            return [{ type: CoreConfig, decorators: [{
                            type: i0.Inject,
                            args: ['config']
                        }] }, { type: RestUtil }];
        }, null);
    })();

    /**
     * Services for managing club resources - for account administrator only
     * @RequestHeader X-API-KEY The key to identify the application (portal)
     * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
     */
    var AdminResourcesService = /** @class */ (function () {
        /**
         * Class constructor
         */
        function AdminResourcesService(config, rest) {
            this.config = config;
            this.rest = rest;
            // URL to web api
            this.baseUrl = '/admin/resources';
            this.baseUrl = this.config.api + this.baseUrl;
        }
        /**
         * Create new resource
         * @Return: EntityResponse<Resource>
         */
        AdminResourcesService.prototype.create = function (body) {
            return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Update resource
         * @Return: EntityResponse<Resource>
         */
        AdminResourcesService.prototype.update = function (body) {
            return this.rest.put("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Delete resource
         * @Return: ActionResponse
         */
        AdminResourcesService.prototype.delete = function (id) {
            return this.rest.delete(this.baseUrl + "/" + id);
        };
        /**
         * Get single resource by id
         * @Return: EntityResponse<Resource>
         */
        AdminResourcesService.prototype.get = function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
        };
        /**
         * Find resources by filters
         * @Return: QueryResponse<Resource>
         */
        AdminResourcesService.prototype.find = function (search, resourceClass, resourceType, status, forUseBy, sort, page, pageSize) {
            var _a;
            var params = new Array();
            if (search != null) {
                params.push("search=" + search);
            }
            if (resourceClass != null) {
                params.push("resourceClass=" + resourceClass);
            }
            if (resourceType != null) {
                params.push("resourceType=" + resourceType);
            }
            if (status != null) {
                params.push("status=" + status);
            }
            if (forUseBy != null) {
                params.push("forUseBy=" + forUseBy);
            }
            if (sort != null) {
                params.push("sort=" + sort);
            }
            if (page != null) {
                params.push("page=" + page);
            }
            if (pageSize != null) {
                params.push("pageSize=" + pageSize);
            }
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
        };
        /**
         * Import bulk set of resources
         * @Return: ActionResponse
         */
        AdminResourcesService.prototype.bulkCreate = function (body) {
            return this.rest.post(this.baseUrl + "/import", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        return AdminResourcesService;
    }());
    /** @nocollapse */ AdminResourcesService.ɵfac = function AdminResourcesService_Factory(t) { return new (t || AdminResourcesService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
    /** @nocollapse */ AdminResourcesService.ɵprov = i0.ɵɵdefineInjectable({ token: AdminResourcesService, factory: AdminResourcesService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AdminResourcesService, [{
                type: i0.Injectable
            }], function () {
            return [{ type: CoreConfig, decorators: [{
                            type: i0.Inject,
                            args: ['config']
                        }] }, { type: RestUtil }];
        }, null);
    })();

    /**
     * Health check service, no X-API-KEY or X-ACCESS-TOKEN are required
     */
    var HealthCheckService = /** @class */ (function () {
        /**
         * Class constructor
         */
        function HealthCheckService(config, rest) {
            this.config = config;
            this.rest = rest;
            // URL to web api
            this.baseUrl = '/health';
            this.baseUrl = this.config.api + this.baseUrl;
        }
        /**
         * Health check to test service availability
         * @Return: ActionResponse - with version info
         */
        HealthCheckService.prototype.health = function () {
            return this.rest.get("" + this.baseUrl);
        };
        return HealthCheckService;
    }());
    /** @nocollapse */ HealthCheckService.ɵfac = function HealthCheckService_Factory(t) { return new (t || HealthCheckService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
    /** @nocollapse */ HealthCheckService.ɵprov = i0.ɵɵdefineInjectable({ token: HealthCheckService, factory: HealthCheckService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(HealthCheckService, [{
                type: i0.Injectable
            }], function () {
            return [{ type: CoreConfig, decorators: [{
                            type: i0.Inject,
                            args: ['config']
                        }] }, { type: RestUtil }];
        }, null);
    })();

    /**
     * Services for managing club activities - for account administrator only
     * @RequestHeader X-API-KEY The key to identify the application (portal)
     * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
     */
    var UsrActivitiesService = /** @class */ (function () {
        /**
         * Class constructor
         */
        function UsrActivitiesService(config, rest) {
            this.config = config;
            this.rest = rest;
            // URL to web api
            this.baseUrl = '/user/activities';
            this.baseUrl = this.config.api + this.baseUrl;
        }
        /**
         * Get single activity by id
         * @Return: EntityResponse<Activity>
         */
        UsrActivitiesService.prototype.get = function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
        };
        /**
         * Find activities by time range
         * @Return: QueryResponse<Activity>
         */
        UsrActivitiesService.prototype.find = function (from, to, year, month, day) {
            var _a;
            var params = new Array();
            if (from != null) {
                params.push("from=" + from);
            }
            if (to != null) {
                params.push("to=" + to);
            }
            if (year != null) {
                params.push("year=" + year);
            }
            if (month != null) {
                params.push("month=" + month);
            }
            if (day != null) {
                params.push("day=" + day);
            }
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
        };
        return UsrActivitiesService;
    }());
    /** @nocollapse */ UsrActivitiesService.ɵfac = function UsrActivitiesService_Factory(t) { return new (t || UsrActivitiesService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
    /** @nocollapse */ UsrActivitiesService.ɵprov = i0.ɵɵdefineInjectable({ token: UsrActivitiesService, factory: UsrActivitiesService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(UsrActivitiesService, [{
                type: i0.Injectable
            }], function () {
            return [{ type: CoreConfig, decorators: [{
                            type: i0.Inject,
                            args: ['config']
                        }] }, { type: RestUtil }];
        }, null);
    })();

    /**
     * Services for managing kayak resources - for account administrator only
     * @RequestHeader X-API-KEY The key to identify the application (portal)
     * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
     */
    var UserBookingsService = /** @class */ (function () {
        /**
         * Class constructor
         */
        function UserBookingsService(config, rest) {
            this.config = config;
            this.rest = rest;
            // URL to web api
            this.baseUrl = '/user/bookings';
            this.baseUrl = this.config.api + this.baseUrl;
        }
        /**
         * Create new booking
         * @Return: EntityResponse<Booking>
         */
        UserBookingsService.prototype.create = function (body) {
            return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Update booking
         * @Return: EntityResponse<Booking>
         */
        UserBookingsService.prototype.update = function (body) {
            return this.rest.put("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Delete booking
         * @Return: ActionResponse
         */
        UserBookingsService.prototype.delete = function (id) {
            return this.rest.delete(this.baseUrl + "/" + id);
        };
        /**
         * Remove current user from booking
         * @Return: ActionResponse
         */
        UserBookingsService.prototype.removeMe = function (id) {
            return this.rest.delete(this.baseUrl + "/" + id + "/remove-me");
        };
        /**
         * Get single booking by id
         * @Return: EntityResponse<Booking>
         */
        UserBookingsService.prototype.get = function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
        };
        /**
         * Find bookings by filters
         * @Return: QueryResponse<Booking>
         */
        UserBookingsService.prototype.find = function (userId, resourceId, from, to, sort, page, pageSize) {
            var _a;
            var params = new Array();
            if (userId != null) {
                params.push("userId=" + userId);
            }
            if (resourceId != null) {
                params.push("resourceId=" + resourceId);
            }
            if (from != null) {
                params.push("from=" + from);
            }
            if (to != null) {
                params.push("to=" + to);
            }
            if (sort != null) {
                params.push("sort=" + sort);
            }
            if (page != null) {
                params.push("page=" + page);
            }
            if (pageSize != null) {
                params.push("pageSize=" + pageSize);
            }
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
        };
        /**
         * Group my bookings by time period
         * @Return: EntitiesResponse<BookingGroup>
         */
        UserBookingsService.prototype.groups = function (from, to, groupBy) {
            var _a;
            var params = new Array();
            if (from != null) {
                params.push("from=" + from);
            }
            if (to != null) {
                params.push("to=" + to);
            }
            if (groupBy != null) {
                params.push("groupBy=" + groupBy);
            }
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/groups"], params));
        };
        /**
         * Find list of activities groups by time period
         * @Return: EntitiesResponse<BookingGroup>
         */
        UserBookingsService.prototype.activities = function (from, to, groupBy) {
            var _a;
            var params = new Array();
            if (from != null) {
                params.push("from=" + from);
            }
            if (to != null) {
                params.push("to=" + to);
            }
            if (groupBy != null) {
                params.push("groupBy=" + groupBy);
            }
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/activities"], params));
        };
        return UserBookingsService;
    }());
    /** @nocollapse */ UserBookingsService.ɵfac = function UserBookingsService_Factory(t) { return new (t || UserBookingsService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
    /** @nocollapse */ UserBookingsService.ɵprov = i0.ɵɵdefineInjectable({ token: UserBookingsService, factory: UserBookingsService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(UserBookingsService, [{
                type: i0.Injectable
            }], function () {
            return [{ type: CoreConfig, decorators: [{
                            type: i0.Inject,
                            args: ['config']
                        }] }, { type: RestUtil }];
        }, null);
    })();

    /**
     * Services for managing user placements (approved bookings)
     * @RequestHeader X-API-KEY The key to identify the application (portal)
     * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
     */
    var UserPlacementsService = /** @class */ (function () {
        /**
         * Class constructor
         */
        function UserPlacementsService(config, rest) {
            this.config = config;
            this.rest = rest;
            // URL to web api
            this.baseUrl = '/user/placements';
            this.baseUrl = this.config.api + this.baseUrl;
        }
        /**
         * Create new placement
         * @Return: EntityResponse<Placement>
         */
        UserPlacementsService.prototype.create = function (body) {
            return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Update placement
         * @Return: EntityResponse<Placement>
         */
        UserPlacementsService.prototype.update = function (body) {
            return this.rest.put("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Delete placement
         * @Return: ActionResponse
         */
        UserPlacementsService.prototype.delete = function (id) {
            return this.rest.delete(this.baseUrl + "/" + id);
        };
        /**
         * Get single placement by id
         * @Return: EntityResponse<Placement>
         */
        UserPlacementsService.prototype.get = function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
        };
        /**
         * Find placements by filters
         * @Return: QueryResponse<Placement>
         */
        UserPlacementsService.prototype.find = function (userId, resourceId, bookingId, status, sort, page, pageSize) {
            var _a;
            var params = new Array();
            if (userId != null) {
                params.push("userId=" + userId);
            }
            if (resourceId != null) {
                params.push("resourceId=" + resourceId);
            }
            if (bookingId != null) {
                params.push("bookingId=" + bookingId);
            }
            if (status != null) {
                params.push("status=" + status);
            }
            if (sort != null) {
                params.push("sort=" + sort);
            }
            if (page != null) {
                params.push("page=" + page);
            }
            if (pageSize != null) {
                params.push("pageSize=" + pageSize);
            }
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
        };
        return UserPlacementsService;
    }());
    /** @nocollapse */ UserPlacementsService.ɵfac = function UserPlacementsService_Factory(t) { return new (t || UserPlacementsService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
    /** @nocollapse */ UserPlacementsService.ɵprov = i0.ɵɵdefineInjectable({ token: UserPlacementsService, factory: UserPlacementsService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(UserPlacementsService, [{
                type: i0.Injectable
            }], function () {
            return [{ type: CoreConfig, decorators: [{
                            type: i0.Inject,
                            args: ['config']
                        }] }, { type: RestUtil }];
        }, null);
    })();

    /**
     * List of account related actions
     */
    var UserAccountsService = /** @class */ (function () {
        /**
         * Class constructor
         */
        function UserAccountsService(config, rest) {
            this.config = config;
            this.rest = rest;
            // URL to web api
            this.baseUrl = '/user/accounts';
            this.baseUrl = this.config.api + this.baseUrl;
        }
        /**
         * Find list of accounts and filter
         * @Return: QueryResponse<Account>
         */
        UserAccountsService.prototype.find = function (search, type, status, sort, page, pageSize) {
            var _a;
            var params = new Array();
            if (search != null) {
                params.push("search=" + search);
            }
            if (type != null) {
                params.push("type=" + type);
            }
            if (status != null) {
                params.push("status=" + status);
            }
            if (sort != null) {
                params.push("sort=" + sort);
            }
            if (page != null) {
                params.push("page=" + page);
            }
            if (pageSize != null) {
                params.push("pageSize=" + pageSize);
            }
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
        };
        /**
         * Get single account by id
         * @Return: EntityResponse<Account>
         */
        UserAccountsService.prototype.get = function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
        };
        /**
         * Get list of user memberships
         * @Return: EntitiesResponse<Membership>
         */
        UserAccountsService.prototype.getMemberships = function () {
            return this.rest.get(this.baseUrl + "/memberships");
        };
        /**
         * Delete membership by id
         * @Return: ActionResponse
         */
        UserAccountsService.prototype.deleteMemberships = function (id) {
            return this.rest.delete(this.baseUrl + "/memberships/" + id);
        };
        return UserAccountsService;
    }());
    /** @nocollapse */ UserAccountsService.ɵfac = function UserAccountsService_Factory(t) { return new (t || UserAccountsService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
    /** @nocollapse */ UserAccountsService.ɵprov = i0.ɵɵdefineInjectable({ token: UserAccountsService, factory: UserAccountsService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(UserAccountsService, [{
                type: i0.Injectable
            }], function () {
            return [{ type: CoreConfig, decorators: [{
                            type: i0.Inject,
                            args: ['config']
                        }] }, { type: RestUtil }];
        }, null);
    })();

    /**
     * List of all user related actions for account administrator only
     */
    var UsrMembersService = /** @class */ (function () {
        /**
         * Class constructor
         */
        function UsrMembersService(config, rest) {
            this.config = config;
            this.rest = rest;
            // URL to web api
            this.baseUrl = '/user/members';
            this.baseUrl = this.config.api + this.baseUrl;
        }
        /**
         * Get single member by id (including user data)
         * @Return: EntityResponse<MemberUser>
         */
        UsrMembersService.prototype.get = function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
        };
        /**
         * Get my (logged-in user) member info (including user data)
         * @Return: EntityResponse<MemberUser>
         */
        UsrMembersService.prototype.getMy = function () {
            return this.rest.get(this.baseUrl + "/my");
        };
        /**
         * Find list of users and filter the list
         * System user will see all users, Account system will see all users of the account, registered user will get an error.
         * @Return: QueryResponse<MemberUser>
         */
        UsrMembersService.prototype.find = function (search, role, status, sort, page, pageSize) {
            var _a;
            var params = new Array();
            if (search != null) {
                params.push("search=" + search);
            }
            if (role != null) {
                params.push("role=" + role);
            }
            if (status != null) {
                params.push("status=" + status);
            }
            if (sort != null) {
                params.push("sort=" + sort);
            }
            if (page != null) {
                params.push("page=" + page);
            }
            if (pageSize != null) {
                params.push("pageSize=" + pageSize);
            }
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
        };
        return UsrMembersService;
    }());
    /** @nocollapse */ UsrMembersService.ɵfac = function UsrMembersService_Factory(t) { return new (t || UsrMembersService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
    /** @nocollapse */ UsrMembersService.ɵprov = i0.ɵɵdefineInjectable({ token: UsrMembersService, factory: UsrMembersService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(UsrMembersService, [{
                type: i0.Injectable
            }], function () {
            return [{ type: CoreConfig, decorators: [{
                            type: i0.Inject,
                            args: ['config']
                        }] }, { type: RestUtil }];
        }, null);
    })();

    /**
     * Services for user registration and login
     */
    var UserService = /** @class */ (function () {
        /**
         * Class constructor
         */
        function UserService(config, rest) {
            this.config = config;
            this.rest = rest;
            // URL to web api
            this.baseUrl = '/user/user';
            this.baseUrl = this.config.api + this.baseUrl;
        }
        /**
         * Login to the system with user email and password
         * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
         * @Return: EntityResponse<LoginData>
         */
        UserService.prototype.login = function (body) {
            return this.rest.post(this.baseUrl + "/login", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Refresh token (set new expiration time) and associate with new account if required
         * @Return: EntityResponse<LoginData>
         */
        UserService.prototype.refreshToken = function () {
            return this.rest.post(this.baseUrl + "/refresh-token", null);
        };
        /**
         * Verify user by temporary login key
         * @Return: EntityResponse<User>
         */
        UserService.prototype.verifyLoginKey = function (key) {
            var _a;
            var params = new Array();
            if (key != null) {
                params.push("key=" + key);
            }
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/login/verify"], params));
        };
        /**
         * Send verification code by email
         * @Return: ActionResponse
         */
        UserService.prototype.sendVerificationCode = function (body) {
            return this.rest.post(this.baseUrl + "/verify", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Validate verification code and reset password
         * @Return: ActionResponse
         */
        UserService.prototype.resetPassword = function (code) {
            return this.rest.post(this.baseUrl + "/reset-password", typeof code === 'object' ? JSON.stringify(code) : code);
        };
        /**
         * Change password
         * @Return: ActionResponse
         */
        UserService.prototype.changePassword = function (body) {
            return this.rest.post(this.baseUrl + "/change-password", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Check if password was used before (according to password policy)
         * @Return: ActionResponse
         */
        UserService.prototype.checkUnusedPassword = function (body) {
            return this.rest.post(this.baseUrl + "/check-password", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Change current user name
         * @Return: ActionResponse
         */
        UserService.prototype.changeName = function (body) {
            return this.rest.put(this.baseUrl + "/name", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Change current user mobile
         * @Return: ActionResponse
         */
        UserService.prototype.changeMobile = function (body) {
            return this.rest.put(this.baseUrl + "/mobile", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Get all user accessible accounts for the user
         * @Return: EntitiesResponse<Account>
         */
        UserService.prototype.getAccounts = function () {
            return this.rest.get(this.baseUrl + "/accounts");
        };
        /**
         * Refresh token (set new expiration time) and associate with new account if required
         * @Return: EntityResponse<UserAccountInfo>
         */
        UserService.prototype.switchAccount = function (body) {
            return this.rest.post(this.baseUrl + "/switch-account", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Get user profile
         * @Return: EntityResponse<User>
         */
        UserService.prototype.getProfile = function () {
            return this.rest.get(this.baseUrl + "/profile");
        };
        /**
         * Update user profile
         * @Return: EntityResponse<User>
         */
        UserService.prototype.setProfile = function (body) {
            return this.rest.put(this.baseUrl + "/profile", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        return UserService;
    }());
    /** @nocollapse */ UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
    /** @nocollapse */ UserService.ɵprov = i0.ɵɵdefineInjectable({ token: UserService, factory: UserService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(UserService, [{
                type: i0.Injectable
            }], function () {
            return [{ type: CoreConfig, decorators: [{
                            type: i0.Inject,
                            args: ['config']
                        }] }, { type: RestUtil }];
        }, null);
    })();

    /**
     * List of account related actions for system administrator only
     * @RequestHeader X-API-KEY The key to identify the application (console)
     * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
     */
    var SysAccountsService = /** @class */ (function () {
        /**
         * Class constructor
         */
        function SysAccountsService(config, rest) {
            this.config = config;
            this.rest = rest;
            // URL to web api
            this.baseUrl = '/sys/accounts';
            this.baseUrl = this.config.api + this.baseUrl;
        }
        /**
         * Create new account
         * @Return: EntityResponse<Account>
         */
        SysAccountsService.prototype.create = function (body) {
            return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Update existing account in the system
         * @Return: EntityResponse<Account>
         */
        SysAccountsService.prototype.update = function (body) {
            return this.rest.put("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Delete account from the system
         * The account is moved to DELETED mode and will be deleted after 90 days
         * Only account marked as SUSPENDED can be deleted
         * @Return: ActionResponse
         */
        SysAccountsService.prototype.delete = function (id) {
            return this.rest.delete(this.baseUrl + "/" + id);
        };
        /**
         * Delete account immediately without account status restrictions
         * @Return: ActionResponse
         */
        SysAccountsService.prototype.purge = function (id) {
            return this.rest.delete(this.baseUrl + "/purge/" + id);
        };
        /**
         * Reset account - remove all operational data older than the retention time in days (events, status, log ...) but leave configuration data
         * @Return: ActionResponse
         */
        SysAccountsService.prototype.reset = function (id, days) {
            return this.rest.delete(this.baseUrl + "/reset/" + id + "/days/" + days);
        };
        /**
         * Get single account by id
         * @Return: EntityResponse<Account>
         */
        SysAccountsService.prototype.get = function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
        };
        /**
         * Find list of accounts and filter
         * @Return: QueryResponse<Account>
         */
        SysAccountsService.prototype.find = function (search, type, status, sort, page, pageSize) {
            var _a;
            var params = new Array();
            if (search != null) {
                params.push("search=" + search);
            }
            if (type != null) {
                params.push("type=" + type);
            }
            if (status != null) {
                params.push("status=" + status);
            }
            if (sort != null) {
                params.push("sort=" + sort);
            }
            if (page != null) {
                params.push("page=" + page);
            }
            if (pageSize != null) {
                params.push("pageSize=" + pageSize);
            }
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
        };
        return SysAccountsService;
    }());
    /** @nocollapse */ SysAccountsService.ɵfac = function SysAccountsService_Factory(t) { return new (t || SysAccountsService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
    /** @nocollapse */ SysAccountsService.ɵprov = i0.ɵɵdefineInjectable({ token: SysAccountsService, factory: SysAccountsService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SysAccountsService, [{
                type: i0.Injectable
            }], function () {
            return [{ type: CoreConfig, decorators: [{
                            type: i0.Inject,
                            args: ['config']
                        }] }, { type: RestUtil }];
        }, null);
    })();

    /**
     * List of all user related actions for account administrator only
     * @RequestHeader X-API-KEY The key to identify the application (console)
     * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
     */
    var SysUsersService = /** @class */ (function () {
        /**
         * Class constructor
         */
        function SysUsersService(config, rest) {
            this.config = config;
            this.rest = rest;
            // URL to web api
            this.baseUrl = '/sys/users';
            this.baseUrl = this.config.api + this.baseUrl;
        }
        /**
         * Create a new user for the current account
         * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
         * @Return: ActionResponse
         */
        SysUsersService.prototype.create = function (body) {
            return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Update user
         * @Return: EntityResponse<User>
         */
        SysUsersService.prototype.update = function (id, body) {
            return this.rest.put("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Change user name
         * @Return: EntityResponse<User>
         */
        SysUsersService.prototype.changeName = function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id + "/name", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Change user mobile
         * @Return: EntityResponse<User>
         */
        SysUsersService.prototype.changeMobile = function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id + "/mobile", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Change user type
         * @Return: EntityResponse<User>
         */
        SysUsersService.prototype.changeType = function (id, type) {
            return this.rest.put(this.baseUrl + "/" + id + "/type/" + type, null);
        };
        /**
         * Change user status
         * @Return: EntityResponse<User>
         */
        SysUsersService.prototype.changeStatus = function (id, status) {
            return this.rest.put(this.baseUrl + "/" + id + "/status/" + status, null);
        };
        /**
         * Change user default account
         * @Return: EntityResponse<User>
         */
        SysUsersService.prototype.changeDefaultAccount = function (id, accountId) {
            return this.rest.put(this.baseUrl + "/" + id + "/defaultAccount/" + accountId, null);
        };
        /**
         * Reset password for user, generate one-time temporary password
         * @Return: ActionResponse
         */
        SysUsersService.prototype.resetPassword = function (id) {
            return this.rest.post(this.baseUrl + "/" + id + "/reset-password", null);
        };
        /**
         * Delete user from the system
         * @Return: ActionResponse
         */
        SysUsersService.prototype.delete = function (id) {
            return this.rest.delete(this.baseUrl + "/" + id);
        };
        /**
         * Get single user by Id
         * @Return: EntityResponse<User>
         */
        SysUsersService.prototype.get = function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
        };
        /**
         * Find list of users by filter
         * @Return: QueryResponse<User>
         */
        SysUsersService.prototype.find = function (accountId, search, type, status, sort, page, pageSize) {
            var _a;
            var params = new Array();
            if (accountId != null) {
                params.push("accountId=" + accountId);
            }
            if (search != null) {
                params.push("search=" + search);
            }
            if (type != null) {
                params.push("type=" + type);
            }
            if (status != null) {
                params.push("status=" + status);
            }
            if (sort != null) {
                params.push("sort=" + sort);
            }
            if (page != null) {
                params.push("page=" + page);
            }
            if (pageSize != null) {
                params.push("pageSize=" + pageSize);
            }
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
        };
        return SysUsersService;
    }());
    /** @nocollapse */ SysUsersService.ɵfac = function SysUsersService_Factory(t) { return new (t || SysUsersService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
    /** @nocollapse */ SysUsersService.ɵprov = i0.ɵɵdefineInjectable({ token: SysUsersService, factory: SysUsersService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SysUsersService, [{
                type: i0.Injectable
            }], function () {
            return [{ type: CoreConfig, decorators: [{
                            type: i0.Inject,
                            args: ['config']
                        }] }, { type: RestUtil }];
        }, null);
    })();

    var Services = [
        AdminActivitiesService,
        AdminPlaningService,
        AdminResourcesService,
        UsrActivitiesService,
        UserBookingsService,
        UserPlacementsService,
        AdminMembersService,
        UserAccountsService,
        UsrMembersService,
        UserService,
        HealthCheckService,
        SysAccountsService,
        SysUsersService,
    ];

    var CoreLibModule = /** @class */ (function () {
        function CoreLibModule() {
        }
        CoreLibModule.forRoot = function (config) {
            // console.log(config);
            return {
                ngModule: CoreLibModule,
                providers: __spread([
                    { provide: 'config', useValue: config },
                    RestUtil
                ], Services)
            };
        };
        return CoreLibModule;
    }());
    /** @nocollapse */ CoreLibModule.ɵmod = i0.ɵɵdefineNgModule({ type: CoreLibModule });
    /** @nocollapse */ CoreLibModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CoreLibModule_Factory(t) { return new (t || CoreLibModule)(); }, imports: [[common.CommonModule, i1.HttpClientModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CoreLibModule, { imports: [common.CommonModule, i1.HttpClientModule] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CoreLibModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [common.CommonModule, i1.HttpClientModule]
                    }]
            }], null, null);
    })();

    /* Public API Surface of ng-core-lib */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AbsoluteTimeFrame = AbsoluteTimeFrame;
    exports.Account = Account;
    exports.AccountIdRequest = AccountIdRequest;
    exports.AccountRole = AccountRole;
    exports.AccountSettings = AccountSettings;
    exports.ActionResponse = ActionResponse;
    exports.Activity = Activity;
    exports.ActivityBookingGroup = ActivityBookingGroup;
    exports.ActivityIdRequest = ActivityIdRequest;
    exports.AdminActivitiesService = AdminActivitiesService;
    exports.AdminActivityBulkCreateRequest = AdminActivityBulkCreateRequest;
    exports.AdminActivityDefaultCreateRequest = AdminActivityDefaultCreateRequest;
    exports.AdminActivityDefaultDeleteRequest = AdminActivityDefaultDeleteRequest;
    exports.AdminActivityFindFreeResourcesRequest = AdminActivityFindFreeResourcesRequest;
    exports.AdminActivityFindRequest = AdminActivityFindRequest;
    exports.AdminActivityPlaningRequest = AdminActivityPlaningRequest;
    exports.AdminCreateActivityRequest = AdminCreateActivityRequest;
    exports.AdminCreateResourceRequest = AdminCreateResourceRequest;
    exports.AdminDailyPlaningRequest = AdminDailyPlaningRequest;
    exports.AdminFindFreeResourcesRequest = AdminFindFreeResourcesRequest;
    exports.AdminMembersFindRequest = AdminMembersFindRequest;
    exports.AdminMembersService = AdminMembersService;
    exports.AdminPlaningAssignResourceRequest = AdminPlaningAssignResourceRequest;
    exports.AdminPlaningDeleteActivityRequest = AdminPlaningDeleteActivityRequest;
    exports.AdminPlaningDeleteBookingRequest = AdminPlaningDeleteBookingRequest;
    exports.AdminPlaningMergeBookingsRequest = AdminPlaningMergeBookingsRequest;
    exports.AdminPlaningService = AdminPlaningService;
    exports.AdminPlaningSplitBookingRequest = AdminPlaningSplitBookingRequest;
    exports.AdminPlaningUnAssignResourceRequest = AdminPlaningUnAssignResourceRequest;
    exports.AdminResourceBulkCreateRequest = AdminResourceBulkCreateRequest;
    exports.AdminResourceFindRequest = AdminResourceFindRequest;
    exports.AdminResourcesService = AdminResourcesService;
    exports.AdminUpdateActivityRequest = AdminUpdateActivityRequest;
    exports.AdminUpdateResourceRequest = AdminUpdateResourceRequest;
    exports.ApiKey = ApiKey;
    exports.AuditLog = AuditLog;
    exports.BaseEntity = BaseEntity;
    exports.Booking = Booking;
    exports.BookingGroup = BookingGroup;
    exports.BookingIdRequest = BookingIdRequest;
    exports.BookingRequest = BookingRequest;
    exports.BookingRequestIdRequest = BookingRequestIdRequest;
    exports.ChangePasswordRequest = ChangePasswordRequest;
    exports.CoreConfig = CoreConfig;
    exports.CoreLibModule = CoreLibModule;
    exports.EmptyRequest = EmptyRequest;
    exports.EmptyResponse = EmptyResponse;
    exports.EntitiesResponse = EntitiesResponse;
    exports.EntitiesResponseOfAccount = EntitiesResponseOfAccount;
    exports.EntitiesResponseOfActivity = EntitiesResponseOfActivity;
    exports.EntitiesResponseOfActivityBookingGroup = EntitiesResponseOfActivityBookingGroup;
    exports.EntitiesResponseOfBooking = EntitiesResponseOfBooking;
    exports.EntitiesResponseOfBookingGroup = EntitiesResponseOfBookingGroup;
    exports.EntitiesResponseOfBookingRequest = EntitiesResponseOfBookingRequest;
    exports.EntitiesResponseOfMembership = EntitiesResponseOfMembership;
    exports.EntitiesResponseOfPlacement = EntitiesResponseOfPlacement;
    exports.EntitiesResponseOfResource = EntitiesResponseOfResource;
    exports.EntityResponse = EntityResponse;
    exports.EntityResponseOfAccount = EntityResponseOfAccount;
    exports.EntityResponseOfActivity = EntityResponseOfActivity;
    exports.EntityResponseOfBooking = EntityResponseOfBooking;
    exports.EntityResponseOfBookingRequest = EntityResponseOfBookingRequest;
    exports.EntityResponseOfLoginData = EntityResponseOfLoginData;
    exports.EntityResponseOfMember = EntityResponseOfMember;
    exports.EntityResponseOfMemberUser = EntityResponseOfMemberUser;
    exports.EntityResponseOfPlacement = EntityResponseOfPlacement;
    exports.EntityResponseOfPlaning = EntityResponseOfPlaning;
    exports.EntityResponseOfResource = EntityResponseOfResource;
    exports.EntityResponseOfUser = EntityResponseOfUser;
    exports.EntityResponseOfUserAccountInfo = EntityResponseOfUserAccountInfo;
    exports.Feature = Feature;
    exports.FeaturesGroup = FeaturesGroup;
    exports.HealthCheckService = HealthCheckService;
    exports.Incident = Incident;
    exports.LoginData = LoginData;
    exports.LoginParams = LoginParams;
    exports.Member = Member;
    exports.MemberIdRequest = MemberIdRequest;
    exports.MemberRegistration = MemberRegistration;
    exports.MemberUser = MemberUser;
    exports.MembersBulkImportRequest = MembersBulkImportRequest;
    exports.MembersFindRequest = MembersFindRequest;
    exports.MembersServiceInviteRequest = MembersServiceInviteRequest;
    exports.MembersServiceUpdateRequest = MembersServiceUpdateRequest;
    exports.Membership = Membership;
    exports.MembershipIdRequest = MembershipIdRequest;
    exports.MembershipsRequest = MembershipsRequest;
    exports.Placement = Placement;
    exports.PlacementIdRequest = PlacementIdRequest;
    exports.Planing = Planing;
    exports.QueryResponse = QueryResponse;
    exports.QueryResponseOfAccount = QueryResponseOfAccount;
    exports.QueryResponseOfActivity = QueryResponseOfActivity;
    exports.QueryResponseOfBooking = QueryResponseOfBooking;
    exports.QueryResponseOfBookingRequest = QueryResponseOfBookingRequest;
    exports.QueryResponseOfMemberUser = QueryResponseOfMemberUser;
    exports.QueryResponseOfMembership = QueryResponseOfMembership;
    exports.QueryResponseOfPlacement = QueryResponseOfPlacement;
    exports.QueryResponseOfResource = QueryResponseOfResource;
    exports.QueryResponseOfUser = QueryResponseOfUser;
    exports.RecurrentTimeFrame = RecurrentTimeFrame;
    exports.Resource = Resource;
    exports.ResourceIdRequest = ResourceIdRequest;
    exports.RestUtil = RestUtil;
    exports.Services = Services;
    exports.StreamResponse = StreamResponse;
    exports.StringKeyValue = StringKeyValue;
    exports.SysAccountsService = SysAccountsService;
    exports.SysAdminAccountCreateRequest = SysAdminAccountCreateRequest;
    exports.SysAdminAccountResetRequest = SysAdminAccountResetRequest;
    exports.SysAdminAccountUpdateRequest = SysAdminAccountUpdateRequest;
    exports.SysAdminAccountsFindRequest = SysAdminAccountsFindRequest;
    exports.SysUsersService = SysUsersService;
    exports.TimeFrame = TimeFrame;
    exports.TokenRequest = TokenRequest;
    exports.User = User;
    exports.UserAccountInfo = UserAccountInfo;
    exports.UserAccountsFindRequest = UserAccountsFindRequest;
    exports.UserAccountsService = UserAccountsService;
    exports.UserBookingFindRequest = UserBookingFindRequest;
    exports.UserBookingGroupRequest = UserBookingGroupRequest;
    exports.UserBookingRequestFindRequest = UserBookingRequestFindRequest;
    exports.UserBookingsService = UserBookingsService;
    exports.UserByEmailRequest = UserByEmailRequest;
    exports.UserCreateBookingRequest = UserCreateBookingRequest;
    exports.UserCreateBookingRequestRequest = UserCreateBookingRequestRequest;
    exports.UserCreatePlacementRequest = UserCreatePlacementRequest;
    exports.UserIdRequest = UserIdRequest;
    exports.UserIdsRequest = UserIdsRequest;
    exports.UserInvitation = UserInvitation;
    exports.UserPlacementFindRequest = UserPlacementFindRequest;
    exports.UserPlacementsService = UserPlacementsService;
    exports.UserRegistration = UserRegistration;
    exports.UserService = UserService;
    exports.UserServiceChangeMobileRequest = UserServiceChangeMobileRequest;
    exports.UserServiceChangeNameRequest = UserServiceChangeNameRequest;
    exports.UserServiceChangePasswordRequest = UserServiceChangePasswordRequest;
    exports.UserServiceCheckPasswordRequest = UserServiceCheckPasswordRequest;
    exports.UserServiceLoginRequest = UserServiceLoginRequest;
    exports.UserServiceResetPasswordRequest = UserServiceResetPasswordRequest;
    exports.UserServiceSendVerificationRequest = UserServiceSendVerificationRequest;
    exports.UserServiceSwitchAccountRequest = UserServiceSwitchAccountRequest;
    exports.UserServiceUpdateRequest = UserServiceUpdateRequest;
    exports.UserServiceVerifyLoginRequest = UserServiceVerifyLoginRequest;
    exports.UserTokenRequest = UserTokenRequest;
    exports.UserUpdateBookingRequest = UserUpdateBookingRequest;
    exports.UserUpdateBookingRequestRequest = UserUpdateBookingRequestRequest;
    exports.UserUpdatePlacementRequest = UserUpdatePlacementRequest;
    exports.UsersServiceChangeDefaultAccountRequest = UsersServiceChangeDefaultAccountRequest;
    exports.UsersServiceChangeMobileRequest = UsersServiceChangeMobileRequest;
    exports.UsersServiceChangeNameRequest = UsersServiceChangeNameRequest;
    exports.UsersServiceChangeRoleRequest = UsersServiceChangeRoleRequest;
    exports.UsersServiceChangeStatusRequest = UsersServiceChangeStatusRequest;
    exports.UsersServiceChangeTypeRequest = UsersServiceChangeTypeRequest;
    exports.UsersServiceCreateRequest = UsersServiceCreateRequest;
    exports.UsersServiceExportRequest = UsersServiceExportRequest;
    exports.UsersServiceFindRequest = UsersServiceFindRequest;
    exports.UsersServiceInviteRequest = UsersServiceInviteRequest;
    exports.UsersServiceSetRolesRequest = UsersServiceSetRolesRequest;
    exports.UsersServiceUpdateRequest = UsersServiceUpdateRequest;
    exports.UsrActivitiesService = UsrActivitiesService;
    exports.UsrMembersService = UsrMembersService;
    exports.Verification = Verification;
    exports.WebSocketMessageHeader = WebSocketMessageHeader;
    exports.WeightRange = WeightRange;
    exports.getToken = getToken;
    exports.removeToken = removeToken;
    exports.setToken = setToken;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=mottyc-ng-core-lib.umd.js.map
