const CHANGE_SEARCH_TEXT = "CHANGE_SEARCH_TEXT";
const CHANGE_SORT_TEXT = "CHANGE_SORT_TEXT";
const ADD_FILE = "ADD_FILE";
const SET_CURRENT_USER = "SET_CURRENT_USER";

let initialState = {
  typeOfSort: "name",
  searchText: "",

  currentUser: { email: null, isLogin: false, files: [], },
};

let diskReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_TEXT:
      state.searchText = action.searchText;
      return _searchText(state.searchText, state);
    case CHANGE_SORT_TEXT:
      state.typeOfSort = action.typeOfSort;
      return _sortState(state.typeOfSort, state);
    case ADD_FILE:
      return _addFile(state, action.file, action.path);
    case SET_CURRENT_USER:
      return _setCurrentUser(action.currentUser, state);
    default:
      return { ...state };
  }
};

let _searchText = (searchText, state) => {
  for (let file of state.currentUser.files)
    if (!file.file.name.toLowerCase().startsWith(searchText.toLowerCase()))
      file.isHiden = true;
    else file.isHiden = false;
  
  return { ...state };
}

let _sortState = (typeSort, state) => {
  switch (typeSort) {
    case "name":
      return _sortByName(state);
    case "time":
      return _sortByTime(state);
    case "size":
      return _sortBySize(state);
    default:
      return {...state}
  }
}

let _sortByName = (state) => {
  state.currentUser.files.sort((a, b) => a.file.name > b.file.name ? 1 : -1)
  return { ...state };
}

let _sortByTime = (state) => {
  state.currentUser.files.sort((a, b) => a.file.lastModified - b.file.lastModified)
  return { ...state };
}

let _sortBySize = (state) => {
  state.currentUser.files.sort((a, b) => a.file.size - b.file.size)
  return { ...state };
}

let _addFile = (state, file, path) => {
  state.currentUser.files.push({ file, path, isHiden: false });

  if (state.searchText === " ")
    state.searchText = "";
  else state.searchText = " ";

  return { ...state };
}

let _setCurrentUser = (user, state) => {
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

export const addFile = (file, path) => {
  return { type: ADD_FILE, file, path };
};

export default diskReducer;
