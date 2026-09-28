import { CloudflareDlpEntityBase } from '../CloudflareDlpEntityBase';
import type { CloudflareDlpSDK } from '../CloudflareDlpSDK';
import type { Control } from '../types';
import type { Policy, PolicyLoadMatch, PolicyListMatch, PolicyCreateData, PolicyUpdateData, PolicyRemoveMatch } from '../CloudflareDlpTypes';
declare class PolicyEntity extends CloudflareDlpEntityBase<Policy> {
    constructor(client: CloudflareDlpSDK, entopts: any);
    make(this: PolicyEntity): PolicyEntity;
    load(this: any, reqmatch?: PolicyLoadMatch, ctrl?: Control): Promise<PolicyEntity>;
    list(this: any, reqmatch?: PolicyListMatch, ctrl?: Control): Promise<PolicyEntity[]>;
    create(this: any, reqdata?: PolicyCreateData, ctrl?: Control): Promise<PolicyEntity>;
    update(this: any, reqdata?: PolicyUpdateData, ctrl?: Control): Promise<PolicyEntity>;
    remove(this: any, reqmatch?: PolicyRemoveMatch, ctrl?: Control): Promise<PolicyEntity>;
}
export { PolicyEntity };
