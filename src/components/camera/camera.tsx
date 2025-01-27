import React, { useRef, useState, useCallback } from 'react';
import styled from 'styled-components';

const CameraContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Video = styled.video`
  width: 100%;
  max-width: 640px;
  border-radius: 8px;
`;

const Canvas = styled.canvas`
  display: none;
`;

const CaptureButton = styled.button`
  padding: 12px 24px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

interface CameraProps {
  onCapture: (imageSrc: string) => void;
}

const Camera: React.FC<CameraProps> = ({ onCapture }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string>('');

  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsStreaming(true);
      }
    } catch (err) {
      setError('Failed to access camera');
      console.error(err);
    }
  }, []);

  const takePicture = useCallback(() => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext('2d');
    if (!context) return;

    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL('image/png');
    onCapture(imageData);
  }, [onCapture]);

  React.useEffect(() => {
    startCamera();
    return () => {
      if (videoRef.current?.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, [startCamera]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <CameraContainer>
      <Video
        ref={videoRef}
        autoPlay
        playsInline
      />
      <Canvas ref={canvasRef} />
      <CaptureButton 
        onClick={takePicture}
        disabled={!isStreaming}
      >
        Take Photo
      </CaptureButton>
    </CameraContainer>
  );
};

export default Camera;
