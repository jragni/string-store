/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

// TODO: REMOVE UPON COMPLETION
export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';
// end TODO

export const LOAD_STRINGS = 'stringstore/App/LOAD_STRINGS';
export const LOAD_STRINGS_SUCCESS = 'stringstore/App/LOAD_STRINGS_SUCCESS';
export const LOAD_STRINGS_ERROR = 'stringstore/App/LOAD_STRINGS_ERROR';

export const POST_STRING = 'stringstore/App/POST_STRING';
export const POST_STRING_SUCCESS = 'stringstore/App/POST_STRING_SUCCESS';
export const POST_STRING_ERROR = 'stringstore/App/POST_STRING_ERROR';
