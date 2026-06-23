import { useMachine } from '@xstate/react';
import { useRef, useState } from 'react';
import { playerMachine } from './machines/playerMachine';
import Player from './components/Player';
import MiniPlayer from './components/MiniPlayer';
import { Button } from 'antd';

function App() {
  const [state, send] = useMachine(playerMachine);
  const [currentTime, setCurrentTime] = useState(0);

  return (
    <div style={{ padding: 40 }}>
      <h1>Видеоплеер</h1>
      {state.matches('closed') && (
        <Button type="primary" onClick={() => send({ type: 'OPEN' })}>
          Смотреть видео
        </Button>
      )}
      <Player
        state={state}
        send={send}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
      />
      <MiniPlayer
        state={state}
        send={send}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
      />
    </div>
  );
}

export default App;