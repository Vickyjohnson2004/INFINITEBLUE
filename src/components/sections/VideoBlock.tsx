import { useRef, useState, useEffect } from "react";
import React from "react";
interface VideoBlockProps {
  id: string;
  src: string;
  poster: string;
}

const VideoBlock: React.FC<VideoBlockProps> = ({ id, src, poster }) => {
  // Use HTMLVideoElement as the ref type
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const goFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.requestFullscreen) video.requestFullscreen();
    else if ((video as any).webkitRequestFullScreen)
      (video as any).webkitRequestFullScreen();
  };

  // Pause video when tab is hidden
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) videoRef.current?.pause();
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  return (
    <div className="relative w-full rounded-xl overflow-hidden">
      <video
        ref={videoRef}
        id={id}
        src={src}
        poster={poster}
        className="w-full aspect-video object-cover rounded-xl"
        playsInline
      />
      <button
        className="absolute inset-0 flex items-center justify-center z-10"
        onClick={togglePlay}
      >
        <div
          className={`w-16 h-16 bg-white/30 rounded-full flex items-center justify-center transition-transform ${
            isPlaying ? "opacity-0" : "opacity-100 hover:scale-110"
          }`}
        >
          ▶
        </div>
      </button>
      <button
        className="absolute bottom-2 right-2 w-8 h-8 bg-black/30 rounded-full flex items-center justify-center"
        onClick={goFullscreen}
      >
        ⛶
      </button>
    </div>
  );
};

export default VideoBlock;
