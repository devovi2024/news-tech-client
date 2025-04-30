import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import screenfull from "screenfull";

// Icons
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp, FaExpand } from "react-icons/fa";

export default function SliderCard() {
  const videos = [
    { id: 1, src: "/videos/video1.mp4", thumbnail: "/thumbnails/thumb1.jpg", title: "Amazing Nature" },
    { id: 2, src: "/videos/video2.mp4", thumbnail: "/thumbnails/thumb2.jpg", title: "City Life Vibes" },
    { id: 3, src: "/videos/video3.mp4", thumbnail: "/thumbnails/thumb3.jpg", title: "Mountain Adventure" },
  ];

  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const swiperRef = useRef(null);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  const toggleFullScreen = () => {
    if (videoRef.current && screenfull.isEnabled) {
      screenfull.toggle(videoRef.current);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-10 px-4 relative">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          enabled: !playing,
        }}
        loop
        className="rounded-xl overflow-hidden"
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id}>
            <div className="relative">
              {/* Video Title */}
              <h1 className="text-2xl font-bold text-white absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                {video.title}
              </h1>

              {/* Video Player */}
              <video
                ref={videoRef}
                className="w-full h-72 md:h-96 object-cover"
                src={video.src}
                muted={muted}
                controls={false}
              />

              {/* Custom Controls */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-6 z-10">
                {/* Play/Pause Icon */}
                <button
                  onClick={togglePlayPause}
                  className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80 transition"
                >
                  {playing ? <FaPause size={24} /> : <FaPlay size={24} />}
                </button>

                {/* Mute/Unmute Icon */}
                <button
                  onClick={toggleMute}
                  className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80 transition"
                >
                  {muted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
                </button>

                {/* Full-Screen Icon */}
                <button
                  onClick={toggleFullScreen}
                  className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80 transition"
                >
                  <FaExpand size={24} />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
