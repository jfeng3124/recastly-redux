//import { configure } from 'enzyme';
import Redux from 'redux';
// import Adapter from 'enzyme-adapter-react-16';

var currentVideoReducer = (state = null, action) => {
  //define a reducer for the currentVideo field of our state.
  switch (action.type) {
  case 'CHANGE_VIDEO':
    return Object.assign({}, state, action.video);
  default:
    return state;
  }
};

export default currentVideoReducer;
