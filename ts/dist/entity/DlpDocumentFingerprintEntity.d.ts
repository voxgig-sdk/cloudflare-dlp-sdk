import { CloudflareDlpEntityBase } from '../CloudflareDlpEntityBase';
import type { CloudflareDlpSDK } from '../CloudflareDlpSDK';
import type { Control } from '../types';
import type { DlpDocumentFingerprint, DlpDocumentFingerprintLoadMatch, DlpDocumentFingerprintListMatch, DlpDocumentFingerprintCreateData, DlpDocumentFingerprintUpdateData, DlpDocumentFingerprintRemoveMatch } from '../CloudflareDlpTypes';
declare class DlpDocumentFingerprintEntity extends CloudflareDlpEntityBase<DlpDocumentFingerprint> {
    constructor(client: CloudflareDlpSDK, entopts: any);
    make(this: DlpDocumentFingerprintEntity): DlpDocumentFingerprintEntity;
    load(this: any, reqmatch?: DlpDocumentFingerprintLoadMatch, ctrl?: Control): Promise<DlpDocumentFingerprintEntity>;
    list(this: any, reqmatch?: DlpDocumentFingerprintListMatch, ctrl?: Control): Promise<DlpDocumentFingerprintEntity[]>;
    create(this: any, reqdata?: DlpDocumentFingerprintCreateData, ctrl?: Control): Promise<DlpDocumentFingerprintEntity>;
    update(this: any, reqdata?: DlpDocumentFingerprintUpdateData, ctrl?: Control): Promise<DlpDocumentFingerprintEntity>;
    remove(this: any, reqmatch?: DlpDocumentFingerprintRemoveMatch, ctrl?: Control): Promise<DlpDocumentFingerprintEntity>;
}
export { DlpDocumentFingerprintEntity };
