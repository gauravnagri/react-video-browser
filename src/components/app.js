import React from "react";
import SearchBar from "./searchbar";
import youtube from "../apis/youtube";
import VideoList from "./videolist";
import VideoDetail from "./videodetail";

class App extends React.Component {
    state = { videos : [], selectedVideo : null };

   onSearchSubmit = async(term) => {
       const response = await youtube.get(`/search?q=${term}`);
       this.setState({ videos : response.data.items, selectedVideo : response.data.items[0] });
   }

   onVideoSelect = (video) => {
       this.setState({
           selectedVideo : video
       });
   }

   componentDidMount(){
       this.onSearchSubmit("buildings");
   }

   render(){
    return (
        <div className="ui container">          
            <SearchBar onSearchSubmit={this.onSearchSubmit} />
            <div className="ui grid">
             <div className="ten wide stretched column">
              <VideoDetail video = {this.state.selectedVideo} />
             </div>
             <div className="six wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
              </div>
            </div>
        </div>
    );
   }
}

export default App;