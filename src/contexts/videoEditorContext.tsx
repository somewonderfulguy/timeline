import { UseQueryResult } from '@tanstack/react-query';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react';

import { VideoEditor, useEditorData } from '~api/index';
import usePrevious from '~hooks/usePrevious';

type Context = {
  rowsData?: VideoEditor;
  queryData: UseQueryResult<VideoEditor, unknown>;
};
const VideoEditorContext = createContext<Context | undefined>(undefined);
VideoEditorContext.displayName = 'VideoEditorContext';

const VideoEditorProvider = ({ children }: { children: ReactNode }) => {
  const queryData = useEditorData();
  const isSuccess = queryData.isSuccess;

  // state need to be duplicated (from react query) in order to manipulate with the data
  const [rowsData, setRowsData] = useState<VideoEditor | undefined>(undefined);

  const prevIsSuccess = usePrevious(isSuccess);
  useEffect(() => {
    if (isSuccess && !prevIsSuccess) {
      setRowsData(queryData.data);
    }
  }, [prevIsSuccess, isSuccess, queryData.data]);

  return (
    <VideoEditorContext.Provider value={{ rowsData, queryData }}>
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
