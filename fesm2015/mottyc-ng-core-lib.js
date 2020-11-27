import { ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Inject, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { HttpHeaders, HttpClient, HttpClientModule } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

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
class AbsoluteTimeFrame {
    constructor(name, startTime, endTime, active) {
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
        this.active = active;
    }
}

/*
 *  Account role represents the role of the user in the account
*/
class AccountRole {
    constructor(accountId, role) {
        this.accountId = accountId;
        this.role = role;
    }
}

/*
 *  Account specific settings
*/
class AccountSettings {
    constructor(defaultActivities, retentionDays) {
        this.defaultActivities = defaultActivities;
        this.retentionDays = retentionDays;
    }
}

/*
 *  Login data (returned by the API after successful login)
*/
class LoginData {
    constructor(accessToken, userId, accountId, accountRole, memberStatus, userName, userEmail, userType, userStatus, changePassword) {
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
}

/*
 *  Login parameters data model
*/
class LoginParams {
    constructor(email, password, accessToken) {
        this.email = email;
        this.password = password;
        this.accessToken = accessToken;
    }
}

/*
 *  Member registration data model
*/
class MemberRegistration {
    constructor(name, email, mobile, gender, accountId, accountRole, tempPassword, changePassword, verifyByEmail) {
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
}

/*
 *  Recurrent activity
*/
class RecurrentActivity {
    constructor(dayOfWeek, startTime, endTime, name, resourceFilter, roleFilter) {
        this.dayOfWeek = dayOfWeek;
        this.startTime = startTime;
        this.endTime = endTime;
        this.name = name;
        this.resourceFilter = resourceFilter;
        this.roleFilter = roleFilter;
    }
}

/*
 *  Schedule recurrent time frame
*/
class RecurrentTimeFrame {
    constructor(dayOfWeek, startTime, endTime, name) {
        this.dayOfWeek = dayOfWeek;
        this.startTime = startTime;
        this.endTime = endTime;
        this.name = name;
    }
}

/*
 *  Key Value string tuple
*/
class StringKeyValue {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

/*
 *  Time frame (for search and reports)
*/
class TimeFrame {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
}

/*
 *  User Account info (returned by switch-account method)
*/
class UserAccountInfo {
    constructor(account, loginData, features) {
        this.account = account;
        this.loginData = loginData;
        this.features = features;
    }
}

/*
 *  User invitation data model - used by account admin to invite user to the account
*/
class UserInvitation {
    constructor(email, role) {
        this.email = email;
        this.role = role;
    }
}

/*
 *  User registration data model
*/
class UserRegistration {
    constructor(name, email, mobile, accountId, accountRole, type, tempPassword, changePassword, verifyByEmail, description) {
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
}

/*
 *  Weight Range
*/
class WeightRange {
    constructor(min, max) {
        this.min = min;
        this.max = max;
    }
}

/*
 *  Base entity includes common fields for all entities (persistence objects) in the system: id, create and update time
*/
class BaseEntity {
    constructor(id, createdOn, updatedOn) {
        this.id = id;
        this.createdOn = createdOn;
        this.updatedOn = updatedOn;
    }
}

/*
 *  Account entity in the system represents a club
*/
class Account extends BaseEntity {
}

/*
 *  Daily account activities entity
*/
class Activity extends BaseEntity {
}

/*
 *  Activity Booking Group
 *  Group list of bookings by activity
*/
class ActivityBookingGroup {
    constructor(activity, bookings) {
        this.activity = activity;
        this.bookings = bookings;
    }
}

/*
 *  Actual activity for booking
*/
class Actual extends BaseEntity {
}

/*
 *  API Key is used per application (e.g. Portal, Mobile App) or service to identify the consumer.
 *  The access to sets of REST endpoints is restricted according the API key.
 *  API key also dictates the default session TTL per application (e.g. 20 minutes for Portal or Console, 30 days for Mobile app)
 *  The application/system name is the Entity Id, the API key itself is not stored in the DB but generated on the fly.
*/
class ApiKey extends BaseEntity {
}

/*
 *  Audit Log entry - represents a single action done by user
*/
class AuditLog extends BaseEntity {
}

/*
 *  Booking
 *  A booking is a pending request to book a resource for specific time for user(s), once it is approved, it becomes a placement
*/
class Booking extends BaseEntity {
}

/*
 *  Booking Group
 *  Group list of bookings by time
*/
class BookingGroup {
    constructor(timeGroup, bookings) {
        this.timeGroup = timeGroup;
        this.bookings = bookings;
    }
}

/*
 *  Booking request
 *  A booking is a pending request to book a resource for specific time for user(s), once it is approved, it becomes a placement
*/
class BookingRequest extends BaseEntity {
}

/*
 *  System functionality (feature) description
*/
class Feature extends BaseEntity {
}

/*
 *  Group of features
*/
class FeaturesGroup extends BaseEntity {
}

/*
 *  Incident
*/
class Incident extends BaseEntity {
}

/*
 *  User membership in an account
*/
class Member extends BaseEntity {
}

/*
 *  Member in an account with extended user info (for display only)
*/
class MemberUser extends BaseEntity {
}

/*
 *  Member in an account with extended account info (for display only)
*/
class Membership extends BaseEntity {
}

/*
 *  Placement is a structure to ap booking requests to a resource
*/
class Placement extends BaseEntity {
}

/*
 *  Planing is a set of booking request and placements
*/
class Planing extends BaseEntity {
}

/*
 *  Registration
 *  A record for a user indicating if he showed up or missed the booking
*/
class Registration extends BaseEntity {
}

/*
 *  Resource type
*/
class Resource extends BaseEntity {
}

/*
 *  User type
*/
class User extends BaseEntity {
}

/*
 *  Verification type used to verify user with a temporary code
*/
class Verification extends BaseEntity {
}

/*
   Account role code (represent role of user in the account)
*/
var AccountRoleCode;
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
})(AccountRoleCode || (AccountRoleCode = {}));

/*
   Account status code
*/
var AccountStatusCode;
(function (AccountStatusCode) {
    // Undefined [0] 
    AccountStatusCode[AccountStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Active account [1] 
    AccountStatusCode[AccountStatusCode["ACTIVE"] = 1] = "ACTIVE";
    // Suspended (non-active) account [2] 
    AccountStatusCode[AccountStatusCode["SUSPENDED"] = 2] = "SUSPENDED";
    // Deleted account [3] 
    AccountStatusCode[AccountStatusCode["DELETED"] = 3] = "DELETED";
})(AccountStatusCode || (AccountStatusCode = {}));

/*
   Account type code
*/
var AccountTypeCode;
(function (AccountTypeCode) {
    // Undefined [0] 
    AccountTypeCode[AccountTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Demo account for Tests and Demos [1] 
    AccountTypeCode[AccountTypeCode["DEMO"] = 1] = "DEMO";
    // Trial account for pilots [2] 
    AccountTypeCode[AccountTypeCode["TRIAL"] = 2] = "TRIAL";
    // Active account for customer [3] 
    AccountTypeCode[AccountTypeCode["CUSTOMER"] = 3] = "CUSTOMER";
})(AccountTypeCode || (AccountTypeCode = {}));

/*
   Daily activity status code
*/
var ActivityStatusCode;
(function (ActivityStatusCode) {
    // Undefined - No booking in this activity [0] 
    ActivityStatusCode[ActivityStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Some booking requests approved, not all [1] 
    ActivityStatusCode[ActivityStatusCode["PARTIAL"] = 1] = "PARTIAL";
    // All booking requests approved [2] 
    ActivityStatusCode[ActivityStatusCode["FULL"] = 2] = "FULL";
})(ActivityStatusCode || (ActivityStatusCode = {}));

/*
   Booking status code
*/
var BookingStatusCode;
(function (BookingStatusCode) {
    // Undefined [0] 
    BookingStatusCode[BookingStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Pending booking request [1] 
    BookingStatusCode[BookingStatusCode["PENDING"] = 1] = "PENDING";
    // Approved booking [2] 
    BookingStatusCode[BookingStatusCode["APPROVED"] = 2] = "APPROVED";
    // Cancelled booking [3] 
    BookingStatusCode[BookingStatusCode["CANCELLED"] = 3] = "CANCELLED";
})(BookingStatusCode || (BookingStatusCode = {}));

/*
   Day of week code
*/
var DayOfWeekCode;
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
})(DayOfWeekCode || (DayOfWeekCode = {}));

/*
   Entity type code (represent entity type in the system)
*/
var EntityTypeCode;
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
})(EntityTypeCode || (EntityTypeCode = {}));

/*
   Feature codes
*/
var FeatureCode;
(function (FeatureCode) {
    // Undefined [0] 
    FeatureCode[FeatureCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Admin module [1] 
    FeatureCode[FeatureCode["MODULE_ADMIN"] = 1] = "MODULE_ADMIN";
    // System admin module [2] 
    FeatureCode[FeatureCode["MODULE_SYSADMIN"] = 2] = "MODULE_SYSADMIN";
})(FeatureCode || (FeatureCode = {}));

/*
   Kayak type code
*/
var KayakTypeCode;
(function (KayakTypeCode) {
    // Undefined [0] 
    KayakTypeCode[KayakTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Ocean Kayak [2 + 1024] 
    KayakTypeCode[KayakTypeCode["OCEAN"] = 1026] = "OCEAN";
    // Double Ocean Kayak [2 + 2048] 
    KayakTypeCode[KayakTypeCode["OCEAN_X2"] = 2050] = "OCEAN_X2";
})(KayakTypeCode || (KayakTypeCode = {}));

/*
   Member status code
*/
var MemberStatusCode;
(function (MemberStatusCode) {
    // Undefined [0] 
    MemberStatusCode[MemberStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Member is registered and pending approval [1] 
    MemberStatusCode[MemberStatusCode["PENDING"] = 1] = "PENDING";
    // Active member in the account [2] 
    MemberStatusCode[MemberStatusCode["ACTIVE"] = 2] = "ACTIVE";
    // Frozen member (not active) [3] 
    MemberStatusCode[MemberStatusCode["FROZEN"] = 3] = "FROZEN";
})(MemberStatusCode || (MemberStatusCode = {}));

/*
   Placement status code
*/
var PlacementStatusCode;
(function (PlacementStatusCode) {
    // Undefined [0] 
    PlacementStatusCode[PlacementStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Partial [1] 
    PlacementStatusCode[PlacementStatusCode["PARTIAL"] = 1] = "PARTIAL";
    // Complete [2] 
    PlacementStatusCode[PlacementStatusCode["COMPLETE"] = 2] = "COMPLETE";
    // Approved [3] 
    PlacementStatusCode[PlacementStatusCode["APPROVED"] = 3] = "APPROVED";
})(PlacementStatusCode || (PlacementStatusCode = {}));

/*
   Resource class code (represent resource in the system)
*/
var ResourceClassCode;
(function (ResourceClassCode) {
    // Undefined [0] 
    ResourceClassCode[ResourceClassCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Rowing Boat [1024] 
    ResourceClassCode[ResourceClassCode["RBOAT"] = 1024] = "RBOAT";
    // Kayak [2048] 
    ResourceClassCode[ResourceClassCode["KAYAK"] = 2048] = "KAYAK";
})(ResourceClassCode || (ResourceClassCode = {}));

/*
   Resource status code
*/
var ResourceStatusCode;
(function (ResourceStatusCode) {
    // Undefined [0] 
    ResourceStatusCode[ResourceStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Available [1] 
    ResourceStatusCode[ResourceStatusCode["AVAILABLE"] = 1] = "AVAILABLE";
    // Non-available [2] 
    ResourceStatusCode[ResourceStatusCode["NONAVAILABLE"] = 2] = "NONAVAILABLE";
})(ResourceStatusCode || (ResourceStatusCode = {}));

/*
   General Resource Type (Attributes bit mask)
*/
var ResourceTypeMask;
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
})(ResourceTypeMask || (ResourceTypeMask = {}));

/*
   Rowing boat type code
*/
var RowingBoatTypeCode;
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
})(RowingBoatTypeCode || (RowingBoatTypeCode = {}));

/*
   Time unit interval
*/
var TimeUnitCode;
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
})(TimeUnitCode || (TimeUnitCode = {}));

/*
   User gender code
*/
var UserGenderCode;
(function (UserGenderCode) {
    // Undefined [0] 
    UserGenderCode[UserGenderCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Male [1] 
    UserGenderCode[UserGenderCode["MALE"] = 1] = "MALE";
    // Female [2] 
    UserGenderCode[UserGenderCode["FEMALE"] = 2] = "FEMALE";
})(UserGenderCode || (UserGenderCode = {}));

/*
   User status code
*/
var UserStatusCode;
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
})(UserStatusCode || (UserStatusCode = {}));

/*
   User type code
*/
var UserTypeCode;
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
})(UserTypeCode || (UserTypeCode = {}));

