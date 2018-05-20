import React, {Component} from 'react'; // this part is used to create ES5 from JSX/ES6: the components
import ReactDOM from 'react-dom'; // this part handles the rendering to DOM part!
import YTsearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; // hand-made JS file need the realtive path reference. Libraries are namespaced, thus no need for a path.
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const YT_API_KEY = 'AIzaSyBFpVS_fU1dXwUZTxoi6yLS6i4X-lanTKA';

// ================= Step 1: create component that creates some html
// () => is ES6 for function(). It has diff this variables, and allows for cleaner components with multiple functions.
class App extends Component{
  // the constructor runs first and goes and fetches videos:
  constructor(props){
    super(props); // look this up! Accessing the parent methods and properties
    this.state = {
      videos: [],
      selectedvideo: null
    };

    // ES6 version:
    YTsearch({key: YT_API_KEY, term: 'boxing'}, (videos) => {
      // this.setState({videos}); //works if the key/value are the same. Transpiles into this.setState({videos: videos});
      this.setState({
        videos: videos,
        selectedvideo: videos[0]
      });
    });
  }


  // following lines do not wait for constructor to finish fetching videos, and may pass undefined down to children!
  render(){
    return (
      <div>
      <SearchBar />
      <VideoDetail video={this.state.selectedvideo} />
      <VideoList
        onVideoSelect = {selectedvideo => this.setState({selectedvideo})}
        videos={this.state.videos}
      />
      </div>
    );
  }
}
// =================  Step 2: take the above created compnenet's HTML and place it in the DOM

ReactDOM.render(<App />, document.querySelector(".container"));
//<App /> is JSX for <App></App> as self closing. And when transpiled, it call React.createElement(App)
// the second argument is the target element from the DOM/document.
