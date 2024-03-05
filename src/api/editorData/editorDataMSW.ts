import { http, HttpResponse } from 'msw';

import { editorDataMock } from './editorDataMock';
import { VideoEditor } from './editorDataTypes';
import { editorDataUrl } from './editorDataUrls';

const editorDataMSW = http.get(editorDataUrl, () => {
  return HttpResponse.json<VideoEditor>(editorDataMock);
});

export const editorDataHandlers = [editorDataMSW];
