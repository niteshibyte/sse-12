/** @format */
export const SET_HEADER = "SET_HEADER";


export const SETHEADERDATA = (data:any) => {
  return {
    type: SET_HEADER,
    payload: data,
  };
};



const initialState:Object = {};

//Initial state of the counter

const reducer = (state = initialState, action:any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_HEADER:
      return {
        ...state,
        ...payload,
      };
  

    default:
      return state;
  }
};

export default reducer;
