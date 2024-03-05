import { setupWorker } from 'msw';

import { editorDataHandlers } from './editorData/editorDataMSW';

export const handlers = [...editorDataHandlers];

export const worker = setupWorker(...handlers);
