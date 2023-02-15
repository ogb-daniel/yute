import React from "react";
import youtube from "./api/youtube";
import { SearchBar, VideoDetail, VideoList } from "./components";
class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.handleSubmit("call of duty");
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", { params: { q: searchTerm } });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };
  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <div>
        <div className="flex justify-center">
          {<SearchBar onFormSubmit={this.handleSubmit} />}
        </div>
        <div className="flex justify-between text-center">
          <div className="">{<VideoDetail video={selectedVideo} />}</div>
          <div className="">
            {<VideoList videos={videos} onVideoSelect={this.onVideoSelect} />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
