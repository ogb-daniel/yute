import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map((video, id) => (
    <VideoItem key={id} video={video} onVideoSelect={onVideoSelect} />
  ));
  return <div className="w-full">{listOfVideos}</div>;
};
export default VideoList;
