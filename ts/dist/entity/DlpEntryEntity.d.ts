import { CloudflareDlpEntityBase } from '../CloudflareDlpEntityBase';
import type { CloudflareDlpSDK } from '../CloudflareDlpSDK';
import type { Control } from '../types';
import type { DlpEntry, DlpEntryLoadMatch, DlpEntryListMatch, DlpEntryCreateData, DlpEntryUpdateData, DlpEntryRemoveMatch } from '../CloudflareDlpTypes';
declare class DlpEntryEntity extends CloudflareDlpEntityBase<DlpEntry> {
    constructor(client: CloudflareDlpSDK, entopts: any);
    make(this: DlpEntryEntity): DlpEntryEntity;
    load(this: any, reqmatch?: DlpEntryLoadMatch, ctrl?: Control): Promise<DlpEntryEntity>;
    list(this: any, reqmatch?: DlpEntryListMatch, ctrl?: Control): Promise<DlpEntryEntity[]>;
    create(this: any, reqdata?: DlpEntryCreateData, ctrl?: Control): Promise<DlpEntryEntity>;
    update(this: any, reqdata?: DlpEntryUpdateData, ctrl?: Control): Promise<DlpEntryEntity>;
    remove(this: any, reqmatch?: DlpEntryRemoveMatch, ctrl?: Control): Promise<DlpEntryEntity>;
}
export { DlpEntryEntity };
