export const User = 'User';
export const UPDATE_NHANG = 'UPDATE_NHANG';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_POINT = 'IPDATE_POINT';
const initialState = {
  id_User: '',
  username: '',
  password: '',
  point: 0,
  level: 0,
  nhang: 0,
  id_PhapDanh: '',
};
const UserReducer = (state = initialState, payload) => {
  switch (payload.type) {
    case User:
      return {
        ...state,
        id_User: payload.id_User,
        username: payload.username,
        password: payload.password,
        point: payload.point,
        level: payload.level,
        nhang: payload.nhang,
        id_PhapDanh: payload.id_PhapDanh,
      };
    case UPDATE_NHANG:
      return {
        ...state,
        nhang: payload.nhang,
      };
    case UPDATE_USER:
      return {
        ...state,
        level: payload.level,
        id_PhapDanh: payload.id_PhapDanh,
      };
    case UPDATE_POINT:
      return {
        ...state,
        point: payload.point,
        nhang: payload.nhang,
      };
    default:
      return state;
  }
};
export default UserReducer;
