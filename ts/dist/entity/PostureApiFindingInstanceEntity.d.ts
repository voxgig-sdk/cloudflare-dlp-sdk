import { CloudflareDlpEntityBase } from '../CloudflareDlpEntityBase';
import type { CloudflareDlpSDK } from '../CloudflareDlpSDK';
import type { Control } from '../types';
import type { PostureApiFindingInstance, PostureApiFindingInstanceLoadMatch, PostureApiFindingInstanceCreateData } from '../CloudflareDlpTypes';
declare class PostureApiFindingInstanceEntity extends CloudflareDlpEntityBase<PostureApiFindingInstance> {
    constructor(client: CloudflareDlpSDK, entopts: any);
    make(this: PostureApiFindingInstanceEntity): PostureApiFindingInstanceEntity;
    load(this: any, reqmatch?: PostureApiFindingInstanceLoadMatch, ctrl?: Control): Promise<PostureApiFindingInstanceEntity>;
    create(this: any, reqdata?: PostureApiFindingInstanceCreateData, ctrl?: Control): Promise<PostureApiFindingInstanceEntity>;
}
export { PostureApiFindingInstanceEntity };
