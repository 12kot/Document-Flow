const CHANGE_SEARCH_TEXT = "CHANGE_SEARCH_TEXT";
const CHANGE_SORT_TEXT = "CHANGE_SORT_TEXT";
const SET_DOCUMENTS = "SET_DOCUMENTS";

let initialState = {
  typeOfSort: "name",
  searchText: "",
  documents: [],
};

let diskReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_TEXT:
      state.searchText = action.searchText
      return { ...state};
    case CHANGE_SORT_TEXT:
      state.typeOfSort = action.typeOfSort;
      return { ...state }
    case SET_DOCUMENTS:
      state.documents = action.documents;
      debugger;
      return { ...state };
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

export const setDocuments = (documents) => {
  return {type: SET_DOCUMENTS, documents}
}

export default diskReducer;
