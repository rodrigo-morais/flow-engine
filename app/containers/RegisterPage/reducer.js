import {
  REGISTER_RULE,
} from './constants';

const initialState = [];

function registerPageReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_RULE:
      return [...state, ...[action.rule]];
    default:
      return state;
  }
}

export default registerPageReducer;
