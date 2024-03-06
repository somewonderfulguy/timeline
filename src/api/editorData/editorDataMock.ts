import { VideoEditor } from './editorDataTypes';

export const editorDataMock: VideoEditor = {
  options: {},
  timeline: [
    {
      id: 'row-0',
      options: {},
      type: 'video',
      fragments: [
        {
          id: 'fragment-0',
          src: 'https://www.w3schools.com/html/mov_bbb.mp4',
          name: 'mov_bbb.mp4',
          start: 0,
          duration: 10,
          options: {}
        },
        {
          id: 'fragment-1',
          src: 'https://www.w3schools.com/html/mov_bbb.mp4',
          name: 'mov_bbb2.mp4',
          start: 11,
          duration: 15,
          options: {}
        },
        {
          id: 'fragment-2',
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
      type: 'video',
      fragments: [
        {
          id: 'fragment-3',
          src: 'https://www.w3schools.com/html/mov_bbb.mp4',
          name: 'one_minute.mp4',
          start: 30,
          duration: 5 * 60,
          options: {}
        }
      ]
    },
    {
      id: 'row-2',
      options: {},
      type: 'audio',
      fragments: [
        {
          id: 'fragment-3',
          src: 'https://www.w3schools.com/html/mov_bbb.mp4',
          name: 'vivaldi.mp3',
          start: 0,
          duration: 5 * 60 + 30,
          options: {}
        }
      ]
    },
    {
      id: 'row-3',
      options: {},
      type: 'audio',
      fragments: [
        {
          id: 'fragment-4',
          src: 'https://www.w3schools.com/html/mov_bbb.mp4',
          name: 'birds.mp3',
          start: 0,
          duration: 30,
          options: {}
        },
        {
          id: 'fragment-5',
          src: 'https://www.w3schools.com/html/mov_bbb.mp4',
          name: 'birds.mp3',
          start: 0,
          duration: 30,
          options: {}
        }
      ]
    }
  ]
};
