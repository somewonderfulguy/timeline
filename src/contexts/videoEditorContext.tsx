import { UseQueryResult } from '@tanstack/react-query';
import { createContext, ReactNode, useContext } from 'react';

import { VideoEditor, useEditorData } from '~api/index';

type Context = {
  rowsData?: VideoEditor;
  queryData: Omit<UseQueryResult<VideoEditor, unknown>, 'data'>;
};
const VideoEditorContext = createContext<Context | undefined>(undefined);
VideoEditorContext.displayName = 'VideoEditorContext';

const VideoEditorProvider = ({ children }: { children: ReactNode }) => {
  const { data, ...queryData } = useEditorData();

  return (
    <VideoEditorContext.Provider value={{ rowsData: data, queryData }}>
      {children}
    </VideoEditorContext.Provider>
  );
};

const useVideoEditor = () => {
  const context = useContext(VideoEditorContext);
  if (context === undefined) {
    throw new Error(
      'useVideoEditorContext must be used within a VideoEditorProvider'
    );
  }
  return context;
};

export { VideoEditorProvider, useVideoEditor };
