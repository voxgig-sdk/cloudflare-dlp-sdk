import { CloudflareDlpEntityBase } from '../CloudflareDlpEntityBase';
import type { CloudflareDlpSDK } from '../CloudflareDlpSDK';
import type { Control } from '../types';
import type { PostureApiFindingType, PostureApiFindingTypeLoadMatch } from '../CloudflareDlpTypes';
declare class PostureApiFindingTypeEntity extends CloudflareDlpEntityBase<PostureApiFindingType> {
    constructor(client: CloudflareDlpSDK, entopts: any);
    make(this: PostureApiFindingTypeEntity): PostureApiFindingTypeEntity;
    load(this: any, reqmatch?: PostureApiFindingTypeLoadMatch, ctrl?: Control): Promise<PostureApiFindingTypeEntity>;
}
export { PostureApiFindingTypeEntity };
