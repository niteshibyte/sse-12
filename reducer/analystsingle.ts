/** @format */
export const SET_ANALYST_SINGLE = "SET_ANALYST_SINGLE";


export const SETANALYSTSINGLE = (data:any) => {
  return {
    type: SET_ANALYST_SINGLE,
    payload: data,
  };
};



const initialState:any = {};

//Initial state of the counter

const reducer = (state = initialState, action:any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ANALYST_SINGLE:
      return {
        ...state,
        ...payload,
      };
  

    default:
      return state;
  }
};

export default reducer;
