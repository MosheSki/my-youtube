import { useEffect, useState } from "react";
import {
  YOUTUBE_SEARCH_RESULTS_API,
  YOUTUBE_VIDEOS_API,
} from "../../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const videosFromSearch = useSelector((store) => store.search.videoResults);

  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();

    setVideos(json.items);
    // console.log(json);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap">
      {videosFromSearch[1]
        ? videosFromSearch.map((v) => (
            <Link
              to={"/watch?v=" + v.id.videoId}
              key={v.id.videoId || v.id.channelId}
            >
              <AdVideoCard data={v} />
            </Link>
          ))
        : videos.map((video) => (
            <Link to={"/watch?v=" + video.id} key={video.id}>
              <VideoCard data={video} />
            </Link>
          ))}
    </div>
  );
};

export default VideoContainer;
