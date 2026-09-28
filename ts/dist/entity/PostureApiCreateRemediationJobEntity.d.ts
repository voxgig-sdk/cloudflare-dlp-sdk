import { CloudflareDlpEntityBase } from '../CloudflareDlpEntityBase';
import type { CloudflareDlpSDK } from '../CloudflareDlpSDK';
import type { Control } from '../types';
import type { PostureApiCreateRemediationJob, PostureApiCreateRemediationJobCreateData } from '../CloudflareDlpTypes';
declare class PostureApiCreateRemediationJobEntity extends CloudflareDlpEntityBase<PostureApiCreateRemediationJob> {
    constructor(client: CloudflareDlpSDK, entopts: any);
    make(this: PostureApiCreateRemediationJobEntity): PostureApiCreateRemediationJobEntity;
    create(this: any, reqdata?: PostureApiCreateRemediationJobCreateData, ctrl?: Control): Promise<PostureApiCreateRemediationJobEntity>;
}
export { PostureApiCreateRemediationJobEntity };
