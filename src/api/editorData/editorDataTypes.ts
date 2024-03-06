export type TimeLineRow = {
  options: unknown;
  id: string;
  fragments: TimeLineFragment[];
  type: 'video' | 'audio';
};

export type TimeLineFragment = {
  options: unknown;
  id: string;
  src: string;
  name: string;
  start: number;
  duration: number;
};

export type VideoEditor = {
  options: unknown;
  timeline: TimeLineRow[];
};
