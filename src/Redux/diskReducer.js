const CHANGE_SEARCH_TEXT = "CHANGE_SEARCH_TEXT";
const CHANGE_SORT_TEXT = "CHANGE_SORT_TEXT";
const ADD_FILE = "ADD_FILE";
const SET_CURRENT_USER = "SET_CURRENT_USER";

let initialState = {
  typeOfSort: "name",
  searchText: "",

  currentUser: { email: null, isLogin: false, files: [] },
};

let diskReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_TEXT:
      state.searchText = action.searchText;
      return { ...state };
    case CHANGE_SORT_TEXT:
      state.typeOfSort = action.typeOfSort;
      return { ...state };
    case ADD_FILE:
      return _addFile(state, action.file);
    case SET_CURRENT_USER:
      return _setCurrentUser(state, action.currentUser);
    default:
      return { ...state };
  }
};

let _addFile = (state, file) => {
  state.currentUser.files.push(file);

  if (state.searchText === " ")
    state.searchText = "";
  else state.searchText = " ";

  return { ...state };
}

let _setCurrentUser = (state, user) => {
  state.currentUser = user;
  return {...state}
}

export const setCurrentUser = (currentUser) => {
  return {type: SET_CURRENT_USER, currentUser}
};

export const changeSearchText = (searchText) => {
  return {
    type: CHANGE_SEARCH_TEXT,
    searchText,
  };
};

export const changeSortText = (typeOfSort) => {
  return { type: CHANGE_SORT_TEXT, typeOfSort };
};

export const addFile = (file) => {
  return { type: ADD_FILE, file };
};

export default diskReducer;
