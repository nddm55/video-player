import { useRef, useEffect } from 'react';
import { Modal, Button } from 'antd';

const VIDEO_URL = '/video.mp4';

function Player({ state, send, currentTime, setCurrentTime }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (state.matches('fullscreen') && videoRef.current) {
      videoRef.current.currentTime = currentTime;
      videoRef.current.play();
    }
  }, [state]);

  const handleMinimize = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
    send({ type: 'MINIMIZE' });
  };

  return (
    <Modal
      open={state.matches('fullscreen')}
      onCancel={() => send({ type: 'CLOSE' })}
      footer={null}
      width={800}
      title="Видеоплеер"
    >
      <video
        ref={videoRef}
        src={VIDEO_URL}
        controls
        style={{ width: '100%', height: '400px' }}
      />
      <Button style={{ marginTop: 16 }} onClick={handleMinimize}>
        Свернуть
      </Button>
    </Modal>
  );
}

export default Player;