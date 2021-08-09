(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@mottyc/ng-core-lib', ['exports', '@angular/core', '@angular/common/http', 'rxjs/operators', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.mottyc = global.mottyc || {}, global.mottyc['ng-core-lib'] = {}), global.ng.core, global.ng.common.http, global.rxjs.operators, global.ng.common));
}(this, (function (exports, i0, i1, operators, common) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

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
     *  Count data point
    */
    var CountDataPoint = /** @class */ (function () {
        function CountDataPoint(timestamp, label, value) {
            this.timestamp = timestamp;
            this.label = label;
            this.value = value;
        }
        return CountDataPoint;
    }());

    /*
     *  Login data (returned by the API after successful login)
    */
    var LoginData = /** @class */ (function () {
        function LoginData(accessToken, userId, accountId, accountRole, memberStatus, userName, userEmail, userType, userStatus, changePassword, messages) {
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
            this.messages = messages;
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
     *  MemberUsage is a time period statistics about the number of bookings
    */
    var MemberUsage = /** @class */ (function () {
        function MemberUsage(id, name, total, sun, mon, tue, wed, thu, fri, sat, absences, accidents) {
            this.id = id;
            this.name = name;
            this.total = total;
            this.sun = sun;
            this.mon = mon;
            this.tue = tue;
            this.wed = wed;
            this.thu = thu;
            this.fri = fri;
            this.sat = sat;
            this.absences = absences;
            this.accidents = accidents;
        }
        return MemberUsage;
    }());

    /*
     *  Recurrent activity
    */
    var RecurrentActivity = /** @class */ (function () {
        function RecurrentActivity(dayOfWeek, startTime, endTime, name, resourceFilter, roleFilter, limit) {
            this.dayOfWeek = dayOfWeek;
            this.startTime = startTime;
            this.endTime = endTime;
            this.name = name;
            this.resourceFilter = resourceFilter;
            this.roleFilter = roleFilter;
            this.limit = limit;
        }
        return RecurrentActivity;
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
     *  Key Value string-int tuple
    */
    var StringIntValue = /** @class */ (function () {
        function StringIntValue(key, value) {
            this.key = key;
            this.value = value;
        }
        return StringIntValue;
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
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
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
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || from);
    }
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
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
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
     *  Actual activity for booking
    */
    var Actual = /** @class */ (function (_super) {
        __extends(Actual, _super);
        function Actual() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Actual;
    }(BaseEntity));

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
     *  Notification
    */
    var Notification = /** @class */ (function (_super) {
        __extends(Notification, _super);
        function Notification() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Notification;
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
     *  Registration
     *  A record for a user indicating if he showed up or missed the booking
    */
    var Registration = /** @class */ (function (_super) {
        __extends(Registration, _super);
        function Registration() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Registration;
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
     *  Usage is a daily statistics about the number of participants and resource usage
     *  Id is the day Id (in the form of: YYYYMMDD000000)
    */
    var Usage = /** @class */ (function (_super) {
        __extends(Usage, _super);
        function Usage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Usage;
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
    exports.AccountRoleCode = void 0;
    (function (AccountRoleCode) {
        // Undefined [0] 
        AccountRoleCode[AccountRoleCode["UNDEFINED"] = 0] = "UNDEFINED";
        // Account administrator can perform all operations [1] 
        AccountRoleCode[AccountRoleCode["ADMIN"] = 1] = "ADMIN";
        // Part of a club staff [2] 
        AccountRoleCode[AccountRoleCode["STAFF"] = 2] = "STAFF";
        // Club Member [4] 
        AccountRoleCode[AccountRoleCode["MEMBER"] = 4] = "MEMBER";
        // Olympic team [8] 
        AccountRoleCode[AccountRoleCode["TEAM"] = 8] = "TEAM";
        // Paralympic team [16] 
        AccountRoleCode[AccountRoleCode["PARA"] = 16] = "PARA";
        // Club guest [32] 
        AccountRoleCode[AccountRoleCode["GUEST"] = 32] = "GUEST";
    })(exports.AccountRoleCode || (exports.AccountRoleCode = {}));

    /*
       Account status code
    */
    exports.AccountStatusCode = void 0;
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
    exports.AccountTypeCode = void 0;
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
    exports.ActivityStatusCode = void 0;
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
    exports.BookingStatusCode = void 0;
    (function (BookingStatusCode) {
        // Undefined [0] 
        BookingStatusCode[BookingStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
        // Pending booking request [1] 
        BookingStatusCode[BookingStatusCode["PENDING"] = 1] = "PENDING";
        // Approved booking [2] 
        BookingStatusCode[BookingStatusCode["APPROVED"] = 2] = "APPROVED";
        // Completed booking [3] 
        BookingStatusCode[BookingStatusCode["COMPLETED"] = 3] = "COMPLETED";
        // User absence from booking [4] 
        BookingStatusCode[BookingStatusCode["ABSENCE"] = 4] = "ABSENCE";
        // User was involved in an accident [5] 
        BookingStatusCode[BookingStatusCode["ACCIDENT"] = 5] = "ACCIDENT";
    })(exports.BookingStatusCode || (exports.BookingStatusCode = {}));

    /*
       Day of week code
    */
    exports.DayOfWeekCode = void 0;
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
    exports.EntityTypeCode = void 0;
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
    exports.FeatureCode = void 0;
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
    exports.KayakTypeCode = void 0;
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
    exports.MemberStatusCode = void 0;
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
       Account type code
    */
    exports.NotificationTypeCode = void 0;
    (function (NotificationTypeCode) {
        // Undefined [0] 
        NotificationTypeCode[NotificationTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
        // Message (icon: email) [1] 
        NotificationTypeCode[NotificationTypeCode["MESSAGE"] = 1] = "MESSAGE";
        // Warning (icon: warning) [2] 
        NotificationTypeCode[NotificationTypeCode["WARNING"] = 2] = "WARNING";
        // Congrats (icon: local_florist) [3] 
        NotificationTypeCode[NotificationTypeCode["CONGRATS"] = 3] = "CONGRATS";
    })(exports.NotificationTypeCode || (exports.NotificationTypeCode = {}));

    /*
       Placement status code
    */
    exports.PlacementStatusCode = void 0;
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
    exports.ResourceClassCode = void 0;
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
    exports.ResourceStatusCode = void 0;
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
    exports.ResourceTypeMask = void 0;
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
    exports.RowingBoatTypeCode = void 0;
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
    exports.TimeUnitCode = void 0;
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
       User gender code
    */
    exports.UserGenderCode = void 0;
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
    exports.UserStatusCode = void 0;
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
    exports.UserTypeCode = void 0;
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
    var AdminAccountSettingsUpdateRequest = /** @class */ (function () {
        function AdminAccountSettingsUpdateRequest(body) {
            this.body = body;
        }
        return AdminAccountSettingsUpdateRequest;
    }());

    /*
    */
    var AdminActivityBulkCreateRequest = /** @class */ (function () {
        function AdminActivityBulkCreateRequest(body) {
            this.body = body;
        }
        return AdminActivityBulkCreateRequest;
    }());

    /*
    */
    var AdminActivityDefaultCreateRequest = /** @class */ (function () {
        function AdminActivityDefaultCreateRequest(year, month, day) {
            this.year = year;
            this.month = month;
            this.day = day;
        }
        return AdminActivityDefaultCreateRequest;
    }());

    /*
    */
    var AdminActivityDefaultDeleteRequest = /** @class */ (function () {
        function AdminActivityDefaultDeleteRequest(year, month, day) {
            this.year = year;
            this.month = month;
            this.day = day;
        }
        return AdminActivityDefaultDeleteRequest;
    }());

    /*
    */
    var AdminActivityFindFreeResourcesRequest = /** @class */ (function () {
        function AdminActivityFindFreeResourcesRequest(id, resType, weight, forUseBy) {
            this.id = id;
            this.resType = resType;
            this.weight = weight;
            this.forUseBy = forUseBy;
        }
        return AdminActivityFindFreeResourcesRequest;
    }());

    /*
    */
    var AdminActivityFindRequest = /** @class */ (function () {
        function AdminActivityFindRequest(from, to, year, month, day, total) {
            this.from = from;
            this.to = to;
            this.year = year;
            this.month = month;
            this.day = day;
            this.total = total;
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
    var AdminBookingHistoryRequest = /** @class */ (function () {
        function AdminBookingHistoryRequest(id, resourceId, from, to, sort) {
            this.id = id;
            this.resourceId = resourceId;
            this.from = from;
            this.to = to;
            this.sort = sort;
        }
        return AdminBookingHistoryRequest;
    }());

    /*
    */
    var AdminBookingMonthHistoryRequest = /** @class */ (function () {
        function AdminBookingMonthHistoryRequest(id, resourceId, year, month, day, sort) {
            this.id = id;
            this.resourceId = resourceId;
            this.year = year;
            this.month = month;
            this.day = day;
            this.sort = sort;
        }
        return AdminBookingMonthHistoryRequest;
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
    var AdminDailyPlaningExportRequest = /** @class */ (function () {
        function AdminDailyPlaningExportRequest(day, lang) {
            this.day = day;
            this.lang = lang;
        }
        return AdminDailyPlaningExportRequest;
    }());

    /*
    */
    var AdminDailyPlaningRequest = /** @class */ (function () {
        function AdminDailyPlaningRequest(day, resFilter, userFilter) {
            this.day = day;
            this.resFilter = resFilter;
            this.userFilter = userFilter;
        }
        return AdminDailyPlaningRequest;
    }());

    /*
    */
    var AdminDailyRegistrationRequest = /** @class */ (function () {
        function AdminDailyRegistrationRequest(day, filter, missingOnly) {
            this.day = day;
            this.filter = filter;
            this.missingOnly = missingOnly;
        }
        return AdminDailyRegistrationRequest;
    }());

    /*
    */
    var AdminDailyResourcesRequest = /** @class */ (function () {
        function AdminDailyResourcesRequest(day) {
            this.day = day;
        }
        return AdminDailyResourcesRequest;
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
    var AdminMembersExportCsvRequest = /** @class */ (function () {
        function AdminMembersExportCsvRequest(search, role, status, sort) {
            this.search = search;
            this.role = role;
            this.status = status;
            this.sort = sort;
        }
        return AdminMembersExportCsvRequest;
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
    var AdminMembersImportCsvRequest = /** @class */ (function () {
        function AdminMembersImportCsvRequest(csvFile) {
            this.csvFile = csvFile;
        }
        return AdminMembersImportCsvRequest;
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
    var AdminReportAbsenceRequest = /** @class */ (function () {
        function AdminReportAbsenceRequest(id, userId) {
            this.id = id;
            this.userId = userId;
        }
        return AdminReportAbsenceRequest;
    }());

    /*
    */
    var AdminReportIncidentRequest = /** @class */ (function () {
        function AdminReportIncidentRequest(id, userId, body) {
            this.id = id;
            this.userId = userId;
            this.body = body;
        }
        return AdminReportIncidentRequest;
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
    var AdminResourceExportCsvRequest = /** @class */ (function () {
        function AdminResourceExportCsvRequest(search, resourceClass, resourceType, status, forUseBy, sort) {
            this.search = search;
            this.resourceClass = resourceClass;
            this.resourceType = resourceType;
            this.status = status;
            this.forUseBy = forUseBy;
            this.sort = sort;
        }
        return AdminResourceExportCsvRequest;
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
    var AdminResourceHistoryRequest = /** @class */ (function () {
        function AdminResourceHistoryRequest(id, from, to, sort) {
            this.id = id;
            this.from = from;
            this.to = to;
            this.sort = sort;
        }
        return AdminResourceHistoryRequest;
    }());

    /*
    */
    var AdminResourceImportCsvRequest = /** @class */ (function () {
        function AdminResourceImportCsvRequest(csvFile) {
            this.csvFile = csvFile;
        }
        return AdminResourceImportCsvRequest;
    }());

    /*
    */
    var AdminResourceMonthHistoryRequest = /** @class */ (function () {
        function AdminResourceMonthHistoryRequest(id, year, month, day, sort) {
            this.id = id;
            this.year = year;
            this.month = month;
            this.day = day;
            this.sort = sort;
        }
        return AdminResourceMonthHistoryRequest;
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
    var AdminUpdateRegistrationRequest = /** @class */ (function () {
        function AdminUpdateRegistrationRequest(body) {
            this.body = body;
        }
        return AdminUpdateRegistrationRequest;
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
    var DistributionRequest = /** @class */ (function () {
        function DistributionRequest(from, to) {
            this.from = from;
            this.to = to;
        }
        return DistributionRequest;
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
     *  EntitiesResponse<Actual>
    */
    var EntitiesResponseOfActual = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfActual, _super);
        function EntitiesResponseOfActual() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfActual;
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
    var EntitiesResponseOfCountDataPoint = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfCountDataPoint, _super);
        function EntitiesResponseOfCountDataPoint() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfCountDataPoint;
    }(EntityResponse));

    /*
    */
    var EntitiesResponseOfMemberUsage = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfMemberUsage, _super);
        function EntitiesResponseOfMemberUsage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfMemberUsage;
    }(EntityResponse));

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
    var EntitiesResponseOfNotification = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfNotification, _super);
        function EntitiesResponseOfNotification() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfNotification;
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
    */
    var EntitiesResponseOfStringIntValue = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfStringIntValue, _super);
        function EntitiesResponseOfStringIntValue() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfStringIntValue;
    }(EntitiesResponse));

    /*
     *  EntitiesResponse<StringKeyValue>
    */
    var EntitiesResponseOfStringKeyValue = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfStringKeyValue, _super);
        function EntitiesResponseOfStringKeyValue() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfStringKeyValue;
    }(EntitiesResponse));

    /*
    */
    var EntitiesResponseOfUsage = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfUsage, _super);
        function EntitiesResponseOfUsage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfUsage;
    }(EntityResponse));

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
    var EntityResponseOfAccountSettings = /** @class */ (function (_super) {
        __extends(EntityResponseOfAccountSettings, _super);
        function EntityResponseOfAccountSettings() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfAccountSettings;
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
    var FindNotificationsRequest = /** @class */ (function () {
        function FindNotificationsRequest(search, type, sort, page, pageSize) {
            this.search = search;
            this.type = type;
            this.sort = sort;
            this.page = page;
            this.pageSize = pageSize;
        }
        return FindNotificationsRequest;
    }());

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
    var MembersCountOvertimeRequest = /** @class */ (function () {
        function MembersCountOvertimeRequest(from, to) {
            this.from = from;
            this.to = to;
        }
        return MembersCountOvertimeRequest;
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
    var MonthlyCountRequest = /** @class */ (function () {
        function MonthlyCountRequest(year, month) {
            this.year = year;
            this.month = month;
        }
        return MonthlyCountRequest;
    }());

    /*
    */
    var NotificationIdRequest = /** @class */ (function () {
        function NotificationIdRequest(id) {
            this.id = id;
        }
        return NotificationIdRequest;
    }());

    /*
    */
    var NotifyActivityUsersRequest = /** @class */ (function () {
        function NotifyActivityUsersRequest(activityId, type, from, to, body) {
            this.activityId = activityId;
            this.type = type;
            this.from = from;
            this.to = to;
            this.body = body;
        }
        return NotifyActivityUsersRequest;
    }());

    /*
    */
    var NotifyAllMembersRequest = /** @class */ (function () {
        function NotifyAllMembersRequest(type, from, to, body) {
            this.type = type;
            this.from = from;
            this.to = to;
            this.body = body;
        }
        return NotifyAllMembersRequest;
    }());

    /*
    */
    var NotifyBookingUsersRequest = /** @class */ (function () {
        function NotifyBookingUsersRequest(bookingId, type, from, to, body) {
            this.bookingId = bookingId;
            this.type = type;
            this.from = from;
            this.to = to;
            this.body = body;
        }
        return NotifyBookingUsersRequest;
    }());

    /*
    */
    var NotifyDailyUsersRequest = /** @class */ (function () {
        function NotifyDailyUsersRequest(dayId, type, from, to, body) {
            this.dayId = dayId;
            this.type = type;
            this.from = from;
            this.to = to;
            this.body = body;
        }
        return NotifyDailyUsersRequest;
    }());

    /*
    */
    var NotifyUserRequest = /** @class */ (function () {
        function NotifyUserRequest(userId, type, from, to, body) {
            this.userId = userId;
            this.type = type;
            this.from = from;
            this.to = to;
            this.body = body;
        }
        return NotifyUserRequest;
    }());

    /*
    */
    var PeriodCountRequest = /** @class */ (function () {
        function PeriodCountRequest(from, to) {
            this.from = from;
            this.to = to;
        }
        return PeriodCountRequest;
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
    var QueryResponseOfNotification = /** @class */ (function (_super) {
        __extends(QueryResponseOfNotification, _super);
        function QueryResponseOfNotification() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfNotification;
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
    */
    var ResourcesCountOvertimeRequest = /** @class */ (function () {
        function ResourcesCountOvertimeRequest(from, to) {
            this.from = from;
            this.to = to;
        }
        return ResourcesCountOvertimeRequest;
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
    var UserBookingHistoryRequest = /** @class */ (function () {
        function UserBookingHistoryRequest(resourceId, year, month, day, sort) {
            this.resourceId = resourceId;
            this.year = year;
            this.month = month;
            this.day = day;
            this.sort = sort;
        }
        return UserBookingHistoryRequest;
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
    var UserServiceReadNotificationRequest = /** @class */ (function () {
        function UserServiceReadNotificationRequest(id) {
            this.id = id;
        }
        return UserServiceReadNotificationRequest;
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
    /** @nocollapse */ RestUtil.ɵfac = function RestUtil_Factory(t) { return new (t || RestUtil)(i0__namespace.ɵɵinject(i1__namespace.HttpClient)); };
    /** @nocollapse */ RestUtil.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: RestUtil, factory: RestUtil.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(RestUtil, [{
                type: i0.Injectable
            }], function () { return [{ type: i1__namespace.HttpClient }]; }, null);
    })();

    var CoreConfig = /** @class */ (function () {
        function CoreConfig() {
        }
        return CoreConfig;
    }());

    /**
     * List of account related actions for account administrator only
     * @RequestHeader X-API-KEY The key to identify the application (console)
     * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
     */
    var AdminAccountService = /** @class */ (function () {
        /**
         * Class constructor
         */
        function AdminAccountService(config, rest) {
            this.config = config;
            this.rest = rest;
            // URL to web api
            this.baseUrl = '/admin/account';
            this.baseUrl = this.config.api + this.baseUrl;
        }
        /**
         * Get account settings
         * @Return: EntityResponse<AccountSettings>
         */
        AdminAccountService.prototype.getSettings = function () {
            return this.rest.get(this.baseUrl + "/settings");
        };
        /**
         * Update existing account settings in the system
         * @Return: EntityResponse<AccountSettings>
         */
        AdminAccountService.prototype.updateSettings = function (body) {
            return this.rest.put(this.baseUrl + "/settings", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        return AdminAccountService;
    }());
    /** @nocollapse */ AdminAccountService.ɵfac = function AdminAccountService_Factory(t) { return new (t || AdminAccountService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
    /** @nocollapse */ AdminAccountService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: AdminAccountService, factory: AdminAccountService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AdminAccountService, [{
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
        AdminActivitiesService.prototype.find = function (from, to, year, month, day, total) {
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
            if (total != null) {
                params.push("total=" + total);
            }
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
        };
        /**
         * Find list of free resources for activity by filter
         * @Return: EntitiesResponse<Resource>
         */
        AdminActivitiesService.prototype.findFreeResources = function (id, resType, weight, forUseBy) {
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/" + id + "/resources"], params));
        };
        /**
         * Create bulk set of activities
         * @Return: ActionResponse
         */
        AdminActivitiesService.prototype.createBulk = function (body) {
            return this.rest.post(this.baseUrl + "/bulk", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Create account default set of activities per month
         * @Return: ActionResponse
         */
        AdminActivitiesService.prototype.createDefault = function (year, month, day) {
            var _a;
            var params = new Array();
            if (year != null) {
                params.push("year=" + year);
            }
            if (month != null) {
                params.push("month=" + month);
            }
            if (day != null) {
                params.push("day=" + day);
            }
            return (_a = this.rest).post.apply(_a, __spread([this.baseUrl + "/default", null], params));
        };
        /**
         * Clear all month activities
         * @Return: ActionResponse
         */
        AdminActivitiesService.prototype.clearDefault = function (year, month, day) {
            var _a;
            var params = new Array();
            if (year != null) {
                params.push("year=" + year);
            }
            if (month != null) {
                params.push("month=" + month);
            }
            if (day != null) {
                params.push("day=" + day);
            }
            return (_a = this.rest).delete.apply(_a, __spread([this.baseUrl + "/default"], params));
        };
        return AdminActivitiesService;
    }());
    /** @nocollapse */ AdminActivitiesService.ɵfac = function AdminActivitiesService_Factory(t) { return new (t || AdminActivitiesService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
    /** @nocollapse */ AdminActivitiesService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: AdminActivitiesService, factory: AdminActivitiesService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AdminActivitiesService, [{
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
         * Reset password for member
         * The result is a temporary password
         * @Return: ActionResponse
         */
        AdminMembersService.prototype.resetPassword = function (id) {
            return this.rest.post(this.baseUrl + "/" + id + "/reset-password", null);
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
            return this.rest.post(this.baseUrl + "/bulk-import", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Find list of all bookings that the user is registered to per month
         * @Return: QueryResponse<Booking>
         */
        AdminMembersService.prototype.findMemberMonthHistory = function (id, resourceId, year, month, day, sort) {
            var _a;
            var params = new Array();
            if (resourceId != null) {
                params.push("resourceId=" + resourceId);
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
            if (sort != null) {
                params.push("sort=" + sort);
            }
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/" + id + "/month-history"], params));
        };
        /**
         * Find list of all bookings that the user is registered to in a time period
         * @Return: QueryResponse<Booking>
         */
        AdminMembersService.prototype.findMemberHistory = function (id, resourceId, from, to, sort) {
            var _a;
            var params = new Array();
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/" + id + "/history"], params));
        };
        /**
         * Import members from CSV file
         * @return ActionResponse
         */
        AdminMembersService.prototype.importCsv = function () {
            return this.rest.post(this.baseUrl + "/import/csv", null);
        };
        /**
         * Export members to CSV file
         * @return StreamContent
         */
        AdminMembersService.prototype.exportCsv = function (search, role, status, sort) {
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
            return (_a = this.rest).download.apply(_a, __spread(["admin-members", this.baseUrl + "/export/csv"], params));
        };
        return AdminMembersService;
    }());
    /** @nocollapse */ AdminMembersService.ɵfac = function AdminMembersService_Factory(t) { return new (t || AdminMembersService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
    /** @nocollapse */ AdminMembersService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: AdminMembersService, factory: AdminMembersService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AdminMembersService, [{
                type: i0.Injectable
            }], function () {
            return [{ type: CoreConfig, decorators: [{
                            type: i0.Inject,
                            args: ['config']
                        }] }, { type: RestUtil }];
        }, null);
    })();

    /**
     * List of all notifications actions for account administrator only
     */
    var AdminNotificationsService = /** @class */ (function () {
        /**
         * Class constructor
         */
        function AdminNotificationsService(config, rest) {
            this.config = config;
            this.rest = rest;
            // URL to web api
            this.baseUrl = '/admin/notifications';
            this.baseUrl = this.config.api + this.baseUrl;
        }
        /**
         * Send Create new notification for user
         * @Return: ActionResponse
         */
        AdminNotificationsService.prototype.notifyUser = function (userId, type, from, to, body) {
            var _a;
            var params = new Array();
            if (userId != null) {
                params.push("userId=" + userId);
            }
            if (type != null) {
                params.push("type=" + type);
            }
            if (from != null) {
                params.push("from=" + from);
            }
            if (to != null) {
                params.push("to=" + to);
            }
            return (_a = this.rest).post.apply(_a, __spread(["" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body], params));
        };
        /**
         * Create notifications for all users in booking
         * @Return: ActionResponse
         */
        AdminNotificationsService.prototype.notifyBookingUsers = function (bookingId, type, from, to, body) {
            var _a;
            var params = new Array();
            if (bookingId != null) {
                params.push("bookingId=" + bookingId);
            }
            if (type != null) {
                params.push("type=" + type);
            }
            if (from != null) {
                params.push("from=" + from);
            }
            if (to != null) {
                params.push("to=" + to);
            }
            return (_a = this.rest).post.apply(_a, __spread([this.baseUrl + "/booking", typeof body === 'object' ? JSON.stringify(body) : body], params));
        };
        /**
         * Create notifications for all users in activity bookings
         * @Return: ActionResponse
         */
        AdminNotificationsService.prototype.notifyActivityUsers = function (activityId, type, from, to, body) {
            var _a;
            var params = new Array();
            if (activityId != null) {
                params.push("activityId=" + activityId);
            }
            if (type != null) {
                params.push("type=" + type);
            }
            if (from != null) {
                params.push("from=" + from);
            }
            if (to != null) {
                params.push("to=" + to);
            }
            return (_a = this.rest).post.apply(_a, __spread([this.baseUrl + "/activity", typeof body === 'object' ? JSON.stringify(body) : body], params));
        };
        /**
         * Create notifications for all users in activity bookings
         * @Return: ActionResponse
         */
        AdminNotificationsService.prototype.notifyDailyUsers = function (dayId, type, from, to, body) {
            var _a;
            var params = new Array();
            if (dayId != null) {
                params.push("dayId=" + dayId);
            }
            if (type != null) {
                params.push("type=" + type);
            }
            if (from != null) {
                params.push("from=" + from);
            }
            if (to != null) {
                params.push("to=" + to);
            }
            return (_a = this.rest).post.apply(_a, __spread([this.baseUrl + "/daily", typeof body === 'object' ? JSON.stringify(body) : body], params));
        };
        /**
         * Create notification for all club members
         * @Return: ActionResponse
         */
        AdminNotificationsService.prototype.notifyAllMembers = function (type, from, to, body) {
            var _a;
            var params = new Array();
            if (type != null) {
                params.push("type=" + type);
            }
            if (from != null) {
                params.push("from=" + from);
            }
            if (to != null) {
                params.push("to=" + to);
            }
            return (_a = this.rest).post.apply(_a, __spread([this.baseUrl + "/members", typeof body === 'object' ? JSON.stringify(body) : body], params));
        };
        return AdminNotificationsService;
    }());
    /** @nocollapse */ AdminNotificationsService.ɵfac = function AdminNotificationsService_Factory(t) { return new (t || AdminNotificationsService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
    /** @nocollapse */ AdminNotificationsService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: AdminNotificationsService, factory: AdminNotificationsService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AdminNotificationsService, [{
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
        AdminPlaningService.prototype.getDailyPlaning = function (day, resFilter, userFilter) {
            var _a;
            var params = new Array();
            if (resFilter != null) {
                params.push("resFilter=" + resFilter);
            }
            if (userFilter != null) {
                params.push("userFilter=" + userFilter);
            }
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/daily/" + day], params));
        };
        /**
         * Get list of resources in a specific day
         * @Return: EntitiesResponse<StringKeyValue>
         */
        AdminPlaningService.prototype.getDailyResources = function (day) {
            return this.rest.get(this.baseUrl + "/daily-resources/" + day);
        };
        /**
         * Export daily planing - as PDF stream
         * @Return: StreamContent
         */
        AdminPlaningService.prototype.exportDailyPlaning = function (day, lang) {
            var _a;
            var params = new Array();
            if (lang != null) {
                params.push("lang=" + lang);
            }
            return (_a = this.rest).download.apply(_a, __spread(["admin-planing", this.baseUrl + "/daily/" + day + "/export"], params));
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
        /**
         * Get daily registration list - who is present
         * @Return: EntitiesResponse<Actual>
         */
        AdminPlaningService.prototype.getDailyRegistration = function (day, filter, missingOnly) {
            var _a;
            var params = new Array();
            if (filter != null) {
                params.push("filter=" + filter);
            }
            if (missingOnly != null) {
                params.push("missingOnly=" + missingOnly);
            }
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/bookings/registration/" + day], params));
        };
        /**
         * Update user registration
         * @Return: ActionResponse
         */
        AdminPlaningService.prototype.updateRegistration = function (body) {
            return this.rest.post(this.baseUrl + "/bookings/registration", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Report user absence from approved booking
         * @Return: ActionResponse
         */
        AdminPlaningService.prototype.reportAbsence = function (id, userId) {
            var _a;
            var params = new Array();
            if (userId != null) {
                params.push("userId=" + userId);
            }
            return (_a = this.rest).post.apply(_a, __spread([this.baseUrl + "/bookings/" + id + "/absence", null], params));
        };
        /**
         * Report incident from registration
         * @Return: ActionResponse
         */
        AdminPlaningService.prototype.reportIncident = function (id, userId, body) {
            var _a;
            var params = new Array();
            if (userId != null) {
                params.push("userId=" + userId);
            }
            return (_a = this.rest).post.apply(_a, __spread([this.baseUrl + "/bookings/" + id + "/incident", typeof body === 'object' ? JSON.stringify(body) : body], params));
        };
        return AdminPlaningService;
    }());
    /** @nocollapse */ AdminPlaningService.ɵfac = function AdminPlaningService_Factory(t) { return new (t || AdminPlaningService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
    /** @nocollapse */ AdminPlaningService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: AdminPlaningService, factory: AdminPlaningService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AdminPlaningService, [{
                type: i0.Injectable
            }], function () {
            return [{ type: CoreConfig, decorators: [{
                            type: i0.Inject,
                            args: ['config']
                        }] }, { type: RestUtil }];
        }, null);
    })();

    /**
     * Services for analytics reports - for account administrator only
     * @RequestHeader X-API-KEY The key to identify the application (portal)
     * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
     */
    var AdminReportsService = /** @class */ (function () {
        /**
         * Class constructor
         */
        function AdminReportsService(config, rest) {
            this.config = config;
            this.rest = rest;
            // URL to web api
            this.baseUrl = '/admin/reports';
            this.baseUrl = this.config.api + this.baseUrl;
        }
        /**
         * Get count of members over month
         * @Return: EntitiesResponse<Usage>
         */
        AdminReportsService.prototype.getMonthlyCount = function (year, month) {
            var _a;
            var params = new Array();
            if (year != null) {
                params.push("year=" + year);
            }
            if (month != null) {
                params.push("month=" + month);
            }
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/monthly-count"], params));
        };
        /**
         * Get count of members over time period
         * @Return: EntitiesResponse<Usage>
         */
        AdminReportsService.prototype.getPeriodCount = function (from, to) {
            var _a;
            var params = new Array();
            if (from != null) {
                params.push("from=" + from);
            }
            if (to != null) {
                params.push("to=" + to);
            }
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/period-count"], params));
        };
        /**
         * Get distribution by week days over time
         * @Return: EntitiesResponse<StringIntValue>
         */
        AdminReportsService.prototype.getDayOfWeekDistribution = function (from, to) {
            var _a;
            var params = new Array();
            if (from != null) {
                params.push("from=" + from);
            }
            if (to != null) {
                params.push("to=" + to);
            }
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/count-by-dow"], params));
        };
        /**
         * Get distribution by resource type over time
         * @Return: EntitiesResponse<StringIntValue>
         */
        AdminReportsService.prototype.getResourceTypeDistribution = function (from, to) {
            var _a;
            var params = new Array();
            if (from != null) {
                params.push("from=" + from);
            }
            if (to != null) {
                params.push("to=" + to);
            }
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/count-by-type"], params));
        };
        /**
         * Get count of activities per member over time period
         * @Return: EntitiesResponse<MemberUsage>
         */
        AdminReportsService.prototype.getPeriodCountByMember = function (from, to) {
            var _a;
            var params = new Array();
            if (from != null) {
                params.push("from=" + from);
            }
            if (to != null) {
                params.push("to=" + to);
            }
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/period-count-by-member"], params));
        };
        /**
         * Export count of activities per member over time period to CSV
         * @Return: StreamContent
         */
        AdminReportsService.prototype.exportPeriodCountByMember = function (from, to) {
            var _a;
            var params = new Array();
            if (from != null) {
                params.push("from=" + from);
            }
            if (to != null) {
                params.push("to=" + to);
            }
            return (_a = this.rest).download.apply(_a, __spread(["admin-reports", this.baseUrl + "/period-count-by-member/export"], params));
        };
        /**
         * Get count of activities per resource over time period
         * @Return: EntitiesResponse<MemberUsage>
         */
        AdminReportsService.prototype.getPeriodCountByResource = function (from, to) {
            var _a;
            var params = new Array();
            if (from != null) {
                params.push("from=" + from);
            }
            if (to != null) {
                params.push("to=" + to);
            }
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/period-count-by-resource"], params));
        };
        /**
         * Export count of activities per resource over time period to CSV
         * @Return: StreamContent
         */
        AdminReportsService.prototype.exportPeriodCountByResource = function (from, to) {
            var _a;
            var params = new Array();
            if (from != null) {
                params.push("from=" + from);
            }
            if (to != null) {
                params.push("to=" + to);
            }
            return (_a = this.rest).download.apply(_a, __spread(["admin-reports", this.baseUrl + "/period-count-by-resource/export"], params));
        };
        return AdminReportsService;
    }());
    /** @nocollapse */ AdminReportsService.ɵfac = function AdminReportsService_Factory(t) { return new (t || AdminReportsService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
    /** @nocollapse */ AdminReportsService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: AdminReportsService, factory: AdminReportsService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AdminReportsService, [{
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
        AdminResourcesService.prototype.bulkImport = function (body) {
            return this.rest.post(this.baseUrl + "/bulk-import", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Find list of all bookings for a resource by filter per month
         * @Return: QueryResponse<Booking>
         */
        AdminResourcesService.prototype.findResourceMonthHistory = function (id, year, month, day, sort) {
            var _a;
            var params = new Array();
            if (year != null) {
                params.push("year=" + year);
            }
            if (month != null) {
                params.push("month=" + month);
            }
            if (day != null) {
                params.push("day=" + day);
            }
            if (sort != null) {
                params.push("sort=" + sort);
            }
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/" + id + "/month-history"], params));
        };
        /**
         * Find list of all bookings for a resource by filter per time period
         * @Return: QueryResponse<Booking>
         */
        AdminResourcesService.prototype.findResourceHistory = function (id, from, to, sort) {
            var _a;
            var params = new Array();
            if (from != null) {
                params.push("from=" + from);
            }
            if (to != null) {
                params.push("to=" + to);
            }
            if (sort != null) {
                params.push("sort=" + sort);
            }
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/" + id + "/history"], params));
        };
        /**
         * Import resources from CSV file
         * The file must include header with the columns: Name, Type, Min, Max, Brand, Description
         * @return ActionResponse
         */
        AdminResourcesService.prototype.importCsv = function () {
            return this.rest.post(this.baseUrl + "/import/csv", null);
        };
        /**
         * Export resources to CSV file
         * @return StreamContent
         */
        AdminResourcesService.prototype.exportCsv = function (search, resourceClass, resourceType, status, forUseBy, sort) {
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
            return (_a = this.rest).download.apply(_a, __spread(["admin-resources", this.baseUrl + "/export/csv"], params));
        };
        return AdminResourcesService;
    }());
    /** @nocollapse */ AdminResourcesService.ɵfac = function AdminResourcesService_Factory(t) { return new (t || AdminResourcesService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
    /** @nocollapse */ AdminResourcesService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: AdminResourcesService, factory: AdminResourcesService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AdminResourcesService, [{
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
    /** @nocollapse */ HealthCheckService.ɵfac = function HealthCheckService_Factory(t) { return new (t || HealthCheckService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
    /** @nocollapse */ HealthCheckService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: HealthCheckService, factory: HealthCheckService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(HealthCheckService, [{
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
    /** @nocollapse */ SysAccountsService.ɵfac = function SysAccountsService_Factory(t) { return new (t || SysAccountsService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
    /** @nocollapse */ SysAccountsService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: SysAccountsService, factory: SysAccountsService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SysAccountsService, [{
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
    /** @nocollapse */ SysUsersService.ɵfac = function SysUsersService_Factory(t) { return new (t || SysUsersService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
    /** @nocollapse */ SysUsersService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: SysUsersService, factory: SysUsersService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SysUsersService, [{
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
        UsrActivitiesService.prototype.find = function (from, to, year, month, day, total) {
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
            if (total != null) {
                params.push("total=" + total);
            }
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
        };
        /**
         * Find list of free resources for activity by filter
         * @Return: EntitiesResponse<Resource>
         */
        UsrActivitiesService.prototype.findFreeResources = function (id, resType, weight, forUseBy) {
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/" + id + "/resources"], params));
        };
        /**
         * Find list of all resources for activity and mark the assigned activities
         * @Return: EntitiesResponse<Resource>
         */
        UsrActivitiesService.prototype.findAllResources = function (id) {
            return this.rest.get(this.baseUrl + "/" + id + "/all-resources");
        };
        return UsrActivitiesService;
    }());
    /** @nocollapse */ UsrActivitiesService.ɵfac = function UsrActivitiesService_Factory(t) { return new (t || UsrActivitiesService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
    /** @nocollapse */ UsrActivitiesService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: UsrActivitiesService, factory: UsrActivitiesService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(UsrActivitiesService, [{
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
         * Update actual activity log (duration and distance)
         * @Return: EntityResponse<Booking>
         */
        UserBookingsService.prototype.updateLog = function (body) {
            return this.rest.put(this.baseUrl + "/log", typeof body === 'object' ? JSON.stringify(body) : body);
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
         * Get extended booking info by id including names
         * @Return: EntityResponse<Booking>
         */
        UserBookingsService.prototype.getExt = function (id) {
            return this.rest.get(this.baseUrl + "/" + id + "/ext");
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
         * Find bookings daily / monthly / yearly history by filters
         * @Return: QueryResponse<Booking>
         */
        UserBookingsService.prototype.history = function (resourceId, year, month, day, sort) {
            var _a;
            var params = new Array();
            if (resourceId != null) {
                params.push("resourceId=" + resourceId);
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
            if (sort != null) {
                params.push("sort=" + sort);
            }
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/history"], params));
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
    /** @nocollapse */ UserBookingsService.ɵfac = function UserBookingsService_Factory(t) { return new (t || UserBookingsService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
    /** @nocollapse */ UserBookingsService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: UserBookingsService, factory: UserBookingsService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(UserBookingsService, [{
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
    /** @nocollapse */ UserPlacementsService.ɵfac = function UserPlacementsService_Factory(t) { return new (t || UserPlacementsService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
    /** @nocollapse */ UserPlacementsService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: UserPlacementsService, factory: UserPlacementsService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(UserPlacementsService, [{
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
    /** @nocollapse */ UserAccountsService.ɵfac = function UserAccountsService_Factory(t) { return new (t || UserAccountsService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
    /** @nocollapse */ UserAccountsService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: UserAccountsService, factory: UserAccountsService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(UserAccountsService, [{
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
    /** @nocollapse */ UsrMembersService.ɵfac = function UsrMembersService_Factory(t) { return new (t || UsrMembersService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
    /** @nocollapse */ UsrMembersService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: UsrMembersService, factory: UsrMembersService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(UsrMembersService, [{
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
         * Switch to the next account
         * @Return: EntityResponse<UserAccountInfo>
         */
        UserService.prototype.switchNext = function () {
            return this.rest.post(this.baseUrl + "/switch-next", null);
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
        /**
         * Get app version
         * @Return: ActionResponse
         */
        UserService.prototype.getVersion = function () {
            return this.rest.get(this.baseUrl + "/version");
        };
        /**
         * Find list of notifications by filter
         * @Return: ActionResponse
         */
        UserService.prototype.findNotifications = function (search, type, sort, page, pageSize) {
            var _a;
            var params = new Array();
            if (search != null) {
                params.push("search=" + search);
            }
            if (type != null) {
                params.push("type=" + type);
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/notifications"], params));
        };
        /**
         * Mark user notification as read
         * @Return: ActionResponse
         */
        UserService.prototype.readNotification = function (id) {
            return this.rest.put(this.baseUrl + "/notifications/" + id, null);
        };
        /**
         * Delete notification
         * @Return: ActionResponse
         */
        UserService.prototype.deleteNotification = function (id) {
            return this.rest.delete(this.baseUrl + "/notifications/" + id);
        };
        return UserService;
    }());
    /** @nocollapse */ UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
    /** @nocollapse */ UserService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: UserService, factory: UserService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(UserService, [{
                type: i0.Injectable
            }], function () {
            return [{ type: CoreConfig, decorators: [{
                            type: i0.Inject,
                            args: ['config']
                        }] }, { type: RestUtil }];
        }, null);
    })();

    var Services = [
        AdminAccountService,
        HealthCheckService,
        SysAccountsService,
        SysUsersService,
        AdminActivitiesService,
        AdminPlaningService,
        AdminReportsService,
        AdminResourcesService,
        UsrActivitiesService,
        UserBookingsService,
        UserPlacementsService,
        AdminMembersService,
        AdminNotificationsService,
        UserAccountsService,
        UsrMembersService,
        UserService,
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
    /** @nocollapse */ CoreLibModule.ɵmod = i0__namespace.ɵɵdefineNgModule({ type: CoreLibModule });
    /** @nocollapse */ CoreLibModule.ɵinj = i0__namespace.ɵɵdefineInjector({ factory: function CoreLibModule_Factory(t) { return new (t || CoreLibModule)(); }, imports: [[common.CommonModule, i1.HttpClientModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(CoreLibModule, { imports: [common.CommonModule, i1.HttpClientModule] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CoreLibModule, [{
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
    exports.Actual = Actual;
    exports.AdminAccountService = AdminAccountService;
    exports.AdminAccountSettingsUpdateRequest = AdminAccountSettingsUpdateRequest;
    exports.AdminActivitiesService = AdminActivitiesService;
    exports.AdminActivityBulkCreateRequest = AdminActivityBulkCreateRequest;
    exports.AdminActivityDefaultCreateRequest = AdminActivityDefaultCreateRequest;
    exports.AdminActivityDefaultDeleteRequest = AdminActivityDefaultDeleteRequest;
    exports.AdminActivityFindFreeResourcesRequest = AdminActivityFindFreeResourcesRequest;
    exports.AdminActivityFindRequest = AdminActivityFindRequest;
    exports.AdminActivityPlaningRequest = AdminActivityPlaningRequest;
    exports.AdminBookingHistoryRequest = AdminBookingHistoryRequest;
    exports.AdminBookingMonthHistoryRequest = AdminBookingMonthHistoryRequest;
    exports.AdminCreateActivityRequest = AdminCreateActivityRequest;
    exports.AdminCreateResourceRequest = AdminCreateResourceRequest;
    exports.AdminDailyPlaningExportRequest = AdminDailyPlaningExportRequest;
    exports.AdminDailyPlaningRequest = AdminDailyPlaningRequest;
    exports.AdminDailyRegistrationRequest = AdminDailyRegistrationRequest;
    exports.AdminDailyResourcesRequest = AdminDailyResourcesRequest;
    exports.AdminFindFreeResourcesRequest = AdminFindFreeResourcesRequest;
    exports.AdminMembersExportCsvRequest = AdminMembersExportCsvRequest;
    exports.AdminMembersFindRequest = AdminMembersFindRequest;
    exports.AdminMembersImportCsvRequest = AdminMembersImportCsvRequest;
    exports.AdminMembersService = AdminMembersService;
    exports.AdminNotificationsService = AdminNotificationsService;
    exports.AdminPlaningAssignResourceRequest = AdminPlaningAssignResourceRequest;
    exports.AdminPlaningDeleteActivityRequest = AdminPlaningDeleteActivityRequest;
    exports.AdminPlaningDeleteBookingRequest = AdminPlaningDeleteBookingRequest;
    exports.AdminPlaningMergeBookingsRequest = AdminPlaningMergeBookingsRequest;
    exports.AdminPlaningService = AdminPlaningService;
    exports.AdminPlaningSplitBookingRequest = AdminPlaningSplitBookingRequest;
    exports.AdminPlaningUnAssignResourceRequest = AdminPlaningUnAssignResourceRequest;
    exports.AdminReportAbsenceRequest = AdminReportAbsenceRequest;
    exports.AdminReportIncidentRequest = AdminReportIncidentRequest;
    exports.AdminReportsService = AdminReportsService;
    exports.AdminResourceBulkCreateRequest = AdminResourceBulkCreateRequest;
    exports.AdminResourceExportCsvRequest = AdminResourceExportCsvRequest;
    exports.AdminResourceFindRequest = AdminResourceFindRequest;
    exports.AdminResourceHistoryRequest = AdminResourceHistoryRequest;
    exports.AdminResourceImportCsvRequest = AdminResourceImportCsvRequest;
    exports.AdminResourceMonthHistoryRequest = AdminResourceMonthHistoryRequest;
    exports.AdminResourcesService = AdminResourcesService;
    exports.AdminUpdateActivityRequest = AdminUpdateActivityRequest;
    exports.AdminUpdateRegistrationRequest = AdminUpdateRegistrationRequest;
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
    exports.CountDataPoint = CountDataPoint;
    exports.DistributionRequest = DistributionRequest;
    exports.EmptyRequest = EmptyRequest;
    exports.EmptyResponse = EmptyResponse;
    exports.EntitiesResponse = EntitiesResponse;
    exports.EntitiesResponseOfAccount = EntitiesResponseOfAccount;
    exports.EntitiesResponseOfActivity = EntitiesResponseOfActivity;
    exports.EntitiesResponseOfActivityBookingGroup = EntitiesResponseOfActivityBookingGroup;
    exports.EntitiesResponseOfActual = EntitiesResponseOfActual;
    exports.EntitiesResponseOfBooking = EntitiesResponseOfBooking;
    exports.EntitiesResponseOfBookingGroup = EntitiesResponseOfBookingGroup;
    exports.EntitiesResponseOfBookingRequest = EntitiesResponseOfBookingRequest;
    exports.EntitiesResponseOfCountDataPoint = EntitiesResponseOfCountDataPoint;
    exports.EntitiesResponseOfMemberUsage = EntitiesResponseOfMemberUsage;
    exports.EntitiesResponseOfMembership = EntitiesResponseOfMembership;
    exports.EntitiesResponseOfNotification = EntitiesResponseOfNotification;
    exports.EntitiesResponseOfPlacement = EntitiesResponseOfPlacement;
    exports.EntitiesResponseOfResource = EntitiesResponseOfResource;
    exports.EntitiesResponseOfStringIntValue = EntitiesResponseOfStringIntValue;
    exports.EntitiesResponseOfStringKeyValue = EntitiesResponseOfStringKeyValue;
    exports.EntitiesResponseOfUsage = EntitiesResponseOfUsage;
    exports.EntityResponse = EntityResponse;
    exports.EntityResponseOfAccount = EntityResponseOfAccount;
    exports.EntityResponseOfAccountSettings = EntityResponseOfAccountSettings;
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
    exports.FindNotificationsRequest = FindNotificationsRequest;
    exports.HealthCheckService = HealthCheckService;
    exports.Incident = Incident;
    exports.LoginData = LoginData;
    exports.LoginParams = LoginParams;
    exports.Member = Member;
    exports.MemberIdRequest = MemberIdRequest;
    exports.MemberRegistration = MemberRegistration;
    exports.MemberUsage = MemberUsage;
    exports.MemberUser = MemberUser;
    exports.MembersBulkImportRequest = MembersBulkImportRequest;
    exports.MembersCountOvertimeRequest = MembersCountOvertimeRequest;
    exports.MembersFindRequest = MembersFindRequest;
    exports.MembersServiceInviteRequest = MembersServiceInviteRequest;
    exports.MembersServiceUpdateRequest = MembersServiceUpdateRequest;
    exports.Membership = Membership;
    exports.MembershipIdRequest = MembershipIdRequest;
    exports.MembershipsRequest = MembershipsRequest;
    exports.MonthlyCountRequest = MonthlyCountRequest;
    exports.Notification = Notification;
    exports.NotificationIdRequest = NotificationIdRequest;
    exports.NotifyActivityUsersRequest = NotifyActivityUsersRequest;
    exports.NotifyAllMembersRequest = NotifyAllMembersRequest;
    exports.NotifyBookingUsersRequest = NotifyBookingUsersRequest;
    exports.NotifyDailyUsersRequest = NotifyDailyUsersRequest;
    exports.NotifyUserRequest = NotifyUserRequest;
    exports.PeriodCountRequest = PeriodCountRequest;
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
    exports.QueryResponseOfNotification = QueryResponseOfNotification;
    exports.QueryResponseOfPlacement = QueryResponseOfPlacement;
    exports.QueryResponseOfResource = QueryResponseOfResource;
    exports.QueryResponseOfUser = QueryResponseOfUser;
    exports.RecurrentActivity = RecurrentActivity;
    exports.RecurrentTimeFrame = RecurrentTimeFrame;
    exports.Registration = Registration;
    exports.Resource = Resource;
    exports.ResourceIdRequest = ResourceIdRequest;
    exports.ResourcesCountOvertimeRequest = ResourcesCountOvertimeRequest;
    exports.RestUtil = RestUtil;
    exports.Services = Services;
    exports.StreamResponse = StreamResponse;
    exports.StringIntValue = StringIntValue;
    exports.StringKeyValue = StringKeyValue;
    exports.SysAccountsService = SysAccountsService;
    exports.SysAdminAccountCreateRequest = SysAdminAccountCreateRequest;
    exports.SysAdminAccountResetRequest = SysAdminAccountResetRequest;
    exports.SysAdminAccountUpdateRequest = SysAdminAccountUpdateRequest;
    exports.SysAdminAccountsFindRequest = SysAdminAccountsFindRequest;
    exports.SysUsersService = SysUsersService;
    exports.TimeFrame = TimeFrame;
    exports.TokenRequest = TokenRequest;
    exports.Usage = Usage;
    exports.User = User;
    exports.UserAccountInfo = UserAccountInfo;
    exports.UserAccountsFindRequest = UserAccountsFindRequest;
    exports.UserAccountsService = UserAccountsService;
    exports.UserBookingFindRequest = UserBookingFindRequest;
    exports.UserBookingGroupRequest = UserBookingGroupRequest;
    exports.UserBookingHistoryRequest = UserBookingHistoryRequest;
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
    exports.UserServiceReadNotificationRequest = UserServiceReadNotificationRequest;
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
