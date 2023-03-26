import {
  UPDATE_NHANG,
  UPDATE_POINT,
  UPDATE_USER,
  User,
} from '../Reducers/UserReducer';

export const LoginAction = user => async dispatch => {
  try {
    dispatch({
      type: User,
      id_User: user._id,
      username: user.username,
      password: user.password,
      point: user.point,
      level: user.level,
      nhang: user.nhang,
      id_PhapDanh: user.id_PhapDanh,
    });
  } catch (error) {
    console.log(error);
  }
};

export const UpdateNhangAction = nhang => async dispatch => {
  try {
    dispatch({
      type: UPDATE_NHANG,
      nhang: nhang,
    });
  } catch (error) {
    console.log(error);
  }
};

export const UpdateUserAction = (level, id_PhapDanh) => async dispatch => {
  try {
    dispatch({
      type: UPDATE_USER,
      level: level,
      id_PhapDanh: id_PhapDanh,
    });
  } catch (error) {
    console.log(error);
  }
};

export const UpdatePointAction = (point, nhang) => async dispatch => {
  try {
    dispatch({
      type: UPDATE_POINT,
      point: point,
      nhang: nhang,
    });
  } catch (error) {
    console.log(error);
  }
};
