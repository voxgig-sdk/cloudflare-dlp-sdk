import { CloudflareDlpEntityBase } from '../CloudflareDlpEntityBase';
import type { CloudflareDlpSDK } from '../CloudflareDlpSDK';
import type { Control } from '../types';
import type { DlpSensitivityGroup, DlpSensitivityGroupLoadMatch, DlpSensitivityGroupListMatch, DlpSensitivityGroupCreateData, DlpSensitivityGroupUpdateData, DlpSensitivityGroupRemoveMatch } from '../CloudflareDlpTypes';
declare class DlpSensitivityGroupEntity extends CloudflareDlpEntityBase<DlpSensitivityGroup> {
    constructor(client: CloudflareDlpSDK, entopts: any);
    make(this: DlpSensitivityGroupEntity): DlpSensitivityGroupEntity;
    load(this: any, reqmatch?: DlpSensitivityGroupLoadMatch, ctrl?: Control): Promise<DlpSensitivityGroupEntity>;
    list(this: any, reqmatch?: DlpSensitivityGroupListMatch, ctrl?: Control): Promise<DlpSensitivityGroupEntity[]>;
    create(this: any, reqdata?: DlpSensitivityGroupCreateData, ctrl?: Control): Promise<DlpSensitivityGroupEntity>;
    update(this: any, reqdata?: DlpSensitivityGroupUpdateData, ctrl?: Control): Promise<DlpSensitivityGroupEntity>;
    remove(this: any, reqmatch?: DlpSensitivityGroupRemoveMatch, ctrl?: Control): Promise<DlpSensitivityGroupEntity>;
}
export { DlpSensitivityGroupEntity };
