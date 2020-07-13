(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@mottyc/ng-core-lib', ['exports', '@angular/core', '@angular/common/http', 'rxjs/operators', '@angular/common'], factory) :
    (global = global || self, factory((global.mottyc = global.mottyc || {}, global.mottyc['ng-core-lib'] = {}), global.ng.core, global.ng.common.http, global.rxjs.operators, global.ng.common));
}(this, (function (exports, core, http, operators, common) { 'use strict';

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

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
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
       Schedule time frame
       Times are described in ISO 8601 format (See: https://www.w3.org/TR/NOTE-datetime).
       The format is: YYYY-MM-DDThh:mm:ssTZD where:
       <ul>
       <li>YYYY = four-digit year</li>
       <li>MM   = two-digit month (01=January, etc.)</li>
       <li>DD   = two-digit day of month (01 through 31)</li>
       <li>hh   = two digits of hour (00 through 23) (am/pm NOT allowed)</li>
       <li>mm   = two digits of minute (00 through 59)</li>
       <li>ss   = two digits of second (00 through 59)
       <li>TZD  = time zone designator (Z for UTC or +hh:mm or -hh:mm for Timezone offset)</li>
       </ul>
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
       Account role represents the role of the user in the account
    */
    var AccountRole = /** @class */ (function () {
        function AccountRole(accountId, role) {
            this.accountId = accountId;
            this.role = role;
        }
        return AccountRole;
    }());

    /*
       Account specific settings
    */
    var AccountSettings = /** @class */ (function () {
        function AccountSettings(retentionDays) {
            this.retentionDays = retentionDays;
        }
        return AccountSettings;
    }());

    /*
       Login data (returned by the API after successful login)
    */
    var LoginData = /** @class */ (function () {
        function LoginData(accessToken, accountRole, userId, userName, userEmail, userType, userStatus, changePassword) {
            this.accessToken = accessToken;
            this.accountRole = accountRole;
            this.userId = userId;
            this.userName = userName;
            this.userEmail = userEmail;
            this.userType = userType;
            this.userStatus = userStatus;
            this.changePassword = changePassword;
        }
        return LoginData;
    }());

    /*
       Login parameters data model
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
       Schedule recurrent time frame
    */
    var RecurrentTimeFrame = /** @class */ (function () {
        function RecurrentTimeFrame(dayOfWeek, startTime, endTime) {
            this.dayOfWeek = dayOfWeek;
            this.startTime = startTime;
            this.endTime = endTime;
        }
        return RecurrentTimeFrame;
    }());

    /*
       Key Value string tuple
    */
    var StringKeyValue = /** @class */ (function () {
        function StringKeyValue(key, value) {
            this.key = key;
            this.value = value;
        }
        return StringKeyValue;
    }());

    /*
       Time frame (for search and reports)
    */
    var TimeFrame = /** @class */ (function () {
        function TimeFrame(from, to) {
            this.from = from;
            this.to = to;
        }
        return TimeFrame;
    }());

    /*
       User Account info (returned by switch-account method)
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
       User invitation data model - used by account admin to invite user to the account
    */
    var UserInvitation = /** @class */ (function () {
        function UserInvitation(email, role) {
            this.email = email;
            this.role = role;
        }
        return UserInvitation;
    }());

    /*
       User registration data model - used by self registered users
    */
    var UserRegistration = /** @class */ (function () {
        function UserRegistration(name, email, mobile, defaultAccount, accountRoles, type, tempPassword, changePassword, verifyByEmail, description) {
            this.name = name;
            this.email = email;
            this.mobile = mobile;
            this.defaultAccount = defaultAccount;
            this.accountRoles = accountRoles;
            this.type = type;
            this.tempPassword = tempPassword;
            this.changePassword = changePassword;
            this.verifyByEmail = verifyByEmail;
            this.description = description;
        }
        return UserRegistration;
    }());

    /*
       Base entity includes common fields for all entities (persistence objects) in the system
    */
    var BaseEntity = /** @class */ (function () {
        function BaseEntity(id, docType, createdOn, updatedOn) {
            this.id = id;
            this._type = docType;
            this.createdOn = createdOn;
            this.updatedOn = updatedOn;
        }
        return BaseEntity;
    }());

    /*
       Account entity in the system represents a club
    */
    var Account = /** @class */ (function (_super) {
        __extends(Account, _super);
        function Account() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Account;
    }(BaseEntity));

    /*
       API Key is used per application (e.g. Portal, Mobile App) or service to identify the consumer.
       The access to sets of REST endpoints is restricted according the API key.
       API key also dictates the default session TTL per application (e.g. 20 minutes for Portal or Console, 30 days for Mobile app)
       The application/system name is the Entity Id, the API key itself is not stored in the DB but generated on the fly.
    */
    var ApiKey = /** @class */ (function (_super) {
        __extends(ApiKey, _super);
        function ApiKey() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ApiKey;
    }(BaseEntity));

    /*
       Audit Log entry - represents a single action done by user
    */
    var AuditLog = /** @class */ (function (_super) {
        __extends(AuditLog, _super);
        function AuditLog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return AuditLog;
    }(BaseEntity));

    /*
       Booking request
       A booking is a pending request to book a resource for specific time for user(s), once it is approved, it becomes a placement
    */
    var Booking = /** @class */ (function (_super) {
        __extends(Booking, _super);
        function Booking() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Booking;
    }(BaseEntity));

    /*
       System functionality (feature) description
    */
    var Feature = /** @class */ (function (_super) {
        __extends(Feature, _super);
        function Feature() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Feature;
    }(BaseEntity));

    /*
       Group of features
    */
    var FeaturesGroup = /** @class */ (function (_super) {
        __extends(FeaturesGroup, _super);
        function FeaturesGroup() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return FeaturesGroup;
    }(BaseEntity));

    /*
       Incident
    */
    var Incident = /** @class */ (function (_super) {
        __extends(Incident, _super);
        function Incident() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Incident;
    }(BaseEntity));

    /*
       Kayak resource type (derived from Resource)
    */
    var Kayak = /** @class */ (function (_super) {
        __extends(Kayak, _super);
        function Kayak() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Kayak;
    }(BaseEntity));

    /*
       Placement - after booking approval, it is becoming a placement (derived from Booking)
    */
    var Placement = /** @class */ (function (_super) {
        __extends(Placement, _super);
        function Placement() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Placement;
    }(BaseEntity));

    /*
       Resource type
    */
    var Resource = /** @class */ (function (_super) {
        __extends(Resource, _super);
        function Resource() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Resource;
    }(BaseEntity));

    /*
       Rowing boat resource type (derived from Resource)
    */
    var RowingBoat = /** @class */ (function (_super) {
        __extends(RowingBoat, _super);
        function RowingBoat() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return RowingBoat;
    }(BaseEntity));

    /*
       User type
    */
    var User = /** @class */ (function (_super) {
        __extends(User, _super);
        function User() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return User;
    }(BaseEntity));

    /*
       Verification type used to verify user with a temporary code
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
        // Para-olympic team [5] 
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
        // Ocean Kayak [1] 
        KayakTypeCode[KayakTypeCode["OCEAN"] = 1] = "OCEAN";
        // Surf Ski Kayak [2] 
        KayakTypeCode[KayakTypeCode["SURFSKI"] = 2] = "SURFSKI";
        // Waves Kayak [3] 
        KayakTypeCode[KayakTypeCode["WAVES"] = 3] = "WAVES";
    })(exports.KayakTypeCode || (exports.KayakTypeCode = {}));

    /*
       Resource type code (represent resource in the system)
    */

    (function (ResourceTypeCode) {
        // Undefined [0] 
        ResourceTypeCode[ResourceTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
        // Rowing Boat [1] 
        ResourceTypeCode[ResourceTypeCode["ROWING_BOAT"] = 1] = "ROWING_BOAT";
        // Kayak [2] 
        ResourceTypeCode[ResourceTypeCode["KAYAK"] = 2] = "KAYAK";
    })(exports.ResourceTypeCode || (exports.ResourceTypeCode = {}));

    /*
       Rowing boat type code
    */

    (function (RowingBoatTypeCode) {
        // Undefined [0] 
        RowingBoatTypeCode[RowingBoatTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
        // Sculling 1X [1] 
        RowingBoatTypeCode[RowingBoatTypeCode["SCULL_1X"] = 1] = "SCULL_1X";
        // Sculling 1X Wide [2] 
        RowingBoatTypeCode[RowingBoatTypeCode["SCULL_1X_WIDE"] = 2] = "SCULL_1X_WIDE";
        // Sculling 1X Competition [3] 
        RowingBoatTypeCode[RowingBoatTypeCode["SCULL_1X_COMP"] = 3] = "SCULL_1X_COMP";
        // Sculling 1X Para Olympic [4] 
        RowingBoatTypeCode[RowingBoatTypeCode["SCULL_1X_PARA"] = 4] = "SCULL_1X_PARA";
        // Sculling 2X [5] 
        RowingBoatTypeCode[RowingBoatTypeCode["SCULL_2X"] = 5] = "SCULL_2X";
        // Sculling 2X Wide [6] 
        RowingBoatTypeCode[RowingBoatTypeCode["SCULL_2X_WIDE"] = 6] = "SCULL_2X_WIDE";
        // Sculling 2X Competition [7] 
        RowingBoatTypeCode[RowingBoatTypeCode["SCULL_2X_COMP"] = 7] = "SCULL_2X_COMP";
        // Sculling 2X Para Olympic [8] 
        RowingBoatTypeCode[RowingBoatTypeCode["SCULL_2X_PARA"] = 8] = "SCULL_2X_PARA";
        // Sweeping 2- Coxless Pair [9] 
        RowingBoatTypeCode[RowingBoatTypeCode["SWEEP_2_COXLESS"] = 9] = "SWEEP_2_COXLESS";
        // Coastal 2X [10] 
        RowingBoatTypeCode[RowingBoatTypeCode["COASTAL_2X"] = 10] = "COASTAL_2X";
        // Sculling 4X Quad [11] 
        RowingBoatTypeCode[RowingBoatTypeCode["SCULL_4X"] = 11] = "SCULL_4X";
        // Sculling 4X Quad with cox [12] 
        RowingBoatTypeCode[RowingBoatTypeCode["SCULL_4X_COX"] = 12] = "SCULL_4X_COX";
        // Sweeping 4- Coxless Quad [13] 
        RowingBoatTypeCode[RowingBoatTypeCode["SWEEP_4_COXLESS"] = 13] = "SWEEP_4_COXLESS";
        // Sculling 4X Competition [14] 
        RowingBoatTypeCode[RowingBoatTypeCode["SCULL_4X_COMP"] = 14] = "SCULL_4X_COMP";
        // Sculling 4X Para Olympic [15] 
        RowingBoatTypeCode[RowingBoatTypeCode["SCULL_4X_PARA"] = 15] = "SCULL_4X_PARA";
        // Coastal 4X with cox [16] 
        RowingBoatTypeCode[RowingBoatTypeCode["COASTAL_4X_COX"] = 16] = "COASTAL_4X_COX";
        // Sweeping 8 - with cox [17] 
        RowingBoatTypeCode[RowingBoatTypeCode["SWEEP_8_COX"] = 17] = "SWEEP_8_COX";
        // Sculling 8 - with cox [18] 
        RowingBoatTypeCode[RowingBoatTypeCode["SCULL_8X_COX"] = 18] = "SCULL_8X_COX";
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
       User status code
    */

    (function (UserStatusCode) {
        // Undefined [0] 
        UserStatusCode[UserStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
        // User is registered and pending verification [1] 
        UserStatusCode[UserStatusCode["PENDING"] = 1] = "PENDING";
        // Active user in the system [2] 
        UserStatusCode[UserStatusCode["ACTIVE"] = 2] = "ACTIVE";
        // Blocked user (only account system can unblock the user) [4] 
        UserStatusCode[UserStatusCode["BLOCKED"] = 3] = "BLOCKED";
        // Suspended user (about to be deleted) [8] 
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
       Entity action response message returned for any create/update action on entity
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
    var AdminBoatFindRequest = /** @class */ (function () {
        function AdminBoatFindRequest(usedBy, resourceId, sort, page, pageSize) {
            this.usedBy = usedBy;
            this.resourceId = resourceId;
            this.sort = sort;
            this.page = page;
            this.pageSize = pageSize;
        }
        return AdminBoatFindRequest;
    }());

    /*
    */
    var AdminCreateBoatRequest = /** @class */ (function () {
        function AdminCreateBoatRequest(body) {
            this.body = body;
        }
        return AdminCreateBoatRequest;
    }());

    /*
    */
    var AdminCreateKayakRequest = /** @class */ (function () {
        function AdminCreateKayakRequest(body) {
            this.body = body;
        }
        return AdminCreateKayakRequest;
    }());

    /*
    */
    var AdminKayakFindRequest = /** @class */ (function () {
        function AdminKayakFindRequest(usedBy, resourceId, sort, page, pageSize) {
            this.usedBy = usedBy;
            this.resourceId = resourceId;
            this.sort = sort;
            this.page = page;
            this.pageSize = pageSize;
        }
        return AdminKayakFindRequest;
    }());

    /*
    */
    var AdminUpdateBoatRequest = /** @class */ (function () {
        function AdminUpdateBoatRequest(body) {
            this.body = body;
        }
        return AdminUpdateBoatRequest;
    }());

    /*
    */
    var AdminUpdateKayakRequest = /** @class */ (function () {
        function AdminUpdateKayakRequest(body) {
            this.body = body;
        }
        return AdminUpdateKayakRequest;
    }());

    /*
    */
    var BoatIdRequest = /** @class */ (function () {
        function BoatIdRequest(id) {
            this.id = id;
        }
        return BoatIdRequest;
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
       Change Password request message
    */
    var ChangePasswordRequest = /** @class */ (function () {
        function ChangePasswordRequest(userId, oldPassword, newPassword) {
            this.userId = userId;
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
       Entities response message returned for read operation on multiple entities
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
    var EntitiesResponseOfBooking = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfBooking, _super);
        function EntitiesResponseOfBooking() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfBooking;
    }(EntitiesResponse));

    /*
    */
    var EntitiesResponseOfKayak = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfKayak, _super);
        function EntitiesResponseOfKayak() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfKayak;
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
    var EntitiesResponseOfRowingBoat = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfRowingBoat, _super);
        function EntitiesResponseOfRowingBoat() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfRowingBoat;
    }(EntitiesResponse));

    /*
       Entity response message returned for read operation on a single entity
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
    var EntityResponseOfBooking = /** @class */ (function (_super) {
        __extends(EntityResponseOfBooking, _super);
        function EntityResponseOfBooking() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfBooking;
    }(EntityResponse));

    /*
    */
    var EntityResponseOfKayak = /** @class */ (function (_super) {
        __extends(EntityResponseOfKayak, _super);
        function EntityResponseOfKayak() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfKayak;
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
    var EntityResponseOfPlacement = /** @class */ (function (_super) {
        __extends(EntityResponseOfPlacement, _super);
        function EntityResponseOfPlacement() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfPlacement;
    }(EntityResponse));

    /*
    */
    var EntityResponseOfRowingBoat = /** @class */ (function (_super) {
        __extends(EntityResponseOfRowingBoat, _super);
        function EntityResponseOfRowingBoat() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfRowingBoat;
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
    var KayakIdRequest = /** @class */ (function () {
        function KayakIdRequest(id) {
            this.id = id;
        }
        return KayakIdRequest;
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
       Query response message returned for find operation (with pagination) on multiple entities
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
    var QueryResponseOfBooking = /** @class */ (function (_super) {
        __extends(QueryResponseOfBooking, _super);
        function QueryResponseOfBooking() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfBooking;
    }(QueryResponse));

    /*
    */
    var QueryResponseOfKayak = /** @class */ (function (_super) {
        __extends(QueryResponseOfKayak, _super);
        function QueryResponseOfKayak() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfKayak;
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
    var QueryResponseOfRowingBoat = /** @class */ (function (_super) {
        __extends(QueryResponseOfRowingBoat, _super);
        function QueryResponseOfRowingBoat() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfRowingBoat;
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
       Response of byte array
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
       Token request message
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
       @WebSocketMessage Message header for all web socket messages
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
        function RestUtil(http$1) {
            this.http = http$1;
            // Set headers
            this.headers = new http.HttpHeaders().set('Content-Type', 'application/json');
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
        /** @nocollapse */ RestUtil.ɵfac = function RestUtil_Factory(t) { return new (t || RestUtil)(core.ɵɵinject(http.HttpClient)); };
        /** @nocollapse */ RestUtil.ɵprov = core.ɵɵdefineInjectable({ token: RestUtil, factory: RestUtil.ɵfac });
        return RestUtil;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(RestUtil, [{
            type: core.Injectable
        }], function () { return [{ type: http.HttpClient }]; }, null); })();

    var CoreConfig = /** @class */ (function () {
        function CoreConfig() {
        }
        return CoreConfig;
    }());

    /**
     * Services for managing boats resources - for account administrator only
     * @RequestHeader X-API-KEY The key to identify the application (portal)
     * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
     */
    var AdminBoatsService = /** @class */ (function () {
        /**
         * Class constructor
         */
        function AdminBoatsService(config, rest) {
            this.config = config;
            this.rest = rest;
            // URL to web api
            this.baseUrl = '/admin/boats';
            this.baseUrl = this.config.api + this.baseUrl;
        }
        /**
         * Create new boat resource
         * @Return: EntityResponse<RowingBoat>
         */
        AdminBoatsService.prototype.create = function (body) {
            return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Update boat resource
         * @Return: EntityResponse<RowingBoat>
         */
        AdminBoatsService.prototype.update = function (body) {
            return this.rest.put("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Delete boat resource
         * @Return: ActionResponse
         */
        AdminBoatsService.prototype.delete = function (id) {
            return this.rest.delete("" + this.baseUrl);
        };
        /**
         * Get single boat by id
         * @Return: EntityResponse<RowingBoat>
         */
        AdminBoatsService.prototype.get = function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
        };
        /**
         * Find boats by filters
         * @Return: QueryResponse<RowingBoat>
         */
        AdminBoatsService.prototype.find = function (usedBy, resourceId, sort, page, pageSize) {
            var _a;
            var params = new Array();
            if (usedBy != null) {
                params.push("usedBy=" + usedBy);
            }
            if (resourceId != null) {
                params.push("resourceId=" + resourceId);
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
        /** @nocollapse */ AdminBoatsService.ɵfac = function AdminBoatsService_Factory(t) { return new (t || AdminBoatsService)(core.ɵɵinject('config'), core.ɵɵinject(RestUtil)); };
        /** @nocollapse */ AdminBoatsService.ɵprov = core.ɵɵdefineInjectable({ token: AdminBoatsService, factory: AdminBoatsService.ɵfac });
        return AdminBoatsService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(AdminBoatsService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

    /**
     * Services for managing kayak resources - for account administrator only
     * @RequestHeader X-API-KEY The key to identify the application (portal)
     * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
     */
    var AdminKayaksService = /** @class */ (function () {
        /**
         * Class constructor
         */
        function AdminKayaksService(config, rest) {
            this.config = config;
            this.rest = rest;
            // URL to web api
            this.baseUrl = '/admin/kayaks';
            this.baseUrl = this.config.api + this.baseUrl;
        }
        /**
         * Create new kayak resource
         * @Return: EntityResponse<Kayak>
         */
        AdminKayaksService.prototype.create = function (body) {
            return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Update kayak resource
         * @Return: EntityResponse<Kayak>
         */
        AdminKayaksService.prototype.update = function (body) {
            return this.rest.put("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Delete kayak resource
         * @Return: ActionResponse
         */
        AdminKayaksService.prototype.delete = function (id) {
            return this.rest.delete("" + this.baseUrl);
        };
        /**
         * Get single kayak by id
         * @Return: EntityResponse<Kayak>
         */
        AdminKayaksService.prototype.get = function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
        };
        /**
         * Find kayaks by filters
         * @Return: QueryResponse<Kayak>
         */
        AdminKayaksService.prototype.find = function (usedBy, resourceId, sort, page, pageSize) {
            var _a;
            var params = new Array();
            if (usedBy != null) {
                params.push("usedBy=" + usedBy);
            }
            if (resourceId != null) {
                params.push("resourceId=" + resourceId);
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
        /** @nocollapse */ AdminKayaksService.ɵfac = function AdminKayaksService_Factory(t) { return new (t || AdminKayaksService)(core.ɵɵinject('config'), core.ɵɵinject(RestUtil)); };
        /** @nocollapse */ AdminKayaksService.ɵprov = core.ɵɵdefineInjectable({ token: AdminKayaksService, factory: AdminKayaksService.ɵfac });
        return AdminKayaksService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(AdminKayaksService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

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
        /** @nocollapse */ HealthCheckService.ɵfac = function HealthCheckService_Factory(t) { return new (t || HealthCheckService)(core.ɵɵinject('config'), core.ɵɵinject(RestUtil)); };
        /** @nocollapse */ HealthCheckService.ɵprov = core.ɵɵdefineInjectable({ token: HealthCheckService, factory: HealthCheckService.ɵfac });
        return HealthCheckService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(HealthCheckService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

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
            return this.rest.delete("" + this.baseUrl);
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
        UserBookingsService.prototype.find = function (userId, resourceId, sort, page, pageSize) {
            var _a;
            var params = new Array();
            if (userId != null) {
                params.push("userId=" + userId);
            }
            if (resourceId != null) {
                params.push("resourceId=" + resourceId);
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
        /** @nocollapse */ UserBookingsService.ɵfac = function UserBookingsService_Factory(t) { return new (t || UserBookingsService)(core.ɵɵinject('config'), core.ɵɵinject(RestUtil)); };
        /** @nocollapse */ UserBookingsService.ɵprov = core.ɵɵdefineInjectable({ token: UserBookingsService, factory: UserBookingsService.ɵfac });
        return UserBookingsService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(UserBookingsService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

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
            return this.rest.delete("" + this.baseUrl);
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
        /** @nocollapse */ UserPlacementsService.ɵfac = function UserPlacementsService_Factory(t) { return new (t || UserPlacementsService)(core.ɵɵinject('config'), core.ɵɵinject(RestUtil)); };
        /** @nocollapse */ UserPlacementsService.ɵprov = core.ɵɵdefineInjectable({ token: UserPlacementsService, factory: UserPlacementsService.ɵfac });
        return UserPlacementsService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(UserPlacementsService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

    /**
     * List of all user related actions for account administrator only
     */
    var UsersService = /** @class */ (function () {
        /**
         * Class constructor
         */
        function UsersService(config, rest) {
            this.config = config;
            this.rest = rest;
            // URL to web api
            this.baseUrl = '/admin/users';
            this.baseUrl = this.config.api + this.baseUrl;
        }
        /**
         * Send invitation to a new user for the current account
         * @Return: ActionResponse
         */
        UsersService.prototype.invite = function (body) {
            return this.rest.post(this.baseUrl + "/invite", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Resend invitation to an existing user for the current account
         * @Return: ActionResponse
         */
        UsersService.prototype.reInvite = function (id) {
            return this.rest.post(this.baseUrl + "/re-invite/" + id, null);
        };
        /**
         * Update user
         * @Return: EntityResponse<User>
         */
        UsersService.prototype.update = function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Change user name
         * @Return: EntityResponse<User>
         */
        UsersService.prototype.changeName = function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id + "/name", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Change user mobile
         * @Return: EntityResponse<User>
         */
        UsersService.prototype.changeMobile = function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id + "/mobile", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Change user type
         * @Return: EntityResponse<User>
         */
        UsersService.prototype.changeType = function (id, type) {
            return this.rest.put(this.baseUrl + "/" + id + "/type/" + type, null);
        };
        /**
         * Delete user from the system
         * The user will be removed from the account, if no accounts associated with the user, it will be deleted
         * @Return: ActionResponse
         */
        UsersService.prototype.delete = function (id) {
            return this.rest.delete(this.baseUrl + "/" + id);
        };
        /**
         * Get single user by id
         * @Return: EntityResponse<User>
         */
        UsersService.prototype.get = function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
        };
        /**
         * Get single user by email
         * @Return: EntityResponse<User>
         */
        UsersService.prototype.getByEmail = function (email) {
            return this.rest.get(this.baseUrl + "/byEmail/" + email);
        };
        /**
         * Find list of users and filter the list
         * System user will see all users, Account system will see all users of the account, registered user will get an error.
         * @Return: QueryResponse<User>
         */
        UsersService.prototype.find = function (accountId, search, type, status, sort, page, pageSize) {
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
        /**
         * Get access token for user
         * @Return: ActionResponse
         */
        UsersService.prototype.getUserToken = function (id, exp) {
            return this.rest.get(this.baseUrl + "/" + id + "/token/" + exp);
        };
        /** @nocollapse */ UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(core.ɵɵinject('config'), core.ɵɵinject(RestUtil)); };
        /** @nocollapse */ UsersService.ɵprov = core.ɵɵdefineInjectable({ token: UsersService, factory: UsersService.ɵfac });
        return UsersService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(UsersService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

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
        /** @nocollapse */ UserAccountsService.ɵfac = function UserAccountsService_Factory(t) { return new (t || UserAccountsService)(core.ɵɵinject('config'), core.ɵɵinject(RestUtil)); };
        /** @nocollapse */ UserAccountsService.ɵprov = core.ɵɵdefineInjectable({ token: UserAccountsService, factory: UserAccountsService.ɵfac });
        return UserAccountsService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(UserAccountsService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

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
         * Refresh token (set new expiration time) and associate with new account if required
         * @Return: EntityResponse<UserAccountInfo>
         */
        UserService.prototype.switchAccount = function (body) {
            return this.rest.post(this.baseUrl + "/switch-account", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /** @nocollapse */ UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(core.ɵɵinject('config'), core.ɵɵinject(RestUtil)); };
        /** @nocollapse */ UserService.ɵprov = core.ɵɵdefineInjectable({ token: UserService, factory: UserService.ɵfac });
        return UserService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(UserService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

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
            return this.rest.delete("" + this.baseUrl);
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
        /** @nocollapse */ SysAccountsService.ɵfac = function SysAccountsService_Factory(t) { return new (t || SysAccountsService)(core.ɵɵinject('config'), core.ɵɵinject(RestUtil)); };
        /** @nocollapse */ SysAccountsService.ɵprov = core.ɵɵdefineInjectable({ token: SysAccountsService, factory: SysAccountsService.ɵfac });
        return SysAccountsService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(SysAccountsService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

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
            return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
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
         * Set user roles in his accounts (override previous roles)
         * @Return: EntityResponse<User>
         */
        SysUsersService.prototype.setRoles = function (id, roles) {
            return this.rest.post(this.baseUrl + "/" + id + "/roles/", typeof roles === 'object' ? JSON.stringify(roles) : roles);
        };
        /**
         * Update user roles in his accounts (merge with existing roles)
         * @Return: EntityResponse<User>
         */
        SysUsersService.prototype.mergeRoles = function (id, roles) {
            return this.rest.put(this.baseUrl + "/" + id + "/roles/", typeof roles === 'object' ? JSON.stringify(roles) : roles);
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
        /** @nocollapse */ SysUsersService.ɵfac = function SysUsersService_Factory(t) { return new (t || SysUsersService)(core.ɵɵinject('config'), core.ɵɵinject(RestUtil)); };
        /** @nocollapse */ SysUsersService.ɵprov = core.ɵɵdefineInjectable({ token: SysUsersService, factory: SysUsersService.ɵfac });
        return SysUsersService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(SysUsersService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

    var Services = [
        AdminBoatsService,
        AdminKayaksService,
        UserBookingsService,
        UserPlacementsService,
        UsersService,
        UserAccountsService,
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
        /** @nocollapse */ CoreLibModule.ɵmod = core.ɵɵdefineNgModule({ type: CoreLibModule });
        /** @nocollapse */ CoreLibModule.ɵinj = core.ɵɵdefineInjector({ factory: function CoreLibModule_Factory(t) { return new (t || CoreLibModule)(); }, imports: [[common.CommonModule, http.HttpClientModule]] });
        return CoreLibModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(CoreLibModule, { imports: [common.CommonModule, http.HttpClientModule] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(CoreLibModule, [{
            type: core.NgModule,
            args: [{
                    imports: [common.CommonModule, http.HttpClientModule]
                }]
        }], null, null); })();

    exports.AbsoluteTimeFrame = AbsoluteTimeFrame;
    exports.Account = Account;
    exports.AccountIdRequest = AccountIdRequest;
    exports.AccountRole = AccountRole;
    exports.AccountSettings = AccountSettings;
    exports.ActionResponse = ActionResponse;
    exports.AdminBoatFindRequest = AdminBoatFindRequest;
    exports.AdminBoatsService = AdminBoatsService;
    exports.AdminCreateBoatRequest = AdminCreateBoatRequest;
    exports.AdminCreateKayakRequest = AdminCreateKayakRequest;
    exports.AdminKayakFindRequest = AdminKayakFindRequest;
    exports.AdminKayaksService = AdminKayaksService;
    exports.AdminUpdateBoatRequest = AdminUpdateBoatRequest;
    exports.AdminUpdateKayakRequest = AdminUpdateKayakRequest;
    exports.ApiKey = ApiKey;
    exports.AuditLog = AuditLog;
    exports.BaseEntity = BaseEntity;
    exports.BoatIdRequest = BoatIdRequest;
    exports.Booking = Booking;
    exports.BookingIdRequest = BookingIdRequest;
    exports.ChangePasswordRequest = ChangePasswordRequest;
    exports.CoreConfig = CoreConfig;
    exports.CoreLibModule = CoreLibModule;
    exports.EmptyRequest = EmptyRequest;
    exports.EmptyResponse = EmptyResponse;
    exports.EntitiesResponse = EntitiesResponse;
    exports.EntitiesResponseOfAccount = EntitiesResponseOfAccount;
    exports.EntitiesResponseOfBooking = EntitiesResponseOfBooking;
    exports.EntitiesResponseOfKayak = EntitiesResponseOfKayak;
    exports.EntitiesResponseOfPlacement = EntitiesResponseOfPlacement;
    exports.EntitiesResponseOfRowingBoat = EntitiesResponseOfRowingBoat;
    exports.EntityResponse = EntityResponse;
    exports.EntityResponseOfAccount = EntityResponseOfAccount;
    exports.EntityResponseOfBooking = EntityResponseOfBooking;
    exports.EntityResponseOfKayak = EntityResponseOfKayak;
    exports.EntityResponseOfLoginData = EntityResponseOfLoginData;
    exports.EntityResponseOfPlacement = EntityResponseOfPlacement;
    exports.EntityResponseOfRowingBoat = EntityResponseOfRowingBoat;
    exports.EntityResponseOfUser = EntityResponseOfUser;
    exports.EntityResponseOfUserAccountInfo = EntityResponseOfUserAccountInfo;
    exports.Feature = Feature;
    exports.FeaturesGroup = FeaturesGroup;
    exports.HealthCheckService = HealthCheckService;
    exports.Incident = Incident;
    exports.Kayak = Kayak;
    exports.KayakIdRequest = KayakIdRequest;
    exports.LoginData = LoginData;
    exports.LoginParams = LoginParams;
    exports.Placement = Placement;
    exports.PlacementIdRequest = PlacementIdRequest;
    exports.QueryResponse = QueryResponse;
    exports.QueryResponseOfAccount = QueryResponseOfAccount;
    exports.QueryResponseOfBooking = QueryResponseOfBooking;
    exports.QueryResponseOfKayak = QueryResponseOfKayak;
    exports.QueryResponseOfPlacement = QueryResponseOfPlacement;
    exports.QueryResponseOfRowingBoat = QueryResponseOfRowingBoat;
    exports.QueryResponseOfUser = QueryResponseOfUser;
    exports.RecurrentTimeFrame = RecurrentTimeFrame;
    exports.Resource = Resource;
    exports.RestUtil = RestUtil;
    exports.RowingBoat = RowingBoat;
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
    exports.UserBookingsService = UserBookingsService;
    exports.UserByEmailRequest = UserByEmailRequest;
    exports.UserCreateBookingRequest = UserCreateBookingRequest;
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
    exports.UserServiceVerifyLoginRequest = UserServiceVerifyLoginRequest;
    exports.UserTokenRequest = UserTokenRequest;
    exports.UserUpdateBookingRequest = UserUpdateBookingRequest;
    exports.UserUpdatePlacementRequest = UserUpdatePlacementRequest;
    exports.UsersService = UsersService;
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
    exports.Verification = Verification;
    exports.WebSocketMessageHeader = WebSocketMessageHeader;
    exports.getToken = getToken;
    exports.removeToken = removeToken;
    exports.setToken = setToken;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=mottyc-ng-core-lib.umd.js.map
