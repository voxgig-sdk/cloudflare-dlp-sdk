import { CloudflareDlpEntityBase } from '../CloudflareDlpEntityBase';
import type { CloudflareDlpSDK } from '../CloudflareDlpSDK';
import type { Control } from '../types';
import type { PostureApiWebhook, PostureApiWebhookLoadMatch, PostureApiWebhookCreateData } from '../CloudflareDlpTypes';
declare class PostureApiWebhookEntity extends CloudflareDlpEntityBase<PostureApiWebhook> {
    constructor(client: CloudflareDlpSDK, entopts: any);
    make(this: PostureApiWebhookEntity): PostureApiWebhookEntity;
    load(this: any, reqmatch?: PostureApiWebhookLoadMatch, ctrl?: Control): Promise<PostureApiWebhookEntity>;
    create(this: any, reqdata?: PostureApiWebhookCreateData, ctrl?: Control): Promise<PostureApiWebhookEntity>;
}
export { PostureApiWebhookEntity };
