(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('rxjs/operators'), require('@angular/common')) :
   typeof define === 'function' && define.amd ? define('@mottyc/ng-core-lib', ['exports', '@angular/core', '@angular/common/http', 'rxjs/operators', '@angular/common'], factory) :
   (global = global || self, factory((global.mottyc = global.mottyc || {}, global.mottyc['ng-core-lib'] = {}), global.ng.core, global.ng.common.http, global.rxjs.operators, global.ng.common));
}(this, (function (exports, i0, i1, operators, common) { 'use strict';

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
       // Ocean Kayak [2048 + 1] 
       KayakTypeCode[KayakTypeCode["OCEAN"] = 2049] = "OCEAN";
       // Double Ocean Kayak [2048 + 2] 
       KayakTypeCode[KayakTypeCode["OCEAN_X2"] = 2050] = "OCEAN_X2";
       // SurfSki Kayak [2048 + 4096 + 1] 
       KayakTypeCode[KayakTypeCode["SURFSKI"] = 6145] = "SURFSKI";
       // Double SurfSki Kayak [2048 + 4096 + 2] 
       KayakTypeCode[KayakTypeCode["SURFSKI_X2"] = 6146] = "SURFSKI_X2";
       // Waves (short) kayak [2048 + 1 + 8192] 
       KayakTypeCode[KayakTypeCode["WAVES"] = 10241] = "WAVES";
   })(exports.KayakTypeCode || (exports.KayakTypeCode = {}));

   /*
      Resource class code (represent resource in the system)
   */
   (function (ResourceClassCode) {
       // Undefined [0] 
       ResourceClassCode[ResourceClassCode["UNDEFINED"] = 0] = "UNDEFINED";
       // Rowing Boat [1024] 
       ResourceClassCode[ResourceClassCode["RBOAT"] = 1] = "RBOAT";
       // Kayak [2048] 
       ResourceClassCode[ResourceClassCode["KAYAK"] = 2] = "KAYAK";
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
       // Single [1] 
       ResourceTypeMask[ResourceTypeMask["P1"] = 1] = "P1";
       // Double [2] 
       ResourceTypeMask[ResourceTypeMask["P2"] = 2] = "P2";
       // Quad [4] 
       ResourceTypeMask[ResourceTypeMask["P4"] = 4] = "P4";
       // Eight [8] 
       ResourceTypeMask[ResourceTypeMask["P8"] = 8] = "P8";
       // Wide [16] 
       ResourceTypeMask[ResourceTypeMask["WIDE"] = 16] = "WIDE";
       // Sculling (2 oars) [32] 
       ResourceTypeMask[ResourceTypeMask["SCULL"] = 32] = "SCULL";
       // Need Cox [64] 
       ResourceTypeMask[ResourceTypeMask["COX"] = 64] = "COX";
       // Coastal (use in sea) [128] 
       ResourceTypeMask[ResourceTypeMask["COASTAL"] = 128] = "COASTAL";
       // For competition [254] 
       ResourceTypeMask[ResourceTypeMask["COMP"] = 254] = "COMP";
       // For para-olympic [512] 
       ResourceTypeMask[ResourceTypeMask["PARA"] = 512] = "PARA";
       // Rowing Boat [1024] 
       ResourceTypeMask[ResourceTypeMask["RBOAT"] = 1024] = "RBOAT";
       // Kayak [2048] 
       ResourceTypeMask[ResourceTypeMask["KAYAK"] = 2048] = "KAYAK";
       // Surf Ski [4096] 
       ResourceTypeMask[ResourceTypeMask["SURFSKI"] = 4096] = "SURFSKI";
       // Waves Kayak [8192] 
       ResourceTypeMask[ResourceTypeMask["WAVES"] = 8192] = "WAVES";
   })(exports.ResourceTypeMask || (exports.ResourceTypeMask = {}));

   /*
      Rowing boat type code
   */
   (function (RowingBoatTypeCode) {
       // Undefined [0] 
       RowingBoatTypeCode[RowingBoatTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
       // Sculling 1X [1024 + 1 + 32] 
       RowingBoatTypeCode[RowingBoatTypeCode["SCULL_1X"] = 1057] = "SCULL_1X";
       // Sculling 1X Wide [1024 + 1 + 32 + 16] 
       RowingBoatTypeCode[RowingBoatTypeCode["SCULL_1X_WIDE"] = 1073] = "SCULL_1X_WIDE";
       // Sculling 1X Competition [1024 + 1 + 32 + 254] 
       RowingBoatTypeCode[RowingBoatTypeCode["SCULL_1X_COMP"] = 1311] = "SCULL_1X_COMP";
       // Sculling 1X Para Olympic [1024 + 1 + 32 + 512] 
       RowingBoatTypeCode[RowingBoatTypeCode["SCULL_1X_PARA"] = 1569] = "SCULL_1X_PARA";
       // Sculling 2X [1024 + 2 + 32] 
       RowingBoatTypeCode[RowingBoatTypeCode["SCULL_2X"] = 1058] = "SCULL_2X";
       // Sculling 2X Wide [1024 + 2 + 32 + 16] 
       RowingBoatTypeCode[RowingBoatTypeCode["SCULL_2X_WIDE"] = 1074] = "SCULL_2X_WIDE";
       // Sculling 2X Competition [1024 + 2 + 32 + 254] 
       RowingBoatTypeCode[RowingBoatTypeCode["SCULL_2X_COMP"] = 1312] = "SCULL_2X_COMP";
       // Sculling 2X Para Olympic [1024 + 2 + 32 + 512] 
       RowingBoatTypeCode[RowingBoatTypeCode["SCULL_2X_PARA"] = 1570] = "SCULL_2X_PARA";
       // Sweeping 2- Coxless Pair [1024 + 2] 
       RowingBoatTypeCode[RowingBoatTypeCode["SWEEP_2_COXLESS"] = 1026] = "SWEEP_2_COXLESS";
       // Coastal 2X [1024 + 2 + 32 + 128] 
       RowingBoatTypeCode[RowingBoatTypeCode["COASTAL_2X"] = 1186] = "COASTAL_2X";
       // Sculling 4X Quad [1024 + 4 + 32] 
       RowingBoatTypeCode[RowingBoatTypeCode["SCULL_4X"] = 1060] = "SCULL_4X";
       // Sculling 4X Quad with cox [1024 + 4 + 32 + 64] 
       RowingBoatTypeCode[RowingBoatTypeCode["SCULL_4X_COX"] = 1124] = "SCULL_4X_COX";
       // Sweeping 4- Coxless Quad [1024 + 4] 
       RowingBoatTypeCode[RowingBoatTypeCode["SWEEP_4_COXLESS"] = 10283] = "SWEEP_4_COXLESS";
       // Sculling 4X Competition [1024 + 4 + 32 + 254] 
       RowingBoatTypeCode[RowingBoatTypeCode["SCULL_4X_COMP"] = 1314] = "SCULL_4X_COMP";
       // Sculling 4X Para Olympic [1024 + 4 + 32 + 512] 
       RowingBoatTypeCode[RowingBoatTypeCode["SCULL_4X_PARA"] = 1572] = "SCULL_4X_PARA";
       // Coastal 4X with cox [1024 + 4 + 32 + 64 + 128] 
       RowingBoatTypeCode[RowingBoatTypeCode["COASTAL_4X_COX"] = 1252] = "COASTAL_4X_COX";
       // Sweeping 8 - with cox [1024 + 8 + 64] 
       RowingBoatTypeCode[RowingBoatTypeCode["SWEEP_8_COX"] = 1096] = "SWEEP_8_COX";
       // Sculling 8 - with cox [1024 + 8 + 32 + 64] 
       RowingBoatTypeCode[RowingBoatTypeCode["SCULL_8X_COX"] = 1128] = "SCULL_8X_COX";
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
        * @Return: EntityResponse<Resource>
        */
       AdminBoatsService.prototype.create = function (body) {
           return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Update boat resource
        * @Return: EntityResponse<Resource>
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
        * @Return: EntityResponse<Resource>
        */
       AdminBoatsService.prototype.get = function (id) {
           return this.rest.get(this.baseUrl + "/" + id);
       };
       /**
        * Find boats by filters
        * @Return: QueryResponse<Resource>
        */
       AdminBoatsService.prototype.find = function (search, resourceClass, resourceType, status, forUseBy, sort, page, pageSize) {
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
       return AdminBoatsService;
   }());
   /** @nocollapse */ AdminBoatsService.ɵfac = function AdminBoatsService_Factory(t) { return new (t || AdminBoatsService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
   /** @nocollapse */ AdminBoatsService.ɵprov = i0.ɵɵdefineInjectable({ token: AdminBoatsService, factory: AdminBoatsService.ɵfac });
   /*@__PURE__*/ (function () {
       i0.ɵsetClassMetadata(AdminBoatsService, [{
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
        * @Return: EntityResponse<Resource>
        */
       AdminKayaksService.prototype.create = function (body) {
           return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Update kayak resource
        * @Return: EntityResponse<Resource>
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
        * @Return: EntityResponse<Resource>
        */
       AdminKayaksService.prototype.get = function (id) {
           return this.rest.get(this.baseUrl + "/" + id);
       };
       /**
        * Find kayaks by filters
        * @Return: QueryResponse<Resource>
        */
       AdminKayaksService.prototype.find = function (search, resourceClass, resourceType, status, forUseBy, sort, page, pageSize) {
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
       return AdminKayaksService;
   }());
   /** @nocollapse */ AdminKayaksService.ɵfac = function AdminKayaksService_Factory(t) { return new (t || AdminKayaksService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
   /** @nocollapse */ AdminKayaksService.ɵprov = i0.ɵɵdefineInjectable({ token: AdminKayaksService, factory: AdminKayaksService.ɵfac });
   /*@__PURE__*/ (function () {
       i0.ɵsetClassMetadata(AdminKayaksService, [{
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
           return this.rest.delete("" + this.baseUrl);
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
       return UsersService;
   }());
   /** @nocollapse */ UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
   /** @nocollapse */ UsersService.ɵprov = i0.ɵɵdefineInjectable({ token: UsersService, factory: UsersService.ɵfac });
   /*@__PURE__*/ (function () {
       i0.ɵsetClassMetadata(UsersService, [{
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
       AdminBoatsService,
       AdminKayaksService,
       AdminResourcesService,
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

   exports.AdminBoatsService = AdminBoatsService;
   exports.AdminKayaksService = AdminKayaksService;
   exports.AdminResourcesService = AdminResourcesService;
   exports.CoreConfig = CoreConfig;
   exports.CoreLibModule = CoreLibModule;
   exports.HealthCheckService = HealthCheckService;
   exports.RestUtil = RestUtil;
   exports.Services = Services;
   exports.SysAccountsService = SysAccountsService;
   exports.SysUsersService = SysUsersService;
   exports.UserAccountsService = UserAccountsService;
   exports.UserBookingsService = UserBookingsService;
   exports.UserPlacementsService = UserPlacementsService;
   exports.UserService = UserService;
   exports.UsersService = UsersService;
   exports.getToken = getToken;
   exports.removeToken = removeToken;
   exports.setToken = setToken;

   Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=mottyc-ng-core-lib.umd.js.map
