import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../../utils/constants";
import VideoCard, { SearchVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { currentVideo, openMenu } from "../../utils/redux/appSlice";

const VideoContainer = () => {
  const videosFromSearch = useSelector((store) => store.search.videoResults);

  const [videos, setVideos] = useState([]);

  const dispatch = useDispatch();

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();

    setVideos(json.items);
  };

  useEffect(() => {
    getVideos();
    dispatch(openMenu());
  }, []);

  const handleVideoClick = (video, v) => {
    dispatch(currentVideo(video, v));
  };

  return (
    <div className="flex flex-wrap">
      {videosFromSearch[1]
        ? videosFromSearch.map((v) => (
            <Link
              to={"/watch?v=" + v.id.videoId}
              key={v.id.videoId || v.id.channelId}
              onClick={() => handleVideoClick(v)}
            >
              <SearchVideoCard data={v} />
            </Link>
          ))
        : videos.map((video) => (
            <Link
              to={"/watch?v=" + video.id}
              key={video.id}
              onClick={() => handleVideoClick(video)}
            >
              <VideoCard data={video} />
            </Link>
          ))}
    </div>
  );
};

export default VideoContainer;
