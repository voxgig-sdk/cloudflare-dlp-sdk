import { CloudflareDlpEntityBase } from '../CloudflareDlpEntityBase';
import type { CloudflareDlpSDK } from '../CloudflareDlpSDK';
import type { Control } from '../types';
import type { PostureApiCreateWebhookJob, PostureApiCreateWebhookJobCreateData } from '../CloudflareDlpTypes';
declare class PostureApiCreateWebhookJobEntity extends CloudflareDlpEntityBase<PostureApiCreateWebhookJob> {
    constructor(client: CloudflareDlpSDK, entopts: any);
    make(this: PostureApiCreateWebhookJobEntity): PostureApiCreateWebhookJobEntity;
    create(this: any, reqdata?: PostureApiCreateWebhookJobCreateData, ctrl?: Control): Promise<PostureApiCreateWebhookJobEntity>;
}
export { PostureApiCreateWebhookJobEntity };