/*
*/
class AccountIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
 *  Entity action response message returned for any create/update action on entity
*/
class ActionResponse {
    constructor(code, error, key, data) {
        this.code = code;
        this.error = error;
        this.key = key;
        this.data = data;
    }
}

/*
*/
class ActivityIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class AdminAccountSettingsUpdateRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class AdminActivityBulkCreateRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class AdminActivityDefaultCreateRequest {
    constructor(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
}

/*
*/
class AdminActivityDefaultDeleteRequest {
    constructor(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
}

/*
*/
class AdminActivityFindFreeResourcesRequest {
    constructor(id, resType, weight, forUseBy) {
        this.id = id;
        this.resType = resType;
        this.weight = weight;
        this.forUseBy = forUseBy;
    }
}

/*
*/
class AdminActivityFindRequest {
    constructor(from, to, year, month, day) {
        this.from = from;
        this.to = to;
        this.year = year;
        this.month = month;
        this.day = day;
    }
}

/*
*/
class AdminActivityPlaningRequest {
    constructor(id, resourceType) {
        this.id = id;
        this.resourceType = resourceType;
    }
}

/*
*/
class AdminCreateActivityRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class AdminCreateResourceRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class AdminDailyPlaningExportRequest {
    constructor(day, lang) {
        this.day = day;
        this.lang = lang;
    }
}

/*
*/
class AdminDailyPlaningRequest {
    constructor(day) {
        this.day = day;
    }
}

/*
*/
class AdminDailyRegistrationRequest {
    constructor(day) {
        this.day = day;
    }
}

/*
*/
class AdminFindFreeResourcesRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class AdminMembersFindRequest {
    constructor(accountId, search, role, status, sort, page, pageSize) {
        this.accountId = accountId;
        this.search = search;
        this.role = role;
        this.status = status;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}

/*
*/
class AdminPlaningAssignResourceRequest {
    constructor(id, resourceId) {
        this.id = id;
        this.resourceId = resourceId;
    }
}

/*
*/
class AdminPlaningDeleteActivityRequest {
    constructor(day, id) {
        this.day = day;
        this.id = id;
    }
}

/*
*/
class AdminPlaningDeleteBookingRequest {
    constructor(day, id) {
        this.day = day;
        this.id = id;
    }
}

/*
*/
class AdminPlaningMergeBookingsRequest {
    constructor(day, source, target) {
        this.day = day;
        this.source = source;
        this.target = target;
    }
}

/*
*/
class AdminPlaningSplitBookingRequest {
    constructor(day, id) {
        this.day = day;
        this.id = id;
    }
}

/*
*/
class AdminPlaningUnAssignResourceRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class AdminResourceBulkCreateRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class AdminResourceFindRequest {
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

/*
*/
class AdminUpdateActivityRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class AdminUpdateRegistrationRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class AdminUpdateResourceRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class BookingIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class BookingRequestIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
 *  Change Password request message
*/
class ChangePasswordRequest {
    constructor(userEmail, oldPassword, newPassword) {
        this.userEmail = userEmail;
        this.oldPassword = oldPassword;
        this.newPassword = newPassword;
    }
}

/*
*/
class EmptyRequest {
    constructor() {
    }
}

/*
*/
class EmptyResponse {
    constructor() {
    }
}

/*
 *  Entities response message returned for read operation on multiple entities
*/
class EntitiesResponse {
    constructor(code, error) {
        this.code = code;
        this.error = error;
    }
}

/*
*/
class EntitiesResponseOfAccount extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfActivity extends EntitiesResponse {
}

/*
 *  EntitiesResponse<ActivityBookingGroup>
*/
class EntitiesResponseOfActivityBookingGroup extends EntitiesResponse {
}

/*
 *  EntitiesResponse<Actual>
*/
class EntitiesResponseOfActual extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfBooking extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfBookingGroup extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfBookingRequest extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfMembership extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfPlacement extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfResource extends EntitiesResponse {
}

/*
 *  Entity response message returned for read operation on a single entity
*/
class EntityResponse {
    constructor(code, error) {
        this.code = code;
        this.error = error;
    }
}

/*
*/
class EntityResponseOfAccount extends EntityResponse {
}

/*
*/
class EntityResponseOfAccountSettings extends EntityResponse {
}

/*
*/
class EntityResponseOfActivity extends EntityResponse {
}

/*
*/
class EntityResponseOfBooking extends EntityResponse {
}

/*
*/
class EntityResponseOfBookingRequest extends EntityResponse {
}

/*
*/
class EntityResponseOfLoginData extends EntityResponse {
}

/*
*/
class EntityResponseOfMember extends EntityResponse {
}

/*
*/
class EntityResponseOfMemberUser extends EntityResponse {
}

/*
*/
class EntityResponseOfPlacement extends EntityResponse {
}

/*
*/
class EntityResponseOfPlaning extends EntityResponse {
}

/*
*/
class EntityResponseOfResource extends EntityResponse {
}

/*
*/
class EntityResponseOfUser extends EntityResponse {
}

/*
*/
class EntityResponseOfUserAccountInfo extends EntityResponse {
}

/*
*/
class MemberIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class MembersBulkImportRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class MembersFindRequest {
    constructor(search, role, status, sort, page, pageSize) {
        this.search = search;
        this.role = role;
        this.status = status;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}

/*
*/
class MembersServiceInviteRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class MembersServiceUpdateRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class MembershipIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class MembershipsRequest {
    constructor(userId) {
        this.userId = userId;
    }
}

/*
*/
class PlacementIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
 *  Query response message returned for find operation (with pagination) on multiple entities
*/
class QueryResponse {
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

/*
*/
class QueryResponseOfAccount extends QueryResponse {
}

/*
*/
class QueryResponseOfActivity extends QueryResponse {
}

/*
*/
class QueryResponseOfBooking extends QueryResponse {
}

/*
*/
class QueryResponseOfBookingRequest extends QueryResponse {
}

/*
*/
class QueryResponseOfMemberUser extends QueryResponse {
}

/*
*/
class QueryResponseOfMembership extends QueryResponse {
}

/*
*/
class QueryResponseOfPlacement extends QueryResponse {
}

/*
*/
class QueryResponseOfResource extends QueryResponse {
}

/*
*/
class QueryResponseOfUser extends QueryResponse {
}

/*
*/
class ResourceIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
 *  Response of byte array
*/
class StreamResponse {
    constructor(content) {
        this.content = content;
    }
}

/*
*/
class SysAdminAccountCreateRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class SysAdminAccountResetRequest {
    constructor(id, days) {
        this.id = id;
        this.days = days;
    }
}

/*
*/
class SysAdminAccountUpdateRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class SysAdminAccountsFindRequest {
    constructor(search, type, status, sort, page, pageSize) {
        this.search = search;
        this.type = type;
        this.status = status;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}

/*
 *  Token request message
*/
class TokenRequest {
    constructor(code, error, accountId) {
        this.code = code;
        this.error = error;
        this.accountId = accountId;
    }
}

/*
*/
class UserAccountsFindRequest {
    constructor(search, type, status, sort, page, pageSize) {
        this.search = search;
        this.type = type;
        this.status = status;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}

/*
*/
class UserBookingFindRequest {
    constructor(userId, resourceId, from, to, sort, page, pageSize) {
        this.userId = userId;
        this.resourceId = resourceId;
        this.from = from;
        this.to = to;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}

/*
*/
class UserBookingGroupRequest {
    constructor(from, to, groupBy) {
        this.from = from;
        this.to = to;
        this.groupBy = groupBy;
    }
}

/*
*/
class UserBookingRequestFindRequest {
    constructor(userId, resourceId, from, to, sort, page, pageSize) {
        this.userId = userId;
        this.resourceId = resourceId;
        this.from = from;
        this.to = to;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}

/*
*/
class UserByEmailRequest {
    constructor(email) {
        this.email = email;
    }
}

/*
*/
class UserCreateBookingRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class UserCreateBookingRequestRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class UserCreatePlacementRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class UserIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class UserIdsRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class UserPlacementFindRequest {
    constructor(userId, resourceId, from, to, bookingId, status, sort, page, pageSize) {
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
}

/*
*/
class UserServiceChangeMobileRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class UserServiceChangeNameRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class UserServiceChangePasswordRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class UserServiceCheckPasswordRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class UserServiceLoginRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class UserServiceResetPasswordRequest {
    constructor(code) {
        this.code = code;
    }
}

/*
*/
class UserServiceSendVerificationRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class UserServiceSwitchAccountRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class UserServiceUpdateRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class UserServiceVerifyLoginRequest {
    constructor(key) {
        this.key = key;
    }
}

/*
*/
class UserTokenRequest {
    constructor(id, exp) {
        this.id = id;
        this.exp = exp;
    }
}

/*
*/
class UserUpdateBookingRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class UserUpdateBookingRequestRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class UserUpdatePlacementRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class UsersServiceChangeDefaultAccountRequest {
    constructor(id, accountId) {
        this.id = id;
        this.accountId = accountId;
    }
}

/*
*/
class UsersServiceChangeMobileRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
*/
class UsersServiceChangeNameRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
*/
class UsersServiceChangeRoleRequest {
    constructor(id, role) {
        this.id = id;
        this.role = role;
    }
}

/*
*/
class UsersServiceChangeStatusRequest {
    constructor(id, status) {
        this.id = id;
        this.status = status;
    }
}

/*
*/
class UsersServiceChangeTypeRequest {
    constructor(id, type) {
        this.id = id;
        this.type = type;
    }
}

/*
*/
class UsersServiceCreateRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class UsersServiceExportRequest {
    constructor(search, type, status, sort, format, fields) {
        this.search = search;
        this.type = type;
        this.status = status;
        this.sort = sort;
        this.format = format;
        this.fields = fields;
    }
}

/*
*/
class UsersServiceFindRequest {
    constructor(accountId, search, type, status, sort, page, pageSize) {
        this.accountId = accountId;
        this.search = search;
        this.type = type;
        this.status = status;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}

/*
*/
class UsersServiceInviteRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class UsersServiceSetRolesRequest {
    constructor(id, roles) {
        this.id = id;
        this.roles = roles;
    }
}

/*
*/
class UsersServiceUpdateRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
 *  @WebSocketMessage Message header for all web socket messages
*/
class WebSocketMessageHeader {
    constructor(opcode, version, messageId, correlationId, sessionId) {
        this.op = opcode;
        this.ver = version;
        this.id = messageId;
        this.cid = correlationId;
        this.sid = sessionId;
    }
}

// Access token key in the local storage
const tokenKey = 'portalAccessToken';
const loginKey = 'portalLoginData';
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
class RestUtil {
    /**
     * Constructor with injected authentication service
     */
    constructor(http) {
        this.http = http;
        // Set headers
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    /**
     * Download is HTTP GET action but the content is blob
     */
    download(fileName, url, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        let ext = 'json';
        params.forEach(p => {
            let arr = p.split('=');
            if (arr.length > 1) {
                if (arr[0].toLowerCase() === 'format') {
                    ext = arr[1];
                }
            }
        });
        const downloadLink = fileName + '.' + ext;
        return this.http.get(resourceUrl, { responseType: 'blob' }).subscribe((data) => {
            const downloadURL = window.URL.createObjectURL(data);
            const link = document.createElement('a');
            link.href = downloadURL;
            link.download = downloadLink;
            link.click();
        });
    }
    /**
     * HTTP GET action
     */
    get(url, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http
            .get(resourceUrl, { headers: this.headers, observe: 'response' })
            .pipe(map((res) => this.processResponse(res)), catchError(this.handleError));
    }
    /**
     * HTTP POST action
     */
    post(url, body, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http
            .post(resourceUrl, body, { headers: this.headers, observe: 'response' })
            .pipe(map((res) => this.processResponse(res)), catchError(this.handleError));
    }
    /**
     * HTTP PUT action
     */
    put(url, body, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http
            .put(resourceUrl, body, { headers: this.headers, observe: 'response' })
            .pipe(map((res) => this.processResponse(res)), catchError(this.handleError));
    }
    /**
     * HTTP DELETE action
     */
    delete(url, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http
            .delete(resourceUrl, { headers: this.headers, observe: 'response' })
            .pipe(map((res) => this.processResponse(res)), catchError(this.handleError));
    }
    /**
     * Construct URL with parameters
     */
    buildUrl(url, ...params) {
        return (params === null) ? url : (params.length === 0) ? url : `${url}${params && params.length > 0 ? '?' + params.join('&') : ''}`;
    }
    /**
     * Process the response, extract and refresh access token and return the body
     */
    processResponse(response) {
        if (response.status === 401) {
            removeToken();
            throw new Error('Access denied, reset token: ' + response.status);
        }
        else if (response.status > 400) {
            throw new Error('HTTP status error: ' + response.status);
        }
        // Get access token from header and update authentication service
        const accessToken = response.headers.get('X-ACCESS-TOKEN');
        if ((accessToken !== null) && (accessToken.length > 0)) {
            setToken(accessToken);
        }
        if (response.body && response.body.code && response.body.code !== 0) {
            throw { code: response.body.code, message: response.body.error };
        }
        return response.body;
    }
    /**
     * Error handling
     */
    handleError(error) {
        if (error.code) {
            return Promise.reject(error);
        }
        return Promise.reject(error.message || error);
    }
}
/** @nocollapse */ RestUtil.ɵfac = function RestUtil_Factory(t) { return new (t || RestUtil)(ɵɵinject(HttpClient)); };
/** @nocollapse */ RestUtil.ɵprov = ɵɵdefineInjectable({ token: RestUtil, factory: RestUtil.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(RestUtil, [{
        type: Injectable
    }], function () { return [{ type: HttpClient }]; }, null); })();

class CoreConfig {
}

/**
 * List of account related actions for account administrator only
 * @RequestHeader X-API-KEY The key to identify the application (console)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class AdminAccountService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
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
    getSettings() {
        return this.rest.get(`${this.baseUrl}/settings`);
    }
    /**
     * Update existing account settings in the system
     * @Return: EntityResponse<AccountSettings>
     */
    updateSettings(body) {
        return this.rest.put(`${this.baseUrl}/settings`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
}
/** @nocollapse */ AdminAccountService.ɵfac = function AdminAccountService_Factory(t) { return new (t || AdminAccountService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ AdminAccountService.ɵprov = ɵɵdefineInjectable({ token: AdminAccountService, factory: AdminAccountService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AdminAccountService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * Services for managing club activities - for account administrator only
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class AdminActivitiesService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
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
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update activity
     * @Return: EntityResponse<Activity>
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete activity
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single activity by id
     * @Return: EntityResponse<Activity>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get previous activity related to this activity id
     * @Return: EntityResponse<Activity>
     */
    prev(id) {
        return this.rest.get(`${this.baseUrl}/${id}/prev`);
    }
    /**
     * Get next activity related to this activity id
     * @Return: EntityResponse<Activity>
     */
    next(id) {
        return this.rest.get(`${this.baseUrl}/${id}/next`);
    }
    /**
     * Find activities by time range
     * @Return: QueryResponse<Activity>
     */
    find(from, to, year, month, day) {
        const params = new Array();
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (year != null) {
            params.push(`year=${year}`);
        }
        if (month != null) {
            params.push(`month=${month}`);
        }
        if (day != null) {
            params.push(`day=${day}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Find list of free resources for activity by filter
     * @Return: EntitiesResponse<Resource>
     */
    findFreeResources(id, resType, weight, forUseBy) {
        const params = new Array();
        if (resType != null) {
            params.push(`resType=${resType}`);
        }
        if (weight != null) {
            params.push(`weight=${weight}`);
        }
        if (forUseBy != null) {
            params.push(`forUseBy=${forUseBy}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/resources`, ...params);
    }
    /**
     * Create bulk set of activities
     * @Return: ActionResponse
     */
    createBulk(body) {
        return this.rest.post(`${this.baseUrl}/bulk`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Create account default set of activities per month
     * @Return: ActionResponse
     */
    createDefault(year, month, day) {
        const params = new Array();
        if (year != null) {
            params.push(`year=${year}`);
        }
        if (month != null) {
            params.push(`month=${month}`);
        }
        if (day != null) {
            params.push(`day=${day}`);
        }
        return this.rest.post(`${this.baseUrl}/default`, null, ...params);
    }
    /**
     * Clear all month activities
     * @Return: ActionResponse
     */
    clearDefault(year, month, day) {
        const params = new Array();
        if (year != null) {
            params.push(`year=${year}`);
        }
        if (month != null) {
            params.push(`month=${month}`);
        }
        if (day != null) {
            params.push(`day=${day}`);
        }
        return this.rest.delete(`${this.baseUrl}/default`, ...params);
    }
}
/** @nocollapse */ AdminActivitiesService.ɵfac = function AdminActivitiesService_Factory(t) { return new (t || AdminActivitiesService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ AdminActivitiesService.ɵprov = ɵɵdefineInjectable({ token: AdminActivitiesService, factory: AdminActivitiesService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AdminActivitiesService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * List of all user related actions for account administrator only
 */
class AdminMembersService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
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
    invite(body) {
        return this.rest.post(`${this.baseUrl}/invite`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Resend invitation to an existing member for the current account
     * @Return: ActionResponse
     */
    reInvite(id) {
        return this.rest.post(`${this.baseUrl}/re-invite/${id}`, null);
    }
    /**
     * Update member
     * @Return: EntityResponse<Member>
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete member from the account
     * The member will be removed from the account, if no other memberships exist for the user, it will be deleted from the system
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Reset password for member
     * The result is a temporary password
     * @Return: ActionResponse
     */
    resetPassword(id) {
        return this.rest.post(`${this.baseUrl}/${id}/reset-password`, null);
    }
    /**
     * Get single member by id (including user data)
     * @Return: EntityResponse<MemberUser>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single member by id (including user data)
     * @Return: EntityResponse<User>
     */
    getUserByEmail(email) {
        return this.rest.get(`${this.baseUrl}/email/${email}`);
    }
    /**
     * Get user memberships (in all accounts)
     * @Return: QueryResponse<Membership>
     */
    getUserMemberships(userId) {
        return this.rest.get(`${this.baseUrl}/memberships/${userId}`);
    }
    /**
     * Find list of users and filter the list
     * System user will see all users, Account system will see all users of the account, registered user will get an error.
     * @Return: QueryResponse<MemberUser>
     */
    find(accountId, search, role, status, sort, page, pageSize) {
        const params = new Array();
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (role != null) {
            params.push(`role=${role}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Import bulk set of members
     * @Return: ActionResponse
     */
    bulkImport(body) {
        return this.rest.post(`${this.baseUrl}/import`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
}
/** @nocollapse */ AdminMembersService.ɵfac = function AdminMembersService_Factory(t) { return new (t || AdminMembersService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ AdminMembersService.ɵprov = ɵɵdefineInjectable({ token: AdminMembersService, factory: AdminMembersService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AdminMembersService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * Services for planing club resource placements - for account administrator only
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class AdminPlaningService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
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
    getDailyPlaning(day) {
        return this.rest.get(`${this.baseUrl}/daily/${day}`);
    }
    /**
     * Export daily planing - as PDF stream
     * @Return: StreamContent
     */
    exportDailyPlaning(day, lang) {
        const params = new Array();
        if (lang != null) {
            params.push(`lang=${lang}`);
        }
        return this.rest.download(`admin-planing`, `${this.baseUrl}/daily/${day}/export`, ...params);
    }
    /**
     * Find list of free resources for the booking request
     * @Return: EntitiesResponse<Resource>
     */
    findFreeResources(id) {
        return this.rest.get(`${this.baseUrl}/bookings/${id}/resources`);
    }
    /**
     * Assign resource for booking request and approve
     * @Return: ActionResponse
     */
    assignResource(id, resourceId) {
        return this.rest.post(`${this.baseUrl}/bookings/${id}/assign/${resourceId}`, null);
    }
    /**
     * Un assign resource from booking request
     * @Return: ActionResponse
     */
    unAssignResource(id) {
        return this.rest.post(`${this.baseUrl}/bookings/${id}/un-assign`, null);
    }
    /**
     * Merge source and target bookings and recalculate the daily planing
     * @Return: EntitiesResponse<ActivityBookingGroup>
     */
    mergeBookings(day, source, target) {
        return this.rest.post(`${this.baseUrl}/daily/${day}/bookings/${source}/merge/${target}`, null);
    }
    /**
     * Split booking and recalculate the daily planing
     * @Return: EntitiesResponse<ActivityBookingGroup>
     */
    splitBookings(day, id) {
        return this.rest.post(`${this.baseUrl}/daily/${day}/bookings/${id}/split`, null);
    }
    /**
     * Delete booking and recalculate the daily planing
     * @Return: EntitiesResponse<ActivityBookingGroup>
     */
    deleteBooking(day, id) {
        return this.rest.delete(`${this.baseUrl}/daily/${day}/bookings/${id}`);
    }
    /**
     * Delete activity and recalculate the daily planing
     * @Return: EntitiesResponse<ActivityBookingGroup>
     */
    deleteActivity(day, id) {
        return this.rest.delete(`${this.baseUrl}/daily/${day}/activities/${id}`);
    }
    /**
     * Get daily registration list - who is present
     * @Return: EntitiesResponse<Actual>
     */
    getDailyRegistration(day) {
        return this.rest.get(`${this.baseUrl}/bookings/registration/${day}`);
    }
    /**
     * Update user registration
     * @Return: ActionResponse
     */
    updateRegistration(body) {
        return this.rest.post(`${this.baseUrl}/bookings/registration`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
}
/** @nocollapse */ AdminPlaningService.ɵfac = function AdminPlaningService_Factory(t) { return new (t || AdminPlaningService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ AdminPlaningService.ɵprov = ɵɵdefineInjectable({ token: AdminPlaningService, factory: AdminPlaningService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AdminPlaningService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * Services for managing club resources - for account administrator only
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class AdminResourcesService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
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
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update resource
     * @Return: EntityResponse<Resource>
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete resource
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single resource by id
     * @Return: EntityResponse<Resource>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find resources by filters
     * @Return: QueryResponse<Resource>
     */
    find(search, resourceClass, resourceType, status, forUseBy, sort, page, pageSize) {
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (resourceClass != null) {
            params.push(`resourceClass=${resourceClass}`);
        }
        if (resourceType != null) {
            params.push(`resourceType=${resourceType}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (forUseBy != null) {
            params.push(`forUseBy=${forUseBy}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Import bulk set of resources
     * @Return: ActionResponse
     */
    bulkCreate(body) {
        return this.rest.post(`${this.baseUrl}/import`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
}
/** @nocollapse */ AdminResourcesService.ɵfac = function AdminResourcesService_Factory(t) { return new (t || AdminResourcesService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ AdminResourcesService.ɵprov = ɵɵdefineInjectable({ token: AdminResourcesService, factory: AdminResourcesService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AdminResourcesService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * Health check service, no X-API-KEY or X-ACCESS-TOKEN are required
 */
class HealthCheckService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
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
    health() {
        return this.rest.get(`${this.baseUrl}`);
    }
}
/** @nocollapse */ HealthCheckService.ɵfac = function HealthCheckService_Factory(t) { return new (t || HealthCheckService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ HealthCheckService.ɵprov = ɵɵdefineInjectable({ token: HealthCheckService, factory: HealthCheckService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(HealthCheckService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * List of account related actions for system administrator only
 * @RequestHeader X-API-KEY The key to identify the application (console)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class SysAccountsService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
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
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing account in the system
     * @Return: EntityResponse<Account>
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete account from the system
     * The account is moved to DELETED mode and will be deleted after 90 days
     * Only account marked as SUSPENDED can be deleted
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Delete account immediately without account status restrictions
     * @Return: ActionResponse
     */
    purge(id) {
        return this.rest.delete(`${this.baseUrl}/purge/${id}`);
    }
    /**
     * Reset account - remove all operational data older than the retention time in days (events, status, log ...) but leave configuration data
     * @Return: ActionResponse
     */
    reset(id, days) {
        return this.rest.delete(`${this.baseUrl}/reset/${id}/days/${days}`);
    }
    /**
     * Get single account by id
     * @Return: EntityResponse<Account>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of accounts and filter
     * @Return: QueryResponse<Account>
     */
    find(search, type, status, sort, page, pageSize) {
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
}
/** @nocollapse */ SysAccountsService.ɵfac = function SysAccountsService_Factory(t) { return new (t || SysAccountsService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ SysAccountsService.ɵprov = ɵɵdefineInjectable({ token: SysAccountsService, factory: SysAccountsService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SysAccountsService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * List of all user related actions for account administrator only
 * @RequestHeader X-API-KEY The key to identify the application (console)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class SysUsersService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
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
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update user
     * @Return: EntityResponse<User>
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change user name
     * @Return: EntityResponse<User>
     */
    changeName(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/name`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change user mobile
     * @Return: EntityResponse<User>
     */
    changeMobile(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/mobile`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change user type
     * @Return: EntityResponse<User>
     */
    changeType(id, type) {
        return this.rest.put(`${this.baseUrl}/${id}/type/${type}`, null);
    }
    /**
     * Change user status
     * @Return: EntityResponse<User>
     */
    changeStatus(id, status) {
        return this.rest.put(`${this.baseUrl}/${id}/status/${status}`, null);
    }
    /**
     * Change user default account
     * @Return: EntityResponse<User>
     */
    changeDefaultAccount(id, accountId) {
        return this.rest.put(`${this.baseUrl}/${id}/defaultAccount/${accountId}`, null);
    }
    /**
     * Reset password for user, generate one-time temporary password
     * @Return: ActionResponse
     */
    resetPassword(id) {
        return this.rest.post(`${this.baseUrl}/${id}/reset-password`, null);
    }
    /**
     * Delete user from the system
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single user by Id
     * @Return: EntityResponse<User>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of users by filter
     * @Return: QueryResponse<User>
     */
    find(accountId, search, type, status, sort, page, pageSize) {
        const params = new Array();
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
}
/** @nocollapse */ SysUsersService.ɵfac = function SysUsersService_Factory(t) { return new (t || SysUsersService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ SysUsersService.ɵprov = ɵɵdefineInjectable({ token: SysUsersService, factory: SysUsersService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SysUsersService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * Services for managing club activities - for account administrator only
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class UsrActivitiesService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
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
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find activities by time range
     * @Return: QueryResponse<Activity>
     */
    find(from, to, year, month, day) {
        const params = new Array();
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (year != null) {
            params.push(`year=${year}`);
        }
        if (month != null) {
            params.push(`month=${month}`);
        }
        if (day != null) {
            params.push(`day=${day}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
}
/** @nocollapse */ UsrActivitiesService.ɵfac = function UsrActivitiesService_Factory(t) { return new (t || UsrActivitiesService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ UsrActivitiesService.ɵprov = ɵɵdefineInjectable({ token: UsrActivitiesService, factory: UsrActivitiesService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(UsrActivitiesService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * Services for managing kayak resources - for account administrator only
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class UserBookingsService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
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
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update booking
     * @Return: EntityResponse<Booking>
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete booking
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Remove current user from booking
     * @Return: ActionResponse
     */
    removeMe(id) {
        return this.rest.delete(`${this.baseUrl}/${id}/remove-me`);
    }
    /**
     * Get single booking by id
     * @Return: EntityResponse<Booking>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get extended booking info by id including names
     * @Return: EntityResponse<Booking>
     */
    getExt(id) {
        return this.rest.get(`${this.baseUrl}/${id}/ext`);
    }
    /**
     * Find bookings by filters
     * @Return: QueryResponse<Booking>
     */
    find(userId, resourceId, from, to, sort, page, pageSize) {
        const params = new Array();
        if (userId != null) {
            params.push(`userId=${userId}`);
        }
        if (resourceId != null) {
            params.push(`resourceId=${resourceId}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Find bookings history by filters
     * @Return: QueryResponse<Booking>
     */
    history(userId, resourceId, from, to, sort, page, pageSize) {
        const params = new Array();
        if (userId != null) {
            params.push(`userId=${userId}`);
        }
        if (resourceId != null) {
            params.push(`resourceId=${resourceId}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}/history`, ...params);
    }
    /**
     * Group my bookings by time period
     * @Return: EntitiesResponse<BookingGroup>
     */
    groups(from, to, groupBy) {
        const params = new Array();
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (groupBy != null) {
            params.push(`groupBy=${groupBy}`);
        }
        return this.rest.get(`${this.baseUrl}/groups`, ...params);
    }
    /**
     * Find list of activities groups by time period
     * @Return: EntitiesResponse<BookingGroup>
     */
    activities(from, to, groupBy) {
        const params = new Array();
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (groupBy != null) {
            params.push(`groupBy=${groupBy}`);
        }
        return this.rest.get(`${this.baseUrl}/activities`, ...params);
    }
}
/** @nocollapse */ UserBookingsService.ɵfac = function UserBookingsService_Factory(t) { return new (t || UserBookingsService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ UserBookingsService.ɵprov = ɵɵdefineInjectable({ token: UserBookingsService, factory: UserBookingsService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(UserBookingsService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * Services for managing user placements (approved bookings)
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class UserPlacementsService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
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
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update placement
     * @Return: EntityResponse<Placement>
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete placement
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single placement by id
     * @Return: EntityResponse<Placement>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find placements by filters
     * @Return: QueryResponse<Placement>
     */
    find(userId, resourceId, bookingId, status, sort, page, pageSize) {
        const params = new Array();
        if (userId != null) {
            params.push(`userId=${userId}`);
        }
        if (resourceId != null) {
            params.push(`resourceId=${resourceId}`);
        }
        if (bookingId != null) {
            params.push(`bookingId=${bookingId}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
}
/** @nocollapse */ UserPlacementsService.ɵfac = function UserPlacementsService_Factory(t) { return new (t || UserPlacementsService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ UserPlacementsService.ɵprov = ɵɵdefineInjectable({ token: UserPlacementsService, factory: UserPlacementsService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(UserPlacementsService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * List of account related actions
 */
class UserAccountsService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
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
    find(search, type, status, sort, page, pageSize) {
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Get single account by id
     * @Return: EntityResponse<Account>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get list of user memberships
     * @Return: EntitiesResponse<Membership>
     */
    getMemberships() {
        return this.rest.get(`${this.baseUrl}/memberships`);
    }
    /**
     * Delete membership by id
     * @Return: ActionResponse
     */
    deleteMemberships(id) {
        return this.rest.delete(`${this.baseUrl}/memberships/${id}`);
    }
}
/** @nocollapse */ UserAccountsService.ɵfac = function UserAccountsService_Factory(t) { return new (t || UserAccountsService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ UserAccountsService.ɵprov = ɵɵdefineInjectable({ token: UserAccountsService, factory: UserAccountsService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(UserAccountsService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * List of all user related actions for account administrator only
 */
class UsrMembersService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
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
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get my (logged-in user) member info (including user data)
     * @Return: EntityResponse<MemberUser>
     */
    getMy() {
        return this.rest.get(`${this.baseUrl}/my`);
    }
    /**
     * Find list of users and filter the list
     * System user will see all users, Account system will see all users of the account, registered user will get an error.
     * @Return: QueryResponse<MemberUser>
     */
    find(search, role, status, sort, page, pageSize) {
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (role != null) {
            params.push(`role=${role}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
}
/** @nocollapse */ UsrMembersService.ɵfac = function UsrMembersService_Factory(t) { return new (t || UsrMembersService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ UsrMembersService.ɵprov = ɵɵdefineInjectable({ token: UsrMembersService, factory: UsrMembersService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(UsrMembersService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * Services for user registration and login
 */
class UserService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
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
    login(body) {
        return this.rest.post(`${this.baseUrl}/login`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Refresh token (set new expiration time) and associate with new account if required
     * @Return: EntityResponse<LoginData>
     */
    refreshToken() {
        return this.rest.post(`${this.baseUrl}/refresh-token`, null);
    }
    /**
     * Verify user by temporary login key
     * @Return: EntityResponse<User>
     */
    verifyLoginKey(key) {
        const params = new Array();
        if (key != null) {
            params.push(`key=${key}`);
        }
        return this.rest.get(`${this.baseUrl}/login/verify`, ...params);
    }
    /**
     * Send verification code by email
     * @Return: ActionResponse
     */
    sendVerificationCode(body) {
        return this.rest.post(`${this.baseUrl}/verify`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Validate verification code and reset password
     * @Return: ActionResponse
     */
    resetPassword(code) {
        return this.rest.post(`${this.baseUrl}/reset-password`, typeof code === 'object' ? JSON.stringify(code) : code);
    }
    /**
     * Change password
     * @Return: ActionResponse
     */
    changePassword(body) {
        return this.rest.post(`${this.baseUrl}/change-password`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Check if password was used before (according to password policy)
     * @Return: ActionResponse
     */
    checkUnusedPassword(body) {
        return this.rest.post(`${this.baseUrl}/check-password`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change current user name
     * @Return: ActionResponse
     */
    changeName(body) {
        return this.rest.put(`${this.baseUrl}/name`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change current user mobile
     * @Return: ActionResponse
     */
    changeMobile(body) {
        return this.rest.put(`${this.baseUrl}/mobile`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Get all user accessible accounts for the user
     * @Return: EntitiesResponse<Account>
     */
    getAccounts() {
        return this.rest.get(`${this.baseUrl}/accounts`);
    }
    /**
     * Refresh token (set new expiration time) and associate with new account if required
     * @Return: EntityResponse<UserAccountInfo>
     */
    switchAccount(body) {
        return this.rest.post(`${this.baseUrl}/switch-account`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Get user profile
     * @Return: EntityResponse<User>
     */
    getProfile() {
        return this.rest.get(`${this.baseUrl}/profile`);
    }
    /**
     * Update user profile
     * @Return: EntityResponse<User>
     */
    setProfile(body) {
        return this.rest.put(`${this.baseUrl}/profile`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Get app version
     * @Return: ActionResponse
     */
    getVersion() {
        return this.rest.get(`${this.baseUrl}/version`);
    }
}
/** @nocollapse */ UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ UserService.ɵprov = ɵɵdefineInjectable({ token: UserService, factory: UserService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(UserService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

const Services = [
    AdminAccountService,
    HealthCheckService,
    SysAccountsService,
    SysUsersService,
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
];

class CoreLibModule {
    static forRoot(config) {
        // console.log(config);
        return {
            ngModule: CoreLibModule,
            providers: [
                { provide: 'config', useValue: config },
                RestUtil,
                ...Services
            ]
        };
    }
}
/** @nocollapse */ CoreLibModule.ɵmod = ɵɵdefineNgModule({ type: CoreLibModule });
/** @nocollapse */ CoreLibModule.ɵinj = ɵɵdefineInjector({ factory: function CoreLibModule_Factory(t) { return new (t || CoreLibModule)(); }, imports: [[CommonModule, HttpClientModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CoreLibModule, { imports: [CommonModule, HttpClientModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(CoreLibModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, HttpClientModule]
            }]
    }], null, null); })();

/* Public API Surface of ng-core-lib */

/**
 * Generated bundle index. Do not edit.
 */

export { AbsoluteTimeFrame, Account, AccountIdRequest, AccountRole, AccountRoleCode, AccountSettings, AccountStatusCode, AccountTypeCode, ActionResponse, Activity, ActivityBookingGroup, ActivityIdRequest, ActivityStatusCode, Actual, AdminAccountService, AdminAccountSettingsUpdateRequest, AdminActivitiesService, AdminActivityBulkCreateRequest, AdminActivityDefaultCreateRequest, AdminActivityDefaultDeleteRequest, AdminActivityFindFreeResourcesRequest, AdminActivityFindRequest, AdminActivityPlaningRequest, AdminCreateActivityRequest, AdminCreateResourceRequest, AdminDailyPlaningExportRequest, AdminDailyPlaningRequest, AdminDailyRegistrationRequest, AdminFindFreeResourcesRequest, AdminMembersFindRequest, AdminMembersService, AdminPlaningAssignResourceRequest, AdminPlaningDeleteActivityRequest, AdminPlaningDeleteBookingRequest, AdminPlaningMergeBookingsRequest, AdminPlaningService, AdminPlaningSplitBookingRequest, AdminPlaningUnAssignResourceRequest, AdminResourceBulkCreateRequest, AdminResourceFindRequest, AdminResourcesService, AdminUpdateActivityRequest, AdminUpdateRegistrationRequest, AdminUpdateResourceRequest, ApiKey, AuditLog, BaseEntity, Booking, BookingGroup, BookingIdRequest, BookingRequest, BookingRequestIdRequest, BookingStatusCode, ChangePasswordRequest, CoreConfig, CoreLibModule, DayOfWeekCode, EmptyRequest, EmptyResponse, EntitiesResponse, EntitiesResponseOfAccount, EntitiesResponseOfActivity, EntitiesResponseOfActivityBookingGroup, EntitiesResponseOfActual, EntitiesResponseOfBooking, EntitiesResponseOfBookingGroup, EntitiesResponseOfBookingRequest, EntitiesResponseOfMembership, EntitiesResponseOfPlacement, EntitiesResponseOfResource, EntityResponse, EntityResponseOfAccount, EntityResponseOfAccountSettings, EntityResponseOfActivity, EntityResponseOfBooking, EntityResponseOfBookingRequest, EntityResponseOfLoginData, EntityResponseOfMember, EntityResponseOfMemberUser, EntityResponseOfPlacement, EntityResponseOfPlaning, EntityResponseOfResource, EntityResponseOfUser, EntityResponseOfUserAccountInfo, EntityTypeCode, Feature, FeatureCode, FeaturesGroup, HealthCheckService, Incident, KayakTypeCode, LoginData, LoginParams, Member, MemberIdRequest, MemberRegistration, MemberStatusCode, MemberUser, MembersBulkImportRequest, MembersFindRequest, MembersServiceInviteRequest, MembersServiceUpdateRequest, Membership, MembershipIdRequest, MembershipsRequest, Placement, PlacementIdRequest, PlacementStatusCode, Planing, QueryResponse, QueryResponseOfAccount, QueryResponseOfActivity, QueryResponseOfBooking, QueryResponseOfBookingRequest, QueryResponseOfMemberUser, QueryResponseOfMembership, QueryResponseOfPlacement, QueryResponseOfResource, QueryResponseOfUser, RecurrentActivity, RecurrentTimeFrame, Registration, Resource, ResourceClassCode, ResourceIdRequest, ResourceStatusCode, ResourceTypeMask, RestUtil, RowingBoatTypeCode, Services, StreamResponse, StringKeyValue, SysAccountsService, SysAdminAccountCreateRequest, SysAdminAccountResetRequest, SysAdminAccountUpdateRequest, SysAdminAccountsFindRequest, SysUsersService, TimeFrame, TimeUnitCode, TokenRequest, User, UserAccountInfo, UserAccountsFindRequest, UserAccountsService, UserBookingFindRequest, UserBookingGroupRequest, UserBookingRequestFindRequest, UserBookingsService, UserByEmailRequest, UserCreateBookingRequest, UserCreateBookingRequestRequest, UserCreatePlacementRequest, UserGenderCode, UserIdRequest, UserIdsRequest, UserInvitation, UserPlacementFindRequest, UserPlacementsService, UserRegistration, UserService, UserServiceChangeMobileRequest, UserServiceChangeNameRequest, UserServiceChangePasswordRequest, UserServiceCheckPasswordRequest, UserServiceLoginRequest, UserServiceResetPasswordRequest, UserServiceSendVerificationRequest, UserServiceSwitchAccountRequest, UserServiceUpdateRequest, UserServiceVerifyLoginRequest, UserStatusCode, UserTokenRequest, UserTypeCode, UserUpdateBookingRequest, UserUpdateBookingRequestRequest, UserUpdatePlacementRequest, UsersServiceChangeDefaultAccountRequest, UsersServiceChangeMobileRequest, UsersServiceChangeNameRequest, UsersServiceChangeRoleRequest, UsersServiceChangeStatusRequest, UsersServiceChangeTypeRequest, UsersServiceCreateRequest, UsersServiceExportRequest, UsersServiceFindRequest, UsersServiceInviteRequest, UsersServiceSetRolesRequest, UsersServiceUpdateRequest, UsrActivitiesService, UsrMembersService, Verification, WebSocketMessageHeader, WeightRange, getToken, removeToken, setToken };
//# sourceMappingURL=mottyc-ng-core-lib.js.map
