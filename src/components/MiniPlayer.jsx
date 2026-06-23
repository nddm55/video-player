import { useRef, useEffect } from 'react';

const VIDEO_URL = '/video.mp4';

function MiniPlayer({ state, send, currentTime, setCurrentTime }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (state.matches('mini') && videoRef.current) {
      videoRef.current.currentTime = currentTime;
      videoRef.current.play();
    }
  }, [state]);

  const handleExpand = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
    send({ type: 'EXPAND' });
  };

  if (!state.matches('mini')) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        width: 320,
        background: '#000',
        borderRadius: 8,
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
        zIndex: 1000,
      }}
    >
      <video ref={videoRef} src={VIDEO_URL} controls style={{ width: '100%', height: '180px' }} />
      <div style={{ display: 'flex', gap: 8, padding: 8 }}>
        <button onClick={handleExpand}>Развернуть</button>
        <button onClick={() => send({ type: 'CLOSE' })}>Закрыть</button>
      </div>
    </div>
  );
}

export default MiniPlayer;