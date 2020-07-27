import { Account } from '../entities/Account';
import { LoginData } from '../common/LoginData';
import { FeatureCode } from '../enums/FeatureCode';
export interface UserAccountInfo {
    account?: Account;
    loginData?: LoginData;
    features?: FeatureCode[];
}
