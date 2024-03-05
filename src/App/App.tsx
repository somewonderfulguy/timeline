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

const AppProviders = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <VideoEditorProvider>
        <App />
      </VideoEditorProvider>
    </QueryClientProvider>
  );
};

const App = () => {
  return (
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
  );
};

export default AppProviders;
export { App };
