/** @format */
export const SET_ANALYST_DATA = "SET_ANALYST_DATA";


export const SETANALYSTDATA = (data:any) => {
  return {
    type: SET_ANALYST_DATA,
    payload: data,
  };
};



const initialState:any[] = [];

//Initial state of the counter

const reducer = (state = initialState, action:any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ANALYST_DATA:
      return {
        ...state,
        ...payload,
      };
  

    default:
      return state;
  }
};

export default reducer;
