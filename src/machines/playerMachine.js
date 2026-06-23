import { createMachine } from 'xstate';

export const playerMachine = createMachine({
  id: 'player',
  initial: 'closed',
  states: {
    closed: {
      on: {
        OPEN: 'fullscreen',
      },
    },
    fullscreen: {
      on: {
        MINIMIZE: 'mini',
        CLOSE: 'closed',
      },
    },
    mini: {
      on: {
        EXPAND: 'fullscreen',
        CLOSE: 'closed',
      },
    },
  },
});