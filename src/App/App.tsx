import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import PlayerBlank from '~components/PlayerBlank';
import Timeline from '~components/Timeline';
import TimelineOptions from '~components/TimelineOptions';
import { VideoEditorProvider } from '~contexts/videoEditorContext';

import styles from './App.module.css';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0
    }
  }
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <VideoEditorProvider>
        <main>
          <PlayerBlank />
          <div className={styles.timelineRoot}>
            <div className={styles.timelineRow}>
              <TimelineOptions />
              <Timeline />
            </div>
            <div className={styles.timelineRow}>
              <TimelineOptions />
              <Timeline />
            </div>
          </div>
        </main>
      </VideoEditorProvider>
    </QueryClientProvider>
  );
};

export default App;
