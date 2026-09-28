import { CloudflareDlpEntityBase } from '../CloudflareDlpEntityBase';
import type { CloudflareDlpSDK } from '../CloudflareDlpSDK';
import type { Control } from '../types';
import type { DlpEmail, DlpEmailLoadMatch, DlpEmailListMatch, DlpEmailCreateData, DlpEmailUpdateData, DlpEmailRemoveMatch } from '../CloudflareDlpTypes';
declare class DlpEmailEntity extends CloudflareDlpEntityBase<DlpEmail> {
    constructor(client: CloudflareDlpSDK, entopts: any);
    make(this: DlpEmailEntity): DlpEmailEntity;
    load(this: any, reqmatch?: DlpEmailLoadMatch, ctrl?: Control): Promise<DlpEmailEntity>;
    list(this: any, reqmatch?: DlpEmailListMatch, ctrl?: Control): Promise<DlpEmailEntity[]>;
    create(this: any, reqdata?: DlpEmailCreateData, ctrl?: Control): Promise<DlpEmailEntity>;
    update(this: any, reqdata?: DlpEmailUpdateData, ctrl?: Control): Promise<DlpEmailEntity>;
    remove(this: any, reqmatch?: DlpEmailRemoveMatch, ctrl?: Control): Promise<DlpEmailEntity>;
}
export { DlpEmailEntity };
