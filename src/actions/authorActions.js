import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function createAuthorSuccess(authors) {
  return {type: types.CREATE_AUTHOR_SUCCESS, authors};
}

export function updateAuthorSuccess(authors) {
  return {type: types.UPDATE_AUTHOR_SUCCESS, authors};
}

export function deleteAuthorSuccess(authors) {
  return {type: types.DELETE_AUTHOR_SUCCESS, authors};
}



export function loadAuthors() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveAuthor(author) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return AuthorApi.saveAuthor(author).then(author => {
      author.id ? dispatch(updateAuthorSuccess(author)) :
        dispatch(createAuthorSuccess(author));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function deleteAuthor(author) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return AuthorApi.deleteAuthor(author).then(author => {
      dispatch(deleteAuthorSuccess(author));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
