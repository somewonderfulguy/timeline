import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import PlayerBlank from '~components/PlayerBlank';
import Timeline from '~components/Timeline';
import TimelineOptions from '~components/Timeline/TimelineOptions';
import {
  VideoEditorProvider,
  useVideoEditor
} from '~contexts/videoEditorContext';
import Slider from '~components/controls/Slider';

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

const defaultScale = 6;
const App = () => {
  const [scale, setScale] = useState(defaultScale);
  const { rowsData } = useVideoEditor();

  return (
    <main className={styles.main}>
      <PlayerBlank className={styles.playerWrapper} />
      <div className={styles.timelineRoot}>
        <div className={styles.timelineBar}>
          <div className={styles.sliderContainer}>
            <Slider
              className={styles.slider}
              defaultValue={[defaultScale]}
              value={[scale]}
              onValueChange={([value]) => setScale(value)}
              max={10}
              min={1}
              step={1}
            />
          </div>
          <div className={styles.rulerContainer}>ruler...</div>
        </div>
        {rowsData?.timeline.map(({ id, fragments, type }) => (
          <div key={id} className={styles.timelineRow}>
            <TimelineOptions className={styles.timelineOptions} type={type} />
            <Timeline
              className={styles.timeline}
              fragments={fragments}
              type={type}
              scale={scale}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default AppProviders;
export { App };
