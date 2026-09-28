import { CloudflareDlpEntityBase } from '../CloudflareDlpEntityBase';
import type { CloudflareDlpSDK } from '../CloudflareDlpSDK';
import type { Control } from '../types';
import type { PostureApiWebhookList, PostureApiWebhookListListMatch } from '../CloudflareDlpTypes';
declare class PostureApiWebhookListEntity extends CloudflareDlpEntityBase<PostureApiWebhookList> {
    constructor(client: CloudflareDlpSDK, entopts: any);
    make(this: PostureApiWebhookListEntity): PostureApiWebhookListEntity;
    list(this: any, reqmatch?: PostureApiWebhookListListMatch, ctrl?: Control): Promise<PostureApiWebhookListEntity[]>;
}
export { PostureApiWebhookListEntity };
