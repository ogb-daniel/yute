import React from "react";
const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading.....</div>;
  console.log(video);
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="w-11/12 h-5/6">
      <div className="ml-3 rounded-lg shadow-lg h-3/4 overflow-hidden ">
        <iframe
          src={videoSrc}
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
        ></iframe>
      </div>
      <div className="ml-3 rounded-lg shadow-lg p-16">
        <h3 className="font-bold">
          {video.snippet.title} - {video.snippet.channelTitle}
        </h3>
        <p className="text-sm">{video.snippet.channelTitle}</p>
        <p className="text-xs">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
