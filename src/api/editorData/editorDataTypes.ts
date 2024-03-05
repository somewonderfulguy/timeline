export type TimeLineRow = {
  options: unknown;
  id: string;
  fragments: TimeLineFragment[];
};

export type TimeLineFragment = {
  options: unknown;
  id: string;
  type: 'video' | 'image';
  src: string;
  name: string;
  start: number;
  duration: number;
};

export type VideoEditor = {
  options: unknown;
  timeline: TimeLineRow[];
};
