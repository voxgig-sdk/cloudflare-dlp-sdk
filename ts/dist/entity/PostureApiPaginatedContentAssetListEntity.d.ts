import { CloudflareDlpEntityBase } from '../CloudflareDlpEntityBase';
import type { CloudflareDlpSDK } from '../CloudflareDlpSDK';
import type { Control } from '../types';
import type { PostureApiPaginatedContentAssetList, PostureApiPaginatedContentAssetListListMatch } from '../CloudflareDlpTypes';
declare class PostureApiPaginatedContentAssetListEntity extends CloudflareDlpEntityBase<PostureApiPaginatedContentAssetList> {
    constructor(client: CloudflareDlpSDK, entopts: any);
    make(this: PostureApiPaginatedContentAssetListEntity): PostureApiPaginatedContentAssetListEntity;
    list(this: any, reqmatch?: PostureApiPaginatedContentAssetListListMatch, ctrl?: Control): Promise<PostureApiPaginatedContentAssetListEntity[]>;
}
export { PostureApiPaginatedContentAssetListEntity };
