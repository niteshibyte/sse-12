/** @format */
export const SET_ABOUTUS = "SET_ABOUTUS";


export const SETABOUTUS = (data:any) => {
  return {
    type: SET_ABOUTUS,
    payload: data,
  };
};



const initialState:Object = {};

//Initial state of the counter

const reducer = (state = initialState, action:any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ABOUTUS:
      return {
        ...state,
        ...payload,
      };
  

    default:
      return state;
  }
};

export default reducer;
