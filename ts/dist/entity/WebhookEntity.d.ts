import { CloudflareDlpEntityBase } from '../CloudflareDlpEntityBase';
import type { CloudflareDlpSDK } from '../CloudflareDlpSDK';
import type { Control } from '../types';
import type { Webhook, WebhookCreateData, WebhookUpdateData, WebhookRemoveMatch } from '../CloudflareDlpTypes';
declare class WebhookEntity extends CloudflareDlpEntityBase<Webhook> {
    constructor(client: CloudflareDlpSDK, entopts: any);
    make(this: WebhookEntity): WebhookEntity;
    create(this: any, reqdata?: WebhookCreateData, ctrl?: Control): Promise<WebhookEntity>;
    update(this: any, reqdata?: WebhookUpdateData, ctrl?: Control): Promise<WebhookEntity>;
    remove(this: any, reqmatch?: WebhookRemoveMatch, ctrl?: Control): Promise<WebhookEntity>;
}
export { WebhookEntity };
