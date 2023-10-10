/** @format */
export const SET_TEAM = "SET_TEAM";


export const SETTEAM = (data:any) => {
  return {
    type: SET_TEAM,
    payload: data,
  };
};



const initialState:Object = {};

//Initial state of the counter

const reducer = (state = initialState, action:any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_TEAM:
      return {
        ...state,
        ...payload,
      };
  

    default:
      return state;
  }
};

export default reducer;
