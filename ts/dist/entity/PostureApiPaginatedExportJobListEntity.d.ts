import { CloudflareDlpEntityBase } from '../CloudflareDlpEntityBase';
import type { CloudflareDlpSDK } from '../CloudflareDlpSDK';
import type { Control } from '../types';
import type { PostureApiPaginatedExportJobList, PostureApiPaginatedExportJobListListMatch } from '../CloudflareDlpTypes';
declare class PostureApiPaginatedExportJobListEntity extends CloudflareDlpEntityBase<PostureApiPaginatedExportJobList> {
    constructor(client: CloudflareDlpSDK, entopts: any);
    make(this: PostureApiPaginatedExportJobListEntity): PostureApiPaginatedExportJobListEntity;
    list(this: any, reqmatch?: PostureApiPaginatedExportJobListListMatch, ctrl?: Control): Promise<PostureApiPaginatedExportJobListEntity[]>;
}
export { PostureApiPaginatedExportJobListEntity };
