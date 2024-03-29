import { VideoEditor } from './editorDataTypes';

export const editorDataMock: VideoEditor = {
  options: {},
  timeline: [
    {
      id: 'row-0',
      options: {},
      fragments: [
        {
          id: 'fragment-0',
          type: 'video',
          src: 'https://www.w3schools.com/html/mov_bbb.mp4',
          name: 'mov_bbb.mp4',
          start: 0,
          duration: 10,
          options: {}
        },
        {
          id: 'fragment-1',
          type: 'video',
          src: 'https://www.w3schools.com/html/mov_bbb.mp4',
          name: 'mov_bbb2.mp4',
          start: 11,
          duration: 15,
          options: {}
        },
        {
          id: 'fragment-2',
          type: 'video',
          src: 'https://www.w3schools.com/html/mov_bbb.mp4',
          name: 'mov_bbb3.mp4',
          start: 18,
          duration: 40,
          options: {}
        }
      ]
    },
    {
      id: 'row-1',
      options: {},
      fragments: [
        {
          id: 'fragment-3',
          type: 'video',
          src: 'https://www.w3schools.com/html/mov_bbb.mp4',
          name: 'one_minute.mp4',
          start: 30,
          duration: 5 * 60,
          options: {}
        }
      ]
    }
  ]
};
