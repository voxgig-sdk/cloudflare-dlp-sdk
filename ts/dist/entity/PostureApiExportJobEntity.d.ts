import { CloudflareDlpEntityBase } from '../CloudflareDlpEntityBase';
import type { CloudflareDlpSDK } from '../CloudflareDlpSDK';
import type { Control } from '../types';
import type { PostureApiExportJob, PostureApiExportJobLoadMatch, PostureApiExportJobCreateData } from '../CloudflareDlpTypes';
declare class PostureApiExportJobEntity extends CloudflareDlpEntityBase<PostureApiExportJob> {
    constructor(client: CloudflareDlpSDK, entopts: any);
    make(this: PostureApiExportJobEntity): PostureApiExportJobEntity;
    load(this: any, reqmatch?: PostureApiExportJobLoadMatch, ctrl?: Control): Promise<PostureApiExportJobEntity>;
    create(this: any, reqdata?: PostureApiExportJobCreateData, ctrl?: Control): Promise<PostureApiExportJobEntity>;
}
export { PostureApiExportJobEntity };
