import { CloudflareDlpEntityBase } from '../CloudflareDlpEntityBase';
import type { CloudflareDlpSDK } from '../CloudflareDlpSDK';
import type { Control } from '../types';
import type { DlpProfile, DlpProfileLoadMatch, DlpProfileListMatch, DlpProfileCreateData, DlpProfileUpdateData, DlpProfileRemoveMatch } from '../CloudflareDlpTypes';
declare class DlpProfileEntity extends CloudflareDlpEntityBase<DlpProfile> {
    constructor(client: CloudflareDlpSDK, entopts: any);
    make(this: DlpProfileEntity): DlpProfileEntity;
    load(this: any, reqmatch?: DlpProfileLoadMatch, ctrl?: Control): Promise<DlpProfileEntity>;
    list(this: any, reqmatch?: DlpProfileListMatch, ctrl?: Control): Promise<DlpProfileEntity[]>;
    create(this: any, reqdata?: DlpProfileCreateData, ctrl?: Control): Promise<DlpProfileEntity>;
    update(this: any, reqdata?: DlpProfileUpdateData, ctrl?: Control): Promise<DlpProfileEntity>;
    remove(this: any, reqmatch?: DlpProfileRemoveMatch, ctrl?: Control): Promise<DlpProfileEntity>;
}
export { DlpProfileEntity };
