import _ from 'lodash';
import {
  STEP_FORM_STEP1,
  STEP_FORM_STEP2,
  STEP_FORM_SUBMIT,
  STEP_FORM_SUBMIT_FAILED,
  STEP_FORM_SUBMIT_SUCCESS
} from './constants';

const initState = {
  firstData: {},
  secondData: {},
  result: false
};

const stepform = (state = initState, action = {}) => {
  switch (action.type) {
  case STEP_FORM_STEP1: {
    return { ...state, firstData: _.get(action, ['payload'], action) };
  }
  case STEP_FORM_STEP2: {
    return { ...state, secondData: _.get(action, ['payload'], action) };
  }
  case STEP_FORM_SUBMIT: {
    return state;
  }
  case STEP_FORM_SUBMIT_SUCCESS: {
    const ret = _.get(action, ['payload'], action);
    return { ...state, result: ret.result };
  }
  case STEP_FORM_SUBMIT_FAILED: {
    return { ...state };
  }
  default:
    return state;
  }
};
export default stepform;
