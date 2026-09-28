import { CloudflareDlpEntityBase } from '../CloudflareDlpEntityBase';
import type { CloudflareDlpSDK } from '../CloudflareDlpSDK';
import type { Control } from '../types';
import type { DlpDataTagCategoryTemplate, DlpDataTagCategoryTemplateLoadMatch, DlpDataTagCategoryTemplateListMatch } from '../CloudflareDlpTypes';
declare class DlpDataTagCategoryTemplateEntity extends CloudflareDlpEntityBase<DlpDataTagCategoryTemplate> {
    constructor(client: CloudflareDlpSDK, entopts: any);
    make(this: DlpDataTagCategoryTemplateEntity): DlpDataTagCategoryTemplateEntity;
    load(this: any, reqmatch?: DlpDataTagCategoryTemplateLoadMatch, ctrl?: Control): Promise<DlpDataTagCategoryTemplateEntity>;
    list(this: any, reqmatch?: DlpDataTagCategoryTemplateListMatch, ctrl?: Control): Promise<DlpDataTagCategoryTemplateEntity[]>;
}
export { DlpDataTagCategoryTemplateEntity };
