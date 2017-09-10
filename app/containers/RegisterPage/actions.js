import {
  REGISTER_RULE,
} from './constants';

export const registerRule = (rule) => ({
  type: REGISTER_RULE,
  rule,
});
