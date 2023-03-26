let CHANGE_EMAIL_TEXT = "CHANGE_EMAIL_TEXT";
let CHANGE_PASSWORD_TEXT = "CHANGE_PASSWORD_TEXT";
let CHANGE_REPEAT_PASSWORD_TEXT = "CHANGE_REPEAT_PASSWORD_TEXT";
let REGISTER_USER = "REGISTER_USER";
let LOGIN_USER = "LOGIN_USER";
let LOG_OUT_USER = "LOG_OUT_USER";

let emptyUser = {
  email: null,
  isLogin: false,
  files: [],
};

let initialState = {
   currentUser: {
     email: null,
     isLogin: false,
     files: [],
   },

  users: [],

  changeEmailText: "",
  changePasswordText: "",
  changeRepeatPasswordText: "",
  haveError: false,
};

let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_EMAIL_TEXT:
      state.changeEmailText = action.changeEmailText;
      return { ...state };
    case CHANGE_PASSWORD_TEXT:
      state.changePasswordText = action.changePasswordText;
      return { ...state };
    case CHANGE_REPEAT_PASSWORD_TEXT:
      state.changeRepeatPasswordText = action.changeRepeatPasswordText;
      return { ...state };
    case REGISTER_USER:
      return _registerNewUser(
        state.changeEmailText,
        state.changePasswordText,
        state.changeRepeatPasswordText,
        state
      );
    case LOGIN_USER:
      return _loginUser(state.changeEmailText, state.changePasswordText, state);
    case LOG_OUT_USER:
      return _logOutUser(state);
    default:
      return state;
  }
};

let _registerNewUser = (email, password, repeatPassword, state) => {
  if (!(email && password && repeatPassword)) {
    alert("Заполните все поля");
    state.haveError = true;
    return { ...state };
  }

  if (password !== repeatPassword) {
    alert("Введены различные пароли. Проверьте правильность ввода");
    state.haveError = true;
    return { ...state };
  }

  if (password.length < 8) {
    alert("Пароль должен быть длинее 8 символов");
    state.haveError = true;
    return { ...state };
  }

  if (state.users.length !== 0)
    for (let user of state.users) {
      if (user.email === email) {
        alert("Пользователь с таким именем уже существует");
        return { ...state };
      }
    }

  state.users.push({
    email,
    password,
    files: [],
  });

  state.haveError = false;
  alert("Вы успешно зарегестрировались");
  return _loginUser(email, password, state);
};

let _loginUser = (email, password, state) => {
  if (!(email && password)) {
    alert("Заполните все поля");
    state.haveError = true;
    return { ...state };
  }

  if (state.users.length !== 0)
    for (let user of state.users) {
      if (user.email === email) {
        if (user.password === password) {
           state.currentUser = {
             email,
             isLogin: true,
             files: user.files,
           };

          alert("Вы успешно авторизовались.");

          state.haveError = false;
          return { ...state };
        } else {
          alert("Введён неверный пароль");

          state.haveError = true;
          return { ...state };
        }
      }
    }

  alert("Пользователь не найден.");
  state.haveError = true;
  return { ...state };
};

let _logOutUser = (state) => {
  state.currentUser = emptyUser;
  return { ...state };
}

export const changeEmailText = (changeEmailText) => {
  return { type: CHANGE_EMAIL_TEXT, changeEmailText };
};

export const changePasswordText = (changePasswordText) => {
  return { type: CHANGE_PASSWORD_TEXT, changePasswordText };
};

export const changeRepeatPasswordText = (changeRepeatPasswordText) => {
  return { type: CHANGE_REPEAT_PASSWORD_TEXT, changeRepeatPasswordText };
};

export const registerUser = () => {
  return { type: REGISTER_USER };
};

export const loginUser = () => {
  return { type: LOGIN_USER };
};

export const logOutUser = () => {
  return { type: LOG_OUT_USER };
};

export default authReducer;
