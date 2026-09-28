import { CloudflareDlpEntityBase } from '../CloudflareDlpEntityBase';
import type { CloudflareDlpSDK } from '../CloudflareDlpSDK';
import type { Control } from '../types';
import type { DlpSetting, DlpSettingLoadMatch, DlpSettingCreateData, DlpSettingUpdateData, DlpSettingRemoveMatch } from '../CloudflareDlpTypes';
declare class DlpSettingEntity extends CloudflareDlpEntityBase<DlpSetting> {
    constructor(client: CloudflareDlpSDK, entopts: any);
    make(this: DlpSettingEntity): DlpSettingEntity;
    load(this: any, reqmatch?: DlpSettingLoadMatch, ctrl?: Control): Promise<DlpSettingEntity>;
    create(this: any, reqdata?: DlpSettingCreateData, ctrl?: Control): Promise<DlpSettingEntity>;
    update(this: any, reqdata?: DlpSettingUpdateData, ctrl?: Control): Promise<DlpSettingEntity>;
    remove(this: any, reqmatch?: DlpSettingRemoveMatch, ctrl?: Control): Promise<DlpSettingEntity>;
}
export { DlpSettingEntity };
