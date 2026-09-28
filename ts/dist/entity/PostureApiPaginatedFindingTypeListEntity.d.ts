import { CloudflareDlpEntityBase } from '../CloudflareDlpEntityBase';
import type { CloudflareDlpSDK } from '../CloudflareDlpSDK';
import type { Control } from '../types';
import type { PostureApiPaginatedFindingTypeList, PostureApiPaginatedFindingTypeListListMatch } from '../CloudflareDlpTypes';
declare class PostureApiPaginatedFindingTypeListEntity extends CloudflareDlpEntityBase<PostureApiPaginatedFindingTypeList> {
    constructor(client: CloudflareDlpSDK, entopts: any);
    make(this: PostureApiPaginatedFindingTypeListEntity): PostureApiPaginatedFindingTypeListEntity;
    list(this: any, reqmatch?: PostureApiPaginatedFindingTypeListListMatch, ctrl?: Control): Promise<PostureApiPaginatedFindingTypeListEntity[]>;
}
export { PostureApiPaginatedFindingTypeListEntity };
