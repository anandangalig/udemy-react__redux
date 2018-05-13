import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => { // props has the data passed down from the parent
  const videoItems = props.videos.map((vid) => { // map() is same as for loop, but work better for JS?
    return <VideoListItem key={vid.etag} video={vid} /> // passing the each vid to child VideoListItem
  });
  return(
    <ul className='col-md-4 list-group  '>
      {videoItems}
    </ul>
  );
};

export default VideoList;
