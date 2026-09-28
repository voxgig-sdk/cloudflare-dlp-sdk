import { CloudflareDlpEntityBase } from '../CloudflareDlpEntityBase';
import type { CloudflareDlpSDK } from '../CloudflareDlpSDK';
import type { Control } from '../types';
import type { PostureApiPaginatedRemediationJobList, PostureApiPaginatedRemediationJobListListMatch } from '../CloudflareDlpTypes';
declare class PostureApiPaginatedRemediationJobListEntity extends CloudflareDlpEntityBase<PostureApiPaginatedRemediationJobList> {
    constructor(client: CloudflareDlpSDK, entopts: any);
    make(this: PostureApiPaginatedRemediationJobListEntity): PostureApiPaginatedRemediationJobListEntity;
    list(this: any, reqmatch?: PostureApiPaginatedRemediationJobListListMatch, ctrl?: Control): Promise<PostureApiPaginatedRemediationJobListEntity[]>;
}
export { PostureApiPaginatedRemediationJobListEntity };
