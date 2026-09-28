import { CloudflareDlpEntityBase } from '../CloudflareDlpEntityBase';
import type { CloudflareDlpSDK } from '../CloudflareDlpSDK';
import type { Control } from '../types';
import type { PostureApiPaginatedFindingList, PostureApiPaginatedFindingListListMatch } from '../CloudflareDlpTypes';
declare class PostureApiPaginatedFindingListEntity extends CloudflareDlpEntityBase<PostureApiPaginatedFindingList> {
    constructor(client: CloudflareDlpSDK, entopts: any);
    make(this: PostureApiPaginatedFindingListEntity): PostureApiPaginatedFindingListEntity;
    list(this: any, reqmatch?: PostureApiPaginatedFindingListListMatch, ctrl?: Control): Promise<PostureApiPaginatedFindingListEntity[]>;
}
export { PostureApiPaginatedFindingListEntity };
