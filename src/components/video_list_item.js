import React from 'react';

const VideoListItem = (props) => {
  console.log(props);
  return <li>{props.video.snippet.description}</li>;
};

export default VideoListItem;
