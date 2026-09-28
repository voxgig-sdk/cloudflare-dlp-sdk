import { CloudflareDlpEntityBase } from '../CloudflareDlpEntityBase';
import type { CloudflareDlpSDK } from '../CloudflareDlpSDK';
import type { Control } from '../types';
import type { DlpDataTagCategory, DlpDataTagCategoryLoadMatch, DlpDataTagCategoryListMatch, DlpDataTagCategoryCreateData, DlpDataTagCategoryUpdateData, DlpDataTagCategoryRemoveMatch } from '../CloudflareDlpTypes';
declare class DlpDataTagCategoryEntity extends CloudflareDlpEntityBase<DlpDataTagCategory> {
    constructor(client: CloudflareDlpSDK, entopts: any);
    make(this: DlpDataTagCategoryEntity): DlpDataTagCategoryEntity;
    load(this: any, reqmatch?: DlpDataTagCategoryLoadMatch, ctrl?: Control): Promise<DlpDataTagCategoryEntity>;
    list(this: any, reqmatch?: DlpDataTagCategoryListMatch, ctrl?: Control): Promise<DlpDataTagCategoryEntity[]>;
    create(this: any, reqdata?: DlpDataTagCategoryCreateData, ctrl?: Control): Promise<DlpDataTagCategoryEntity>;
    update(this: any, reqdata?: DlpDataTagCategoryUpdateData, ctrl?: Control): Promise<DlpDataTagCategoryEntity>;
    remove(this: any, reqmatch?: DlpDataTagCategoryRemoveMatch, ctrl?: Control): Promise<DlpDataTagCategoryEntity>;
}
export { DlpDataTagCategoryEntity };
