import { CloudflareDlpEntityBase } from '../CloudflareDlpEntityBase';
import type { CloudflareDlpSDK } from '../CloudflareDlpSDK';
import type { Control } from '../types';
import type { PostureApiPaginatedRemediationTypeList, PostureApiPaginatedRemediationTypeListListMatch } from '../CloudflareDlpTypes';
declare class PostureApiPaginatedRemediationTypeListEntity extends CloudflareDlpEntityBase<PostureApiPaginatedRemediationTypeList> {
    constructor(client: CloudflareDlpSDK, entopts: any);
    make(this: PostureApiPaginatedRemediationTypeListEntity): PostureApiPaginatedRemediationTypeListEntity;
    list(this: any, reqmatch?: PostureApiPaginatedRemediationTypeListListMatch, ctrl?: Control): Promise<PostureApiPaginatedRemediationTypeListEntity[]>;
}
export { PostureApiPaginatedRemediationTypeListEntity };
