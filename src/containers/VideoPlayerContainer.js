import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

const mapStateToProps = (state) => ({ currentVideo: state.currentVideo });

const mapDispatchToProps = (dispatch) => ({});

const VideoPlayerContainer = connect (mapStateToProps, mapDispatchToProps)(VideoPlayer);


export default VideoPlayerContainer;

//define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.