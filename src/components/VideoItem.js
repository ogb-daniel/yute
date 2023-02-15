const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      className="shadow-lg rounded-lg flex items-center mb-8 cursor-pointer overflow-hidden"
      onClick={() => onVideoSelect(video)}
    >
      <img
        className="mr-2"
        src={video.snippet.thumbnails.medium.url}
        alt="thumbnail"
      />
      <p className="font-bold cursor-pointer">{video.snippet.title}</p>
    </div>
  );
};

export default VideoItem;
