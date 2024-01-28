import VideoCard from "./VideoCard";
import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils.js/constants";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json?.items);

    console.log("data:", json?.items);
  };

  return (
    <div className="flex justify-center items-center flex-wrap  " >
      {videos.map((info) => <VideoCard key={info.id} info={info} /> )}
      
    </div>
  );
};

export default VideoContainer;
 