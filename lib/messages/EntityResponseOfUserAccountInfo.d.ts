import { EntityResponse } from '../messages/EntityResponse';
import { UserAccountInfo } from '../common/UserAccountInfo';
export interface EntityResponseOfUserAccountInfo extends EntityResponse {
    entity?: UserAccountInfo;
    code?: number;
    error?: string;
}
