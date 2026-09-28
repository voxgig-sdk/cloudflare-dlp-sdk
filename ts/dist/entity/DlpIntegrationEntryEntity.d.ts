import { CloudflareDlpEntityBase } from '../CloudflareDlpEntityBase';
import type { CloudflareDlpSDK } from '../CloudflareDlpSDK';
import type { Control } from '../types';
import type { DlpIntegrationEntry, DlpIntegrationEntryCreateData, DlpIntegrationEntryUpdateData, DlpIntegrationEntryRemoveMatch } from '../CloudflareDlpTypes';
declare class DlpIntegrationEntryEntity extends CloudflareDlpEntityBase<DlpIntegrationEntry> {
    constructor(client: CloudflareDlpSDK, entopts: any);
    make(this: DlpIntegrationEntryEntity): DlpIntegrationEntryEntity;
    create(this: any, reqdata?: DlpIntegrationEntryCreateData, ctrl?: Control): Promise<DlpIntegrationEntryEntity>;
    update(this: any, reqdata?: DlpIntegrationEntryUpdateData, ctrl?: Control): Promise<DlpIntegrationEntryEntity>;
    remove(this: any, reqmatch?: DlpIntegrationEntryRemoveMatch, ctrl?: Control): Promise<DlpIntegrationEntryEntity>;
}
export { DlpIntegrationEntryEntity };
