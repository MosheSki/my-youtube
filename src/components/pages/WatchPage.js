import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../../utils/redux/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "../shared/CommentsContainer";
import LiveChat from "../shared/LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const data = useSelector((store) => store.app.currentVideo);

  const { snippet, statistics } = data;
  const { channelTitle, title, thumbnails, publishedAt, description } = snippet;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <>
      <div className="flex flex-col overflow-x-auto">
        <div className="flex px-5">
          <iframe
            className=""
            width="1200"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-2 m-2">
          <h1 className="font-bold py-2 text-2xl">{title}</h1>
          <h2 className="font-thin text-lg">{channelTitle}</h2>
        </div>
        {description && (
          <div className="p-2 m-2 w-[1000px] h-[160px] overflow-y-auto border border-gray-200 bg-gray-200 shadow-lg rounded-lg">
            <p className="">{description}</p>
          </div>
        )}

        <div className="flex-1">
          <CommentsContainer />
        </div>
      </div>

      <div className="w-[600px]">
        <LiveChat />
      </div>
    </>
  );
};

export default WatchPage;
