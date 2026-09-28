import { CloudflareDlpEntityBase } from '../CloudflareDlpEntityBase';
import type { CloudflareDlpSDK } from '../CloudflareDlpSDK';
import type { Control } from '../types';
import type { PostureApiFinding, PostureApiFindingLoadMatch, PostureApiFindingCreateData } from '../CloudflareDlpTypes';
declare class PostureApiFindingEntity extends CloudflareDlpEntityBase<PostureApiFinding> {
    constructor(client: CloudflareDlpSDK, entopts: any);
    make(this: PostureApiFindingEntity): PostureApiFindingEntity;
    load(this: any, reqmatch?: PostureApiFindingLoadMatch, ctrl?: Control): Promise<PostureApiFindingEntity>;
    create(this: any, reqdata?: PostureApiFindingCreateData, ctrl?: Control): Promise<PostureApiFindingEntity>;
}
export { PostureApiFindingEntity };
