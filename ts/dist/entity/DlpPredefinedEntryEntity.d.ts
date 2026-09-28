import { CloudflareDlpEntityBase } from '../CloudflareDlpEntityBase';
import type { CloudflareDlpSDK } from '../CloudflareDlpSDK';
import type { Control } from '../types';
import type { DlpPredefinedEntry, DlpPredefinedEntryCreateData, DlpPredefinedEntryRemoveMatch } from '../CloudflareDlpTypes';
declare class DlpPredefinedEntryEntity extends CloudflareDlpEntityBase<DlpPredefinedEntry> {
    constructor(client: CloudflareDlpSDK, entopts: any);
    make(this: DlpPredefinedEntryEntity): DlpPredefinedEntryEntity;
    create(this: any, reqdata?: DlpPredefinedEntryCreateData, ctrl?: Control): Promise<DlpPredefinedEntryEntity>;
    remove(this: any, reqmatch?: DlpPredefinedEntryRemoveMatch, ctrl?: Control): Promise<DlpPredefinedEntryEntity>;
}
export { DlpPredefinedEntryEntity };
