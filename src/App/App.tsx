import { CSSProperties, useState } from 'react';
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
import TimelineRuler from '~components/Timeline/TimelineRuler';

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

const defaultScale = 3;
const App = () => {
  const [scale, setScale] = useState(defaultScale);
  const { rowsData } = useVideoEditor();

  const scaleStyle = `${scale} 1`;
  const unscaleStyle: CSSProperties = {
    scale: `${1 / scale} 1`,
    width: `calc(100% * ${scale})`,
    transformOrigin: 'left'
  };

  return (
    <main className={styles.main}>
      <PlayerBlank className={styles.playerWrapper} />
      <div className={styles.timelineRoot}>
        <div className={styles.optionsColumn}>
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
          {rowsData?.timeline.map(({ id, type }) => (
            <TimelineOptions
              key={id}
              className={styles.timelineOptions}
              type={type}
            />
          ))}
        </div>
        <div className={styles.timelineColumn}>
          <div
            className={styles.rulerScaleContainer}
            style={
              {
                scale: scaleStyle,
                '--ruler-unit': `${scale}px`
              } as CSSProperties
            }
          >
            <TimelineRuler style={{ ...unscaleStyle }} />
          </div>
          {rowsData?.timeline.map(({ id, fragments, type }) => (
            <Timeline
              key={id}
              className={styles.timeline}
              fragments={fragments}
              type={type}
              style={{ scale: scaleStyle }}
              unscaleStyle={unscaleStyle}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default AppProviders;
export { App };
