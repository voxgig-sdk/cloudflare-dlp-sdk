import { CloudflareDlpEntityBase } from '../CloudflareDlpEntityBase';
import type { CloudflareDlpSDK } from '../CloudflareDlpSDK';
import type { Control } from '../types';
import type { PostureApiPaginatedFindingInstanceList, PostureApiPaginatedFindingInstanceListListMatch } from '../CloudflareDlpTypes';
declare class PostureApiPaginatedFindingInstanceListEntity extends CloudflareDlpEntityBase<PostureApiPaginatedFindingInstanceList> {
    constructor(client: CloudflareDlpSDK, entopts: any);
    make(this: PostureApiPaginatedFindingInstanceListEntity): PostureApiPaginatedFindingInstanceListEntity;
    list(this: any, reqmatch?: PostureApiPaginatedFindingInstanceListListMatch, ctrl?: Control): Promise<PostureApiPaginatedFindingInstanceListEntity[]>;
}
export { PostureApiPaginatedFindingInstanceListEntity };
