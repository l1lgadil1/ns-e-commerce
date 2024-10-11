import { useState, useRef, useEffect } from 'react';
import YouTube, { YouTubeEvent, YouTubeProps } from 'react-youtube';

interface EnhancedYouTubePlayerProps {
    videoId: string
    autoplay?: boolean
}

export function EnhancedYouTubePlayer({ videoId, autoplay = true }: EnhancedYouTubePlayerProps) {
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentTime, setCurrentTime] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [duration, setDuration] = useState(0);
  const playerRef = useRef<YouTube>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current && isPlaying) {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const currentTime = playerRef.current.internalPlayer.getCurrentTime();
        setCurrentTime(currentTime);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    setIsReady(true);
    setDuration(event.target.getDuration());
    if (autoplay) {
      event.target.playVideo();
    } else {
      event.target.pauseVideo();
    }
  };

  const onPlayerStateChange = (event: YouTubeEvent) => {
    setIsPlaying(event.data === YouTube.PlayerState.PLAYING);
  };

  // const togglePlayPause = () => {
  //   if (playerRef.current) {
  //     if (isPlaying) {
  //       playerRef.current.internalPlayer.pauseVideo();
  //     } else {
  //       playerRef.current.internalPlayer.playVideo();
  //     }
  //   }
  // };

  // const formatTime = (time: number) => {
  //   const minutes = Math.floor(time / 60);
  //   const seconds = Math.floor(time % 60);
  //   return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  // };

  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: autoplay ? 1 : 0,
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <div className="relative w-full aspect-video">
      {!isReady && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900" />
        </div>
      )}
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={onPlayerReady}
        onStateChange={onPlayerStateChange}
        className={`w-full h-full ${isReady ? 'opacity-100' : 'opacity-0'}`}
        ref={playerRef}
      />
      {/* <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2"> */}
      {/*  <div className="flex items-center justify-between"> */}
      {/*    <button onClick={togglePlayPause} className="focus:outline-none"> */}
      {/*      {isPlaying ? ( */}
      {/*        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> */}
      {/*          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" /> */}
      {/*        </svg> */}
      {/*      ) : ( */}
      {/*        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> */}
      {/*          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /> */}
      {/*          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> */}
      {/*        </svg> */}
      {/*      )} */}
      {/*    </button> */}
      {/*    <div className="text-sm"> */}
      {/*      {formatTime(currentTime)} / {formatTime(duration)} */}
      {/*    </div> */}
      {/*  </div> */}
      {/*  <div className="mt-1 h-1 bg-gray-300"> */}
      {/*    <div className="h-full bg-red-500" style={{ width: `${(currentTime / duration) * 100}%` }} /> */}
      {/*  </div> */}
      {/* </div> */}
    </div>
  );
}
