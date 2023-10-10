/** @format */
export const SET_HOME_DATA = "SET_HOME_DATA";


export const SETHOMEDATA = (data:any) => {
  return {
    type: SET_HOME_DATA,
    payload: data,
  };
};



const initialState:any[] = [];

//Initial state of the counter

const reducer = (state = initialState, action:any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_HOME_DATA:
      return {
        ...state,
        ...payload,
      };
  

    default:
      return state;
  }
};

export default reducer;
