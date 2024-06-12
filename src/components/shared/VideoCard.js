import { formatDistanceToNow } from "date-fns";
import React from "react";

const getTimeAgo = (dateString) => {
  const date = new Date(dateString);
  return formatDistanceToNow(date, { addSuffix: true });
};

const VideoCard = ({ data }) => {
  const { snippet, statistics } = data;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  const formatViewCount = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M"; // 1M or more
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K"; // 1K or more
    } else {
      return num.toString(); // Less than 1K
    }
  };

  const timeAgo = getTimeAgo(publishedAt);

  return (
    <div className="p-2 m-2 w-72 shadow-lg hover:bg-gray-200">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="font-thin">{channelTitle}</li>
        {statistics.viewCount && (
          <li>
            {formatViewCount(statistics.viewCount)} Views • {timeAgo}
          </li>
        )}
      </ul>
    </div>
  );
};

export const SearchVideoCard = ({ data }) => {
  const { snippet } = data;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  const timeAgo = getTimeAgo(publishedAt);

  return (
    <div className="p-2 m-2 w-72 shadow-lg hover:bg-gray-200">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="font-thin">{channelTitle}</li>
        <li className="">{timeAgo}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
