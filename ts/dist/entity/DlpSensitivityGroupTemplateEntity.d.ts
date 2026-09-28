import { CloudflareDlpEntityBase } from '../CloudflareDlpEntityBase';
import type { CloudflareDlpSDK } from '../CloudflareDlpSDK';
import type { Control } from '../types';
import type { DlpSensitivityGroupTemplate, DlpSensitivityGroupTemplateLoadMatch, DlpSensitivityGroupTemplateListMatch } from '../CloudflareDlpTypes';
declare class DlpSensitivityGroupTemplateEntity extends CloudflareDlpEntityBase<DlpSensitivityGroupTemplate> {
    constructor(client: CloudflareDlpSDK, entopts: any);
    make(this: DlpSensitivityGroupTemplateEntity): DlpSensitivityGroupTemplateEntity;
    load(this: any, reqmatch?: DlpSensitivityGroupTemplateLoadMatch, ctrl?: Control): Promise<DlpSensitivityGroupTemplateEntity>;
    list(this: any, reqmatch?: DlpSensitivityGroupTemplateListMatch, ctrl?: Control): Promise<DlpSensitivityGroupTemplateEntity[]>;
}
export { DlpSensitivityGroupTemplateEntity };
