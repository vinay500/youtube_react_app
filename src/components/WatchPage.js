// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { closeMenu } from "../utils/appSlice";
// import { useSearchParams } from "react-router-dom";
// import CommentsContainer from "./CommentsContainer";
// import LiveChat from "./LiveChat";

// const WatchPage = () => {
//   const [searchParams] = useSearchParams();
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(closeMenu());
//   }, []);
//   return (
//     <div className="flex flex-col w-full">
//       <div className="px-5 flex w-full">
//         <div className="">
//           <iframe
//             width="900"
//             height="500"
//             src={"https://www.youtube.com/embed/" + searchParams.get("v")}
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowFullScreen
//           ></iframe>
//         </div>
//         <div className="w-full">
//           <LiveChat />
//         </div>
//       </div>
//       <CommentsContainer />
//     </div>
//   );
// };

// export default WatchPage;
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu, hideFilterList } from "../utils/navSlice";
import VideoPreview from "./VideoPreview";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  useEffect(() => {
    dispatch(closeMenu());
    dispatch(hideFilterList());
  }, []);

  return (
    <div className="md:flex md:flex-wrap md:justify-center md:w-full mt-4">
      <VideoPreview videoId={videoId} />
      <div className="hidden md:block w-1/4  rounded-xl border h-[30rem] shadow-sm">
        <p className="border-b p-2">Live Chat</p>
        <div className="bg-gray-50">
          <LiveChat />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;