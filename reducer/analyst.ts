/** @format */
export const SET_ANALYST_PAGE = "SET_ANALYST_PAGE";


export const SETANALYSTPAGE = (data:any) => {
  return {
    type: SET_ANALYST_PAGE,
    payload: data,
  };
};



const initialState:any = {};

//Initial state of the counter

const reducer = (state = initialState, action:any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ANALYST_PAGE:
      return {
        ...state,
        ...payload,
      };
  

    default:
      return state;
  }
};

export default reducer;
