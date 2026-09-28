import { CloudflareDlpEntityBase } from '../CloudflareDlpEntityBase';
import type { CloudflareDlpSDK } from '../CloudflareDlpSDK';
import type { Control } from '../types';
import type { DlpSensitivityLevel, DlpSensitivityLevelLoadMatch, DlpSensitivityLevelListMatch, DlpSensitivityLevelCreateData, DlpSensitivityLevelUpdateData, DlpSensitivityLevelRemoveMatch } from '../CloudflareDlpTypes';
declare class DlpSensitivityLevelEntity extends CloudflareDlpEntityBase<DlpSensitivityLevel> {
    constructor(client: CloudflareDlpSDK, entopts: any);
    make(this: DlpSensitivityLevelEntity): DlpSensitivityLevelEntity;
    load(this: any, reqmatch?: DlpSensitivityLevelLoadMatch, ctrl?: Control): Promise<DlpSensitivityLevelEntity>;
    list(this: any, reqmatch?: DlpSensitivityLevelListMatch, ctrl?: Control): Promise<DlpSensitivityLevelEntity[]>;
    create(this: any, reqdata?: DlpSensitivityLevelCreateData, ctrl?: Control): Promise<DlpSensitivityLevelEntity>;
    update(this: any, reqdata?: DlpSensitivityLevelUpdateData, ctrl?: Control): Promise<DlpSensitivityLevelEntity>;
    remove(this: any, reqmatch?: DlpSensitivityLevelRemoveMatch, ctrl?: Control): Promise<DlpSensitivityLevelEntity>;
}
export { DlpSensitivityLevelEntity };
