import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../../utils/redux/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "../shared/CommentsContainer";
import LiveChat from "../shared/LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  // const videosFromSearch = useSelector((store) => store.search.videoResults);

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
