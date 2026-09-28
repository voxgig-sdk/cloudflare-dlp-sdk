import { CloudflareDlpEntityBase } from '../CloudflareDlpEntityBase';
import type { CloudflareDlpSDK } from '../CloudflareDlpSDK';
import type { Control } from '../types';
import type { DlpDataset, DlpDatasetLoadMatch, DlpDatasetListMatch, DlpDatasetCreateData, DlpDatasetUpdateData, DlpDatasetRemoveMatch } from '../CloudflareDlpTypes';
declare class DlpDatasetEntity extends CloudflareDlpEntityBase<DlpDataset> {
    constructor(client: CloudflareDlpSDK, entopts: any);
    make(this: DlpDatasetEntity): DlpDatasetEntity;
    load(this: any, reqmatch?: DlpDatasetLoadMatch, ctrl?: Control): Promise<DlpDatasetEntity>;
    list(this: any, reqmatch?: DlpDatasetListMatch, ctrl?: Control): Promise<DlpDatasetEntity[]>;
    create(this: any, reqdata?: DlpDatasetCreateData, ctrl?: Control): Promise<DlpDatasetEntity>;
    update(this: any, reqdata?: DlpDatasetUpdateData, ctrl?: Control): Promise<DlpDatasetEntity>;
    remove(this: any, reqmatch?: DlpDatasetRemoveMatch, ctrl?: Control): Promise<DlpDatasetEntity>;
}
export { DlpDatasetEntity };
