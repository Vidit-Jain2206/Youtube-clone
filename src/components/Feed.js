import React, { useContext, useEffect } from "react";
import LeftNav from "./LeftNav";
import SearchReasults from "./SearchResult";
import { Context } from "../context/contextApi";
import VideoCard from "./VideoCard";

const Feed = () => {
  const { loading, SearchReasults } = useContext(Context);
  useEffect(()=>{
    document.getElementById("root").classList.remove("custom-h");
  })
  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav></LeftNav>
      <div className="grow overflow-y-auto w-[calc(1005-240px)] h-full bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl-grid-cols-4 gap-4 p-5">
          {!loading &&
            SearchReasults.map((item) => {
              if (item.video !== "video") return false;
              return (
                <VideoCard key={item?.video?.videoId} video={item?.video} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
