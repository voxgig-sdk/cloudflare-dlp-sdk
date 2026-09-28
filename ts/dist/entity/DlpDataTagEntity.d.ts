import { CloudflareDlpEntityBase } from '../CloudflareDlpEntityBase';
import type { CloudflareDlpSDK } from '../CloudflareDlpSDK';
import type { Control } from '../types';
import type { DlpDataTag, DlpDataTagLoadMatch, DlpDataTagListMatch, DlpDataTagCreateData, DlpDataTagUpdateData, DlpDataTagRemoveMatch } from '../CloudflareDlpTypes';
declare class DlpDataTagEntity extends CloudflareDlpEntityBase<DlpDataTag> {
    constructor(client: CloudflareDlpSDK, entopts: any);
    make(this: DlpDataTagEntity): DlpDataTagEntity;
    load(this: any, reqmatch?: DlpDataTagLoadMatch, ctrl?: Control): Promise<DlpDataTagEntity>;
    list(this: any, reqmatch?: DlpDataTagListMatch, ctrl?: Control): Promise<DlpDataTagEntity[]>;
    create(this: any, reqdata?: DlpDataTagCreateData, ctrl?: Control): Promise<DlpDataTagEntity>;
    update(this: any, reqdata?: DlpDataTagUpdateData, ctrl?: Control): Promise<DlpDataTagEntity>;
    remove(this: any, reqmatch?: DlpDataTagRemoveMatch, ctrl?: Control): Promise<DlpDataTagEntity>;
}
export { DlpDataTagEntity };
