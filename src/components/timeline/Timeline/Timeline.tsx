import { CSSProperties, HTMLAttributes, useRef, useState } from 'react';
import { useDrop } from 'react-dnd';

import { MediaType, TimelineFragment } from '~api/editorData';
import classNames from '~utils/classNames';
import { useVideoEditor } from '~contexts/videoEditorContext';

import TimelineTile, { DragItem } from './TimelineTile';

import styles from './Timeline.module.css';

type Props = HTMLAttributes<HTMLDivElement> & {
  fragments: TimelineFragment[];
  type: MediaType;
  unscaleStyle: CSSProperties;
  scale: number;
  timelineId: string;
};

const Timeline = ({
  fragments,
  className,
  type,
  scale,
  unscaleStyle,
  timelineId,
  ...rest
}: Props) => {
  const dragItem = useRef<DragItem | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const { setRowsData } = useVideoEditor();

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: type,
      drop: ({ timelineId: from, ...item }: DragItem, monitor) => {
        const to = timelineId;
        const isTheSameTrack = from === to;
        const offset = monitor.getDifferenceFromInitialOffset()?.x ?? 0;

        if (isTheSameTrack) {
          setRowsData((prev) => {
            if (!prev) return prev;

            return {
              ...prev,
              timeline: prev.timeline.map((row) =>
                row.id !== from
                  ? row
                  : {
                      ...row,
                      fragments: row.fragments.map((fragment) =>
                        fragment.id !== item.id
                          ? fragment
                          : {
                              ...fragment,
                              start: fragment.start + Math.floor(offset / scale)
                            }
                      )
                    }
              )
            };
          });
        } else {
          setRowsData((prev) => {
            if (!prev) return prev;

            return {
              ...prev,
              timeline: prev.timeline.map((row) => {
                if (row.id === from) {
                  return {
                    ...row,
                    fragments: row.fragments.filter(
                      (fragment) => fragment.id !== item.id
                    )
                  };
                }
                if (row.id === to) {
                  return {
                    ...row,
                    fragments: [
                      ...row.fragments,
                      {
                        ...item,
                        start: item.start + Math.floor(offset / scale)
                      }
                    ]
                  };
                }
                return row;
              })
            };
          });
        }
      },
      collect: (monitor) => {
        const timelineFragment: DragItem = monitor.getItem();
        dragItem.current = timelineFragment;
        setDragOffset(monitor.getDifferenceFromInitialOffset()?.x ?? 0);
        return {
          isOver: !!monitor.isOver(),
          canDrop: !!monitor.canDrop()
        };
      }
    }),
    [scale, timelineId, setRowsData]
  );

  return (
    <div
      ref={drop}
      {...rest}
      className={classNames(styles.timeline, className)}
    >
      {isOver && dragItem.current && (
        <TimelineTile
          key={`${dragItem.current.id}-drag-preview`}
          type={type}
          {...dragItem.current}
          className={styles.dragPreview}
          style={{
            left: dragItem.current.start,
            width: dragItem.current.duration,
            transform: `translateX(${dragOffset / scale}px)`
          }}
          unscaleStyle={unscaleStyle}
        />
      )}
      {fragments.map((props) => {
        return (
          <TimelineTile
            key={props.id}
            type={type}
            className={styles.tile}
            timelineId={timelineId}
            {...props}
            style={{ left: props.start, width: props.duration }}
            unscaleStyle={unscaleStyle}
          />
        );
      })}
    </div>
  );
};

export default Timeline;
