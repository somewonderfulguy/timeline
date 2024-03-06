import { CSSProperties, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DndProvider } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend';
import Draggable from 'react-draggable';

import PlayerBlank from '~components/PlayerBlank';
import Timeline from '~components/timeline/Timeline';
import TimelineOptions from '~components/timeline/TimelineOptions';
import {
  VideoEditorProvider,
  useVideoEditor
} from '~contexts/videoEditorContext';
import Slider from '~components/controls/Slider';
import TimelineRuler from '~components/timeline/TimelineRuler';
import PositionIndicator from '~components/timeline/PositionIndicator';

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

  const [indicatorPosition, setIndicatorPosition] = useState(23 * scale);

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
          <Draggable
            axis="x"
            bounds="parent"
            onDrag={(e, { x }) => {
              setIndicatorPosition(x / scale);
            }}
            position={{ x: indicatorPosition * scale, y: 0 }}
          >
            <PositionIndicator
              className={styles.indicator}
              // style={{ translate: `${indicatorPosition}px` }}
            >
              <PositionIndicator.Head />
            </PositionIndicator>
          </Draggable>
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
          <DndProvider
            backend={TouchBackend}
            options={{ enableMouseEvents: true }}
          >
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
          </DndProvider>
        </div>
      </div>
    </main>
  );
};

export default AppProviders;
export { App };
