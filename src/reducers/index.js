import {
  EditorState,
} from 'draft-js';
import {
  INIT,
  UPDATE_EDITOR_STATE,
} from '../constants/ActionTypes';

let initialEditorState = {
  editorState: EditorState.createEmpty(),
};
let editorReducer = (state = initialEditorState, action) => {
  switch (action.type) {
    case INIT: {
      return {
        name: action.editorName,
        editorState: action.editorState || EditorState.createEmpty(),
      };
    }
    case UPDATE_EDITOR_STATE: {
      return {
        ...state,
        editorState: action.editorState,
      };
    }
  }
};

let initialState = {};

export default (state = initialState, action) => {
  let { editorName } = action;

  if (editorName) {
    return {
      ...state,
      [editorName]: editorReducer(state[editorName], action),
    };
  } else {
    return state;
  }
};