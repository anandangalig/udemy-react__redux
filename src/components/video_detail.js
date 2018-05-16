import React from 'react';

const VideoDetail = ({video}) => {
  // null check in case parent is passing undefined instead of wating for fetched data:
  if (!video){
    return <div>Loading.... </div>;
  };
  const videoId = video.id.videoId;
  const videUrl = `https://www.youtube.com/embed/${videoId}`; // ES6 string interpolation using backtick
  // const videUrl = 'https://www.youtube.com/embed/' + videoId;
  return(
    <div className="video-detail col-md-8">
      <div className="embed-responisive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={videUrl}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
