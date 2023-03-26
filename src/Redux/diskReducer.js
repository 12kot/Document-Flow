const CHANGE_SEARCH_TEXT = "CHANGE_SEARCH_TEXT";
const CHANGE_SORT_TEXT = "CHANGE_SORT_TEXT";
const SET_USER_FILES = "SET_USER_FILES";
const ADD_FILE = "ADD_FILE";

let initialState = {
  typeOfSort: "name",
  searchText: "",
  userFiles: [],
};

let diskReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_TEXT:
      state.searchText = action.searchText
      return { ...state};
    case CHANGE_SORT_TEXT:
      state.typeOfSort = action.typeOfSort;
      return { ...state }
    case SET_USER_FILES:
      state.userFiles = action.userFiles;
      return { ...state };
    case ADD_FILE:
      state.userFiles.push(action.push);
      return { ...state }
    default:
      return { ...state };
  }
};

export const changeSearchText = (searchText) => {
  return {
    type: CHANGE_SEARCH_TEXT,
    searchText,
  };
};

export const changeSortText = (typeOfSort) => {
  return { type: CHANGE_SORT_TEXT, typeOfSort}
}

export const setUserFiles = (userFiles) => {
  return {type: SET_USER_FILES, userFiles}
}

export const addFile = (file) => {
  return {type: ADD_FILE, file}
}

export default diskReducer;
