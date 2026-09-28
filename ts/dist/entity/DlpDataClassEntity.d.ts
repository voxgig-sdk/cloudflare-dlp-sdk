import { CloudflareDlpEntityBase } from '../CloudflareDlpEntityBase';
import type { CloudflareDlpSDK } from '../CloudflareDlpSDK';
import type { Control } from '../types';
import type { DlpDataClass, DlpDataClassLoadMatch, DlpDataClassListMatch, DlpDataClassCreateData, DlpDataClassUpdateData, DlpDataClassRemoveMatch } from '../CloudflareDlpTypes';
declare class DlpDataClassEntity extends CloudflareDlpEntityBase<DlpDataClass> {
    constructor(client: CloudflareDlpSDK, entopts: any);
    make(this: DlpDataClassEntity): DlpDataClassEntity;
    load(this: any, reqmatch?: DlpDataClassLoadMatch, ctrl?: Control): Promise<DlpDataClassEntity>;
    list(this: any, reqmatch?: DlpDataClassListMatch, ctrl?: Control): Promise<DlpDataClassEntity[]>;
    create(this: any, reqdata?: DlpDataClassCreateData, ctrl?: Control): Promise<DlpDataClassEntity>;
    update(this: any, reqdata?: DlpDataClassUpdateData, ctrl?: Control): Promise<DlpDataClassEntity>;
    remove(this: any, reqmatch?: DlpDataClassRemoveMatch, ctrl?: Control): Promise<DlpDataClassEntity>;
}
export { DlpDataClassEntity };
