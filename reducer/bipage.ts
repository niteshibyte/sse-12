/** @format */
export const SET_BI_PAGE = "SET_BI_PAGE";


export const SETBIPAGE = (data:any) => {
  return {
    type: SET_BI_PAGE,
    payload: data,
  };
};



const initialState:any = {};

//Initial state of the counter

const reducer = (state = initialState, action:any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_BI_PAGE:
      return {
        ...state,
        ...payload,
      };
  

    default:
      return state;
  }
};

export default reducer;
