import { CloudflareDlpEntityBase } from '../CloudflareDlpEntityBase';
import type { CloudflareDlpSDK } from '../CloudflareDlpSDK';
import type { Control } from '../types';
import type { DlpCustomPromptTopic, DlpCustomPromptTopicLoadMatch, DlpCustomPromptTopicListMatch, DlpCustomPromptTopicCreateData, DlpCustomPromptTopicUpdateData, DlpCustomPromptTopicRemoveMatch } from '../CloudflareDlpTypes';
declare class DlpCustomPromptTopicEntity extends CloudflareDlpEntityBase<DlpCustomPromptTopic> {
    constructor(client: CloudflareDlpSDK, entopts: any);
    make(this: DlpCustomPromptTopicEntity): DlpCustomPromptTopicEntity;
    load(this: any, reqmatch?: DlpCustomPromptTopicLoadMatch, ctrl?: Control): Promise<DlpCustomPromptTopicEntity>;
    list(this: any, reqmatch?: DlpCustomPromptTopicListMatch, ctrl?: Control): Promise<DlpCustomPromptTopicEntity[]>;
    create(this: any, reqdata?: DlpCustomPromptTopicCreateData, ctrl?: Control): Promise<DlpCustomPromptTopicEntity>;
    update(this: any, reqdata?: DlpCustomPromptTopicUpdateData, ctrl?: Control): Promise<DlpCustomPromptTopicEntity>;
    remove(this: any, reqmatch?: DlpCustomPromptTopicRemoveMatch, ctrl?: Control): Promise<DlpCustomPromptTopicEntity>;
}
export { DlpCustomPromptTopicEntity };
