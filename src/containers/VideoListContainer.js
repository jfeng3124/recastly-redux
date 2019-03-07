import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

const mapStateToProps = (state) => ({ videos: state.videos });

const mapDispatchToProps = (dispatch) => {
  return {
    videoClick: (videos) => {
      dispatch(changeVideo(videos));
    }
  };
};

const VideoListContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(VideoList);
  
export default VideoListContainer;

// define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.