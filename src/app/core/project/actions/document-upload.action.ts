import { Action } from '@ngrx/store';

export const DOCUMENT_UPLOAD = '[PROJECT] DOCUMENT_UPLOAD';
export const DOCUMENT_UPLOAD_SUCCESS = '[PROJECT] DOCUMENT_UPLOAD_SUCCESS';
export const DOCUMENT_UPLOAD_ERROR = '[PROJECT] DOCUMENT_UPLOAD_ERROR';

//Document uploading
export class DocumentUploadAction implements Action {
  readonly type = DOCUMENT_UPLOAD;
  constructor(public payload: { id: string }) {}
}
export class DocumentUploadActionSuccess implements Action {
  readonly type = DOCUMENT_UPLOAD_SUCCESS;
  constructor(public payload: { id: string }) {}
}
export class DocumentUploadActionError implements Action {
  readonly type = DOCUMENT_UPLOAD_ERROR;
  constructor(public payload: any) {}
}
