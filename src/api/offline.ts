import { setupWorker } from 'msw/browser';

import { editorDataHandlers } from './editorData/editorDataMSW';

export const handlers = [...editorDataHandlers];

export const worker = setupWorker(...handlers);
